import "./globals.css";

export const metadata = {
  title: "Jharyll | Programmer Profile",
  description: "Jharyll's personal programmer portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}