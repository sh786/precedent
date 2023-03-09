import { BaseComponent } from '@/lib/propTypes';
import { cn } from '@/lib/utils';

export function P({ children, className }: BaseComponent) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}
