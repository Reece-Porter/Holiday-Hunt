import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  PoundSterling,
  Plane,
  MapPin,
  Sun,
  Car,
  Bus,
  AlertTriangle,
  Star,
  Info,
  Utensils,
  Ship,
} from "lucide-react";
import PricingTable from "@/components/PricingTable";
import MapWrapper from "@/components/MapWrapper";

const markers = [
  {
    name: "Dubrovnik Old Town",
    description: "UNESCO walled city, Game of Thrones filming location.",
    lat: 42.6411,
    lng: 18.1089,
  },
  {
    name: "Split — Diocletian's Palace",
    description: "A living Roman palace you can wander through and even stay inside.",
    lat: 43.5081,
    lng: 16.4395,
  },
  {
    name: "Plitvice Lakes",
    description: "16 turquoise terraced lakes — Croatia's most spectacular national park.",
    lat: 44.8654,
    lng: 15.582,
  },
  {
    name: "Mostar — Stari Most",
    description: "The iconic old bridge rebuilt after war, surrounded by Ottoman bazaars.",
    lat: 43.337,
    lng: 17.8139,
  },
  {
    name: "Sarajevo — Baščaršija",
    description: "Where WWI began. Ottoman bazaar, mosques and extraordinary history.",
    lat: 43.859,
    lng: 18.4316,
  },
  {
    name: "Kotor Old City",
    description: "Medieval walled city tucked into a dramatic fjord-like bay.",
    lat: 42.4247,
    lng: 18.7712,
  },
  {
    name: "Budva Riviera",
    description: "Montenegro's beach hotspot with a charming old town.",
    lat: 42.2864,
    lng: 18.8444,
  },
  {
    name: "Lake Ohrid",
    description: "Ancient UNESCO lake with Byzantine churches and crystal-clear water.",
    lat: 41.1172,
    lng: 20.8016,
  },
  {
    name: "Skopje",
    description: "North Macedonia's eccentric capital packed with giant statues.",
    lat: 41.9981,
    lng: 21.4254,
  },
  {
    name: "Tirana — Blloku",
    description: "Colourful Albanian capital, communist bunkers, vibrant café scene.",
    lat: 41.3319,
    lng: 19.8279,
  },
  {
    name: "Berat Castle",
    description: "City of 1000 Windows — UNESCO hilltop citadel town, deeply atmospheric.",
    lat: 40.7056,
    lng: 19.9514,
  },
];

