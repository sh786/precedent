import { BaseComponent } from '@/lib/types/propTypes';
import { cn } from '@/lib/utils';

export function Small({ children, className }: BaseComponent) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  );
}
