import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    link: "link-arrow",
  };

  const baseClasses = variantClasses[variant];

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
        {variant === "link" && (
          <svg
            className="arrow w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        )}
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
      {variant === "link" && (
        <svg
          className="arrow w-4 h-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </button>
  );
}
