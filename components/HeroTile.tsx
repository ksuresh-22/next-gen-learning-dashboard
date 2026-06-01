"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      col-span-1 md:col-span-2
      rounded-3xl
      border border-zinc-800
      bg-gradient-to-br
      from-violet-950/50
      via-zinc-900
      to-cyan-950/40
      p-8"
    >
      <h1 className="text-3xl font-bold">
        Welcome Back, Suresh 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Continue your learning journey.
      </p>

      <div
        className="
        mt-6 inline-flex
        rounded-full
        bg-violet-500/20
        px-4 py-2"
      >
        🔥 14 Day Streak
      </div>
    </motion.article>
  );
}