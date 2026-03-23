import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowingBorderProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
};

const GlowingBorder = ({
  children,
  className,
  containerClassName,
  disabled = true,
}: GlowingBorderProps) => {
  return (
    <div className={cn("group relative", containerClassName)}>
      {!disabled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, rgba(99,102,241,0.85), rgba(59,130,246,0.85), rgba(168,85,247,0.85), rgba(99,102,241,0.85))",
          }}
        />
      )}
      <div className={cn("relative rounded-[inherit]", className)}>{children}</div>
    </div>
  );
};

export default GlowingBorder;
