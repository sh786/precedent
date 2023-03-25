import { BaseComponent } from '@/lib/propTypes';
import { cn } from '@/lib/utils';

export function H2({ children, className }: BaseComponent) {
  return (
    <h2
      className={cn(
        'mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        className
      )}
    >
      {children}
    </h2>
  );
}