const attractions = [
  {
    name: "Dubrovnik Old Town",
    lat: 42.6411,
    lng: 18.1089,
    description:
      "Walk the iconic city walls at sunrise before the cruise ships arrive. Game of Thrones' King's Landing. One of the most perfectly preserved medieval cities in the world.",
    highlight: "UNESCO World Heritage Site",
  },
  {
    name: "Split — Diocletian's Palace",
    lat: 43.5081,
    lng: 16.4395,
    description:
      "A 3rd-century Roman emperor's retirement palace that became a city within a city. Cafés, restaurants and apartments fill the ancient courtyards.",
    highlight: "Roman ruin you can live inside",
  },
  {
    name: "Plitvice Lakes",
    lat: 44.8654,
    lng: 15.582,
    description:
      "Sixteen impossibly turquoise terraced lakes connected by waterfalls, linked by wooden boardwalks. Croatia's crown jewel national park.",
    highlight: "~£20 entry | Allow a full day",
  },
  {
    name: "Mostar — Stari Most",
    lat: 43.337,
    lng: 17.8139,
    description:
      "The reconstructed 16th-century bridge is a symbol of reconciliation after the Balkan wars. Browse Ottoman-era bazaars and watch divers leap into the Neretva River.",
    highlight: "Most photogenic spot in Bosnia",
  },
  {
    name: "Sarajevo — Baščaršija",
    lat: 43.859,
    lng: 18.4316,
    description:
      "Where Archduke Franz Ferdinand was assassinated, triggering WWI. The Ottoman bazaar quarter remains intact with coppersmith workshops, mosques and excellent čevapi.",
    highlight: "The city where WWI began",
  },
  {
    name: "Kotor Old City",
    lat: 42.4247,
    lng: 18.7712,
    description:
      "A perfectly preserved Venetian walled city at the end of Europe's southernmost fjord. Climb the fortress walls (2,000 steps, ~£8) for spectacular views.",
    highlight: "Fortress walls ~£8 | Stunning bay views",
  },
  {
    name: "Budva Riviera",
    lat: 42.2864,
    lng: 18.8444,
    description:
      "Montenegro's beach capital: a compact old town on a peninsula, long sandy beaches, and a buzzing nightlife strip. Quieter and cheaper than the Croatian coast.",
    highlight: "Best beaches in Montenegro",
  },
  {
    name: "Lake Ohrid",
    lat: 41.1172,
    lng: 20.8016,
    description:
      "One of Europe's oldest and deepest lakes, ringed by Byzantine churches and Roman ruins. The clifftop Church of St John at Kaneo is unmissable.",
    highlight: "UNESCO Natural & Cultural Heritage",
  },
  {
    name: "Skopje",
    lat: 41.9981,
    lng: 21.4254,
    description:
      "North Macedonia's capital is gloriously eccentric — giant warrior statues, baroque fountains and a stone bridge all crammed into the city centre. The old bazaar is genuinely fascinating.",
    highlight: "Wonderfully bizarre & free to explore",
  },
  {
    name: "Tirana — Blloku District",
    lat: 41.3319,
    lng: 19.8279,
    description:
      "Albania's colourful capital painted in bright murals. The Blloku quarter — once reserved exclusively for Communist Party elites — is now the hippest café and bar scene in the Balkans.",
    highlight: "Communist bunkers + best coffee in the Balkans",
  },
  {
    name: "Berat Castle",
    lat: 40.7056,
    lng: 19.9514,
    description:
      "The 'City of a Thousand Windows' — a UNESCO-listed Ottoman citadel town still inhabited today. White Ottoman houses with dozens of windows stacked up a steep hillside.",
    highlight: "UNESCO | Albania's most beautiful town",
  },
];

const pricingItems = [
  {
    label: "Flights — in Dubrovnik, out Tirana",
    amount: "£150 avg",
    note: "easyJet/Ryanair/Wizz Air from Edinburgh or Glasgow",
  },
  {
    label: "Car hire — shared between 2 people",
    amount: "£200",
    note: "~£100pp for 2 weeks. Essential for freedom. Check Albania restrictions.",
  },
  {
    label: "Accommodation — guesthouses & hostels",
    amount: "£350",
    note: "Very cheap region! Expect £15–30/night. Guesthouses often include breakfast.",
  },
  {
    label: "Food & drink",
    amount: "£200",
    note: "Extremely affordable. Meals from £3–8. Local wine & rakija very cheap.",
  },
  {
    label: "Activities",
    amount: "£100",
    note: "Plitvice ~£20, Kotor walls ~£8, most old towns free to walk",
  },
  {
    label: "Transport & ferries",
    amount: "£60",
    note: "Croatia inter-island ferries £5–15, local buses where car not used",
  },
];

