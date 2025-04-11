import type { Metadata } from "next";
import "./globals.css";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { Montserrat } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A.T.R.A's Den",
  description: "Next.js portfolio project",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <a
          href="#menu"
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer z-[9]"
        >
          <HiBars3 className="text-white text-3xl transform transition-transform duration-200 hover:rotate-90 active:scale-90" />
        </a>

        <nav id="menu" className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-10 transform translate-y-full opacity-0 invisible transition-all duration-300 target:translate-y-0 target:opacity-100 target:visible ${montserrat.className}`}>
          <Link href="#" className="absolute top-4 right-6 text-white text-3xl cursor-pointer">
            <MdClose />
          </Link>

          <div className="flex flex-col space-y-6 text-2xl">
            {["Home", "Author", "Projects", "Contact"].map((item) => (
                <a key={item} href={`/#${item.toLowerCase()}`} className="hover:text-gray-400">
                  {item}
                </a>
            ))}
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
