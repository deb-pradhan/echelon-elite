interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";
  const labelColor = theme === "dark" ? "text-paper/50" : "text-stone";
  const titleColor = theme === "dark" ? "text-paper" : "text-void";
  const subtitleColor = theme === "dark" ? "text-paper/60" : "text-stone";

  return (
    <div className={`${alignClasses} mb-20`}>
      {label && (
        <span className={`text-label ${labelColor} block mb-6`}>{label}</span>
      )}
      <h2
        className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl ${titleColor} tracking-[-0.02em]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-8 text-lg ${subtitleColor} max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