const route = [
  { place: "Fly into Dubrovnik", note: "Start point" },
  { place: "Split", note: "2 nights" },
  { place: "Plitvice Lakes", note: "Day trip / 1 night" },
  { place: "Mostar", note: "1 night" },
  { place: "Sarajevo", note: "2 nights" },
  { place: "Skopje", note: "1 night" },
  { place: "Ohrid", note: "2 nights" },
  { place: "Tirana", note: "2 nights" },
  { place: "Berat", note: "1 night" },
  { place: "Kotor", note: "2 nights" },
  { place: "Budva", note: "1 night" },
  { place: "Fly home from Tirana", note: "Or loop back" },
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
                  Bosnia · Albania · Montenegro · North Macedonia · Croatia
                </p>
              </div>
            </div>
            {/* Budget Pick badge */}
            <div className="flex items-center gap-2 bg-violet-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-violet-500/30 self-start mt-1">
              <Star className="h-4 w-4 fill-white" />
              BUDGET PICK
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mt-4 leading-relaxed">
            Europe's best-kept secret: medieval walled cities, Ottoman bazaars, sapphire
            lakes and riviera beaches — all on a shoestring budget. Five countries packed
            with history and beauty, where £30 a day goes further than almost anywhere
            else on the continent.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {["History", "Budget", "Beaches", "Culture", "Road Trip", "UNESCO"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-10">
        {/* Quick facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <Plane className="h-5 w-5" />, label: "Flights from", value: "£60 return" },
            { icon: <Clock className="h-5 w-5" />, label: "Best duration", value: "14 nights" },
            { icon: <PoundSterling className="h-5 w-5" />, label: "From per person", value: "~£1,060" },
            { icon: <Sun className="h-5 w-5" />, label: "Best time", value: "May–Jun / Sep–Oct" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-violet-400 mb-2">{item.icon}</div>
              <p className="text-slate-400 text-xs mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Suggested Route */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-violet-400" /> Suggested 14-Night Route
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-violet-500/30" />
            <ol className="space-y-3">
              {route.map((stop, i) => (
                <li key={i} className="flex items-center gap-4 relative pl-10">
                  <div className="absolute left-0 w-7 h-7 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center text-xs font-bold text-violet-400 shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-white font-medium">{stop.place}</span>
                    <span className="text-violet-400 text-sm bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                      {stop.note}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-violet-400" /> Interactive Map
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-violet-500/20">
            <MapWrapper
              center={[42.5, 19.5]}
              zoom={6}
              markers={markers}
              accentColor="#8b5cf6"
            />
          </div>
        </div>

        {/* Flights */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Plane className="h-5 w-5 text-violet-400" /> Flights from Scotland
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">
                Edinburgh → Dubrovnik (DBV)
              </p>
              <p className="text-slate-300">
                easyJet direct ~<strong className="text-white">£60–120 return</strong>.
                Flight time ~3 hours. Best prices book well in advance.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">
                Glasgow → Dubrovnik (DBV)
              </p>
              <p className="text-slate-300">
                Ryanair via Dublin ~<strong className="text-white">£80–140 return</strong>.
                Or connect through London Stansted.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">
                Return from Tirana (TIA)
              </p>
              <p className="text-slate-300">
                Wizz Air to London Luton then connect ~
                <strong className="text-white">£80–150</strong>. Alternatively,
                fly back from Dubrovnik on a circular route (~£80 return, hire car for loop).
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-violet-400 font-semibold mb-1.5">
                Pro tip: Open-jaw tickets
              </p>
              <p className="text-slate-300">
                Book in to Dubrovnik, out of Tirana as separate one-way flights.
                Often cheaper than a return and avoids backtracking.
              </p>
            </div>
          </div>
        </div>

        {/* Transport */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Car className="h-5 w-5 text-violet-400" /> Getting Around
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="text-violet-400 mt-0.5 shrink-0">
                <Car className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white font-medium text-sm mb-1">
                  Car hire — highly recommended
                </p>
                <p className="text-slate-300 text-sm">
                  ~£200–300 for 2 weeks (£100–150pp sharing). Gives you freedom for
                  Plitvice Lakes and rural areas.{" "}
                  <strong className="text-amber-400">
                    Important: check with hire company about Albania restrictions
                  </strong>{" "}
                  — some do not allow cars to cross into Albania.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-violet-400 mt-0.5 shrink-0">
                <Bus className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white font-medium text-sm mb-1">Inter-city buses</p>
                <p className="text-slate-300 text-sm">
                  Excellent and very cheap. Bosnia & Albania: £5–15 per leg. Croatia:
                  £10–20. Regular services between all major cities.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-violet-400 mt-0.5 shrink-0">
                <Ship className="h-4 w-4" />
              </div>
              <div>
                <p className="text-white font-medium text-sm mb-1">Ferries (Croatia)</p>
                <p className="text-slate-300 text-sm">
                  Island ferries £5–15. The Split–Dubrovnik coastal route is stunning
                  if you have time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Attractions */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="h-5 w-5 text-violet-400" /> Top Attractions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {attractions.map((attr) => (
              <div
                key={attr.name}
                className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-5 hover:border-violet-500/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-sm leading-snug">
                    {attr.name}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  {attr.description}
                </p>
                <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {attr.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <PoundSterling className="h-5 w-5 text-violet-400" /> Cost Breakdown
          </h2>
          <PricingTable
            items={pricingItems}
            total="~£1,060pp"
            duration="14 nights"
            accentColor="violet"
          />
        </div>

        {/* Best Time */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sun className="h-5 w-5 text-violet-400" /> Best Time to Visit
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-400 font-semibold mb-2">
                May–June &amp; September–October ✓ Recommended
              </p>
              <p className="text-slate-300">
                Warm (22–28°C), comfortable for sightseeing. Crowds manageable.
                Prices lower. Sea warm enough in September. Plitvice at its best.
              </p>
            </div>
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
              <p className="text-rose-400 font-semibold mb-2">
                July–August — Avoid if possible
              </p>
              <p className="text-slate-300">
                38°C+ heat, enormous cruise-ship crowds in Dubrovnik and Kotor,
                peak prices. Plitvice can be unbearably busy. Accommodation books
                out months ahead.
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
                <li>
                  <span className="text-violet-300 font-medium">Montenegro / Kosovo:</span>{" "}
                  EUR (Euro)
                </li>
                <li>
                  <span className="text-violet-300 font-medium">Bosnia:</span> BAM (Bosnian
                  Mark, pegged to EUR)
                </li>
                <li>
                  <span className="text-violet-300 font-medium">North Macedonia:</span> MKD
                  (Macedonian Denar)
                </li>
                <li>
                  <span className="text-violet-300 font-medium">Albania:</span> ALL (Albanian
                  Lek), EUR increasingly accepted
                </li>
                <li>
                  <span className="text-violet-300 font-medium">Croatia:</span> EUR (since
                  Jan 2023)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Visas &amp; Borders</h3>
              <p className="text-slate-300 mb-3">
                No visa required for UK passport holders. Croatia is now Schengen —
                but Bosnia, Montenegro and North Macedonia are{" "}
                <strong className="text-white">not Schengen</strong>, so expect
                separate passport stamps at each border crossing.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-amber-300 text-xs">
                  Border crossings can be slow in summer — allow extra time,
                  especially Dubrovnik into Bosnia.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Safety</h3>
              <p className="text-slate-300">
                Very safe for tourists throughout. Standard city precautions apply.
                Roads in Albania and Bosnia can be winding and poorly maintained in
                rural areas — drive carefully. Some areas of Bosnia still have
                unexploded ordnance markers: stay on marked paths.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-1.5">
                <Utensils className="h-4 w-4 text-violet-400" /> Food to Try
              </h3>
              <ul className="space-y-1 text-slate-300">
                <li>
                  <span className="text-white font-medium">Ćevapi:</span> Grilled minced
                  meat in flatbread — ubiquitous and delicious
                </li>
                <li>
                  <span className="text-white font-medium">Burek:</span> Flaky pastry
                  filled with meat, cheese or spinach
                </li>
                <li>
                  <span className="text-white font-medium">Fresh seafood:</span> Excellent
                  on the Croatian and Montenegrin coast
                </li>
                <li>
                  <span className="text-white font-medium">Rakija:</span> Local fruit
                  brandy — offered everywhere
                </li>
              </ul>
              <p className="text-slate-400 text-xs mt-2">
                Haggling is acceptable in markets throughout the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
