
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Direktorat IV - Seni Budaya & Content Kreasi | KAPPU DPP Partai Masyumi",
  description: "Program Kerja 9 Program Siap Tayang - Pilot DPD Jakarta Timur",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
