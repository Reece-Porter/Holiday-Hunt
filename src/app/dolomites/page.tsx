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
} from "lucide-react";
import MapWrapper from "@/components/MapWrapper";
import PricingTable from "@/components/PricingTable";
import type { MapMarker } from "@/components/DestinationMap";

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

      </div>
    </div>
  );
}
