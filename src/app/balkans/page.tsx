import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  PoundSterling,
  Plane,
  MapPin,
  Sun,
  Bus,
  AlertTriangle,
  Star,
  Info,
  Utensils,
  Hotel,
  ArrowRight,
} from "lucide-react";
import PricingTable from "@/components/PricingTable";
import MapWrapper from "@/components/MapWrapper";
import type { MapMarker } from "@/components/DestinationMap";

// Violet = city stays, teal = notable nearby attraction
const markers: MapMarker[] = [
  { name: "Dubrovnik — Croatia base", description: "3 nights · Fly in here · UNESCO walled city", lat: 42.6411, lng: 18.1089 },
  { name: "Sarajevo — Bosnia base", description: "3 nights · 5hr bus from Dubrovnik · Where WWI began", lat: 43.859, lng: 18.4316 },
  { name: "Kotor — Montenegro base", description: "2 nights · 5hr bus from Sarajevo · Medieval walled city by the sea", lat: 42.4247, lng: 18.7712 },
  { name: "Tirana — Albania base", description: "3 nights · 6hr bus via Shkodër · Colourful communist-turned-capital", lat: 41.3319, lng: 19.8279 },
  { name: "Ohrid — North Macedonia base", description: "3 nights · 3.5hr bus from Tirana · Europe's oldest lake", lat: 41.1172, lng: 20.8016 },
  { name: "Skopje Airport (SKP)", description: "3hr bus from Ohrid · Fly home from here", lat: 41.9614, lng: 21.6214, color: "#94a3b8" },
];

