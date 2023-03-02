import { BaseComponent } from "@/lib/propTypes";
import { cn } from "@/lib/utils";

export function H1({ children, className }: BaseComponent) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
