import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight, FileQuestion, PenLine } from "lucide-react";
import { Shell } from "@/components/shell";
import { getExam } from "@/data/exams";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/exam/$examId")({
  component: ExamLayout,
});

function ExamLayout() {
  const { examId } = Route.useParams();
  const exam = getExam(examId);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onMcq = pathname.endsWith("/mcq");
  const onEssay = pathname.endsWith("/essay");
  const onHub = !onMcq && !onEssay;

  if (!exam) {
    return (
      <Shell>
        <p>الامتحان غير موجود.</p>
        <Link to="/" className="mt-3 inline-block text-accent">
          العودة
        </Link>
      </Shell>
    );
  }

  return (
    <Shell>
      <Link
        to="/"
        className="mb-5 inline-flex min-h-11 items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowRight className="size-4" />
        كل الامتحانات
      </Link>

      <header className="mb-6">
        <p className="text-xs font-medium text-accent">{exam.year} · {exam.professor}</p>
        <h1 className="mt-1 font-display text-2xl font-semibold leading-tight sm:text-3xl">
          {exam.titleAr}
        </h1>
        <p dir="ltr" className="mt-1 text-left text-sm text-subtle">
          {exam.titleEn}
        </p>
      </header>

      <nav className="mb-6 grid grid-cols-2 gap-2 rounded-[18px] border border-line bg-bg-elevated p-1.5">
        <Link
          to="/exam/$examId/mcq"
          params={{ examId }}
          className={cn(
            "flex min-h-12 items-center justify-center gap-2 rounded-[12px] text-sm font-medium",
            onMcq ? "bg-accent text-accent-fg" : "text-ink hover:bg-accent-soft",
          )}
        >
          <FileQuestion className="size-4" />
          اختياري
        </Link>
        <Link
          to="/exam/$examId/essay"
          params={{ examId }}
          className={cn(
            "flex min-h-12 items-center justify-center gap-2 rounded-[12px] text-sm font-medium",
            onEssay ? "bg-accent text-accent-fg" : "text-ink hover:bg-accent-soft",
          )}
        >
          <PenLine className="size-4" />
          مقالي
        </Link>
      </nav>

      {onHub && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            to="/exam/$examId/mcq"
            params={{ examId }}
            className="rounded-[24px] border border-line bg-bg-elevated p-5 hover:border-accent"
          >
            <FileQuestion className="size-5 text-accent" />
            <h2 className="mt-3 font-display text-lg font-semibold">الاختياري</h2>
            <p className="mt-1 text-sm text-muted">
              {exam.mcq.length} سؤال — اختبار تفاعلي مع تصحيح فوري بعد التسليم وإعادة الخطأ.
            </p>
          </Link>
          <Link
            to="/exam/$examId/essay"
            params={{ examId }}
            className="rounded-[24px] border border-line bg-bg-elevated p-5 hover:border-accent"
          >
            <PenLine className="size-5 text-accent" />
            <h2 className="mt-3 font-display text-lg font-semibold">المقالي</h2>
            <p className="mt-1 text-sm text-muted">
              {exam.essay.length} سؤال مع الإجابة النموذجية معروضة بشكل واضح.
            </p>
          </Link>
        </div>
      )}

      <Outlet />
    </Shell>
  );
}
