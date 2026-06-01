"use client";

import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      className="
      fixed bottom-0 left-0 right-0
      flex md:hidden
      justify-around
      border-t border-zinc-800
      bg-zinc-950
      py-3 z-50"
    >
      <LayoutDashboard />
      <BookOpen />
      <Trophy />
      <Settings />
    </nav>
  );
}