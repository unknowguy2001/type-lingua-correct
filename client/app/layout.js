import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Type Lingua Correct",
  description: "Created by unknowguy2001",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full">
      <body className={`${poppins.className} min-h-svh`}>
        {<Navbar />}
        {children}
      </body>
    </html>
  );
}
