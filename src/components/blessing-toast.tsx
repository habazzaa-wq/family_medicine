import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "صلى على النبي يا دكتورة",
  "سبحان الله وبحمده سبحان الله العظيم",
  "سبحان الله",
  "لا إله إلا الله",
  "لا حول ولا قوة إلا بالله",
];

const SHOW_FOR = 5000;
const INTERVAL = 120000;
const FIRST_DELAY = 20000;

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
        "fixed bottom-4 left-4 z-50 max-w-[min(90vw,22rem)] rounded-[16px] border border-line bg-bg-elevated/95 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      <p className="text-sm font-medium leading-relaxed text-ink">{message}</p>
    </div>
  );
}

function cnToast(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
