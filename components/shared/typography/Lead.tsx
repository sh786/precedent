import { BaseComponent } from '@/lib/types/propTypes';
import { cn } from '@/lib/utils';

export function Lead({ children, className }: BaseComponent) {
  return (
    <p className={cn('text-xl text-slate-700 dark:text-slate-400', className)}>
      {children}
    </p>
  );
}
