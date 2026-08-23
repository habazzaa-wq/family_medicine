import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const PHRASES = [
  "صلى على النبي يا دكتورة",
  "سبحان الله وبحمده سبحان الله العظيم",
  "سبحان الله",
  "لا إله إلا الله",
  "لا حول ولا قوة إلا بالله",
];

const SHOW_FOR = 5000;
const INTERVAL = 60000;
const FIRST_DELAY = 15000;

export function BlessingToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const showNext = () => {
      const phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
      setMessage(phrase);
      setVisible(false);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => {
        setVisible(true);
        hideTimer.current = setTimeout(() => setVisible(false), SHOW_FOR);
      }, 30);
    };

    firstTimer.current = setTimeout(showNext, FIRST_DELAY);
    intervalTimer.current = setInterval(showNext, INTERVAL);

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (firstTimer.current) clearTimeout(firstTimer.current);
      if (intervalTimer.current) clearInterval(intervalTimer.current);
    };
  }, []);

  if (!message) return null;

  return (
    <div
      aria-live="polite"
      dir="rtl"
      className={cnToast(
        "fixed right-4 top-4 z-50 max-w-[min(92vw,24rem)] rounded-2xl border border-accent/50 bg-bg-elevated px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 sm:top-auto sm:bottom-4",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Sparkles className="size-5" />
        </span>
        <p className="text-[15px] font-semibold leading-relaxed text-ink">{message}</p>
      </div>
    </div>
  );
}

function cnToast(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
