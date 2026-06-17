import Link from "next/link";
import { ChevronLeft, Plane, MapPin, Clock, AlertCircle, Info, Car } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import MapWrapper from "@/components/MapWrapper";
import type { MapMarker } from "@/components/DestinationMap";

const markers: MapMarker[] = [
  { name: "Tokyo Shibuya", description: "Scramble crossing, Harajuku, Shinjuku nightlife", lat: 35.6598, lng: 139.7004 },
  { name: "Tokyo Asakusa / Senso-ji", description: "Ancient temple, traditional market street", lat: 35.7148, lng: 139.7967 },
  { name: "Mt Fuji", description: "Iconic volcano, climb July–Sept or view from Kawaguchiko", lat: 35.3606, lng: 138.7274 },
  { name: "Hakone", description: "Hot springs, Fuji views, open air museum", lat: 35.2329, lng: 139.1069 },
  { name: "Kyoto Fushimi Inari", description: "Thousands of torii gates", lat: 34.9671, lng: 135.7727 },
  { name: "Kyoto Arashiyama Bamboo", description: "Iconic bamboo forest, monkey park", lat: 35.0094, lng: 135.6728 },
  { name: "Nishiki Market Kyoto", description: "Food market, traditional Kyoto", lat: 35.0046, lng: 135.7655 },
  { name: "Nara Deer Park", description: "Free-roaming deer, Todai-ji temple", lat: 34.6851, lng: 135.8048 },
  { name: "Osaka Dotonbori", description: "Neon lights, street food, takoyaki", lat: 34.6687, lng: 135.5013 },
  { name: "Hiroshima Peace Memorial", description: "Moving museum, atomic bomb dome", lat: 34.3955, lng: 132.4534 },
];

const pricingItems = [
  { label: "Flights (return, per person avg)", amount: "£780" },
  { label: "JR Pass 14-day", amount: "£420" },
  { label: "Accommodation (capsule/business hotels)", amount: "£550", note: "12 nights avg £46/night" },
  { label: "Food (convenience stores, ramen, sushi)", amount: "£280", note: "Approx £23/day" },
  { label: "Activities (TeamLab £25, Nara £5, etc)", amount: "£120" },
  { label: "Local transport (city metros)", amount: "£60" },
];

const attractions = [
  { name: "Tokyo Shibuya", lat: 35.6598, lng: 139.7004, description: "Scramble crossing, Harajuku, Shinjuku nightlife" },
  { name: "Tokyo Asakusa / Senso-ji", lat: 35.7148, lng: 139.7967, description: "Ancient temple, traditional market street" },
  { name: "Mt Fuji", lat: 35.3606, lng: 138.7274, description: "Iconic volcano, climb July–Sept or view from Kawaguchiko" },
  { name: "Hakone", lat: 35.2329, lng: 139.1069, description: "Hot springs, Fuji views, open air museum" },
  { name: "Kyoto Fushimi Inari", lat: 34.9671, lng: 135.7727, description: "Thousands of torii gates" },
  { name: "Kyoto Arashiyama Bamboo", lat: 35.0094, lng: 135.6728, description: "Iconic bamboo forest, monkey park" },
  { name: "Nishiki Market Kyoto", lat: 35.0046, lng: 135.7655, description: "Food market, traditional Kyoto" },
  { name: "Nara Deer Park", lat: 34.6851, lng: 135.8048, description: "Free-roaming deer, Todai-ji temple" },
  { name: "Osaka Dotonbori", lat: 34.6687, lng: 135.5013, description: "Neon lights, street food, takoyaki" },
  { name: "Hiroshima Peace Memorial", lat: 34.3955, lng: 132.4534, description: "Moving museum, atomic bomb dome" },
];

