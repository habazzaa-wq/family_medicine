export type QuizState = {
  order: number[];
  answers: Record<number, number | null>;
  checked: Record<number, boolean>;
  idx: number;
  submitted: boolean;
  startedAt: number;
};

export function loadQuiz(key: string): QuizState | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as QuizState;
  } catch {
    return null;
  }
}

export function saveQuiz(key: string, state: QuizState) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    /* ignore quota */
  }
}

export function clearQuiz(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
