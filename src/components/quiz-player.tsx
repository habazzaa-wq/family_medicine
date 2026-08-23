import { useEffect, useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Eye, RotateCcw, X } from "lucide-react";
import type { Mcq } from "@/data/exams";
import { Button } from "@/components/ui/button";
import { clearQuiz, loadQuiz, saveQuiz, shuffle, type QuizState } from "@/lib/quiz-storage";
import { cn } from "@/lib/utils";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function QuizPlayer({ examId, questions }: { examId: string; questions: Mcq[] }) {
  const storageKey = `examhall-mcq-${examId}`;
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<QuizState>(() => ({
    order: questions.map((_, i) => i),
    answers: {},
    checked: {},
    idx: 0,
    submitted: false,
    startedAt: 0,
  }));
  const [optionOrder, setOptionOrder] = useState<number[][]>(() =>
    questions.map((q) => q.options.map((_, i) => i)),
  );

  useEffect(() => {
    const saved = loadQuiz(storageKey);
    if (saved && saved.order.length === questions.length) {
      setState(saved);
      setOptionOrder(questions.map((q) => q.options.map((_, i) => i)));
    } else {
      setState({
        order: shuffle(questions.map((_, i) => i)),
        answers: {},
        checked: {},
        idx: 0,
        submitted: false,
        startedAt: Date.now(),
      });
      setOptionOrder(questions.map((q) => shuffle(q.options.map((_, i) => i))));
    }
    setReady(true);
  }, [examId, questions, storageKey]);

  useEffect(() => {
    if (!ready) return;
    saveQuiz(storageKey, state);
  }, [state, storageKey, ready]);

  const qIndex = state.order[state.idx] ?? 0;
  const q = questions[qIndex];
  const optMap = optionOrder[qIndex] ?? q.options.map((_, i) => i);
  const chosen = state.answers[qIndex];
  const revealed = !!state.checked?.[qIndex];
  const isCorrect = revealed && chosen === q?.answer;
  const answeredCount = Object.values(state.answers).filter((v) => v !== null && v !== undefined).length;

  const score = useMemo(() => {
    let s = 0;
    questions.forEach((item, i) => {
      if (state.answers[i] === item.answer) s += 1;
    });
    return s;
  }, [questions, state.answers]);

  function pick(originalIndex: number) {
    if (state.submitted || revealed) return;
    setState((s) => ({ ...s, answers: { ...s.answers, [qIndex]: originalIndex } }));
  }

  function check() {
    if (state.submitted || revealed || chosen === null || chosen === undefined) return;
    setState((s) => ({ ...s, checked: { ...s.checked, [qIndex]: true } }));
  }

  function go(delta: number) {
    setState((s) => ({
      ...s,
      idx: Math.max(0, Math.min(s.order.length - 1, s.idx + delta)),
    }));
  }

  function submit() {
    setState((s) => ({ ...s, submitted: true, idx: 0 }));
  }

  function restart(wrongOnly = false) {
    const pool = wrongOnly
      ? questions
          .map((_, i) => i)
          .filter((i) => state.answers[i] !== questions[i].answer)
      : questions.map((_, i) => i);
    const order = shuffle(pool.length ? pool : questions.map((_, i) => i));
    setOptionOrder(questions.map((item) => shuffle(item.options.map((_, i) => i))));
    const next: QuizState = {
      order,
      answers: {},
      checked: {},
      idx: 0,
      submitted: false,
      startedAt: Date.now(),
    };
    setState(next);
    if (!wrongOnly) clearQuiz(storageKey);
  }

  if (!ready || !q) {
    return (
      <div className="rounded-[24px] border border-line bg-bg-elevated p-8 text-sm text-muted">
        جاري تجهيز الأسئلة…
      </div>
    );
  }

  const pct = Math.round((score / questions.length) * 100);
  const last = state.idx >= state.order.length - 1;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          سؤال {state.idx + 1} من {state.order.length}
          {state.submitted ? " · مراجعة" : ""}
        </p>
        <p className="text-sm tabular-nums text-muted">
          مُجاب {answeredCount}/{state.order.length}
        </p>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-accent transition-[width] duration-200"
          style={{ width: `${((state.idx + 1) / state.order.length) * 100}%` }}
        />
      </div>

      {state.submitted && (
        <div className="rounded-[18px] border border-line bg-bg-elevated p-5">
          <p className="font-display text-2xl font-semibold tabular-nums">
            {score} / {questions.length}
          </p>
          <p className="mt-1 text-sm text-muted">النسبة {pct}٪</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="button" onClick={() => restart(false)} variant="primary">
              <RotateCcw className="size-4" />
              إعادة الكل
            </Button>
            {score < questions.length && (
              <Button type="button" onClick={() => restart(true)} variant="secondary">
                إعادة الخطأ فقط
              </Button>
            )}
          </div>
        </div>
      )}

      <article className="rounded-[28px] border border-line bg-bg-elevated p-5 sm:p-7">
        <p dir="ltr" className="text-left font-display text-lg font-semibold leading-snug sm:text-xl">
          {q.stem}
        </p>
        <ul className="mt-5 space-y-2.5" dir="ltr">
          {optMap.map((oi) => {
            const selected = chosen === oi;
            const correct = q.answer === oi;
            return (
              <li key={oi}>
                <button
                  type="button"
                  onClick={() => pick(oi)}
                  disabled={revealed}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-[14px] border px-3.5 py-3 text-left text-sm leading-relaxed transition-colors min-h-11",
                    "border-line bg-bg",
                    !revealed && "hover:border-line-strong",
                    revealed && "cursor-default",
                    selected && !revealed && "border-accent bg-accent-soft",
                    revealed && correct && "border-ok bg-ok-soft",
                    revealed && selected && !correct && "border-bad bg-bad-soft",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                      selected && !revealed && "border-accent bg-accent text-accent-fg",
                      revealed && correct && "border-ok bg-ok text-white",
                      revealed && selected && !correct && "border-bad bg-bad text-white",
                    )}
                  >
                    {revealed && correct ? (
                      <Check className="size-3.5" />
                    ) : revealed && selected && !correct ? (
                      <X className="size-3.5" />
                    ) : (
                      LETTERS[oi]
                    )}
                  </span>
                  <span className="pt-0.5">{q.options[oi]}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {revealed && (
          <div
            className={cn(
              "mt-5 rounded-[14px] px-4 py-3 text-sm leading-relaxed",
              isCorrect ? "bg-ok-soft text-ok" : "bg-bad-soft text-bad",
            )}
            dir="rtl"
          >
            {isCorrect ? (
              <p className="font-medium">إجابتك صحيحة</p>
            ) : (
              <div>
                <p className="font-medium">إجابتك غلط</p>
                <p className="mt-1" dir="ltr">
                  الصح: {LETTERS[q.answer]}. {q.options[q.answer]}
                </p>
              </div>
            )}
            {q.note && <p className="mt-2 text-muted">{q.note}</p>}
          </div>
        )}
      </article>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Button type="button" variant="secondary" onClick={() => go(-1)} disabled={state.idx === 0}>
          <ChevronRight className="size-4" />
          السابق
        </Button>
        {!revealed ? (
          chosen !== null && chosen !== undefined ? (
            <Button type="button" onClick={check} variant="primary">
              <Eye className="size-4" />
              تحقق من الإجابة
            </Button>
          ) : (
            <span className="text-sm text-muted">اختر إجابة أولاً</span>
          )
        ) : !last ? (
          <Button type="button" onClick={() => go(1)}>
            التالي
            <ChevronLeft className="size-4" />
          </Button>
        ) : !state.submitted ? (
          <Button type="button" onClick={submit} variant="primary">
            النتيجة النهائية
          </Button>
        ) : (
          <Button type="button" variant="secondary" onClick={() => restart(false)}>
            محاولة جديدة
          </Button>
        )}
      </div>
    </div>
  );
}
