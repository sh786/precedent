import { BaseComponent } from '@/lib/types/propTypes';
import { cn } from '@/lib/utils';
import { MotionProps } from 'framer-motion';
import { Div } from './Div';

export const Card = ({
  children,
  className,
  ...attrs
}: BaseComponent & MotionProps) => (
  <Div
    className={cn('rounded-md bg-slate-50 p-4 shadow-sm', className)}
    {...attrs}
  >
    {children}
  </Div>
);
