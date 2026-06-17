import Link from "next/link";
import { ChevronLeft, Plane, Car, MapPin, Clock, Info, PoundSterling } from "lucide-react";
import MapWrapper from "@/components/MapWrapper";
import PricingTable from "@/components/PricingTable";
import type { MapMarker } from "@/components/DestinationMap";

const markers: MapMarker[] = [
  { name: "Tre Cime di Lavaredo", description: "Iconic three peaks, circular hike 9.5km", lat: 46.6178, lng: 12.2971 },
  { name: "Lake Braies / Pragser Wildsee", description: "Stunning turquoise lake, rowboats", lat: 46.6941, lng: 12.0848 },
  { name: "Seceda Ridge", description: "Cable car to 2518m, dramatic ridgeline", lat: 46.5777, lng: 11.7727 },
  { name: "Cortina d'Ampezzo", description: "Glamorous ski resort town", lat: 46.5404, lng: 12.1357 },
  { name: "Val Gardena", description: "Charming valley, Saslong ski run", lat: 46.5571, lng: 11.7771 },
  { name: "Lake Carezza / Karersee", description: "Mirror lake with Latemar backdrop", lat: 46.4100, lng: 11.5739 },
  { name: "Alpe di Siusi / Seiser Alm", description: "Europe's largest high-altitude meadow", lat: 46.5413, lng: 11.6328 },
  { name: "Passo Pordoi", description: "High mountain pass, panoramic views", lat: 46.4885, lng: 11.8367 },
];

const attractions = [
  {
    name: "Tre Cime di Lavaredo",
    lat: 46.6178,
    lng: 12.2971,
    description:
      "Three iconic dolomite spires rising to 2999m. The 9.5km circular trail is one of the Alps' most photographed hikes, passable June–October.",
  },
  {
    name: "Lake Braies / Pragser Wildsee",
    lat: 46.6941,
    lng: 12.0848,
    description:
      "A stunning turquoise lake nestled beneath jagged peaks. Rent a wooden rowboat and glide across mirror-still water backed by forest and cliffs.",
  },
  {
    name: "Seceda Ridge",
    lat: 46.5777,
    lng: 11.7727,
    description:
      "Take the cable car to 2518m for one of the most dramatic ridgelines in the Dolomites — a sweeping curtain of rock above lush Alpine meadows.",
  },
  {
    name: "Cortina d'Ampezzo",
    lat: 46.5404,
    lng: 12.1357,
    description:
      "The glamorous 'Queen of the Dolomites' — a chic ski resort town with world-class slopes, designer boutiques and excellent mountain restaurants.",
  },
  {
    name: "Val Gardena",
    lat: 46.5571,
    lng: 11.7771,
    description:
      "A beautiful valley renowned for its woodcarving tradition, the famous Saslong downhill ski run and access to the vast Sella Ronda circuit.",
  },
  {
    name: "Lake Carezza / Karersee",
    lat: 46.4100,
    lng: 11.5739,
    description:
      "A small but utterly magical mirror lake whose emerald-green surface reflects the spires of the Latemar massif — pure Dolomites magic.",
  },
  {
    name: "Alpe di Siusi / Seiser Alm",
    lat: 46.5413,
    lng: 11.6328,
    description:
      "Europe's largest high-altitude Alpine meadow at 1800–2350m. In summer a sea of wildflowers; in winter a vast plateau of cross-country ski trails.",
  },
  {
    name: "Passo Pordoi",
    lat: 46.4885,
    lng: 11.8367,
    description:
      "At 2239m, one of the highest and most scenic passes in the Dolomites. Take the cable car up Sass Pordoi (2950m) for 360° panoramic views.",
  },
];

const pricingItems = [
  { label: "Return flights", amount: "£80", note: "Edinburgh/Glasgow → Venice, avg low-season" },
  { label: "Car hire (shared ÷ 2)", amount: "£175", note: "7 days from Venice airport" },
  { label: "Accommodation", amount: "£450", note: "7 nights, mid-range B&B" },
  { label: "Ski equipment rental", amount: "£130", note: "4 days, full set" },
  { label: "Ski passes — Dolomiti Superski", amount: "£200", note: "4 days, access to 1200km of runs" },
  { label: "Food & drink", amount: "£200", note: "Mix of self-catering and mountain huts" },
  { label: "Cable cars & activities", amount: "£80", note: "Summer lifts, rowboats, guided hike" },
];

