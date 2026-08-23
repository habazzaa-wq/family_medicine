import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Essay } from "@/data/exams";
import { cn } from "@/lib/utils";

export function EssayView({ items }: { items: Essay[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((e) => [e.id, true])),
  );

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        الأسئلة المقالية مع الإجابة النموذجية — اضغطي على السؤال لإخفاء أو إظهار الحل.
      </p>
      {items.map((item, i) => {
        const isOpen = open[item.id];
        return (
          <article
            key={item.id}
            className="overflow-hidden rounded-[24px] border border-line bg-bg-elevated"
          >
            <button
              type="button"
              className="flex w-full items-start gap-3 px-5 py-4 text-right min-h-11"
              onClick={() => setOpen((s) => ({ ...s, [item.id]: !s[item.id] }))}
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <span dir="ltr" className="flex-1 text-left font-display text-base font-semibold leading-snug">
                {item.prompt}
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 size-5 shrink-0 text-muted transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-line px-5 py-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent">
                  الإجابة النموذجية
                </p>
                <ul className="space-y-2" dir="ltr">
                  {item.answer.map((line) => (
                    <li
                      key={line}
                      className="rounded-[12px] bg-accent-soft/60 px-3 py-2 text-left text-sm leading-relaxed text-ink"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
                {item.extra && (
                  <p className="mt-3 text-sm leading-relaxed text-muted" dir="rtl">
                    {item.extra}
                  </p>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
