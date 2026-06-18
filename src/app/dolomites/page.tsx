import Link from "next/link";
import {
  ChevronLeft,
  Plane,
  Car,
  MapPin,
  Clock,
  Info,
  PoundSterling,
  Tent,
  Bike,
  Mountain,
  ExternalLink,
  Droplets,
  Train,
} from "lucide-react";
import MapWrapper from "@/components/MapWrapper";
import PricingTable from "@/components/PricingTable";
import type { MapMarker, MapRoute } from "@/components/DestinationMap";

// Amber = attractions, Green = campervan parking / sosta
const markers: MapMarker[] = [
  { name: "Tre Cime di Lavaredo", description: "Iconic three peaks, circular hike 9.5km", lat: 46.6178, lng: 12.2971 },
  { name: "Lake Braies / Pragser Wildsee", description: "Stunning turquoise lake, rowboats", lat: 46.6941, lng: 12.0848 },
  { name: "Seceda Ridge", description: "Cable car to 2,518m, dramatic ridgeline", lat: 46.5777, lng: 11.7727 },
  { name: "Cortina d'Ampezzo", description: "Glamorous ski resort town", lat: 46.5404, lng: 12.1357 },
  { name: "Val Gardena", description: "Charming valley, Saslong ski run", lat: 46.5571, lng: 11.7771 },
  { name: "Lake Carezza / Karersee", description: "Mirror lake with Latemar backdrop", lat: 46.4100, lng: 11.5739 },
  { name: "Alpe di Siusi / Seiser Alm", description: "Europe's largest high-altitude meadow", lat: 46.5413, lng: 11.6328 },
  { name: "Passo Pordoi", description: "High mountain pass, panoramic views", lat: 46.4885, lng: 11.8367 },
  // Campervan sosta spots — green markers
  { name: "⛺ Sosta Camper — Misurina Lake", description: "Paid sosta €15/night · 3km from Tre Cime trailhead · water/grey waste disposal", lat: 46.5842, lng: 12.2543, color: "#22c55e" },
  { name: "⛺ Sosta Camper — Lago di Dobbiaco", description: "€15–20/night · stunning lakeside · electric hookup available", lat: 46.7315, lng: 12.2287, color: "#22c55e" },
  { name: "⛺ Sosta Camper — Ortisei / Val Gardena", description: "€12–18/night · central valley location · bus to ski lifts", lat: 46.5754, lng: 11.6725, color: "#22c55e" },
  { name: "⛺ Parcheggio Seiser Alm / Alpe di Siusi", description: "Large car park + free overnight sosta · cable car to Alpe di Siusi meadows", lat: 46.5186, lng: 11.6263, color: "#22c55e" },
  { name: "⛺ Free Parking — Passo Falzarego", description: "Free mountain pass parking · wild overnight tolerated · 2,105m altitude", lat: 46.5213, lng: 12.0038, color: "#22c55e" },
  { name: "⛺ Sosta Camper — Cortina d'Ampezzo", description: "€10–20/night · 48h sosta in town · walk to shops & restaurants", lat: 46.5350, lng: 12.1378, color: "#22c55e" },
  { name: "⛺ Sosta Arabba / Pordoi", description: "€12–18/night · ski resort base · Dolomiti Superski lifts on doorstep", lat: 46.4967, lng: 11.8638, color: "#22c55e" },
];

const attractions = [
  {
    name: "Tre Cime di Lavaredo",
    description:
      "Three iconic dolomite spires rising to 2,999m. The 9.5km circular trail is one of the Alps' most photographed hikes, passable June–October.",
  },
  {
    name: "Lake Braies / Pragser Wildsee",
    description:
      "A stunning turquoise lake nestled beneath jagged peaks. Rent a wooden rowboat and glide across mirror-still water backed by forest and cliffs.",
  },
  {
    name: "Seceda Ridge",
    description:
      "Take the cable car to 2,518m for one of the most dramatic ridgelines in the Dolomites — a sweeping curtain of rock above lush Alpine meadows.",
  },
  {
    name: "Cortina d'Ampezzo",
    description:
      "The glamorous 'Queen of the Dolomites' — a chic ski resort town with world-class slopes, designer boutiques and excellent mountain restaurants.",
  },
  {
    name: "Val Gardena",
    description:
      "A beautiful valley renowned for its woodcarving tradition, the famous Saslong downhill ski run and access to the vast Sella Ronda circuit.",
  },
  {
    name: "Lake Carezza / Karersee",
    description:
      "A small but utterly magical mirror lake whose emerald-green surface reflects the spires of the Latemar massif.",
  },
  {
    name: "Alpe di Siusi / Seiser Alm",
    description:
      "Europe's largest high-altitude Alpine meadow at 1,800–2,350m. In summer a sea of wildflowers; in winter a vast plateau of cross-country ski trails.",
  },
  {
    name: "Passo Pordoi",
    description:
      "At 2,239m, one of the most scenic passes in the Dolomites. Take the cable car up Sass Pordoi (2,950m) for 360° panoramic views.",
  },
];

