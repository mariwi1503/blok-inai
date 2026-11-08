import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** Visual variant; "dark" is for sections with a dark background. */
  variant?: "light" | "dark" | "danger";
  titleSize?: "lg" | "md";
  descriptionClassName?: string;
  className?: string;
};

const EYEBROW_VARIANTS = {
  light: "text-emerald-600 bg-emerald-50",
  dark: "text-emerald-400 bg-emerald-900/60 border border-emerald-500/30",
  danger: "text-rose-600 bg-rose-50",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "light",
  titleSize = "lg",
  descriptionClassName,
  className,
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full",
          EYEBROW_VARIANTS[variant],
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-extrabold mt-3",
          isDark ? "text-white" : "text-slate-900",
          titleSize === "lg" ? "text-3xl sm:text-4xl" : "text-3xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            isDark ? "text-slate-300 text-sm mt-2" : "text-slate-500 text-sm mt-1",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
