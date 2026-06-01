"use client";

import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav
      className="
      hidden md:flex
      flex-col
      w-20 lg:w-64
      min-h-screen
      border-r border-zinc-800
      bg-zinc-950
      p-4"
    >
      <h2 className="hidden lg:block mb-8 text-xl font-bold">
        LearnOS
      </h2>

      <div className="space-y-3">
        <button className="flex items-center gap-3 rounded-xl bg-zinc-800 px-3 py-3 w-full">
          <LayoutDashboard size={20} />
          <span className="hidden lg:block">
            Dashboard
          </span>
        </button>

        <button className="flex items-center gap-3 px-3 py-3 w-full">
          <BookOpen size={20} />
          <span className="hidden lg:block">
            Courses
          </span>
        </button>

        <button className="flex items-center gap-3 px-3 py-3 w-full">
          <Trophy size={20} />
          <span className="hidden lg:block">
            Achievements
          </span>
        </button>

        <button className="flex items-center gap-3 px-3 py-3 w-full">
          <Settings size={20} />
          <span className="hidden lg:block">
            Settings
          </span>
        </button>
      </div>
    </nav>
  );
}