const sostaSpots = [
  {
    name: "Misurina Lake Sosta",
    coords: "46.5842, 12.2543",
    price: "€15/night",
    facilities: "Water, grey waste, toilets",
    note: "3km from Tre Cime trailhead — ideal base camp",
  },
  {
    name: "Lago di Dobbiaco / Toblacher See",
    coords: "46.7315, 12.2287",
    price: "€15–20/night",
    facilities: "Electric hookup, water, waste",
    note: "Lakeside setting, peaceful and scenic",
  },
  {
    name: "Ortisei / Val Gardena",
    coords: "46.5754, 11.6725",
    price: "€12–18/night",
    facilities: "Water, waste disposal",
    note: "Central valley, bus connections to all ski lifts",
  },
  {
    name: "Seiser Alm / Alpe di Siusi",
    coords: "46.5186, 11.6263",
    price: "Free",
    facilities: "Large car park, toilets nearby",
    note: "Overnight tolerated, cable car to meadows at base",
  },
  {
    name: "Passo Falzarego",
    coords: "46.5213, 12.0038",
    price: "Free",
    facilities: "None",
    note: "Wild overnight tolerated at 2,105m — dramatic mountain setting",
  },
  {
    name: "Cortina d'Ampezzo Town Sosta",
    coords: "46.5350, 12.1378",
    price: "€10–20/night",
    facilities: "Full services, toilets",
    note: "48h max, walking distance to town centre",
  },
  {
    name: "Arabba / Passo Pordoi",
    coords: "46.4967, 11.8638",
    price: "€12–18/night",
    facilities: "Water, waste",
    note: "Ski resort base — Dolomiti Superski lifts on doorstep",
  },
];

const basePricing = [
  { label: "Return flights", amount: "£90", note: "Edinburgh/Glasgow → Venice avg" },
  { label: "Roadsurfer van — 10 days (÷ 2 people)", amount: "£550", note: "Beach Hopper or Surfer from Venice station" },
  { label: "Sosta / camping fees — 10 nights (÷ 2)", amount: "£80", note: "Mix of free passes & paid sosta avg €16/night" },
  { label: "Fuel (shared ÷ 2)", amount: "£55", note: "Diesel, approx 600km driving around passes" },
  { label: "Food & drink (self-catering in van)", amount: "£170", note: "Supermarkets + occasional rifugio lunch" },
  { label: "Cable cars & activities", amount: "£80", note: "Seceda, Sass Pordoi, rowboat hire, etc." },
];

const skiAddOn = [
  { label: "Ski / snowboard equipment hire", amount: "£130", note: "4 days, full set (boots, board/skis, helmet)" },
  { label: "Dolomiti Superski pass — 4 days", amount: "£200", note: "1,200km of pistes across 12 resorts" },
];

const bikingAddOn = [
  { label: "Mountain bike hire", amount: "£120", note: "4 days — full-suspension MTB from resort shops" },
  { label: "Lift passes (bike uplift)", amount: "£60", note: "Cable car bike transport, 4 days" },
];

// ── Dolomites + Zürich route map ──────────────────────────────────────────────

