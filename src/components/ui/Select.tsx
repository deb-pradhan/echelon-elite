"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={containerRef} className={`select-container ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`select-trigger ${isOpen ? "is-open" : ""} ${value ? "has-value" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={value ? "text-void" : "text-stone"}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={`select-arrow ${isOpen ? "rotate-180" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M2 4L6 8L10 4" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`select-dropdown ${isOpen ? "is-open" : ""}`}
        role="listbox"
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            className={`select-option ${value === option.value ? "is-selected" : ""}`}
            role="option"
            aria-selected={value === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

