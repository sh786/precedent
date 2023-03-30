import { BaseComponent } from '@/lib/types/propTypes';
import { cn } from '@/lib/utils';

export function H4({ children, className }: BaseComponent) {
  return (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h4>
  );
}
