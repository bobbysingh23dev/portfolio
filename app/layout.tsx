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
    "Bobby Singh — Full Stack Developer building end-to-end products with React Native, React.js, Next.js, Node.js and PostgreSQL.",
  openGraph: {
    title: "Bobby Singh // Full Stack Developer",
    description:
      "End-to-end engineering with TypeScript, Node & Postgres. Mobile to database.",
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
