import React from "react";

/**
 * Props:
 * - variant: 'solid' | 'outline' | 'ghost'
 * - loading: boolean
 * - disabled: boolean
 */
export default function Button({ variant = "solid", loading = false, disabled = false, children, ...rest }) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-blue-500"
  };

  const disabledClass = disabled || loading ? "opacity-60 cursor-not-allowed" : "hover:-translate-y-0.5";

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`${base} ${variantClasses[variant] || variantClasses.solid} ${disabledClass} focus:ring-offset-white dark:focus:ring-offset-gray-900`}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        // pequeno spinner SVG
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      ) : null}
      <span>{loading ? "Carregando..." : children}</span>
    </button>
  );
}
