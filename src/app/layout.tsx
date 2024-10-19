import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { GoDotFill } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const instruments = Instrument_Sans({
  subsets: ['latin'],
  variable: "--font-instrument",
})

const clash = localFont({
  src: [
    {
      path: './fonts/clash-grotesk/ClashGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/clash-grotesk/ClashGrotesk-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    { 
      path: './fonts/clash-grotesk/ClashGrotesk-Medium.otf',
      weight: '500',
    },
    {
      path: './fonts/clash-grotesk/ClashGrotesk-Regular.otf',
      weight: '400',
    },
    {
      path: './fonts/clash-grotesk/ClashGrotesk-Regular.otf',
      weight: '300'
    }
  ],
  variable: "--font-clash"
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instruments.variable} ${clash.variable} antialiased w-screen`}
      >
        <div className="w-full font-instrument relative min-h-screen bg-bg overflow-scroll flex justify-start items-center flex-col gap-24">
          <header className="w-full flex justify-between items-center px-6 lg:px-12 py-4">
                
                  <div>
                    <span className="flex items-center justify-start gap-1">
                      <span className="rounded-lg h-8 w-7 inline-block bg-primary-50" />
                      <strong className="font-bold text-lg text-[#fff]">JuggerVault</strong>
                    </span>
                  </div>

                  <div>
                    <nav>
                      <ul className="hidden lg:flex items-center justify-center gap-10 font-bold text-[#fff] capitalize">
                        <li>
                          <Link href="#">whitepaper</Link>
                        </li>
                        <li>
                          <Link href="#">about</Link>
                        </li>
                        <li>
                          <Link href="#">contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div>
                      <button className="hidden lg:block rounded-[52px] bg-[#1E42AC] text-white font-semibold px-6 py-3">
                        Join the waitlist
                      </button>
                      <button className="btn btn-ghost btn-square btn-sm lg:hidden">
                        <FiMenu color="#fff" size={25} />
                      </button>
                  </div>
                
              
          </header>

          <main>
            {children}
          </main>

          <footer className="w-full bg-white">
            <div className="w-full px-10 py-10 max-w-3xl mx-auto">
              <div className="mx-auto w-fit">
                <button className="py-3 px-4 rounded-[32px] bg-basic-100 border border-[#E7E7E7] flex items-center justify-evenly font-medium text-[#95B0FF]">
                  <GoDotFill color="#95B0FF" size={20} />
                  Get early access
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-4xl mx-auto w-fit font-medium font-clash">Get Instant Loans With No Hassle</h3>
              </div>

              <form className="mt-8">
                <div className="bg-white w-fit mx-auto rounded-[49px] flex items-center border border-[#E7E7E7] px-4 py-2 shadow-[csbtn]">
                  <div className="flex-1">
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="w-[300px] border-none outline-none" />
                  </div>
                  <button className="rounded-[52px] bg-[#1E42AC] text-white font-semibold px-6 py-3">
                    Join the waitlist
                  </button>
                </div>
              </form>

              <div className="mt-14">
                <nav className="flex items-center justify-between">
                  <ul className="flex items-center justify-start gap-6">
                    <li>
                      <span className="flex items-center justify-start gap-1">
                        <span className="rounded-lg h-8 w-7 inline-block bg-primary-50" />
                        <strong className="font-bold text-lg">JuggerVault</strong>
                      </span>
                    </li>
                    <li>Whitepaper</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>

                  <ul className="flex items-center justify-end gap-4">
                    <li>
                      <span className="visual-hide">X (Formerly Twitter)</span>
                      <FaXTwitter />
                    </li>
                    <li>
                      <span className="visual-hide">LinkedIn</span>
                      <FaLinkedin />
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between text-sm">
                  <p>Made with <em className="hidden">Love</em> &#x2764;&#xfe0f;</p>

                  <p>&copy; 2024 Juggervault. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
