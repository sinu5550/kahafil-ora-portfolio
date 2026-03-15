import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const amiri = { variable: "" }; // Removed next/font version

export const metadata: Metadata = {
  title: "Kahafil Ora | Portfolio",
  description: "A Visionary Leader With 22+ Years of Experience In Innovation And Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${plusJakartaSans.variable} ${fragmentMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