const countries = [
  {
    country: "Croatia",
    flag: "🇭🇷",
    city: "Dubrovnik",
    nights: 3,
    accentClass: "border-violet-500/40 bg-violet-500/5",
    badgeClass: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    transit: null,
    flightIn: {
      from: "Edinburgh (EDI)",
      airline: "easyJet",
      price: "~£50–90 one way",
      duration: "~3 hours direct",
    },
    accommodation: [
      {
        name: "Fresh Sheets Hostel",
        type: "Budget",
        price: "£35–55 / night",
        note: "Private double rooms inside the Old Town walls. The best-located budget option in Dubrovnik.",
      },
      {
        name: "Hostel Angelina Old Town",
        type: "Mid",
        price: "£55–80 / night",
        note: "Central Old Town, rooftop terrace with sea views, very popular — book early.",
      },
      {
        name: "Villa Orchidea",
        type: "Comfort",
        price: "£90–130 / night",
        note: "Guesthouse just outside the walls with beautiful sea views and a garden terrace.",
      },
    ],
    highlights: [
      "Walk the city walls at sunrise before the cruise ships arrive (£27 entry)",
      "Spot Game of Thrones filming locations around King's Landing",
      "Cable car up Mount Srđ for panoramic views of the Adriatic",
      "Ferry to Lokrum Island — peacocks, ruins and a salt lake",
    ],
    tip: "Dubrovnik is expensive by Balkan standards. Self-cater breakfasts from the local Konzum supermarket to keep costs down.",
  },
  {
    country: "Bosnia & Herzegovina",
    flag: "🇧🇦",
    city: "Sarajevo",
    nights: 3,
    accentClass: "border-violet-500/40 bg-violet-500/5",
    badgeClass: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    transit: {
      from: "Dubrovnik",
      how: "Direct bus",
      duration: "~5 hours",
      price: "~£13–22",
      frequency: "2–3 daily",
      operator: "Globtour / Autoprevoz",
      notes: "The bus route passes through Mostar — you get a glimpse of the famous bridge from the window. If you want a few hours in Mostar, take an earlier bus and break your journey.",
    },
    accommodation: [
      {
        name: "Franz Ferdinand Hostel",
        type: "Budget",
        price: "£15–25 / night",
        note: "Private rooms available. Right in the Baščaršija quarter. The staff know every corner of the city.",
      },
      {
        name: "Hotel Michele",
        type: "Mid",
        price: "£50–75 / night",
        note: "Boutique hotel steps from the bazaar. One of the best-reviewed mid-range options in the city.",
      },
      {
        name: "Hotel Old Town Sarajevo",
        type: "Comfort",
        price: "£60–90 / night",
        note: "Stone-walled building in an atmospheric Old Town setting, excellent breakfast included.",
      },
    ],
    highlights: [
      "Wander the Baščaršija Ottoman bazaar — try ćevapi at Ćevabdžinica Željo",
      "Visit the Latin Bridge where Archduke Franz Ferdinand was assassinated",
      "Sarajevo War Tunnel Museum — humbling and essential",
      "Catch sunset at the Yellow Fortress above the city",
    ],
    tip: "Sarajevo is one of the cheapest cities in Europe. You can eat a full restaurant meal for £4–6. Very safe, very friendly.",
  },
  {
    country: "Montenegro",
    flag: "🇲🇪",
    city: "Kotor",
    nights: 2,
    accentClass: "border-violet-500/40 bg-violet-500/5",
    badgeClass: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    transit: {
      from: "Sarajevo",
      how: "Direct bus",
      duration: "~5 hours",
      price: "~£16–24",
      frequency: "1–2 daily",
      operator: "Various Montenegrin operators",
      notes: "Dramatic mountain scenery via Trebinje and Nikšić. Book at least a day ahead in July/August as this route fills up fast.",
    },
    accommodation: [
      {
        name: "Old Town Hostel Kotor",
        type: "Budget",
        price: "£30–55 / night",
        note: "Private double rooms inside the medieval walls. Can't beat the location — you step out the door into the Old Town.",
      },
      {
        name: "Hotel Marija",
        type: "Mid",
        price: "£70–100 / night",
        note: "Family-run hotel inside the Old Town, warm welcome, great breakfast.",
      },
      {
        name: "Hippocampus Hotel",
        type: "Comfort",
        price: "£90–130 / night",
        note: "Boutique hotel inside the walls, beautifully restored stone building, top-rated breakfast.",
      },
    ],
    highlights: [
      "Climb 1,355 steps to San Giovanni Fortress for stunning bay views (~£8)",
      "Wander the entirely car-free medieval Old Town",
      "Kayak around the Bay of Kotor at golden hour",
      "Day trip to Perast — a tiny baroque village with two island churches",
    ],
    tip: "Kotor's Old Town is tiny — you can walk the whole thing in 20 minutes. Stay inside the walls for the full experience.",
  },
  {
    country: "Albania",
    flag: "🇦🇱",
    city: "Tirana",
    nights: 3,
    accentClass: "border-violet-500/40 bg-violet-500/5",
    badgeClass: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    transit: {
      from: "Kotor",
      how: "Bus via Shkodër",
      duration: "~6 hours",
      price: "~£17–26",
      frequency: "1–2 daily",
      operator: "Various — check at Kotor bus station",
      notes: "Take a bus to Shkodër (1.5hr across the border), then a connecting bus to Tirana (2.5hr). Some direct Kotor–Tirana services run seasonally — worth checking at the station.",
    },
    accommodation: [
      {
        name: "Trip'N'Hostel Tirana",
        type: "Budget",
        price: "£12–22 / night",
        note: "Private rooms, brilliant staff who organise city tours and know all the best spots.",
      },
      {
        name: "Hotel Kalemi",
        type: "Mid",
        price: "£28–50 / night",
        note: "Central, clean and comfortable. Great value by any European standard.",
      },
      {
        name: "Milingona Hotel",
        type: "Comfort",
        price: "£50–75 / night",
        note: "Stylish boutique in the heart of the Blloku district. Rooftop bar with city views.",
      },
    ],
    highlights: [
      "Explore Blloku — once sealed off for Communist Party elites, now the hippest district in the Balkans",
      "Bunk'Art underground bunker — Cold War museum turned immersive gallery",
      "Try byrek and tavë kosi (Albania's national dish) at a local qebaptore",
      "Day trip to UNESCO-listed Berat — the 'City of 1000 Windows', 1.5hr by bus (~£4)",
    ],
    tip: "Albania uses the Lek (ALL) but EUR is widely accepted. Tirana is incredibly cheap — you can eat and drink well for £15–20/day total.",
  },
  {
    country: "North Macedonia",
    flag: "🇲🇰",
    city: "Ohrid",
    nights: 3,
    accentClass: "border-violet-500/40 bg-violet-500/5",
    badgeClass: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    transit: {
      from: "Tirana",
      how: "Direct bus",
      duration: "~3.5 hours",
      price: "~£13–18",
      frequency: "2–3 daily",
      operator: "Various Macedonian & Albanian operators",
      notes: "Scenic mountain route, easy border crossing. Buses depart from Tirana's main bus station.",
    },
    accommodation: [
      {
        name: "Sunny Lake Hostel",
        type: "Budget",
        price: "£18–30 / night",
        note: "Private rooms with lake views. Social common areas, great place to meet other travellers.",
      },
      {
        name: "Tino's Guesthouse",
        type: "Mid",
        price: "£28–45 / night",
        note: "Family-run, lakeside location, outstanding home-cooked breakfast included. Book ahead.",
      },
      {
        name: "Hotel Millenium",
        type: "Comfort",
        price: "£50–70 / night",
        note: "Comfortable lake-view rooms, central Old Town position, good restaurant.",
      },
    ],
    highlights: [
      "Church of St John at Kaneo — cliffside Byzantine church above the lake, one of the Balkans' most iconic views",
      "Swim in Lake Ohrid — one of Europe's deepest and oldest lakes, startlingly clear",
      "Walk the Ohrid Old Bazaar and climb Samuel's Fortress",
      "Day trip to Skopje is not needed — but you pass through on the bus to the airport",
    ],
    tip: "To fly home: take the 3-hour bus from Ohrid to Skopje (£9–13) and fly out of Skopje Airport (SKP). Book the bus the day before.",
  },
];

