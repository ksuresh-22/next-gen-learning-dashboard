"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const cells = Array.from({ length: 42 });

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      rounded-3xl
      border border-zinc-800
      bg-zinc-900
      p-6"
    >
      <h3 className="mb-4 font-semibold">
        Learning Activity
      </h3>

      <div
        className="
        grid grid-cols-7
        gap-2"
      >
        {cells.map((_, index) => (
          <div
            key={index}
            className={`
            h-4 w-4 rounded-sm
            ${
              Math.random() > 0.5
                ? "bg-violet-500"
                : "bg-zinc-800"
            }
          `}
          />
        ))}
      </div>
    </motion.article>
  );
}