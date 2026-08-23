import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileQuestion, PenLine } from "lucide-react";
import { Shell } from "@/components/shell";
import { EXAMS } from "@/data/exams";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <section className="mb-8 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Al-Azhar · 4th year
        </p>
        <h1 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-tight tracking-tight">
          قاعة امتحانات
          <span className="block text-muted">طب الأسرة وإدارة المستشفيات</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          كل امتحان في بطاقة مستقلة. اضغطي عليه ثم اختاري الاختياري (اختبار تفاعلي) أو
          المقالي (الأسئلة مع الإجابة النموذجية).
        </p>
      </section>

      <ul className="grid gap-4 sm:grid-cols-2">
        {EXAMS.map((exam) => (
          <li key={exam.id}>
            <Link
              to="/exam/$examId"
              params={{ examId: exam.id }}
              className="group flex h-full flex-col rounded-[28px] border border-line bg-bg-elevated p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                  {exam.year}
                </span>
                <ArrowLeft className="size-4 text-muted transition-transform group-hover:-translate-x-0.5" />
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold leading-snug">
                {exam.titleAr}
              </h2>
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
        ))}
      </ul>
    </Shell>
  );
}
