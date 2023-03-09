import { BaseComponent } from '@/lib/propTypes';
import { cn } from '@/lib/utils';

export function Large({ children, className }: BaseComponent) {
  return (
    <div
      className={cn(
        'text-lg font-semibold text-slate-100 dark:text-slate-50',
        className
      )}
    >
      {children}
    </div>
  );
}
