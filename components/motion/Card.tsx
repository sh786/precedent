import { BaseComponent } from '@/lib/types/propTypes';
import { cn } from '@/lib/utils';
import { MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { Div } from './Div';

export const Card = ({
  children,
  className,
  ...attrs
}: BaseComponent & MotionProps & HTMLAttributes<HTMLDivElement>) => (
  <Div
    className={cn('rounded-md bg-slate-50 p-4 shadow-sm', className)}
    {...attrs}
  >
    {children}
  </Div>
);
