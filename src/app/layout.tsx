import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./(components)/navigation";
import { Footer } from "./(components)/footer";

export const metadata: Metadata = {
  title: "Juggervault | Real-World Asset Tokenization Infrastructure",
  description: "A compliance-first platform for tokenizing, exchanging, and enabling liquidity for real-world assets across Africa and beyond.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <body className="antialiased w-full overflow-x-hidden" suppressHydrationWarning>
        <div className="w-full relative min-h-screen">
          <div className="relative z-10 w-full">
            <Navigation />
            <main className="relative z-10 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
