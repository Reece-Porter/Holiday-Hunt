import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  PoundSterling,
  Plane,
  MapPin,
  Sun,
  Train,
  Bus,
  Info,
  Star,
  Ticket,
  AlertTriangle,
} from "lucide-react";
import PricingTable from "@/components/PricingTable";
import MapWrapper from "@/components/MapWrapper";
import BookingChecklist from "@/components/BookingChecklist";
import type { ChecklistSection } from "@/components/BookingChecklist";

// ── Markers ─────────────────────────────────────────────────────────────────
const markers = [
  // Amsterdam
  { name: "Rijksmuseum", description: "Dutch masters, Rembrandt and Vermeer.", lat: 52.36, lng: 4.8852 },
  { name: "Anne Frank House", description: "Essential historical visit — book months ahead.", lat: 52.3752, lng: 4.884 },
  { name: "Vondelpark", description: "Beautiful urban park, free to enter.", lat: 52.3579, lng: 4.8686 },
  { name: "Jordaan District", description: "Canals, indie boutiques and the best cafés.", lat: 52.3745, lng: 4.88 },
  { name: "Van Gogh Museum", description: "World's largest Van Gogh collection.", lat: 52.3584, lng: 4.8811 },
  { name: "Keukenhof Gardens", description: "World's largest flower garden — March to May only!", lat: 52.2697, lng: 4.5428 },
  // Brussels
  { name: "Grand Place", description: "One of Europe's most beautiful squares, UNESCO.", lat: 50.8462, lng: 4.3521 },
  { name: "Atomium", description: "Iconic 1958 World Expo structure with panoramic views.", lat: 50.8947, lng: 4.3412 },
  { name: "Manneken Pis", description: "The famously tiny statue, a short walk from Grand Place.", lat: 50.8446, lng: 4.3499 },
  { name: "Magritte Museum", description: "Surrealist art masterclass in the heart of Brussels.", lat: 50.845, lng: 4.3579 },
  { name: "Belgian Comic Strip Centre", description: "Tintin, Smurfs and the history of Belgian comics.", lat: 50.8492, lng: 4.3565 },
  // Berlin
  { name: "Brandenburg Gate", description: "Symbol of German reunification — free, open 24/7.", lat: 52.5163, lng: 13.3777 },
  { name: "East Side Gallery", description: "1.3 km of painted Berlin Wall murals, free to walk.", lat: 52.505, lng: 13.4394 },
  { name: "Holocaust Memorial", description: "Powerful field of 2,711 concrete stelae, free entry.", lat: 52.5138, lng: 13.3785 },
  { name: "Museum Island", description: "Five world-class museums on one island in the Spree.", lat: 52.5169, lng: 13.4019 },
  { name: "Checkpoint Charlie", description: "Cold War crossing point with museum and outdoor exhibition.", lat: 52.5075, lng: 13.3904 },
  { name: "Berliner Dom", description: "Cathedral with panoramic rooftop views over the city.", lat: 52.5192, lng: 13.4013 },
];

// ── Attractions split by city ────────────────────────────────────────────────
const amsterdam = [
  {
    name: "Rijksmuseum",
    description:
      "The Netherlands' national museum of art and history. Rembrandt's Night Watch, Vermeer's Milkmaid and 8,000 other masterpieces across four floors. Allow 3–4 hours minimum.",
    highlight: "~€22.50 | Book tickets online to skip queues",
    mustSee: true,
  },
  {
    name: "Anne Frank House",
    description:
      "Walk through the secret annex where Anne Frank and her family hid from the Nazis for over two years. One of the most moving experiences in Europe. Book months ahead — tickets sell out fast.",
    highlight: "~€16 | Book months in advance — no walk-ins",
    mustSee: true,
  },
  {
    name: "Vondelpark",
    description:
      "Amsterdam's beloved 47-hectare green lung. Free outdoor concerts in summer, rose garden, open-air theatre and the best people-watching in the city.",
    highlight: "Free | Perfect for a sunny afternoon",
  },
  {
    name: "Jordaan District",
    description:
      "The prettiest neighbourhood in Amsterdam: 17th-century canal houses, independent galleries, vintage boutiques, flower markets and hidden courtyards (hofjes). Best explored on foot.",
    highlight: "Free to explore | Best cafés in Amsterdam",
  },
  {
    name: "Van Gogh Museum",
    description:
      "Home to the world's largest collection of Van Gogh's paintings and drawings, tracing his artistic development from dark Dutch still lifes to the explosion of colour in Arles.",
    highlight: "~€22 | Book online, timed entry",
  },
  {
    name: "Keukenhof Gardens",
    description:
      "The world's largest flower garden, with 7 million tulips, daffodils and hyacinths across 32 hectares. Open mid-March to mid-May only. An hour from Amsterdam by bus from Leiden.",
    highlight: "~€22 | March–May only | Book ahead",
  },
];

