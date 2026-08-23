import { createFileRoute } from "@tanstack/react-router";
import { EssayView } from "@/components/essay-view";
import { getExam } from "@/data/exams";

export const Route = createFileRoute("/exam/$examId/essay")({
  component: EssayPage,
});

function EssayPage() {
  const { examId } = Route.useParams();
  const exam = getExam(examId);
  if (!exam) return null;
  return <EssayView items={exam.essay} />;
}
