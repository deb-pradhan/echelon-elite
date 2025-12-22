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
  const labelColor = theme === "dark" ? "text-gold" : "text-gold";
  const titleColor = theme === "dark" ? "text-alabaster" : "text-midnight";
  const subtitleColor =
    theme === "dark" ? "text-alabaster/60" : "text-charcoal/70";

  return (
    <div className={`${alignClasses} mb-16`}>
      {label && (
        <span className={`text-label ${labelColor} block mb-4`}>{label}</span>
      )}
      <h2
        className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg ${subtitleColor} max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

