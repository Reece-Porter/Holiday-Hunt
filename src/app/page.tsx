import Link from "next/link";
import { Plane, Clock, ChevronRight, Star } from "lucide-react";

const destinations = [
  {
    name: "The Dolomites",
    subtitle: "Italy",
    href: "/dolomites",
    bullets: [
      "Campervan adventure — wake up to a new peak every morning",
      "Ski 1,200km of Dolomiti Superski pistes",
      "Hike the Tre Cime di Lavaredo circuit",
      "Mountain biking the high Alpine passes",
      "Stargazing from the van at 2,000m+",
    ],
    priceFrom: "£1,025",
    duration: "10 nights",
    flights: "from £60",
    bestTime: "Dec–Mar / Jun–Sep",
    tags: ["Skiing", "Hiking", "Mountains", "Campervan"],
    accent: "amber",
    gradient: "from-amber-900/60 to-orange-900/40",
    border: "border-amber-500/30",
    badge: "bg-amber-500/20 text-amber-300",
    highlight: "text-amber-400",
    emoji: "🏔️",
  },
  {
    name: "Thailand & Vietnam",
    subtitle: "Southeast Asia",
    href: "/thailand-vietnam",
    bullets: [
      "Street food from Bangkok to Ho Chi Minh City",
      "Overnight cruise through Ha Long Bay",
      "Elephant sanctuary visit near Chiang Mai",
      "Hoi An old town by lantern light",
      "Open-jaw flight — fly in one end, out the other",
    ],
    priceFrom: "£1,660",
    duration: "15 nights",
    flights: "from £550",
    bestTime: "Nov–Apr",
    tags: ["Beaches", "Culture", "Street Food", "Asia"],
    accent: "emerald",
    gradient: "from-emerald-900/60 to-teal-900/40",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/20 text-emerald-300",
    highlight: "text-emerald-400",
    emoji: "🌴",
  },
  {
    name: "Japan",
    subtitle: "Land of the Rising Sun",
    href: "/japan",
    bullets: [
      "Ride the Shinkansen bullet train between cities",
      "Cherry blossom season in Kyoto & Tokyo",
      "Walk the 10,000 torii gates of Fushimi Inari",
      "Ramen, sushi & izakayas every single night",
      "Mt Fuji views from Hakone",
    ],
    priceFrom: "£2,210",
    duration: "12 nights",
    flights: "from £650",
    bestTime: "Mar–May / Oct–Nov",
    tags: ["Culture", "Food", "Temples", "Technology"],
    accent: "rose",
    gradient: "from-rose-900/60 to-pink-900/40",
    border: "border-rose-500/30",
    badge: "bg-rose-500/20 text-rose-300",
    highlight: "text-rose-400",
    emoji: "⛩️",
  },
  {
    name: "Banff, Canada",
    subtitle: "Canadian Rockies",
    href: "/banff-canada",
    bullets: [
      "Drive the legendary Icefields Parkway",
      "Kayak on turquoise Moraine Lake",
      "Spot grizzly bears and elk in the wild",
      "Dark sky reserve stargazing in Jasper",
      "Ski world-class slopes at Lake Louise",
    ],
    priceFrom: "£2,190",
    duration: "10 nights",
    flights: "from £550",
    bestTime: "Jun–Sep / Dec–Mar",
    tags: ["Wildlife", "Mountains", "Hiking", "Road Trip"],
    accent: "sky",
    gradient: "from-sky-900/60 to-blue-900/40",
    border: "border-sky-500/30",
    badge: "bg-sky-500/20 text-sky-300",
    highlight: "text-sky-400",
    emoji: "🦌",
  },
  {
    name: "Balkans Tour",
    subtitle: "Bosnia • Albania • Montenegro • Croatia",
    href: "/balkans",
    bullets: [
      "Game of Thrones filming spots in Dubrovnik",
      "Ottoman bazaars in Mostar & Sarajevo",
      "Albanian Riviera beaches on a shoestring",
      "Medieval Kotor by the Adriatic sea",
      "UNESCO Lake Ohrid — Europe's oldest lake",
    ],
    priceFrom: "£841",
    duration: "14 nights",
    flights: "from £60",
    bestTime: "May–Jun / Sep–Oct",
    tags: ["History", "Budget", "Beaches", "Culture"],
    accent: "violet",
    gradient: "from-violet-900/60 to-purple-900/40",
    border: "border-violet-500/30",
    badge: "bg-violet-500/20 text-violet-300",
    highlight: "text-violet-400",
    emoji: "🏛️",
    budgetPick: true,
  },
  {
    name: "European Cities",
    subtitle: "Amsterdam • Brussels • Berlin",
    href: "/europe-cities",
    bullets: [
      "Anne Frank House & Rijksmuseum in Amsterdam",
      "Belgian beer, waffles & the Grand Place",
      "Berlin Wall, Brandenburg Gate & nightlife",
      "City hop the whole route by train",
      "Three capitals, one trip from £30 flights",
    ],
    priceFrom: "£1,020",
    duration: "9 nights",
    flights: "from £30",
    bestTime: "Apr–May / Sep–Oct",
    tags: ["Culture", "Art", "Nightlife", "City Break"],
    accent: "teal",
    gradient: "from-teal-900/60 to-cyan-900/40",
    border: "border-teal-500/30",
    badge: "bg-teal-500/20 text-teal-300",
    highlight: "text-teal-400",
    emoji: "🚂",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent pointer-events-none" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6 text-amber-400 text-sm">
            <Plane className="h-4 w-4" />
            <span>Flying from Edinburgh EDI &amp; Glasgow GLA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Our next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              holiday?
            </span>
          </h1>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.href}
              href={dest.href}
              className={`group relative bg-slate-800/40 rounded-2xl border ${dest.border} overflow-hidden hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${dest.gradient}`} />

              {dest.budgetPick && (
                <div className="absolute top-4 right-4 bg-violet-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Budget Pick
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{dest.emoji}</span>
                      <h2 className="text-xl font-bold text-white">{dest.name}</h2>
                    </div>
                    <p className="text-slate-400 text-sm">{dest.subtitle}</p>
                  </div>
                </div>

                <ul className="mb-4 space-y-1.5">
                  {dest.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${dest.highlight.replace("text-", "bg-")}`} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full ${dest.badge} border ${dest.border}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-700/30 rounded-xl p-3">
                    <p className="text-slate-500 text-xs mb-1">From per person</p>
                    <p className={`font-bold text-lg ${dest.highlight}`}>
                      {dest.priceFrom}
                    </p>
                    <p className="text-slate-500 text-xs">{dest.duration}</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-3">
                    <p className="text-slate-500 text-xs mb-1">Flights from</p>
                    <p className={`font-bold text-lg ${dest.highlight}`}>
                      {dest.flights}
                    </p>
                    <p className="text-slate-500 text-xs">return</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Best: {dest.bestTime}</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${dest.highlight} group-hover:gap-2 transition-all`}
                  >
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 rounded-lg p-2">
                <Plane className="h-5 w-5 text-navy-900" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Ready to take off?</p>
                <p className="text-slate-400 text-sm">
                  All destinations bookable from Edinburgh &amp; Glasgow
                </p>
              </div>
            </div>
            <div className="h-px w-full sm:h-10 sm:w-px bg-slate-700/50" />
            <div className="text-slate-400 text-sm text-center sm:text-left">
              <p>Prices shown are approximate.</p>
              <p>Always check airlines for latest fares.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
