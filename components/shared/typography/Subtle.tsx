import { BaseComponent } from "@/lib/propTypes";
import { cn } from "@/lib/utils";

export function Subtle({ children, className }: BaseComponent) {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
      {children}
    </p>
  );
}
