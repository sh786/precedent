'use client';

import { BaseComponent } from '@/lib/propTypes';
import { motion, MotionProps } from 'framer-motion';

export const Div = ({ children, ...attrs }: BaseComponent & MotionProps) => (
  <motion.div {...attrs}>{children}</motion.div>
);