const pricingItems = [
  { label: "Flights in — Edinburgh → Dubrovnik (one way)", amount: "£65", note: "easyJet direct, avg" },
  { label: "Flights out — Skopje → Edinburgh (one way)", amount: "£85", note: "Wizz Air via London Luton or direct connections" },
  { label: "Intercity buses (4 cross-border legs)", amount: "£70", note: "Dubrovnik→Sarajevo, Sarajevo→Kotor, Kotor→Tirana, Tirana→Ohrid" },
  { label: "Ohrid → Skopje bus (for flight home)", amount: "£11", note: "3hr journey, several daily" },
  { label: "Local transport — Bolt/taxi within cities", amount: "£40", note: "Bolt works in all 5 cities; fares are very cheap" },
  { label: "Accommodation — 14 nights (pp, sharing a double)", amount: "£315", note: "Avg £22.50pp/night across mix of budget & mid-range" },
  { label: "Food", amount: "£300", note: "Dubrovnik ~£22/day · Kotor ~£16/day · Sarajevo, Tirana & Ohrid ~£12–13/day. Meals from £3–8 outside Croatia." },
  { label: "Drinks, coffee & bars", amount: "£70", note: "~£5/day — local beer from £1.50, coffee from £1. Albania & Bosnia exceptionally cheap." },
  { label: "Activities", amount: "£250", note: "Dubrovnik walls £27, cable car £15, Lokrum ferry £10, Sarajevo tunnel museum £8, Kotor fortress £8, kayak hire £20, Bunk'Art £5, Berat day trip £11, Ohrid boat & church £12, misc £134" },
];