const brussels = [
  {
    name: "Grand Place",
    description:
      "Regularly voted one of the most beautiful squares in Europe. The Gothic Town Hall and gilded guild houses surround a cobbled square that glitters at night. Free to walk, always open.",
    highlight: "Free | UNESCO World Heritage Site",
    mustSee: true,
  },
  {
    name: "Atomium",
    description:
      "Built for the 1958 World Expo, this 102-metre iron crystal structure is Brussels' most distinctive landmark. The interior has exhibition spaces, a restaurant and panoramic views.",
    highlight: "~€16 | Panoramic views over Brussels",
  },
  {
    name: "Manneken Pis",
    description:
      "The famously underwhelming but endlessly beloved tiny bronze boy. He's just 55 cm tall — but the costume collection in the City Museum nearby is surprisingly fascinating.",
    highlight: "Free | The world's most anticlimactic landmark",
  },
  {
    name: "Magritte Museum",
    description:
      "Dedicated to René Magritte, the Belgian surrealist behind The Son of Man and The Treachery of Images. Over 200 works across three floors in a beautifully restored neoclassical building.",
    highlight: "~€12 | A surrealist masterclass",
  },
  {
    name: "Belgian Comic Strip Centre",
    description:
      "Belgium gave the world Tintin, the Smurfs and Lucky Luke. This museum in a stunning Art Nouveau building celebrates 100+ years of Belgian bande dessinée. Charming for adults and children alike.",
    highlight: "~€12 | Tintin, Smurfs & Belgian comic heritage",
  },
];

const berlin = [
  {
    name: "Brandenburg Gate",
    description:
      "The 18th-century neoclassical triumphal arch that became the symbol of a divided city and then of its reunification. Free to visit, open 24 hours. Best at dawn before the crowds arrive.",
    highlight: "Free | Open 24/7 | Symbol of reunification",
    mustSee: true,
  },
  {
    name: "East Side Gallery",
    description:
      "The longest surviving stretch of the Berlin Wall, transformed into a 1.3 km open-air gallery of murals by artists from 21 countries. Includes the iconic Fraternal Kiss painting.",
    highlight: "Free | Open-air | 1.3 km of murals",
    mustSee: true,
  },
  {
    name: "Holocaust Memorial",
    description:
      "Peter Eisenman's 2,711 concrete stelae covering a full city block — a haunting, disorienting field that demands silence. The underground information centre brings individual stories to life.",
    highlight: "Free | Underground info centre free",
  },
  {
    name: "Museum Island",
    description:
      "Five world-class museums on one island in the Spree: the Pergamon (under restoration), Neues Museum (Nefertiti bust), Alte Nationalgalerie and more. A Museum Day Pass covers all five.",
    highlight: "~€18 museum pass | Allow a full day",
  },
  {
    name: "Checkpoint Charlie",
    description:
      "The most famous Cold War crossing point between East and West Berlin. The outdoor exhibition is free; the indoor museum covers escape attempts, the wall's construction and its fall.",
    highlight: "Outdoor free | Indoor museum ~€14.50",
  },
  {
    name: "Berliner Dom",
    description:
      "Berlin's magnificent cathedral dominates Museum Island. Climb to the rooftop dome for panoramic views over the city. The imperial Hohenzollern crypt is included in the entry ticket.",
    highlight: "~€9 incl. rooftop | Stunning city views",
  },
];

