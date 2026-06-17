interface PricingItem {
  label: string;
  amount: string;
  note?: string;
}

interface PricingTableProps {
  items: PricingItem[];
  total: string;
  duration: string;
  accentColor?: string;
}

export default function PricingTable({
  items,
  total,
  duration,
  accentColor = "amber",
}: PricingTableProps) {
  const accentClasses: Record<string, { badge: string; border: string; text: string }> = {
    amber: {
      badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      border: "border-amber-500/30",
      text: "text-amber-400",
    },
    emerald: {
      badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
    },
    rose: {
      badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
      border: "border-rose-500/30",
      text: "text-rose-400",
    },
    sky: {
      badge: "bg-sky-500/20 text-sky-400 border-sky-500/30",
      border: "border-sky-500/30",
      text: "text-sky-400",
    },
    violet: {
      badge: "bg-violet-500/20 text-violet-400 border-violet-500/30",
      border: "border-violet-500/30",
      text: "text-violet-400",
    },
    teal: {
      badge: "bg-teal-500/20 text-teal-400 border-teal-500/30",
      border: "border-teal-500/30",
      text: "text-teal-400",
    },
  };

  const ac = accentClasses[accentColor] || accentClasses.amber;

  return (
    <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
      <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
        <h3 className="text-white font-semibold">Cost per Person</h3>
        <span className={`text-xs px-2 py-1 rounded-full border ${ac.badge}`}>
          {duration}
        </span>
      </div>
      <div className="divide-y divide-slate-700/30">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between px-4 py-3">
            <div>
              <span className="text-slate-300 text-sm">{item.label}</span>
              {item.note && (
                <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>
              )}
            </div>
            <span className="text-white font-medium text-sm">{item.amount}</span>
          </div>
        ))}
      </div>
      <div className={`flex items-center justify-between px-4 py-4 border-t ${ac.border} bg-slate-700/20`}>
        <span className="text-white font-bold">TOTAL</span>
        <span className={`text-xl font-bold ${ac.text}`}>{total}</span>
      </div>
    </div>
  );
}
