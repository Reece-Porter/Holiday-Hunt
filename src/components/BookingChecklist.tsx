"use client";

import { useState, useEffect } from "react";
import { CheckSquare2, Square, AlertTriangle, Clock } from "lucide-react";

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
  urgent?: boolean;
}

export interface ChecklistSection {
  title: string;
  emoji: string;
  items: ChecklistItem[];
}

interface BookingChecklistProps {
  destination: string;
  sections: ChecklistSection[];
  accentColor?: "amber" | "emerald" | "rose" | "sky" | "violet" | "teal";
}

const accent = {
  amber:   { bar: "bg-amber-400",   badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",   check: "text-amber-400",  ring: "ring-amber-500/40" },
  emerald: { bar: "bg-emerald-400", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", check: "text-emerald-400", ring: "ring-emerald-500/40" },
  rose:    { bar: "bg-rose-400",    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",    check: "text-rose-400",   ring: "ring-rose-500/40" },
  sky:     { bar: "bg-sky-400",     badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",      check: "text-sky-400",    ring: "ring-sky-500/40" },
  violet:  { bar: "bg-violet-400",  badge: "bg-violet-500/20 text-violet-300 border-violet-500/30",  check: "text-violet-400", ring: "ring-violet-500/40" },
  teal:    { bar: "bg-teal-400",    badge: "bg-teal-500/20 text-teal-300 border-teal-500/30",    check: "text-teal-400",   ring: "ring-teal-500/40" },
};

export default function BookingChecklist({ destination, sections, accentColor = "amber" }: BookingChecklistProps) {
  const storageKey = `checklist-${destination}`;
  const ac = accent[accentColor];

  const allItems = sections.flatMap(s => s.items);
  const total = allItems.length;

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) setChecked(JSON.parse(stored));
    } catch {}
    setMounted(true);
  }, [storageKey]);

  const toggle = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
  };

  const resetAll = () => {
    setChecked({});
    try { localStorage.removeItem(storageKey); } catch {}
  };

  const done = mounted ? allItems.filter(i => checked[i.id]).length : 0;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const allDone = done === total;

  return (
    <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-700/50">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              {allDone && mounted ? "✅" : "📋"} Booking Checklist
            </h2>
            <p className="text-slate-400 text-sm mt-0.5">
              {mounted
                ? allDone
                  ? "Everything booked — you're ready to go! 🎉"
                  : `${done} of ${total} tasks complete`
                : `${total} tasks to complete`}
            </p>
          </div>
          {mounted && done > 0 && (
            <button
              onClick={resetAll}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors shrink-0 mt-1"
            >
              Reset all
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${ac.bar} rounded-full transition-all duration-500`}
            style={{ width: mounted ? `${pct}%` : "0%" }}
          />
        </div>
        {mounted && (
          <p className="text-xs text-slate-500 mt-1.5">{pct}% complete</p>
        )}
      </div>

      {/* Urgent items callout */}
      {sections.some(s => s.items.some(i => i.urgent)) && (
        <div className="mx-6 mt-5 bg-amber-500/10 border border-amber-500/25 rounded-xl p-3 flex gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-300 text-xs leading-relaxed">
            <strong>Book early:</strong> items marked{" "}
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded border border-amber-500/30 mx-0.5">
              <Clock className="w-2.5 h-2.5" /> Book early
            </span>{" "}
            sell out months in advance — do these first.
          </p>
        </div>
      )}

      {/* Sections */}
      <div className="p-6 space-y-6">
        {sections.map(section => {
          const sectionDone = mounted ? section.items.filter(i => checked[i.id]).length : 0;
          return (
            <div key={section.title}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{section.emoji}</span> {section.title}
                </h3>
                {mounted && (
                  <span className="text-xs text-slate-500">
                    {sectionDone}/{section.items.length}
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {section.items.map(item => {
                  const isChecked = mounted && !!checked[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggle(item.id)}
                        className={`w-full flex items-start gap-3 text-left group rounded-xl p-3 transition-all border ${
                          isChecked
                            ? "bg-slate-700/20 border-slate-700/30"
                            : "bg-slate-700/30 border-slate-600/30 hover:border-slate-500/50"
                        }`}
                      >
                        <span className={`mt-0.5 shrink-0 transition-colors ${isChecked ? ac.check : "text-slate-500 group-hover:text-slate-400"}`}>
                          {isChecked ? <CheckSquare2 className="w-4.5 h-4.5 w-[18px] h-[18px]" /> : <Square className="w-[18px] h-[18px]" />}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-sm font-medium transition-colors ${isChecked ? "line-through text-slate-500" : "text-slate-200"}`}>
                              {item.label}
                            </span>
                            {item.urgent && !isChecked && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30 shrink-0">
                                <Clock className="w-2.5 h-2.5" /> Book early
                              </span>
                            )}
                          </div>
                          {item.note && (
                            <p className={`text-xs mt-0.5 leading-relaxed transition-colors ${isChecked ? "text-slate-600" : "text-slate-400"}`}>
                              {item.note}
                            </p>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