const pricingItems = [
  {
    label: "Flights — EDI/GLA→AMS + BER→EDI/GLA",
    amount: "£80 avg",
    note: "easyJet/KLM in, easyJet/Ryanair out. Book early for best prices.",
  },
  {
    label: "Trains — Amsterdam → Brussels → Berlin",
    amount: "£80",
    note: "Thalys AMS→BRU ~£35–60; ICE BRU→BER ~£40–80. Or Flixbus BRU→BER ~£15.",
  },
  {
    label: "Accommodation — central hotels & hostels",
    amount: "£450",
    note: "~£50/night. Budget hostels from £25; mid-range hotels £60–90.",
  },
  {
    label: "Food & drink",
    amount: "£250",
    note: "Amsterdam & Berlin mid-range. Brussels slightly pricier. Street food from £5.",
  },
  {
    label: "Activities",
    amount: "£100",
    note: "Rijksmuseum £18, Anne Frank £16, East Side Gallery free — budget carefully.",
  },
  {
    label: "Local transport — day passes",
    amount: "£60",
    note: "Amsterdam GVB ~€9/day, Brussels STIB ~€7.50/day, Berlin BVG ~€9/day.",
  },
];

const route = [
  { place: "Fly Edinburgh / Glasgow → Amsterdam (AMS)", note: "Arrive" },
  { place: "Amsterdam", note: "3 nights" },
  { place: "Train to Brussels (1h 50min)", note: "Thalys / Eurostar" },
  { place: "Brussels", note: "2 nights" },
  { place: "Train to Berlin (6h 30min)", note: "ICE / Thalys" },
  { place: "Berlin", note: "3–4 nights" },
  { place: "Fly home from Berlin (BER)", note: "Depart" },
];

const checklistSections: ChecklistSection[] = [
  {
    title: "Flights",
    emoji: "✈️",
    items: [
      { id: "eu-flight-in", label: "Book one-way flight — Edinburgh/Glasgow → Amsterdam (AMS)", note: "easyJet or KLM direct. Very frequent — usually cheap to book. Fly in, city-hop by train, fly home from Berlin.", urgent: true },
      { id: "eu-flight-out", label: "Book one-way return — Berlin (BER) → Edinburgh/Glasgow", note: "easyJet direct from BER. Ryanair also available. Book separately from the inbound.", urgent: true },
    ],
  },
  {
    title: "Trains Between Cities",
    emoji: "🚂",
    items: [
      { id: "eu-train-amsbru", label: "Book Amsterdam → Brussels train (Thalys/Eurostar)", note: "~1hr 50min. Book via Eurostar.com or Trainline. Advance fares from ~£25. Runs frequently.", urgent: true },
      { id: "eu-train-bruber", label: "Book Brussels → Berlin train (ICE or Thalys)", note: "~6.5hrs direct ICE, or Flixbus (~£15) if flexible on time. Book at least a few weeks ahead.", urgent: true },
    ],
  },
  {
    title: "Accommodation — 3 Separate Bookings",
    emoji: "🏨",
    items: [
      { id: "eu-accom-amsterdam", label: "Book Amsterdam accommodation — 3 nights", note: "Central Canal Ring or Jordaan area. Amsterdam is expensive — book early. Hostels with private rooms are good value.", urgent: true },
      { id: "eu-accom-brussels", label: "Book Brussels accommodation — 2 nights", note: "Near Grand Place or Ixelles. More affordable than Amsterdam. Book a few weeks ahead." },
      { id: "eu-accom-berlin", label: "Book Berlin accommodation — 3–4 nights", note: "Mitte, Prenzlauer Berg or Kreuzberg. Berlin has lots of options — book 4–6 weeks ahead." },
    ],
  },
  {
    title: "Activities — Book Well Ahead",
    emoji: "🎨",
    items: [
      { id: "eu-annefrank", label: "Book Anne Frank House tickets — Amsterdam", note: "This is the most important booking of the whole trip. Tickets sell out MONTHS in advance. Book at annefrank.org as soon as dates are confirmed.", urgent: true },
      { id: "eu-rijksmuseum", label: "Book Rijksmuseum tickets — Amsterdam", note: "Rembrandt, Vermeer and Dutch masters. Book at rijksmuseum.nl — timed entry, worth booking a week or two ahead.", urgent: true },
      { id: "eu-vangogh", label: "Book Van Gogh Museum tickets — Amsterdam", note: "Also sells out — book at vangoghmuseum.nl. World's largest Van Gogh collection." },
      { id: "eu-atomium", label: "Book Atomium tickets — Brussels", note: "The iconic 1958 structure. Book at atomium.be — queues can be long without a ticket." },
      { id: "eu-museumisland", label: "Research Museum Island tickets — Berlin", note: "Pergamon Museum is partially closed for renovation. Check what's open and book ahead at smb.museum." },
      { id: "eu-eastside", label: "East Side Gallery — no booking needed", note: "1.3km of Berlin Wall murals, free and outdoor. Just show up." },
      { id: "eu-keukenhof", label: "Keukenhof Flower Gardens — if visiting in spring (mid-Mar to mid-May)", note: "World's largest flower garden, 35 min from Amsterdam by bus. Book at keukenhof.nl — timed entry.", urgent: true },
    ],
  },
  {
    title: "Documents & Admin",
    emoji: "📄",
    items: [
      { id: "eu-passport", label: "Check passport validity for Schengen travel", note: "All three countries are Schengen. UK passport must be valid for 3 months beyond your return date and issued within the last 10 years." },
      { id: "eu-insurance", label: "Buy travel insurance", note: "All three are safe and have good healthcare, but insurance is always worth having." },
      { id: "eu-bank", label: "Set up a fee-free travel card (Starling, Wise or Monzo)", note: "All three countries use EUR. A fee-free card saves on conversion fees throughout." },
      { id: "eu-gvb", label: "Research Amsterdam tram/metro options", note: "GVB day passes (~€9/day) or top-up OV-chipkaart. Trams are the main way to get around." },
      { id: "eu-berlin-transport", label: "Research Berlin U-Bahn/S-Bahn day passes", note: "Berlin AB zone day pass ~€9. Covers all U-Bahn, S-Bahn, trams and buses." },
    ],
  },
];

