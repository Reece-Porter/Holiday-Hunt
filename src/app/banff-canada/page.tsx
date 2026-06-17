import Link from "next/link";
import { ChevronLeft, Plane, Car, MapPin, Clock, AlertCircle, Info } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import MapWrapper from "@/components/MapWrapper";
import type { MapMarker } from "@/components/DestinationMap";

const markers: MapMarker[] = [
  { name: "Banff Townsite", description: "Charming mountain town, hot springs, Banff Ave", lat: 51.1784, lng: -115.5708 },
  { name: "Lake Louise", description: "Iconic turquoise lake, Chateau Lake Louise, hiking", lat: 51.4254, lng: -116.1773 },
  { name: "Moraine Lake", description: "Valley of Ten Peaks, Canada's most photographed spot", lat: 51.3217, lng: -116.1860 },
  { name: "Johnston Canyon", description: "Carved canyon, waterfalls, ink pots", lat: 51.2478, lng: -115.8364 },
  { name: "Icefields Parkway", description: "232km of the world's most scenic drive", lat: 51.6786, lng: -116.4831 },
  { name: "Columbia Icefield", description: "Athabasca Glacier, Glacier Skywalk", lat: 52.2193, lng: -117.2081 },
  { name: "Jasper Townsite", description: "Quieter than Banff, dark sky preserve", lat: 52.8737, lng: -118.0814 },
  { name: "Maligne Lake", description: "Spirit Island boat tours, kayaking", lat: 52.7212, lng: -117.6361 },
  { name: "Bow Lake", description: "Stunning viewpoint on Icefields Parkway", lat: 51.6690, lng: -116.4624 },
];

const pricingItems = [
  { label: "Flights (return, per person avg)", amount: "£650" },
  { label: "Car hire (shared between 2)", amount: "£225", note: "Compact SUV, 10 days" },
  { label: "National Parks Discovery Pass", amount: "£105", note: "Covers all Canadian national parks" },
  { label: "Accommodation (Banff hotels, Jasper cabins)", amount: "£650", note: "10 nights avg £65/night" },
  { label: "Food (restaurants + self-catering mix)", amount: "£350", note: "Expensive! Budget more if eating out" },
  { label: "Activities (glacier walk, boat tours, gondola)", amount: "£150" },
  { label: "Fuel", amount: "£60" },
];

const attractions = [
  { name: "Banff Townsite", lat: 51.1784, lng: -115.5708, description: "Charming mountain town, hot springs, Banff Ave" },
  { name: "Lake Louise", lat: 51.4254, lng: -116.1773, description: "Iconic turquoise lake, Chateau Lake Louise, hiking" },
  { name: "Moraine Lake", lat: 51.3217, lng: -116.1860, description: "Valley of Ten Peaks, Canada's most photographed spot" },
  { name: "Johnston Canyon", lat: 51.2478, lng: -115.8364, description: "Carved canyon, waterfalls, ink pots" },
  { name: "Icefields Parkway", lat: 51.6786, lng: -116.4831, description: "232km of the world's most scenic drive" },
  { name: "Columbia Icefield", lat: 52.2193, lng: -117.2081, description: "Athabasca Glacier, Glacier Skywalk" },
  { name: "Jasper Townsite", lat: 52.8737, lng: -118.0814, description: "Quieter than Banff, dark sky preserve" },
  { name: "Maligne Lake", lat: 52.7212, lng: -117.6361, description: "Spirit Island boat tours, kayaking" },
  { name: "Bow Lake", lat: 51.6690, lng: -116.4624, description: "Stunning viewpoint on Icefields Parkway" },
];