export default function JapanPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <div className="relative overflow-hidden pt-10 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-rose-400 text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All Destinations
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">Japan</h1>
          <p className="text-rose-400 font-medium mb-4">East Asia · 12-Night Journey</p>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Cherry blossoms, bullet trains, ancient temples and futuristic cities in the land of the rising sun.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-10">

        {/* Interactive Map */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-rose-400" /> Interactive Map
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-rose-500/20">
            <MapWrapper
              center={[36.2048, 138.2529]}
              zoom={6}
              markers={markers}
              accentColor="#f43f5e"
            />
          </div>
        </div>

        {/* Flights */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Plane className="h-5 w-5 text-rose-400" /> Flights from Scotland
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-rose-400 font-semibold mb-1">Edinburgh → Tokyo Narita (NRT) via Helsinki</p>
              <p className="text-slate-300">Finnair · ~£650–900 return · ~14h total</p>
            </div>
            <div>
              <p className="text-rose-400 font-semibold mb-1">Glasgow → Tokyo Haneda (HND) via Amsterdam</p>
              <p className="text-slate-300">KLM · ~£680–900 return · ~14.5h total</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-rose-500/10 border border-rose-500/20 rounded-xl p-3">
            <Info className="h-4 w-4 text-rose-400 mt-0.5 shrink-0" />
            <p className="text-slate-300 text-sm">
              <span className="text-rose-400 font-semibold">Tip:</span> Best deals in shoulder seasons Apr/May and Oct/Nov.
            </p>
          </div>
        </div>

        {/* Transport */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-rose-400" /> Getting Around
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold shrink-0">JR Pass 14-day</span>
              <span>~£420pp — <span className="text-white font-medium">MUST buy before travel</span>. Covers all shinkansen bullet trains nationwide.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold shrink-0">IC Card (Suica)</span>
              <span>~£20 deposit — works on Tokyo Metro and most urban transit. Top up at station machines.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold shrink-0">Shinkansen Kyoto → Hiroshima</span>
              <span>~45 min — included in JR Pass. No additional booking needed.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold shrink-0">Taxis</span>
              <span>Expensive — use metro/trains wherever possible. Only useful for late-night journeys.</span>
            </li>
          </ul>
        </div>

        {/* Attractions */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-rose-400" /> Top Attractions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {attractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-4"
              >
                <h3 className="text-white font-semibold text-sm mb-1">{attraction.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{attraction.description}</p>
                <p className="text-slate-600 text-xs mt-2">
                  {attraction.lat.toFixed(4)}, {attraction.lng.toFixed(4)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Itinerary */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-rose-400" /> Suggested Itinerary
          </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Tokyo (4 nights)",
              "Hakone (1 night)",
              "Kyoto (3 nights)",
              "Nara day trip",
              "Osaka (2 nights)",
              "Hiroshima day trip",
              "Fly home",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-medium">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-slate-600">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Cost Breakdown</h2>
          <PricingTable
            items={pricingItems}
            total="~£2,210pp"
            duration="12 nights"
            accentColor="rose"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-rose-400" /> Best Time to Visit
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-rose-400 font-semibold">March–May</span> (cherry blossom season) and{" "}
            <span className="text-rose-400 font-semibold">October–November</span> (spectacular autumn leaves) are the
            best times to visit. Avoid <span className="text-white font-medium">Golden Week</span> (late April–early May)
            — very crowded and accommodation prices spike significantly.
          </p>
        </div>

        {/* Practical Tips */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-rose-400" /> Practical Tips
          </h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">•</span>
              <span><span className="text-white font-medium">No visa required</span> for UK citizens (90-day visa waiver).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">•</span>
              <span>
                <span className="text-white font-medium">Currency: JPY — cash is important.</span> Many places
                (especially outside cities) are cash-only. Withdraw from 7-Eleven or Japan Post ATMs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">•</span>
              <span><span className="text-white font-medium">Very safe country</span> — low crime, even in large cities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">•</span>
              <span>English signage is common in major cities and tourist areas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">•</span>
              <span>IC card (Suica) works on most transit systems across Tokyo, Kyoto, and Osaka.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 mt-0.5">•</span>
              <span>
                <span className="text-white font-medium">Book ahead:</span> Popular restaurants and TeamLab Planets
                require advance booking — do this before departure.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