export default function EuropeCitiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Hero */}
      <div className="relative overflow-hidden pt-10 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        <div className="max-w-5xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All Destinations
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-5xl">🚂</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                European Cities
              </h1>
              <p className="text-teal-400 font-medium mt-1">
                Amsterdam · Brussels · Berlin
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mt-4 leading-relaxed">
            Three iconic capital cities linked by high-speed train: Dutch masters and
            canal rings, Belgian waffles and surrealist art, and Berlin's electric
            history and nightlife. A perfectly self-contained loop for a 9-night city
            break — all on a reasonable budget.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {["Culture", "Art", "Nightlife", "City Break", "Trains", "History"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30"
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
            { icon: <Plane className="h-5 w-5" />, label: "Flights from", value: "£30 return" },
            { icon: <Clock className="h-5 w-5" />, label: "Best duration", value: "9 nights" },
            { icon: <PoundSterling className="h-5 w-5" />, label: "From per person", value: "~£1,020" },
            { icon: <Sun className="h-5 w-5" />, label: "Best time", value: "Apr–May / Sep–Oct" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
            >
              <div className="text-teal-400 mb-2">{item.icon}</div>
              <p className="text-slate-400 text-xs mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Suggested Route */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Train className="h-5 w-5 text-teal-400" /> Suggested 9-Night Route
          </h2>
          <div className="relative">
            <div className="absolute left-3.5 top-0 bottom-0 w-px bg-teal-500/30" />
            <ol className="space-y-3">
              {route.map((stop, i) => (
                <li key={i} className="flex items-center gap-4 relative pl-10">
                  <div className="absolute left-0 w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-xs font-bold text-teal-400 shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-white font-medium">{stop.place}</span>
                    <span className="text-teal-400 text-sm bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20">
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
            <MapPin className="h-5 w-5 text-teal-400" /> Interactive Map
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-teal-500/20">
            <MapWrapper
              center={[51.5, 8.0]}
              zoom={6}
              markers={markers}
              accentColor="#14b8a6"
            />
          </div>
        </div>

        {/* Flights */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Plane className="h-5 w-5 text-teal-400" /> Flights from Scotland
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">
                Edinburgh → Amsterdam (AMS)
              </p>
              <p className="text-slate-300">
                easyJet or KLM direct ~<strong className="text-white">£30–80 return</strong>.
                Flight time 1h 50min. Multiple daily departures.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">
                Glasgow → Amsterdam (AMS)
              </p>
              <p className="text-slate-300">
                easyJet direct ~<strong className="text-white">£35–90 return</strong>.
                Flight time ~1h 55min.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">
                Return from Berlin (BER)
              </p>
              <p className="text-slate-300">
                easyJet ~<strong className="text-white">£30–70</strong> to Edinburgh.
                Ryanair ~<strong className="text-white">£25–65</strong> to Glasgow.
                Berlin Brandenburg is a modern, easy airport.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">
                Book as separate one-ways
              </p>
              <p className="text-slate-300">
                Buy EDI→AMS and BER→EDI as separate tickets. The open-jaw routing
                means you never backtrack, saving time and money.
              </p>
            </div>
          </div>
        </div>

        {/* Inter-city transport */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Train className="h-5 w-5 text-teal-400" /> Inter-City Transport
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <Train className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium mb-1">
                  Amsterdam → Brussels: Thalys / Eurostar
                </p>
                <p className="text-slate-300">
                  ~<strong className="text-white">£35–60</strong>, journey time{" "}
                  <strong className="text-white">1h 50min</strong>. Fast, comfortable
                  and city-centre to city-centre. Book via Eurostar or Thalys websites.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Train className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium mb-1">Brussels → Berlin: ICE / Thalys</p>
                <p className="text-slate-300">
                  ~<strong className="text-white">£40–80</strong>, journey time{" "}
                  <strong className="text-white">6h 30min</strong>. A scenic train ride
                  through Belgium and Germany. Book via DB (Deutsche Bahn) for best prices.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Bus className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium mb-1">Budget option: Flixbus Brussels → Berlin</p>
                <p className="text-slate-300">
                  ~<strong className="text-white">£15</strong>, journey time ~7.5 hours.
                  Overnight option available — saves a night's accommodation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Transport */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Ticket className="h-5 w-5 text-teal-400" /> Local Transport
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">Amsterdam</p>
              <p className="text-slate-300">
                GVB day pass ~<strong className="text-white">€9/day</strong>. Covers
                trams, metro and buses. Or hire a bike — Amsterdam is the most
                cycle-friendly city in the world.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">Brussels</p>
              <p className="text-slate-300">
                STIB metro, tram &amp; bus day pass ~
                <strong className="text-white">€7.50/day</strong>. City centre
                attractions are mostly walkable from the Grand Place.
              </p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-1.5">Berlin</p>
              <p className="text-slate-300">
                BVG U-Bahn &amp; S-Bahn day pass ~
                <strong className="text-white">€9/day</strong>. Excellent coverage.
                Berlin is large — the U/S-Bahn is essential.
              </p>
            </div>
          </div>
        </div>

        {/* Attractions by city */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Star className="h-5 w-5 text-teal-400" /> Attractions by City
          </h2>

          {/* Amsterdam */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-sm font-bold text-teal-400">
                🌷
              </div>
              <h3 className="text-xl font-bold text-white">Amsterdam</h3>
              <span className="text-slate-400 text-sm">3 nights suggested</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {amsterdam.map((attr) => (
                <div
                  key={attr.name}
                  className={`bg-slate-800/40 rounded-2xl border p-5 hover:border-teal-500/30 transition-colors ${
                    attr.mustSee
                      ? "border-teal-500/30"
                      : "border-slate-700/50"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <h4 className="text-white font-bold text-sm leading-snug flex-1">
                      {attr.name}
                    </h4>
                    {attr.mustSee && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
                        Must See
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {attr.description}
                  </p>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {attr.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brussels */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-sm font-bold text-teal-400">
                🍺
              </div>
              <h3 className="text-xl font-bold text-white">Brussels</h3>
              <span className="text-slate-400 text-sm">2 nights suggested</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {brussels.map((attr) => (
                <div
                  key={attr.name}
                  className={`bg-slate-800/40 rounded-2xl border p-5 hover:border-teal-500/30 transition-colors ${
                    attr.mustSee
                      ? "border-teal-500/30"
                      : "border-slate-700/50"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <h4 className="text-white font-bold text-sm leading-snug flex-1">
                      {attr.name}
                    </h4>
                    {attr.mustSee && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
                        Must See
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {attr.description}
                  </p>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {attr.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Berlin */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-sm font-bold text-teal-400">
                🏛️
              </div>
              <h3 className="text-xl font-bold text-white">Berlin</h3>
              <span className="text-slate-400 text-sm">3–4 nights suggested</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {berlin.map((attr) => (
                <div
                  key={attr.name}
                  className={`bg-slate-800/40 rounded-2xl border p-5 hover:border-teal-500/30 transition-colors ${
                    attr.mustSee
                      ? "border-teal-500/30"
                      : "border-slate-700/50"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <h4 className="text-white font-bold text-sm leading-snug flex-1">
                      {attr.name}
                    </h4>
                    {attr.mustSee && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
                        Must See
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {attr.description}
                  </p>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {attr.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <PoundSterling className="h-5 w-5 text-teal-400" /> Cost Breakdown
          </h2>
          <PricingTable
            items={pricingItems}
            total="~£1,020pp"
            duration="9 nights"
            accentColor="teal"
          />
        </div>

        {/* Best Time */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sun className="h-5 w-5 text-teal-400" /> Best Time to Visit
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-400 font-semibold mb-2">
                April–May ✓ Top pick
              </p>
              <p className="text-slate-300">
                Keukenhof tulips in bloom (March–May). Comfortable temperatures
                15–20°C. Crowds not yet at peak. Amsterdam and Berlin at their best.
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-emerald-400 font-semibold mb-2">
                September–October ✓ Recommended
              </p>
              <p className="text-slate-300">
                Summer crowds gone, great weather (18–24°C), lower prices.
                Amsterdam canal boat season still running. Berlin cultural season
                in full swing.
              </p>
            </div>
            <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
              <p className="text-teal-400 font-semibold mb-2">
                December — Christmas Markets
              </p>
              <p className="text-slate-300">
                All three cities have wonderful Christmas markets.
                Brussels' Grand Place is stunning. Cold but atmospheric.
                Book accommodation well ahead.
              </p>
            </div>
          </div>
        </div>

        {/* Practical Info */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-teal-400" /> Practical Information
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">Visas &amp; Currency</h3>
              <p className="text-slate-300 mb-2">
                All three cities are in the EU Schengen Area — no visa required for
                UK passport holders. EUR used throughout all three cities.
              </p>
              <p className="text-slate-300">
                English is very widely spoken, especially in Amsterdam and Berlin.
                Brussels is officially bilingual (French/Dutch), but English is
                universally understood.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Tipping</h3>
              <ul className="space-y-1.5 text-slate-300">
                <li>
                  <span className="text-teal-300 font-medium">Netherlands:</span> Round
                  up to the nearest euro or add 5–10% for good service.
                </li>
                <li>
                  <span className="text-teal-300 font-medium">Belgium:</span> Service
                  charge often included. Round up appreciated.
                </li>
                <li>
                  <span className="text-teal-300 font-medium">Germany:</span> 5–10%
                  tip expected for sit-down meals. Say the amount when paying.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Free &amp; Cheap Berlin</h3>
              <p className="text-slate-300 mb-2">
                Berlin has exceptional value. The East Side Gallery, Brandenburg Gate,
                Holocaust Memorial and Topography of Terror are all completely free.
                Many museums offer reduced or free entry on certain days — check
                ahead.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-amber-400" /> Book Anne Frank House Early
              </h3>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                <p className="text-amber-300 text-sm">
                  The Anne Frank House has no walk-in tickets. All entry is by timed
                  slot booked online at{" "}
                  <strong className="text-white">annefrank.org</strong>. Tickets
                  typically sell out months in advance. Book the moment your travel
                  dates are confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Checklist */}
        <section className="mb-12 mt-12">
          <BookingChecklist
            destination="europe-cities"
            sections={checklistSections}
            accentColor="teal"
          />
        </section>
      </div>
    </div>
  );
}
