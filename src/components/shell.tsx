import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import type { ReactNode } from "react";
import { BlessingToast } from "@/components/blessing-toast";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-ink">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 27px, color-mix(in oklab, var(--color-line) 55%, transparent) 28px)",
        }}
      />
      <header className="relative z-10 border-b border-line bg-bg-elevated/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5 min-h-11">
            <span className="flex size-9 items-center justify-center rounded-[10px] bg-accent text-accent-fg">
              <BookOpen className="size-5" strokeWidth={2} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold tracking-tight">
                قاعة الامتحانات
              </span>
              <span className="block text-[11px] text-muted">
                طب الأسرة · إدارة المستشفيات
              </span>
            </span>
          </Link>
        </div>
      </header>
      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 py-6 pb-16">
        {children}
      </main>
      <footer className="relative z-10 border-t border-line bg-bg-elevated/80">
        <div className="mx-auto max-w-5xl px-4 py-4 text-center text-xs text-muted">
          Developed By{" "}
          <span className="font-medium text-ink">Mahmoud Habazza</span>
        </div>
      </footer>
      <BlessingToast />
    </div>
  );
}
