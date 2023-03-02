import { BaseComponent } from "@/lib/propTypes";
import { cn } from "@/lib/utils";

export function H3({ children, className }: BaseComponent) {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
