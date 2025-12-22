import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "ghost-light" | "ghost-dark" | "gold";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "ghost-dark",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    variant === "gold"
      ? "link-gold"
      : `btn-ghost ${variant === "ghost-light" ? "btn-ghost-light" : "btn-ghost-dark"}`;

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

