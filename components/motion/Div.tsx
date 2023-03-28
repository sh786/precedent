'use client';

import { BaseComponent } from '@/lib/propTypes';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

export const Div = ({ children, ...attrs }: BaseComponent & MotionProps) => (
  <AnimatePresence>
    <motion.div {...attrs}>{children}</motion.div>
  </AnimatePresence>
);
