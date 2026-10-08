import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rachelle Raros | Programmer Profile",
  description: "The personal portfolio of Rachelle Raros, an Information Technology student studying Network Design Management at Nueva Vizcaya State University.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
