import type { Metadata } from "next";
import { HiBars3 } from "react-icons/hi2";
import "./globals.css";


export const metadata: Metadata = {
  title: "A.T.R.A's Den",
  description: "Next.js portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className="bg-black" >
        <nav className="relative flex justify-center w-full">
          <HiBars3 className="absolute bottom-0 text-white text-3xl" />
        </nav>
        {children}
      </body>
    </html>
  );
}