export default function BanffCanadaPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <div className="relative overflow-hidden pt-10 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> All Destinations
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">Banff, Canada</h1>
          <p className="text-sky-400 font-medium mb-4">Canadian Rockies · 10-Night Wilderness Adventure</p>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Turquoise glacier lakes, wildlife encounters, and the world&apos;s most scenic drive through the heart of the Rockies.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-10">

        {/* Interactive Map */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-sky-400" /> Interactive Map
          </h2>
          <div className="h-[500px] rounded-2xl overflow-hidden border border-sky-500/20">
            <MapWrapper
              center={[51.8, -116.5]}
              zoom={8}
              markers={markers}
              accentColor="#0ea5e9"
            />
          </div>
        </div>

        {/* Flights */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Plane className="h-5 w-5 text-sky-400" /> Flights from Scotland
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-sky-400 font-semibold mb-1">Edinburgh → Calgary (YYC) via Toronto</p>
              <p className="text-slate-300">Air Canada · ~£550–750 return · ~13h total</p>
            </div>
            <div>
              <p className="text-sky-400 font-semibold mb-1">Glasgow → Calgary via Amsterdam</p>
              <p className="text-slate-300">KLM then Air Canada · ~£580–780 return · ~14h total</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-sky-500/10 border border-sky-500/20 rounded-xl p-3">
            <Info className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
            <p className="text-slate-300 text-sm">
              <span className="text-sky-400 font-semibold">Tip:</span> Calgary is the gateway — car hire from the airport
              is essential. See car hire section below before booking.
            </p>
          </div>
        </div>

        {/* Car Hire — ESSENTIAL */}
        <div className="bg-slate-800/40 rounded-2xl border border-sky-500/30 p-6">
          <div className="flex items-center gap-2 mb-1">
            <Car className="h-5 w-5 text-sky-400" />
            <h2 className="text-xl font-bold text-white">Car Hire</h2>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold uppercase tracking-wide">
              Essential
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-4">There is no public transport in the national parks — a hire car is mandatory.</p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Recommended</span>
              <span>Compact SUV from Calgary Airport — ~£350–500/week. 4WD strongly recommended in winter.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Book early</span>
              <span>Summer (June–September) vehicles sell out months in advance. Book alongside flights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Parks Canada</span>
              <span>Entry fees are covered by the National Discovery Pass (~£105pp) — worth buying if spending more than a few days in the parks.</span>
            </li>
          </ul>
        </div>

        {/* Transport */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-sky-400" /> Getting Around
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Car hire (Calgary)</span>
              <span>~£400/week — essential. No public transport inside the national parks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Banff Roam Transit</span>
              <span>Free bus service within Banff townsite. Useful for getting around town without driving.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Moraine Lake Shuttle</span>
              <span>Summer only — must book in advance. ~£8 return. Private cars restricted on the road in peak season.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold shrink-0">Banff → Jasper</span>
              <span>~3.5hr drive along the iconic Icefields Parkway — budget a full day for stops.</span>
            </li>
          </ul>
        </div>

        {/* Attractions */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-sky-400" /> Top Attractions
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

        {/* Pricing */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Cost Breakdown</h2>
          <PricingTable
            items={pricingItems}
            total="~£2,190pp"
            duration="10 nights"
            accentColor="sky"
          />
        </div>

        {/* Best Time to Visit */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-sky-400" /> Best Time to Visit
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-sky-400 font-semibold">June–September</span> is peak season — hiking trails open, lakes
            fully accessible, wildlife active. <span className="text-sky-400 font-semibold">December–March</span> offers
            world-class skiing at Lake Louise with fewer crowds. Note:{" "}
            <span className="text-white font-medium">Moraine Lake road is closed October–May</span> — shuttle or very
            early arrival (before 6am) required in summer.
          </p>
        </div>

        {/* Practical Tips */}
        <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-sky-400" /> Practical Tips
          </h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">•</span>
              <span>
                <span className="text-white font-medium">No visa required</span> for UK citizens, but an{" "}
                <span className="text-white font-medium">eTA is required</span> (~£5.50) — apply online before travel at
                canada.ca.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">•</span>
              <span><span className="text-white font-medium">Currency: CAD</span> — Canadian dollars. Cards widely accepted.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">•</span>
              <span>English spoken everywhere. Extremely safe destination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">•</span>
              <span>
                <span className="text-white font-medium">Wildlife warning:</span> Keep at least 100m from bears and
                wolves. Carry bear spray when hiking. Follow all Parks Canada guidelines.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">•</span>
              <span>
                <span className="text-white font-medium">Moraine Lake:</span> Requires shuttle booking or arrival before
                6am in summer — plan this carefully as it is worth the effort.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">•</span>
              <span>
                <span className="text-white font-medium">Book accommodation months in advance</span> for summer visits —
                Banff is extremely popular and fills up fast.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
