'use client';

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  width = "auto",
  height = "auto",
  onClick,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(`
        cursor-pointer border-none px-8 py-3
        bg-[#F03603] text-white text-sm font-medium`,
        className
      )}
      style={{ width, height }}
      {...props}
    >
      {children}
    </button>
  );
}
