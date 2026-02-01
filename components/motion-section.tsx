"use client";

import type { ReactNode } from "react";
import { Children, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type MotionSectionProps = {
  className?: string;
  delay?: number;
  children: ReactNode;
};

export function MotionSection({
  className,
  delay = 0,
  children
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { y: 12 }}
      whileInView={prefersReducedMotion ? undefined : { y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.2, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

type StaggerGroupProps = {
  className?: string;
  delay?: number;
  stagger?: number;
  children: ReactNode;
};

const staggerContainer = (delay: number, stagger: number) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: stagger
    }
  }
});

const staggerItem = {
  hidden: { y: 12 },
  visible: {
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

export function StaggerGroup({
  className,
  delay = 0,
  stagger = 0.08,
  children
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();
  const childNodes = useMemo(() => Children.toArray(children), [children]);
  const containerVariants = useMemo(
    () => staggerContainer(delay, stagger),
    [delay, stagger]
  );

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={cn(className)}
    >
      {childNodes.map((child, index) => (
        <motion.div key={`stagger-${index}`} variants={staggerItem}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
