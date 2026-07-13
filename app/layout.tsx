import type { Metadata, Viewport } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const metadata: Metadata = {
  title: "Go D — Your Ride. Your Price. Your Way.",
  description: "Go D is Riyadh's premium ride-hailing app. Your ride, your price, your way.",
  icons: { icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%23006C35'/%3E%3Cpath fill='white' d='M7 8h9.5c5.3 0 8.5 3.1 8.5 8s-3.2 8-8.5 8H7V8Zm6 5v6h3.1c1.9 0 3-1 3-3s-1.1-3-3-3H13Z'/%3E%3C/svg%3E" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#001a0e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" suppressHydrationWarning><body className={`${jakarta.variable} ${cairo.variable}`}>{children}</body></html>;
}