export default function DolomitesPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium">All Destinations</span>
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30">
              <MapPin className="w-3 h-3" /> Northern Italy
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-700/60 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-600/50">
              UNESCO World Heritage
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            The{" "}
            <span className="text-amber-400">Dolomites</span>
          </h1>
          <p className="text-amber-300/80 text-base font-medium mb-3">Northern Italy · UNESCO World Heritage</p>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Jagged peaks, silky powder and mirror-still alpine lakes in the heart of the Italian Alps.
          </p>
        </div>

        {/* Map */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            Explore the Map
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-slate-700/50">
            <MapWrapper
              center={[46.4102, 11.8440]}
              zoom={10}
              markers={markers}
              accentColor="#f59e0b"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {markers.map((m) => (
              <div key={m.name} className="bg-slate-800/40 rounded-xl p-2.5 border border-slate-700/50">
                <p className="text-amber-400 text-xs font-semibold truncate">{m.name}</p>
                <p className="text-slate-500 text-[10px] mt-0.5 font-mono">
                  {m.lat.toFixed(4)}, {m.lng.toFixed(4)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Flights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Plane className="w-5 h-5 text-amber-400" />
            Flights from Scotland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                from: "Edinburgh (EDI)",
                to: "Venice (VCE)",
                airline: "easyJet",
                price: "~£60–120 return",
                duration: "2h 25min direct",
              },
              {
                from: "Glasgow (GLA)",
                to: "Venice (VCE)",
                airline: "Ryanair",
                price: "~£50–110 return",
                duration: "2h 30min direct",
              },
              {
                from: "Edinburgh (EDI)",
                to: "Munich (MUC)",
                airline: "British Airways",
                price: "~£100–160 return",
                duration: "2h 10min + 3hr drive south",
              },
            ].map((f) => (
              <div
                key={f.from + f.to}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20">
                    {f.airline}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {f.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-white">{f.from}</span>
                  <Plane className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-white">{f.to}</span>
                </div>
                <p className="text-lg font-bold text-amber-400">{f.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transport */}
        <section className="mb-12 bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-400" />
            Getting Around
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Car hire from Venice", detail: "~£200–350/week", note: "Essential for exploring the passes" },
              { label: "Cable cars", detail: "€15–25 per ride", note: "Seceda · Col Raiser · Pordoi · Sass Pordoi" },
              { label: "Mountain bikes", detail: "~£25–35/day", note: "Hire from most resort villages" },
              { label: "Hiking poles", detail: "~£10–15/day", note: "Useful for via ferratas & steep trails" },
              { label: "Ski equipment", detail: "~£25–40/day", note: "Full set: boots, skis, helmet" },
              { label: "Dolomiti Bus", detail: "Free with ski pass", note: "Summer shuttle network between villages" },
            ].map((t) => (
              <div key={t.label} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <p className="font-semibold text-white text-sm">{t.label}</p>
                <p className="text-amber-400 font-bold mt-1">{t.detail}</p>
                <p className="text-slate-400 text-xs mt-1">{t.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {attractions.map((a) => (
              <div
                key={a.name}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5 flex flex-col gap-3"
              >
                <div>
                  <h3 className="font-bold text-white text-sm leading-snug">{a.name}</h3>
                  <p className="text-slate-500 text-[10px] mt-1 font-mono">
                    {a.lat.toFixed(4)}, {a.lng.toFixed(4)}
                  </p>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed flex-1">{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-amber-400" />
            Estimated Budget
          </h2>
          <PricingTable
            items={pricingItems}
            total="~£1,315pp"
            duration="7 nights"
            accentColor="amber"
          />
        </section>

        {/* Best time to visit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            Best Time to Visit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-2xl border border-amber-500/30 p-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30 mb-4">
                December – March
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Skiing</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Peak ski season with reliable snow across the Dolomiti Superski area — 1,200km of groomed pistes
                linking 12 resorts. Expect vibrant après-ski and cosy mountain huts. Book accommodation well in advance.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <div className="inline-flex items-center gap-2 bg-slate-700/50 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-600/50 mb-4">
                June – September
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hiking &amp; Lakes</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Long sunny days, wildflower meadows and passable high-altitude trails. Perfect for the Tre Cime circuit,
                rowboating on Lake Braies and cycling the Dolomite passes. Temperatures 15–25°C in the valleys.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="mb-12 bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-amber-400" />
            Practical Info
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Visa", value: "No visa required", note: "Schengen EU — UK passport, 90 days" },
              { label: "Currency", value: "Euro (EUR)", note: "£1 ≈ €1.17 · Cards widely accepted" },
              { label: "Language", value: "Italian / Ladin", note: "South Tyrol also widely speaks German" },
              { label: "Ski hire", value: "Book in advance", note: "Popular resorts sell out at peak times" },
              { label: "Ski pass", value: "Dolomiti Superski", note: "1,200km of runs across 12 resorts" },
              { label: "Winter driving", value: "Chains required", note: "Nov–Apr: winter tyres or chains by law" },
            ].map((item) => (
              <div key={item.label} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-bold text-amber-400 text-sm">{item.value}</p>
                <p className="text-slate-400 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
