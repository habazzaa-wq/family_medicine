import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileQuestion, ListChecks, PenLine, Stethoscope } from "lucide-react";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { EXAMS, type Exam, type ExamCategory } from "@/data/exams";

export const Route = createFileRoute("/")({ component: Home });

const CATEGORY_META: Record<
  ExamCategory,
  { label: string; title: string; hint: string; en: string; icon: typeof Stethoscope }
> = {
  hm: {
    label: "طب الأسرة",
    en: "Family Medicine",
    title: "طب الأسرة وإدارة المستشفيات",
    hint: "كسر الأخبار السيئة، إدارة الرعاية الصحية، وامتحانات السمستر.",
    icon: Stethoscope,
  },
  git: {
    label: "الجهاز الهضمي",
    en: "GIT · Gastrointestinal",
    title: "امتحانات الجهاز الهضمي",
    hint: "نهاية الترم، السمستر، الفورماتيفات، وجميع امتحانات الأقسام.",
    icon: ListChecks,
  },
};

function groupByCategory(exams: Exam[]): ExamCategory[] {
  const seen: ExamCategory[] = [];
  for (const exam of exams) {
    if (!seen.includes(exam.category)) seen.push(exam.category);
  }
  return seen;
}

function countStats(exams: Exam[]) {
  return exams.reduce(
    (acc, exam) => ({ mcq: acc.mcq + exam.mcq.length, essay: acc.essay + exam.essay.length }),
    { mcq: 0, essay: 0 },
  );
}

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <li className="h-full">
      <Link
        to="/exam/$examId"
        params={{ examId: exam.id }}
        className="group flex h-full flex-col rounded-[24px] border border-line bg-bg-elevated p-5 shadow-[0_1px_0_0_rgba(28,25,23,0.03)] transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_10px_30px_-12px_rgba(15,118,110,0.35)]"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
            {exam.year}
          </span>
          <ArrowLeft className="size-4 text-muted transition-transform group-hover:-translate-x-0.5" />
        </div>
        <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{exam.titleAr}</h2>
        <p dir="ltr" className="mt-1 text-left text-xs text-subtle">
          {exam.titleEn}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{exam.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <FileQuestion className="size-3.5" />
            {exam.mcq.length} اختياري
          </span>
          <span className="inline-flex items-center gap-1">
            <PenLine className="size-3.5" />
            {exam.essay.length} مقالي
          </span>
        </div>
      </Link>
    </li>
  );
}

function TabButton({
  category,
  active,
  examCount,
  onClick,
}: {
  category: ExamCategory;
  active: boolean;
  examCount: number;
  onClick: () => void;
}) {
  const meta = CATEGORY_META[category];
  const Icon = meta.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors sm:flex-none sm:px-6 ${
        active
          ? "bg-accent text-accent-fg shadow-[0_8px_20px_-8px_rgba(15,118,110,0.6)]"
          : "text-muted hover:bg-bg-elevated hover:text-ink"
      }`}
    >
      <Icon className={`size-4 ${active ? "" : "text-subtle"}`} />
      <span>{meta.label}</span>
      {!active && (
        <span className="hidden rounded-full border border-line bg-bg px-2 py-0.5 text-[11px] text-subtle md:inline-block">
          {examCount}
        </span>
      )}
      {active && (
        <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-[11px] md:inline-block">
          {examCount}
        </span>
      )}
    </button>
  );
}

function Home() {
  const categories = groupByCategory(EXAMS);
  const [active, setActive] = useState<ExamCategory>(categories[0] ?? "hm");
  const activeExams = EXAMS.filter((exam) => exam.category === active);
  const activeMeta = CATEGORY_META[active];
  const activeStats = countStats(activeExams);

  return (
    <Shell>
      <section className="mb-8 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Al-Azhar · 4th year
        </p>
        <h1 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-tight tracking-tight">
          قاعة الامتحانات
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          اختاري المادة من التبويبات بالأسفل، ثم اضغطي على الامتحان للاختياري (تفاعلي) أو
          المقالي (مع الإجابة النموذجية).
        </p>
      </section>

      <div
        role="tablist"
        aria-label="المواد"
        className="flex gap-1.5 rounded-[20px] border border-line bg-bg-elevated p-1.5 sm:p-2"
      >
        {categories.map((category) => (
          <TabButton
            key={category}
            category={category}
            active={active === category}
            examCount={EXAMS.filter((exam) => exam.category === category).length}
            onClick={() => setActive(category)}
          />
        ))}
      </div>

      <div role="tabpanel" className="mt-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-semibold">{activeMeta.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">{activeMeta.hint}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-elevated px-3 py-1.5">
              <Stethoscope className="size-3.5 text-accent" />
              {activeExams.length} امتحان
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-elevated px-3 py-1.5">
              <FileQuestion className="size-3.5 text-accent" />
              {activeStats.mcq} سؤال اختياري
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-elevated px-3 py-1.5">
              <PenLine className="size-3.5 text-accent" />
              {activeStats.essay} سؤال مقالي
            </span>
          </div>
        </div>

        <p dir="ltr" className="mb-4 text-left text-xs uppercase tracking-[0.15em] text-subtle">
          {activeMeta.en}
        </p>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </ul>
      </div>
    </Shell>
  );
}