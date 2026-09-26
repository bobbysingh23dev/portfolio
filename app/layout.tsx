import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: set this to your real deployed domain so OG/absolute URLs resolve.
  metadataBase: new URL("https://bobby-singh.vercel.app"),
  title: "Bobby Singh // Full Stack Developer",
  description:
    "Bobby Singh — Full Stack Developer building end-to-end products: web and mobile front-ends, Node.js APIs, SQL & NoSQL databases, and AI features.",
  openGraph: {
    title: "Bobby Singh // Full Stack Developer",
    description:
      "End-to-end engineering across web, mobile, APIs, databases and AI — I pick the right tool per layer, not one fixed stack.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ground text-ink">{children}</body>
    </html>
  );
}
