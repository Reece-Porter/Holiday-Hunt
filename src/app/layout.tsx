import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Holiday Hunt - Flights from Scotland",
  description:
    "Discover amazing holiday destinations reachable from Edinburgh and Glasgow airports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-navy-900 text-white min-h-screen">
        <Navigation />
        <main>{children}</main>
        <footer className="bg-navy-800 border-t border-slate-700/50 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 text-sm">
              Holiday Hunt &mdash; Flights from Edinburgh (EDI) &amp; Glasgow (GLA){" "}
              &bull; All prices approximate &bull; Check airlines for latest fares
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
