import React from "react";

/**
 * Props:
 * - variant: 'image' | 'text' | 'card'
 * - className: classes extras
 */
export default function Skeleton({ variant = "card", className = "" }) {
  if (variant === "image") {
    return (
      <div className={`w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-md ${className}`} aria-hidden="true" />
    );
  }

  if (variant === "text") {
    return (
      <div className={`space-y-2 ${className}`} aria-hidden="true">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
      </div>
    );
  }

  // card
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow animate-pulse p-4 ${className}`} aria-hidden="true">
      <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-md mb-3" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3" />
      <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-full" />
    </div>
  );
}
