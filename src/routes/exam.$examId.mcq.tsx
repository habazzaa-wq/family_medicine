import { createFileRoute } from "@tanstack/react-router";
import { QuizPlayer } from "@/components/quiz-player";
import { getExam } from "@/data/exams";

export const Route = createFileRoute("/exam/$examId/mcq")({
  component: McqPage,
});

function McqPage() {
  const { examId } = Route.useParams();
  const exam = getExam(examId);
  if (!exam) return null;
  return <QuizPlayer examId={exam.id} questions={exam.mcq} />;
}
