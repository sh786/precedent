'use client';

import { BaseComponent } from '@/lib/types/propTypes';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

export const Div = ({ children, ...attrs }: BaseComponent & MotionProps) => (
  <AnimatePresence>
    <motion.div {...attrs}>{children}</motion.div>
  </AnimatePresence>
);
