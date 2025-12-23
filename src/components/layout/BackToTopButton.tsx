"use client";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-[11px] tracking-[0.05em] text-paper/30 hover:text-paper/60 transition-colors duration-[400ms] cursor-pointer"
      style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
    >
      Back to top ↑
    </button>
  );
}

