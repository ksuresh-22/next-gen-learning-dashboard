"use client";

import { motion } from "framer-motion";

import AnimatedProgress from "./AnimatedProgress";
import { iconMap } from "@/lib/icons";
import { Course } from "@/types/course";

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  const Icon =
    iconMap[
      course.icon_name as keyof typeof iconMap
    ];

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
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
      <Icon size={28} />

      <h3 className="mt-4 mb-4 font-semibold">
        {course.title}
      </h3>

      <AnimatedProgress
        value={course.progress}
      />

      <p className="mt-3 text-sm text-zinc-400">
        {course.progress}% Complete
      </p>
    </motion.article>
  );
}