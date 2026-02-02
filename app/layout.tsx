import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

/* Google Fonts Setup */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

/* SEO Metadata (Maya Reynolds) */

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds offers trauma-informed therapy for anxiety, burnout, and perfectionism in Santa Monica, California.",
};

/* Root Layout Component */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
