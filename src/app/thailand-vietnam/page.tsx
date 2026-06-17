import Link from "next/link";
import { ChevronLeft, Plane, Car, MapPin, Clock, Info, PoundSterling } from "lucide-react";
import MapWrapper from "@/components/MapWrapper";
import PricingTable from "@/components/PricingTable";
import type { MapMarker } from "@/components/DestinationMap";

const markers: MapMarker[] = [
  { name: "Bangkok", description: "Grand Palace, temples, street food", lat: 13.7563, lng: 100.5018 },
  { name: "Chiang Mai", description: "Night markets, Doi Inthanon, elephant sanctuaries", lat: 18.7883, lng: 98.9853 },
  { name: "Pai", description: "Hippie mountain town, waterfalls, hot springs", lat: 19.3621, lng: 98.4398 },
  { name: "Ko Lanta", description: "Beach paradise, crystal clear Andaman Sea", lat: 7.6538, lng: 99.0493 },
  { name: "Hanoi Old Quarter", description: "History, pho, Hoan Kiem Lake", lat: 21.0340, lng: 105.8498 },
  { name: "Ha Long Bay", description: "UNESCO World Heritage, overnight cruise", lat: 20.9101, lng: 107.1839 },
  { name: "Hue", description: "Imperial City, royal tombs, hue cuisine", lat: 16.4637, lng: 107.5909 },
  { name: "Hoi An Ancient Town", description: "Lantern-lit old town, tailors, My Son ruins", lat: 15.8801, lng: 108.3380 },
  { name: "Ho Chi Minh City", description: "War Remnants Museum, Cu Chi Tunnels, Ben Thanh Market", lat: 10.8231, lng: 106.6297 },
];

const attractions = [
  {
    name: "Bangkok",
    lat: 13.7563,
    lng: 100.5018,
    description:
      "Thailand's electric capital. Visit the Grand Palace and Wat Phra Kaew, cruise the klongs, eat your way through Chinatown's street food stalls, and experience the legendary nightlife.",
  },
  {
    name: "Chiang Mai",
    lat: 18.7883,
    lng: 98.9853,
    description:
      "Thailand's northern cultural hub — explore over 300 temples, browse the famous Night Bazaar, trek to Doi Inthanon National Park and spend a morning at an ethical elephant sanctuary.",
  },
  {
    name: "Pai",
    lat: 19.3621,
    lng: 98.4398,
    description:
      "A laid-back mountain town beloved by backpackers and digital nomads alike. Natural hot springs, dramatic waterfalls, canyon viewpoints and a chilled cafe scene make this unmissable.",
  },
  {
    name: "Ko Lanta",
    lat: 7.6538,
    lng: 99.0493,
    description:
      "A beach paradise in the crystal-clear Andaman Sea with a relaxed atmosphere compared to busier islands. Long sandy beaches, excellent snorkelling and superb seafood restaurants.",
  },
  {
    name: "Hanoi Old Quarter",
    lat: 21.0340,
    lng: 105.8498,
    description:
      "Vietnam's characterful capital. Wander the 36 ancient guild streets, sip bia hoi on the corner, bowl of pho in hand — then visit the Hoan Kiem Lake and Temple of Literature.",
  },
  {
    name: "Ha Long Bay",
    lat: 20.9101,
    lng: 107.1839,
    description:
      "A UNESCO World Heritage seascape of nearly 2,000 limestone karst islands rising from jade-green water. An overnight junk cruise is one of Southeast Asia's iconic experiences.",
  },
  {
    name: "Hue",
    lat: 16.4637,
    lng: 107.5909,
    description:
      "Vietnam's former imperial capital. Explore the sprawling Citadel and Imperial Enclosure, visit royal tombs scattered along the Perfume River, and eat Hue's unique royal cuisine.",
  },
  {
    name: "Hoi An Ancient Town",
    lat: 15.8801,
    lng: 108.3380,
    description:
      "A remarkably well-preserved trading port bathed in the glow of coloured lanterns each evening. Get clothes tailored overnight, explore My Son ruins and cycle through the rice paddies.",
  },
  {
    name: "Ho Chi Minh City",
    lat: 10.8231,
    lng: 106.6297,
    description:
      "Vietnam's buzzing southern megacity. Visit the sobering War Remnants Museum, go underground at the Cu Chi Tunnels, shop Ben Thanh Market and end with rooftop cocktails over the skyline.",
  },
];

