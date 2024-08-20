"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "../../components/Ui/card-hover-effect";
import {
  SiAntdesign,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMaterialdesign,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "React.js",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "Ant Design",
      Icon: SiAntdesign,
    },
    {
      text: "Html",
      Icon: SiHtml5,
    },
    {
      text: "Css",
      Icon: SiCss3,
    },
    {
      text: "Node.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Socket.io",
      Icon: SiSocketdotio,
    },
    {
      text: "MongoDb",
      Icon: SiMongodb,
    },
    {
      text: "Material-Ui",
      Icon: SiMaterialdesign,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
