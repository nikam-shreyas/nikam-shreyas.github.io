import React from "react";

export const LeetCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    aria-label="LeetCode"
  >
    <path d="M13.5 2.5c-.3 0-.6.1-.8.3L6.1 9.4c-1.9 1.9-1.9 5 0 6.9l2.6 2.6c1.9 1.9 5 1.9 6.9 0l4.3-4.3a1 1 0 0 0-1.4-1.4l-4.3 4.3c-1.1 1.1-2.9 1.1-4 0l-2.6-2.6c-1.1-1.1-1.1-2.9 0-4l6.6-6.6a1 1 0 0 0-.7-1.7z" />
    <path d="M10.2 12a1 1 0 0 0 1 1h5.8a1 1 0 1 0 0-2h-5.8a1 1 0 0 0-1 1z" />
  </svg>
);