const routeMarkers: MapMarker[] = [
  { name: "Venice — Van pick-up & drop-off", description: "Roadsurfer station 78, Venice Mestre. Start and end of the campervan journey.", lat: 45.4408, lng: 12.3155, color: "#f59e0b" },
  { name: "Cortina d'Ampezzo", description: "Glamorous ski resort — overnight sosta base", lat: 46.5404, lng: 12.1357, color: "#f59e0b" },
  { name: "Tre Cime / Misurina", description: "Sosta 3km from the Tre Cime trailhead", lat: 46.5842, lng: 12.2543, color: "#22c55e" },
  { name: "Lake Braies / Dobbiaco", description: "Lakeside sosta — one of the most scenic overnight spots", lat: 46.6941, lng: 12.0848, color: "#22c55e" },
  { name: "Val Gardena (Ortisei)", description: "Valley sosta — bus connections to all ski lifts", lat: 46.5754, lng: 11.6725, color: "#22c55e" },
  { name: "Passo Pordoi / Arabba", description: "Resort sosta — Sella Ronda ski circuit on doorstep", lat: 46.4885, lng: 11.8367, color: "#22c55e" },
  { name: "Milan — Train connection", description: "Change here for the direct 3.5hr EuroCity train to Zürich", lat: 45.4642, lng: 9.1900, color: "#94a3b8" },
  { name: "Zürich — 2 nights", description: "Old Town, Lake Zürich, Rhine Falls. Fly home from ZRH → Glasgow.", lat: 47.3769, lng: 8.5417, color: "#38bdf8" },
];

const vanRoute: MapRoute = {
  path: [
    [45.4408, 12.3155],
    [46.1408, 12.2378],
    [46.5404, 12.1357],
    [46.6178, 12.2971],
    [46.6941, 12.0848],
    [46.7358, 12.1897],
    [46.7958, 11.9347],
    [46.5754, 11.6725],
    [46.5413, 11.6328],
    [46.4983, 11.3548],
    [46.4100, 11.5739],
    [46.4885, 11.8367],
    [46.5404, 12.1357],
    [46.1408, 12.2378],
    [45.4408, 12.3155],
  ],
  color: "#f59e0b",
  weight: 3,
  dashArray: "8, 5",
};

const trainRoute: MapRoute = {
  path: [
    [45.4408, 12.3155],
    [45.4654, 10.9306],
    [45.4642, 9.1900],
    [46.0037, 8.9511],
    [47.3769, 8.5417],
  ],
  color: "#38bdf8",
  weight: 3,
  dashArray: "4, 4",
};

const zurichPricing = [
  { label: "Flight Edinburgh → Venice one-way", amount: "£55", note: "easyJet — book separately instead of a return" },
  { label: "Roadsurfer van 10 days (÷ 2 people)", amount: "£550", note: "Same as base trip" },
  { label: "Sosta / camping 10 nights (÷ 2)", amount: "£80", note: "Same as base trip" },
  { label: "Fuel — Dolomites driving (÷ 2)", amount: "£55", note: "Same as base trip" },
  { label: "Food & drink — 10 nights van trip", amount: "£170", note: "Self-catering keeps costs low" },
  { label: "Cable cars & activities", amount: "£80", note: "Same as base trip" },
  { label: "Venice → Zürich train", amount: "£65", note: "Via Verona & Milan — 2nd class advance fare, ~6hrs total" },
  { label: "Zürich accommodation — 2 nights (pp)", amount: "£160", note: "Mid-range hotel sharing a double (~£80pp/night)" },
  { label: "Food & drink — 2 nights Zürich", amount: "£80", note: "Switzerland is pricey — budget £40/day. Mix Migros supermarket lunches with one proper dinner each night." },
  { label: "Activities in Zürich", amount: "£40", note: "Kunsthaus £18, Rhine Falls day train return £22" },
  { label: "Local transport — Zürich trams", amount: "£15", note: "24hr pass ~£8/day, covers all trams and buses" },
  { label: "Flight Zürich (ZRH) → Glasgow (GLA)", amount: "£85", note: "easyJet direct or via London — book separately" },
];