export default function BalkansPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Hero */}
      <div className="relative overflow-hidden pt-10 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        <div className="max-w-5xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-violet-400 text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All Destinations
          </Link>

          <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-5xl">🏛️</span>
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                  Balkans Tour
                </h1>
                <p className="text-violet-400 font-medium mt-1">
                  Croatia · Bosnia · Montenegro · Albania · North Macedonia
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-violet-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-violet-500/30 self-start mt-1">
              <Star className="h-4 w-4 fill-white" />
              BUDGET PICK
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mt-4 leading-relaxed">
            Five countries, one city each, 14 nights — all by bus. Medieval walled cities, Ottoman bazaars, sapphire lakes and riviera coastline. One of the most rewarding trips in Europe, and one of the cheapest.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {["History", "Budget", "Bus Trip", "Beaches", "Culture", "UNESCO"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-10">

        {/* Quick facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Plane className="h-5 w-5" />, label: "Flights from", value: "£60 return" },
            { icon: <Clock className="h-5 w-5" />, label: "Duration", value: "14 nights" },
            { icon: <PoundSterling className="h-5 w-5" />, label: "From per person", value: "~£1,206" },
            { icon: <Sun className="h-5 w-5" />, label: "Best time", value: "May–Jun / Sep–Oct" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-violet-400 mb-2">{item.icon}</div>
              <p className="text-slate-400 text-xs mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Route overview strip */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-violet-400" /> Route Overview — 14 Nights
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {[
              { label: "✈ Fly in", sub: "Edinburgh → Dubrovnik" },
              { label: "🇭🇷 Dubrovnik", sub: "3 nights" },
              { label: "🚌 Bus 5hr", sub: "~£17" },
              { label: "🇧🇦 Sarajevo", sub: "3 nights" },
              { label: "🚌 Bus 5hr", sub: "~£20" },
              { label: "🇲🇪 Kotor", sub: "2 nights" },
              { label: "🚌 Bus 6hr", sub: "~£21" },
              { label: "🇦🇱 Tirana", sub: "3 nights" },
              { label: "🚌 Bus 3.5hr", sub: "~£15" },
              { label: "🇲🇰 Ohrid", sub: "3 nights" },
              { label: "🚌 Bus 3hr", sub: "~£11" },
              { label: "✈ Fly home", sub: "Skopje → Edinburgh" },
            ].map((stop, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-slate-700/50 rounded-lg px-3 py-2 text-center border border-slate-600/40">
                  <p className="text-white font-semibold text-xs">{stop.label}</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">{stop.sub}</p>
                </div>
                {i < 11 && <ArrowRight className="h-3 w-3 text-violet-500 shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-violet-400" /> Interactive Map
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-violet-500/20">
            <MapWrapper center={[42.5, 19.5]} zoom={6} markers={markers} accentColor="#8b5cf6" />
          </div>
          <p className="text-slate-500 text-xs mt-2">Violet pins = city bases. Grey pin = Skopje airport (fly home).</p>
        </div>

        {/* Flights */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Plane className="h-5 w-5 text-violet-400" /> Flights from Scotland
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">Edinburgh (EDI) → Dubrovnik (DBV)</p>
              <p className="text-slate-300">easyJet direct · <strong className="text-white">~£50–90 one way</strong> · ~3 hours</p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">Glasgow (GLA) → Dubrovnik (DBV)</p>
              <p className="text-slate-300">Ryanair via Dublin · <strong className="text-white">~£60–110 one way</strong></p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">Skopje (SKP) → Edinburgh (EDI)</p>
              <p className="text-slate-300">Wizz Air to Luton, connect · <strong className="text-white">~£60–100 one way</strong>. Or Ryanair to Glasgow.</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <p className="text-amber-400 font-semibold mb-1.5">Book as two one-ways</p>
              <p className="text-slate-300">Fly in Edinburgh → Dubrovnik. Fly out Skopje → Edinburgh. Book separately — often cheaper than a return and avoids backtracking completely.</p>
            </div>
          </div>
        </div>

        {/* Country by country */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Bus className="h-5 w-5 text-violet-400" /> Country by Country
          </h2>
          <p className="text-slate-400 text-sm mb-6">One city per country — where to stay, how to get there, and what to do.</p>

          <div className="space-y-6">
            {countries.map((c, idx) => (
              <div key={c.country} className={`rounded-2xl border ${c.accentClass} overflow-hidden`}>

                {/* Country header */}
                <div className="bg-slate-800/60 px-6 py-4 flex flex-wrap items-center gap-3 border-b border-slate-700/50">
                  <span className="text-3xl">{c.flag}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{c.country}</h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${c.badgeClass}`}>
                        {c.nights} nights
                      </span>
                    </div>
                    <p className="text-violet-300 font-semibold text-sm mt-0.5">📍 {c.city}</p>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Getting there */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      {idx === 0 ? <Plane className="h-3.5 w-3.5" /> : <Bus className="h-3.5 w-3.5" />}
                      {idx === 0 ? "Getting There" : "Getting There from " + countries[idx - 1].city}
                    </p>
                    {idx === 0 && c.flightIn ? (
                      <div className="bg-slate-700/30 rounded-xl p-4 text-sm">
                        <p className="text-white font-semibold">{c.flightIn.from} → Dubrovnik</p>
                        <p className="text-violet-400 font-bold mt-1">{c.flightIn.price}</p>
                        <p className="text-slate-400 text-xs mt-1">{c.flightIn.airline} · {c.flightIn.duration}</p>
                      </div>
                    ) : c.transit ? (
                      <div className="bg-slate-700/30 rounded-xl p-4 text-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <Bus className="h-4 w-4 text-violet-400 shrink-0" />
                          <span className="text-white font-semibold">{c.transit.how}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-slate-500 text-xs">Duration</p>
                            <p className="text-white text-xs font-medium">{c.transit.duration}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs">Price</p>
                            <p className="text-violet-400 font-bold text-xs">{c.transit.price}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs">Frequency</p>
                            <p className="text-white text-xs font-medium">{c.transit.frequency}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 text-xs">Operator</p>
                            <p className="text-white text-xs font-medium">{c.transit.operator}</p>
                          </div>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed border-t border-slate-600/30 pt-2">{c.transit.notes}</p>
                      </div>
                    ) : null}
                  </div>

                  {/* Accommodation */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      <Hotel className="h-3.5 w-3.5" /> Where to Stay
                    </p>
                    <div className="space-y-2.5">
                      {c.accommodation.map((a) => (
                        <div key={a.name} className="bg-slate-700/30 rounded-xl p-3">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p className="text-white font-semibold text-xs leading-snug">{a.name}</p>
                            <span className="shrink-0 text-[10px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded border border-violet-500/20">
                              {a.type}
                            </span>
                          </div>
                          <p className="text-violet-400 font-bold text-xs">{a.price}</p>
                          <p className="text-slate-400 text-[11px] mt-1 leading-snug">{a.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5" /> What to Do
                    </p>
                    <ul className="space-y-2">
                      {c.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    {c.tip && (
                      <div className="mt-3 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2.5">
                        <p className="text-amber-300 text-[11px] leading-snug">💡 {c.tip}</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <PoundSterling className="h-5 w-5 text-violet-400" /> Cost Breakdown
          </h2>
          <PricingTable items={pricingItems} total="~£1,206pp" duration="14 nights" accentColor="violet" />
          <p className="text-xs text-slate-500 mt-3">
            Per person, based on 2 people sharing a double room throughout. No car hire needed. Prices in GBP approximate — bus fares priced in EUR/local currency.
          </p>
        </div>

        {/* Best Time */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sun className="h-5 w-5 text-violet-400" /> Best Time to Visit
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-400 font-semibold mb-2">May–June &amp; September–October ✓ Recommended</p>
              <p className="text-slate-300">
                Warm (22–28°C), comfortable for sightseeing. Crowds manageable. Prices lower. Sea warm enough for swimming in September.
              </p>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
              <p className="text-rose-400 font-semibold mb-2">July–August — Avoid if possible</p>
              <p className="text-slate-300">
                38°C+ heat, enormous cruise-ship crowds in Dubrovnik and Kotor, peak prices. Accommodation books out months ahead.
              </p>
            </div>
          </div>
        </div>

        {/* Practical Info */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-violet-400" /> Practical Information
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">Currencies</h3>
              <ul className="space-y-1.5 text-slate-300">
                <li><span className="text-violet-300 font-medium">Croatia:</span> EUR (since Jan 2023)</li>
                <li><span className="text-violet-300 font-medium">Bosnia:</span> BAM (Bosnian Mark, pegged to EUR)</li>
                <li><span className="text-violet-300 font-medium">Montenegro:</span> EUR</li>
                <li><span className="text-violet-300 font-medium">Albania:</span> ALL (Lek) — EUR also accepted in most places</li>
                <li><span className="text-violet-300 font-medium">North Macedonia:</span> MKD (Denar)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Visas &amp; Borders</h3>
              <p className="text-slate-300 mb-3">
                No visa required for UK passport holders across all 5 countries. Croatia is Schengen — Bosnia, Montenegro, Albania and North Macedonia are <strong className="text-white">not Schengen</strong>, so expect passport stamps at each crossing.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-amber-300 text-xs">Border crossings can be slow in summer — allow extra time on bus journeys, especially Dubrovnik into Bosnia.</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-1.5">
                <Utensils className="h-4 w-4 text-violet-400" /> Food to Try
              </h3>
              <ul className="space-y-1 text-slate-300">
                <li><span className="text-white font-medium">Ćevapi:</span> Grilled minced meat in flatbread — ubiquitous and delicious</li>
                <li><span className="text-white font-medium">Burek:</span> Flaky pastry — meat, cheese or spinach</li>
                <li><span className="text-white font-medium">Fresh seafood:</span> Excellent on the Croatian and Montenegrin coast</li>
                <li><span className="text-white font-medium">Byrek:</span> Albanian version of burek, eaten for breakfast</li>
                <li><span className="text-white font-medium">Rakija:</span> Local fruit brandy — offered everywhere, often free</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Getting Around Within Cities</h3>
              <p className="text-slate-300 mb-2">All five cities are very walkable — especially the old towns. For longer trips within cities, use:</p>
              <ul className="space-y-1 text-slate-300">
                <li><span className="text-white font-medium">Bolt app:</span> Works across all 5 cities, very cheap (£2–5 for most rides)</li>
                <li><span className="text-white font-medium">Local buses:</span> Dubrovnik has a good bus network (€2/ride)</li>
                <li><span className="text-white font-medium">Walking:</span> All old towns are best explored on foot</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
