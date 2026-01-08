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
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <div className="w-full relative max-h-screen h-screen bg-slate-50 overflow-scroll">
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
