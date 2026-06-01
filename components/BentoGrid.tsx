"use client";

import { motion } from "framer-motion";

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="
      grid gap-4
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4"
    >
      {children}
    </motion.section>
  );
}