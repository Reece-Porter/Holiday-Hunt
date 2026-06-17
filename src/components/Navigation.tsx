"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const destinations = [
  { name: "Dolomites", href: "/dolomites", emoji: "🏔️" },
  { name: "Thailand & Vietnam", href: "/thailand-vietnam", emoji: "🌴" },
  { name: "Japan", href: "/japan", emoji: "⛩️" },
  { name: "Banff, Canada", href: "/banff-canada", emoji: "🦌" },
  { name: "Balkans", href: "/balkans", emoji: "🏛️" },
  { name: "European Cities", href: "/europe-cities", emoji: "🚂" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-amber-500 rounded-lg p-1.5 group-hover:bg-amber-400 transition-colors">
              <Plane className="h-5 w-5 text-navy-900" />
            </div>
            <span className="text-xl font-bold text-white">
              Holiday <span className="text-amber-400">Hunt</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {destinations.map((dest) => (
              <Link
                key={dest.href}
                href={dest.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === dest.href
                    ? "bg-amber-500/20 text-amber-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {dest.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-slate-700/50">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700/50"
              onClick={() => setMobileOpen(false)}
            >
              All Destinations
            </Link>
            {destinations.map((dest) => (
              <Link
                key={dest.href}
                href={dest.href}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === dest.href
                    ? "bg-amber-500/20 text-amber-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {dest.emoji} {dest.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
