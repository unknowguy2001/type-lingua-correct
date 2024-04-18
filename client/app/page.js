"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <TypeAnimation
            sequence={["Welcome to \n Type Linuga Correct !", 1000, "", 500]}
            style={{ whiteSpace: "pre-line" }}
            className="text-center text-4xl text-white"
            repeat={Infinity}
          />
        </div>
        <div className="flex gap-5">
          <Link href="/typing/eng-thai" className="btn btn-accent">
            English → Thai
          </Link>
          <Link href="/typing/thai-eng" className="btn btn-accent">
            Thai → English
          </Link>
        </div>
      </div>
    </>
  );
}
