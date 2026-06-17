"use client";

import dynamic from "next/dynamic";
import type { MapMarker } from "./DestinationMap";

const DestinationMap = dynamic(() => import("./DestinationMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-navy-800 rounded-xl">
      <div className="text-slate-400 flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm">Loading map...</span>
      </div>
    </div>
  ),
});

interface MapWrapperProps {
  center: [number, number];
  zoom: number;
  markers: MapMarker[];
  accentColor?: string;
}

export default function MapWrapper({ center, zoom, markers, accentColor }: MapWrapperProps) {
  return (
    <DestinationMap
      center={center}
      zoom={zoom}
      markers={markers}
      accentColor={accentColor}
    />
  );
}
