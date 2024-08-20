import Link from "next/link";
import React from "react";

import Title from "./Title";
import { MovingBorderBtn } from "@/components/Ui/moving-border";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse gap-14 lg:flex-row lg-gap-0 items-center justify-between min-h-[60vh]">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-indigo-500">
            {"I'm Asgar."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Banglore, I'm a Fullstack developer passionate about building a modern web application that users love."
          }
        </p>
        <Link
          href={"mailto:asgar2feb@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact me 📥" />
        </Link>
        <div className="text-3xl font-bold">
          <Link href="https://drive.google.com/file/d/1opLOx7bPospTYkN7tiVSeKAMYFK13gDx/view?usp=drive_link">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>{`Connect to Resume`}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-3 translate-x-8 space-y-3 -rotate-[30deg] relative">
          <div className="glow absolute top-[50%] right-1/2 -z-10"></div>
          <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
          <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
        </div>
        <div className="flex gap-3 translate-x-8 space-y-3 -rotate-[30deg]">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          <div className="w-32 h-32 rounded-full bg-green-500"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold ">
            <p>💼 Available to Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
