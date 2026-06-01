"use client";

import { motion } from "framer-motion";

export default function AnimatedProgress({
  value,
}: {
  value: number;
}) {
  return (
    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500"
      />
    </div>
  );
}