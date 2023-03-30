'use client';

import { BaseComponent } from '@/lib/types/propTypes';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

export const Div = ({
  children,
  ...attrs
}: BaseComponent & MotionProps & HTMLAttributes<HTMLDivElement>) => (
  <AnimatePresence>
    <motion.div {...attrs}>{children}</motion.div>
  </AnimatePresence>
);