export default function DolomitesPage() {
  const baseTotal = 90 + 550 + 80 + 55 + 170 + 80; // £1,025
  const skiTotal = baseTotal + 130 + 200; // £1,355
  const bikeTotal = baseTotal + 120 + 60; // £1,205

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
            <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30">
              <Tent className="w-3 h-3" /> Campervan Trip
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-700/60 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-600/50">
              UNESCO World Heritage
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            The <span className="text-amber-400">Dolomites</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Jagged peaks, silky powder and mirror-still alpine lakes — explored from the freedom of your own campervan, waking up to a new mountain view every morning.
          </p>
        </div>

        {/* Map */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            Explore the Map
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="inline-flex items-center gap-2 text-xs text-slate-300">
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> Attraction
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-slate-300">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> Campervan Sosta / Parking
            </span>
          </div>
          <div className="h-[520px] rounded-2xl overflow-hidden border border-slate-700/50">
            <MapWrapper
              center={[46.55, 11.95]}
              zoom={10}
              markers={markers}
              accentColor="#f59e0b"
            />
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
                note: "Pick up van from Venice Mestre station",
              },
              {
                from: "Glasgow (GLA)",
                to: "Venice (VCE)",
                airline: "Ryanair",
                price: "~£50–110 return",
                duration: "2h 30min direct",
                note: "Pick up van from Venice Mestre station",
              },
              {
                from: "Edinburgh (EDI)",
                to: "Munich (MUC)",
                airline: "British Airways",
                price: "~£100–160 return",
                duration: "2h 10min + 3hr drive",
                note: "Alternative if van picked up from Munich",
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
                <p className="text-xs text-slate-400 mt-2">{f.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadsurfer Van Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-400" />
            Your Home on Wheels — Roadsurfer
          </h2>

          {/* Roadsurfer booking card */}
          <div className="bg-gradient-to-br from-amber-500/10 to-slate-800/60 rounded-2xl border border-amber-500/30 p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Roadsurfer — Venice Station</h3>
                <p className="text-slate-400 text-sm">Pick up &amp; drop off at Venice Mestre · Station 78</p>
              </div>
              <a
                href="https://booking.roadsurfer.com/en/rent/pick/32?station=78&start-date=2027-08-30&end-date=2027-09-09&currency=GBP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-3 rounded-xl transition-colors shrink-0"
              >
                Book on Roadsurfer <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Beach Hopper", beds: "2 people", price: "~£85–110/night", desc: "Compact VW T6 pop-top, built-in kitchen & beds" },
                { label: "Surfer", beds: "2–3 people", price: "~£100–130/night", desc: "Larger Mercedes Sprinter, standing height, more storage" },
                { label: "Family Camper", beds: "4 people", price: "~£130–160/night", desc: "Full-size van with sleeping for 4, ideal for groups" },
              ].map((v) => (
                <div key={v.label} className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/40">
                  <p className="font-bold text-amber-400 text-sm">{v.label}</p>
                  <p className="text-white text-xs mt-1 font-semibold">{v.price}</p>
                  <p className="text-slate-400 text-xs mt-1">{v.desc}</p>
                  <p className="text-slate-500 text-xs mt-1">Sleeps: {v.beds}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">What&apos;s Included</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Bedding & pillows",
                  "Portable kitchen & hob",
                  "Fridge / coolbox",
                  "Camping chairs & table",
                  "Awning",
                  "Solar panel (Surfer+)",
                  "Unlimited mileage",
                  "24/7 breakdown cover",
                  "Full insurance options",
                  "Ski rack (available)",
                  "Bike rack (available)",
                ].map((item) => (
                  <span key={item} className="bg-amber-500/10 text-amber-300 text-xs px-2.5 py-1 rounded-full border border-amber-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sosta spots */}
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Tent className="w-5 h-5 text-green-400" />
            Campervan Parking &amp; Sosta Spots
          </h3>
          <p className="text-slate-400 text-sm mb-4 max-w-2xl">
            <strong className="text-white">Sosta camper</strong> = Italy&apos;s designated overnight campervan areas, typically €10–20/night with basic facilities. Green markers on the map above show all spots.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sostaSpots.map((s) => (
              <div key={s.name} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-white text-sm leading-tight">{s.name}</p>
                  <span className="shrink-0 bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full border border-green-500/30">
                    {s.price}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mb-1">{s.facilities}</p>
                <p className="text-slate-300 text-xs italic">{s.note}</p>
                <p className="text-slate-600 text-[10px] font-mono mt-2">{s.coords}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-slate-800/30 rounded-xl border border-slate-600/30 p-4">
            <p className="text-xs text-slate-400">
              <strong className="text-amber-400">Tips:</strong> Book Misurina and Dobbiaco soste in advance for July/August. Mountain pass parking (Falzarego, Pordoi) is free and stunning but has no facilities — carry water. Most Italian campsites also accept vans. The Dolomiti Bus summer shuttle network accepts bikes and reduces the need to drive every day.
            </p>
          </div>

          {/* Shower situation */}
          <h3 className="text-lg font-bold text-white mt-8 mb-4 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-blue-400" />
            Shower Situation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Your Roadsurfer Van",
                icon: "🚐",
                color: "border-amber-500/30 bg-amber-500/5",
                badge: "text-amber-400",
                points: [
                  "Beach Hopper: gravity-fed external camp shower bag — cold water rinse, outdoor use only",
                  "Surfer van: side-mounted outdoor shower tap connected to the fresh water tank — cold unless tank has been in the sun",
                  "No onboard hot shower in any standard Roadsurfer model",
                ],
              },
              {
                title: "Paid Sosta Spots (€15–20/night)",
                icon: "🏕️",
                color: "border-green-500/30 bg-green-500/5",
                badge: "text-green-400",
                points: [
                  "Premium soste usually have a shower block — token-operated hot water",
                  "Tokens typically cost €0.50–1 for 5–6 minutes of hot water — bring coins",
                  "Budget soste (€10–12/night) often have toilets only, no showers",
                ],
              },
              {
                title: "Official Campsites (Campeggio)",
                icon: "✅",
                color: "border-blue-500/30 bg-blue-500/5",
                badge: "text-blue-400",
                points: [
                  "Always have proper hot shower blocks — included in pitch fee (€20–35/night)",
                  "Generally clean, well-maintained facilities",
                  "Worth booking 1–2 campsite nights mid-trip for a proper refresh",
                  "Examples: Camping Olympia (Cortina), Camping Miravalle (Val Gardena)",
                ],
              },
              {
                title: "Free & Mountain Pass Spots",
                icon: "🏔️",
                color: "border-slate-600/30 bg-slate-700/20",
                badge: "text-slate-400",
                points: [
                  "No facilities at all — toilets, showers and water points are absent",
                  "Use the van's camp shower bag for a quick outdoor rinse",
                  "Plan around this: don't string multiple free nights together without a shower plan",
                ],
              },
              {
                title: "Public Pools & Sports Centres",
                icon: "🏊",
                color: "border-sky-500/30 bg-sky-500/5",
                badge: "text-sky-400",
                points: [
                  "Piscina comunale (public swimming pool): entry €3–5, showers included",
                  "Sports centres / palasport: day pass €8–12, full changing rooms and hot showers",
                  "Most Dolomite resort towns have at least one — ask at tourist info",
                ],
              },
              {
                title: "Rifugio Mountain Huts",
                icon: "⛺",
                color: "border-orange-500/30 bg-orange-500/5",
                badge: "text-orange-400",
                points: [
                  "Some high-altitude rifugi allow hikers to use their showers for €2–3",
                  "Not guaranteed — ask at the hut",
                  "Useful after a long hike if you're camping wild nearby",
                ],
              },
            ].map((s) => (
              <div key={s.title} className={`rounded-xl border ${s.color} p-4`}>
                <p className={`font-bold text-sm mb-2 ${s.badge}`}>{s.icon} {s.title}</p>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-900/20 rounded-xl border border-blue-500/20 p-4">
            <p className="text-xs text-blue-300">
              <strong>Strategy:</strong> Alternate between free mountain spots (no shower) and paid soste or campsite nights. A rough pattern that works well: 2 nights free pass → 1 night paid sosta (token shower) → repeat, with a full campsite night every 4–5 days for a proper hot wash.
            </p>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-12 bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-400" />
            Getting Around
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Your Roadsurfer van", detail: "All-in-one", note: "Drive it everywhere — no separate car hire needed" },
              { label: "Cable cars", detail: "€15–25 per ride", note: "Seceda · Col Raiser · Pordoi · Sass Pordoi" },
              { label: "Dolomiti Bus", detail: "Free with ski pass", note: "Summer shuttle network between villages" },
              { label: "Hiking poles (hire)", detail: "~£10–15/day", note: "Useful for via ferratas & steep trails" },
              { label: "Ski rack / bike rack", detail: "From Roadsurfer", note: "Add-on when booking your van — ask at check-out" },
              { label: "Fuel", detail: "Diesel / petrol", note: "Budget ~€90–120 for 10 days of pass driving" },
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
                <h3 className="font-bold text-white text-sm leading-snug">{a.name}</h3>
                <p className="text-slate-300 text-xs leading-relaxed flex-1">{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-amber-400" />
            Estimated Budget — Per Person
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-xl">
            Base cost for 10 nights in the van. Ski and mountain biking are optional — choose your add-on below.
          </p>

          {/* Base pricing */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Car className="w-4 h-4 text-amber-400" /> Base Van Trip (10 nights)
            </h3>
            <PricingTable
              items={basePricing}
              total={`~£${baseTotal.toLocaleString()}pp`}
              duration="10 nights"
              accentColor="amber"
            />
          </div>

          {/* Optional add-ons */}
          <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
            Optional Activity Add-ons
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Ski add-on */}
            <div className="rounded-2xl border border-slate-600/50 overflow-hidden">
              <div className="bg-slate-700/40 px-5 py-4 flex items-center gap-3">
                <Mountain className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="font-bold text-white text-sm">Skiing / Snowboarding</p>
                  <p className="text-slate-400 text-xs">4 days on the Dolomiti Superski circuit</p>
                </div>
                <span className="ml-auto bg-sky-500/20 text-sky-400 text-xs font-bold px-2.5 py-1 rounded-full border border-sky-500/30">
                  +£330pp
                </span>
              </div>
              <div className="bg-slate-800/40 divide-y divide-slate-700/30">
                {skiAddOn.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <span className="text-slate-300 text-sm">{item.label}</span>
                      {item.note && <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>}
                    </div>
                    <span className="text-white font-medium text-sm">{item.amount}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-5 py-4 bg-sky-900/20">
                  <span className="text-white font-bold text-sm">TOTAL WITH SKIING</span>
                  <span className="text-lg font-bold text-sky-400">~£{skiTotal.toLocaleString()}pp</span>
                </div>
              </div>
            </div>

            {/* Biking add-on */}
            <div className="rounded-2xl border border-slate-600/50 overflow-hidden">
              <div className="bg-slate-700/40 px-5 py-4 flex items-center gap-3">
                <Bike className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-bold text-white text-sm">Mountain Biking</p>
                  <p className="text-slate-400 text-xs">4 days of uplift-assisted trail riding</p>
                </div>
                <span className="ml-auto bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30">
                  +£180pp
                </span>
              </div>
              <div className="bg-slate-800/40 divide-y divide-slate-700/30">
                {bikingAddOn.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <span className="text-slate-300 text-sm">{item.label}</span>
                      {item.note && <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>}
                    </div>
                    <span className="text-white font-medium text-sm">{item.amount}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-5 py-4 bg-green-900/20">
                  <span className="text-white font-bold text-sm">TOTAL WITH BIKING</span>
                  <span className="text-lg font-bold text-green-400">~£{bikeTotal.toLocaleString()}pp</span>
                </div>
              </div>
            </div>

          </div>

          {/* Note */}
          <div className="mt-4 bg-slate-800/30 rounded-xl border border-slate-600/30 p-4">
            <p className="text-xs text-slate-400">
              All prices are estimates for 2 people sharing the van. Van pricing is split 50/50. Flights based on low-season easyJet fares from Edinburgh. You can combine both add-ons for a total of <strong className="text-amber-400">~£{(skiTotal + 180).toLocaleString()}pp</strong> — ski in the morning, shred trails in the afternoon.
            </p>
          </div>
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
              <h3 className="text-lg font-bold text-white mb-2">Skiing &amp; Snow</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Peak ski season with reliable snow across the Dolomiti Superski area — 1,200km of groomed pistes linking 12 resorts. Expect vibrant après-ski and cosy mountain huts. Park the van at resort-side soste and ski from the door.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <div className="inline-flex items-center gap-2 bg-slate-700/50 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-600/50 mb-4">
                June – September
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hiking, Biking &amp; Lakes</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Long sunny days, wildflower meadows and passable high-altitude trails. Perfect for the Tre Cime circuit, mountain biking the passes, rowboating on Lake Braies and sleeping under starry skies. Temperatures 15–25°C in the valleys.
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
              { label: "Driving licence", value: "UK licence valid", note: "Italy requires a GB sticker on the van" },
              { label: "Winter driving", value: "Chains may be required", note: "Nov–Apr: winter tyres or snow chains by law on mountain passes" },
              { label: "Van fuel type", value: "Check at booking", note: "Most Roadsurfer vans are diesel — confirm before collecting" },
            ].map((item) => (
              <div key={item.label} className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-bold text-amber-400 text-sm">{item.value}</p>
                <p className="text-slate-400 text-xs mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DOLOMITES + ZÜRICH ─────────────────────────────────────────── */}
        <section className="mb-12 border-t border-slate-700/50 pt-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full border border-sky-500/30">
              🇨🇭 Extension Option
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Dolomites <span className="text-sky-400">+ Zürich</span>
          </h2>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed mb-8">
            Drop the van back in Venice, jump on a train through the Alps, and add 2 nights in Zürich before flying home from ZRH to Glasgow. A neat way to end the trip with a city contrast to all that mountain air.
          </p>

          {/* Route strip */}
          <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-5 mb-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Route</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                { label: "✈ Fly in", sub: "Edinburgh → Venice" },
                { label: "🚐 Van tour", sub: "10 nights, Dolomites loop" },
                { label: "🔑 Drop van", sub: "Venice Mestre" },
                { label: "🚂 Train", sub: "Venice → Milan → Zürich, ~6hrs" },
                { label: "🏙️ Zürich", sub: "2 nights" },
                { label: "✈ Fly home", sub: "ZRH → Glasgow" },
              ].map((stop, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-slate-700/50 rounded-lg px-3 py-2 text-center border border-slate-600/40">
                    <p className="text-white font-semibold text-xs">{stop.label}</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">{stop.sub}</p>
                  </div>
                  {i < arr.length - 1 && <span className="text-slate-600 text-lg">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Route map */}
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-400" /> Route Map
          </h3>
          <div className="flex flex-wrap gap-4 mb-3 text-xs text-slate-300">
            <span className="flex items-center gap-2"><span className="inline-block w-6 h-0.5 bg-amber-400 border-t-2 border-dashed border-amber-400" style={{borderTopStyle:'dashed'}} /> Van loop (Dolomites)</span>
            <span className="flex items-center gap-2"><span className="inline-block w-6 h-0.5 bg-sky-400 border-t-2 border-dashed border-sky-400" style={{borderTopStyle:'dashed'}} /> Train to Zürich</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> Van stop / attraction</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> Sosta spot</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sky-400 inline-block" /> Zürich</span>
          </div>
          <div className="h-[480px] rounded-2xl overflow-hidden border border-slate-700/50 mb-8">
            <MapWrapper
              center={[46.4, 10.5]}
              zoom={7}
              markers={routeMarkers}
              accentColor="#f59e0b"
              routes={[vanRoute, trainRoute]}
            />
          </div>

          {/* Venice → Zürich transport */}
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Train className="w-5 h-5 text-sky-400" /> Venice → Zürich by Train
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                label: "Route",
                value: "Venice Santa Lucia → Verona → Milan Centrale → Zürich HB",
                note: "Total journey ~6 hours. EuroCity or Railjet service. Stunning Alpine scenery through the Gotthard route.",
              },
              {
                label: "Price",
                value: "~£50–80 2nd class",
                note: "Book via Trainline or DB (Deutsche Bahn) for best advance fares. Booked 2–3 months ahead can be as low as £45.",
              },
              {
                label: "Frequency",
                value: "Several daily",
                note: "Trains run throughout the day. Morning departures arrive in Zürich in the early afternoon — time for a city wander.",
              },
              {
                label: "Tip",
                value: "Book in advance",
                note: "EuroCity trains can sell out in summer. Book tickets before you travel — no same-day cheap fares on international routes.",
              },
            ].map((t) => (
              <div key={t.label} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">{t.label}</p>
                <p className="text-sky-400 font-bold text-sm mb-1">{t.value}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>

          {/* Zürich: what to do */}
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-400" /> 2 Nights in Zürich
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { name: "Zürich Old Town (Altstadt)", desc: "Wander the medieval lanes on both sides of the Limmat river, Grossmünster and Fraumünster cathedrals — free to explore.", tag: "Free" },
              { name: "Kunsthaus Zürich", desc: "One of Switzerland's best art museums — Monet, Picasso, Giacometti and a world-class Impressionist collection.", tag: "~£18 entry" },
              { name: "Lake Zürich Promenade", desc: "Walk or cycle the lake shore. In summer, open-air lidos let you swim right in the city. Stunning on a clear day with Alpine views.", tag: "Free" },
              { name: "Rhine Falls Day Trip", desc: "Europe's largest waterfall by volume, 1hr by train to Schaffhausen. Boat trips to the base rock — genuinely dramatic.", tag: "~£22 return train" },
              { name: "Swiss National Museum", desc: "Free entry. Switzerland's history from prehistoric times to the modern day — beautifully presented in a castle-like building.", tag: "Free" },
              { name: "Bahnhofstrasse & Bürkliplatz", desc: "The world's most exclusive shopping street (window shopping is free) leads to a Saturday flea market and the lake.", tag: "Free" },
            ].map((a) => (
              <div key={a.name} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-bold text-white text-sm leading-snug">{a.name}</p>
                  <span className="shrink-0 text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full border border-sky-500/20 whitespace-nowrap">{a.tag}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Zürich accommodation */}
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-sky-400" /> Where to Stay in Zürich
          </h3>
          <p className="text-slate-400 text-sm mb-4">Switzerland is expensive — even budget hotels cost more than mid-range elsewhere. Prices below are per person for 2 nights sharing a double room.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                name: "City Backpacker Hotel Biber",
                type: "Budget",
                price: "~£105–130pp / 2 nights",
                note: "Private rooms in the Altstadt (old town). Walking distance to everything. Best-located budget option in the city.",
                color: "border-slate-600/50",
              },
              {
                name: "Hotel Otter",
                type: "Mid-range",
                price: "~£150–185pp / 2 nights",
                note: "Charming traditional hotel right in the Altstadt. Excellent location, well-reviewed, often booked up — reserve early.",
                color: "border-sky-500/30",
              },
              {
                name: "25hours Hotel Zürich West",
                type: "Comfort",
                price: "~£190–240pp / 2 nights",
                note: "Trendy design hotel in the Zürich West arts district. Great bar, easy tram ride to the centre. A step up in atmosphere.",
                color: "border-slate-600/50",
              },
            ].map((h) => (
              <div key={h.name} className={`bg-slate-800/50 rounded-xl border ${h.color} p-5`}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-bold text-white text-sm leading-snug">{h.name}</p>
                  <span className="shrink-0 text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-full border border-sky-500/20">{h.type}</span>
                </div>
                <p className="text-sky-400 font-bold text-sm mb-2">{h.price}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{h.note}</p>
              </div>
            ))}
          </div>

          {/* Full trip pricing */}
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <PoundSterling className="w-5 h-5 text-sky-400" /> Full Trip Cost — Dolomites + Zürich
          </h3>
          <p className="text-slate-400 text-sm mb-4 max-w-xl">
            Complete breakdown per person for the whole trip: 10 nights in the van, 2 nights in Zürich, flights both ends. Ski and biking add-ons still apply on top.
          </p>
          <PricingTable
            items={zurichPricing}
            total="~£1,435pp"
            duration="12 nights total"
            accentColor="sky"
          />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Base trip only (no add-ons)", total: "~£1,435pp" },
              { label: "+ Skiing (4 days)", total: "~£1,765pp" },
              { label: "+ Mountain biking (4 days)", total: "~£1,615pp" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-800/40 rounded-xl border border-sky-500/20 p-4 text-center">
                <p className="text-slate-400 text-xs mb-1">{s.label}</p>
                <p className="text-sky-400 font-bold text-lg">{s.total}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-slate-800/30 rounded-xl border border-slate-600/30 p-4">
            <p className="text-xs text-slate-400">
              Flight costs assume one-way EDI → Venice (~£55) and one-way ZRH → GLA (~£85) booked separately rather than a return to Venice. Zürich accommodation based on mid-range Hotel Otter style (~£80pp/night sharing). Train Venice → Zürich booked in advance (2nd class). All prices approximate — check current fares when booking.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