const pricingItems = [
  { label: "Return flights (open-jaw)", amount: "£620", note: "Fly into Bangkok, out of Ho Chi Minh City, avg" },
  { label: "Internal flights (2–3 legs)", amount: "£150", note: "AirAsia/VietJet, e.g. Chiang Mai → Hanoi" },
  { label: "Accommodation", amount: "£375", note: "15 nights, mix of hostels, guesthouses & boutique hotels" },
  { label: "Food & street food", amount: "£200", note: "Budget well — street food is excellent and cheap" },
  { label: "Local transport", amount: "£100", note: "Grab, tuk-tuks, overnight trains, scooter hire" },
  { label: "Tours & activities", amount: "£200", note: "Ha Long Bay cruise ~£80, Cu Chi Tunnels ~£20, other" },
  { label: "Vietnam e-visa", amount: "£15", note: "Apply online at least 3 days before arrival" },
];

export default function ThailandVietnamPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium">All Destinations</span>
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
              <MapPin className="w-3 h-3" /> Southeast Asia
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-700/60 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-600/50">
              15-Night Open-Jaw Adventure
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Thailand &amp;{" "}
            <span className="text-emerald-400">Vietnam</span>
          </h1>
          <p className="text-emerald-300/80 text-base font-medium mb-3">Southeast Asia · 15-Night Open-Jaw Adventure</p>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Temples, street food, karst islands and lantern-lit old towns across two incredible countries.
          </p>
        </div>

        {/* Map */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Explore the Route
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-slate-700/50">
            <MapWrapper
              center={[15.0, 103.0]}
              zoom={5}
              markers={markers}
              accentColor="#10b981"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {markers.map((m) => (
              <div key={m.name} className="bg-slate-800/40 rounded-xl p-2.5 border border-slate-700/50">
                <p className="text-emerald-400 text-xs font-semibold truncate">{m.name}</p>
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
            <Plane className="w-5 h-5 text-emerald-400" />
            Flights from Scotland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              {
                from: "Edinburgh (EDI)",
                to: "Bangkok (BKK) via Doha",
                airline: "Qatar Airways",
                price: "~£550–700 return",
                duration: "~15h total",
              },
              {
                from: "Glasgow (GLA)",
                to: "Bangkok (BKK) via Dubai",
                airline: "Emirates",
                price: "~£580–720 return",
                duration: "~16h total",
              },
            ].map((f) => (
              <div
                key={f.from + f.to}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                    {f.airline}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {f.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-white">{f.from}</span>
                  <Plane className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-white">{f.to}</span>
                </div>
                <p className="text-lg font-bold text-emerald-400">{f.price}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-5">
            <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-emerald-300 font-semibold text-sm mb-1">
                Open-jaw ticket — fly into Bangkok, out of Ho Chi Minh City (SGN)
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Book as an <strong className="text-white">open-jaw</strong> ticket: fly{" "}
                <strong className="text-white">INTO Bangkok (BKK)</strong> and{" "}
                <strong className="text-white">OUT of Ho Chi Minh City (SGN)</strong>. This is typically included in
                the prices above and avoids a costly repositioning flight. Search on Google Flights or Skyscanner
                using the multi-city option.
              </p>
            </div>
          </div>
        </section>

        {/* Suggested Route */}
        <section className="mb-12 bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Suggested 15-Night Route
          </h2>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {(
              [
                { type: "stop", label: "Bangkok" },
                { type: "arrow" },
                { type: "stop", label: "Chiang Mai" },
                { type: "flight" },
                { type: "stop", label: "Hanoi" },
                { type: "arrow" },
                { type: "stop", label: "Ha Long Bay" },
                { type: "arrow" },
                { type: "stop", label: "Hue" },
                { type: "arrow" },
                { type: "stop", label: "Hoi An" },
                { type: "arrow" },
                { type: "stop", label: "Ho Chi Minh City" },
              ] as Array<{ type: string; label?: string }>
            ).map((step, i) => {
              if (step.type === "stop") {
                return (
                  <span
                    key={i}
                    className="bg-slate-700/50 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-slate-600/50"
                  >
                    {step.label}
                  </span>
                );
              }
              if (step.type === "flight") {
                return (
                  <span key={i} className="flex items-center gap-1 text-emerald-400">
                    <Plane className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">flight</span>
                  </span>
                );
              }
              return (
                <span key={i} className="text-slate-600 text-lg font-light">
                  →
                </span>
              );
            })}
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Spend 2–3 nights in Bangkok, then head north to Chiang Mai (2–3 nights) before flying across to Hanoi.
            Day-trip or overnight to Ha Long Bay, then travel south by overnight train through Hue and Hoi An before
            finishing in Ho Chi Minh City.
          </p>
        </section>

        {/* Transport */}
        <section className="mb-12 bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-5 h-5 text-emerald-400" />
            Getting Around
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Internal flights", detail: "~£40–80 each", note: "AirAsia & VietJet — book 4–6 weeks ahead" },
              { label: "Overnight trains Vietnam", detail: "~£20–40", note: "Hanoi → Hue / Hue → Da Nang; great value" },
              { label: "Grab app", detail: "Uber equivalent", note: "Works in both Thailand & Vietnam; always metered" },
              { label: "Tuk-tuks / motorbike taxis", detail: "~£1–3 per ride", note: "Agree price before you get in" },
              { label: "Scooter hire", detail: "~£8–12/day", note: "Ideal in Pai, Hoi An, and coastal areas" },
              { label: "Ha Long Bay cruise", detail: "~£60–120pp", note: "Overnight 2-day cruise recommended" },
            ].map((t) => (
              <div key={t.label} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <p className="font-semibold text-white text-sm">{t.label}</p>
                <p className="text-emerald-400 font-bold mt-1">{t.detail}</p>
                <p className="text-slate-400 text-xs mt-1">{t.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            Highlights &amp; Attractions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <PoundSterling className="w-5 h-5 text-emerald-400" />
            Estimated Budget
          </h2>
          <PricingTable
            items={pricingItems}
            total="~£1,660pp"
            duration="15 nights"
            accentColor="emerald"
          />
        </section>

        {/* Best time to visit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            Best Time to Visit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-2xl border border-emerald-500/30 p-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30 mb-4">
                November – April
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dry Season — Ideal</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The best time to visit across both countries. Expect sunny skies, low humidity and calm seas
                perfect for island-hopping. December and January are peak months — book accommodation and Ha Long
                Bay cruises well in advance.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <div className="inline-flex items-center gap-2 bg-slate-700/50 text-slate-400 text-xs font-semibold px-3 py-1 rounded-full border border-slate-600/50 mb-4">
                May – October
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Monsoon Season</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Heavy rainfall and high humidity across most of the region, with some areas like central Vietnam
                seeing destructive typhoons September–November. Prices drop significantly and crowds thin, but expect
                disrupted travel and closed beaches. Northern Vietnam remains passable in summer.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="mb-12 bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-400" />
            Practical Info
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Vietnam e-visa",
                value: "~£15 online",
                note: "Apply at evisa.xuatnhapcanh.gov.vn — allow 3 days processing",
              },
              {
                label: "Thailand visa",
                value: "Visa-free 30 days",
                note: "UK passport holders — no action needed on arrival",
              },
              {
                label: "Currency",
                value: "THB & VND",
                note: "Thai Baht & Vietnamese Dong — ATMs widespread, carry some cash",
              },
              {
                label: "Health",
                value: "Vaccinations advised",
                note: "Hepatitis A & typhoid recommended — consult GP 4–6 weeks before",
              },
              {
                label: "Ha Long Bay cruise",
                value: "Book ahead",
                note: "Quality varies widely — research operators carefully, budget £80+ per person",
              },
              {
                label: "Safety",
                value: "Generally safe",
                note: "Watch for bag-snatching in cities; use Grab rather than street taxis",
              },
            ].map((item) => (
              <div key={item.label} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-bold text-emerald-400 text-sm">{item.value}</p>
                <p className="text-slate-400 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
