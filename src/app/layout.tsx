import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduardo Donzeli — Senior Java Backend Engineer",
  description:
    "Senior Java Developer building scalable backend systems, distributed architectures, and real-time data pipelines with Kafka, Apache Flink, Spring Boot, Kubernetes, AWS and GCP.",
  authors: [{ name: "Eduardo Donzeli Paino" }],
  keywords: [
    "Senior Java Developer",
    "Backend Engineer",
    "Distributed Systems",
    "Apache Kafka",
    "Apache Flink",
    "Spring Boot",
    "Microservices",
    "Kubernetes",
    "AWS",
    "GCP",
    "Event-Driven Architecture",
    "Real-time Data",
  ],
  openGraph: {
    title: "Eduardo Donzeli — Senior Java Backend Engineer",
    description:
      "Building scalable backend systems powered by real-time data and event-driven architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Donzeli — Senior Java Backend Engineer",
    description:
      "Building scalable backend systems powered by real-time data and event-driven architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="noise min-h-screen bg-bg text-text">{children}</body>
    </html>
  );
}
