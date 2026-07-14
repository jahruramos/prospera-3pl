import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fieldwork = localFont({
  variable: "--font-fieldwork",
  display: "swap",
  src: [
    { path: "../../fonts/Fieldwork-Geo-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../fonts/Fieldwork-Geo-Hair.woff2", weight: "200", style: "normal" },
    { path: "../../fonts/Fieldwork-Geo-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/Fieldwork-Geo-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Fieldwork-Semi-Bold-Geo.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/Fieldwork-Geo-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/Fieldwork-Geo-Black.woff2", weight: "800", style: "normal" },
    { path: "../../fonts/Fieldwork-Geo-Fat.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Prospera 3PL",
  description: "Prospera 3PL — third-party logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fieldwork.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
