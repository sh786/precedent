'use client';

import { BaseComponent } from '@/lib/propTypes';
import { motion, MotionProps } from 'framer-motion';
import { LinkHTMLAttributes } from 'react';

export const A = ({
  children,
  ...attrs
}: BaseComponent & MotionProps & LinkHTMLAttributes<HTMLAnchorElement>) => (
  <motion.a {...attrs}>{children}</motion.a>
);
