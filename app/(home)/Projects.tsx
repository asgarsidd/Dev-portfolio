import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiNodemon,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/Ui/direction-aware-hover";


export default function Projects() {
  const projects = [
    {
      title: "E-cart Application",
      tech: [SiReact, SiRedux, SiJavascript, SiBootstrap],
      Link: "https://e-cart-mobile.vercel.app/",
      cover: "/images/project1.png",
      background: "bg-indigo-500  ",
    },
    {
      title: "Currency Converter",
      tech: [SiReact, SiTailwindcss, SiJavascript],
      Link: "https://currency-converter980.vercel.app/",
      cover: "/images/project2.png",
      background: "",
    },
    {
      title: "Hot Gadgets (Phone Hunting)",
      tech: [SiHtml5, SiCss3, SiJavascript],
      Link: "https://asgarsidd.github.io/Phone_Hunting/",
      cover: "/images/project4.png",
      background: "",
    },

    {
      title: "Real-Time Chat Application",
      tech: [
        SiHtml5,
        SiJavascript,
        SiCss3,
        SiNodedotjs,
        SiNodemon,
        SiSocketdotio,
      ],
      Link: "https://asgarsidd.github.io/RealChat-Application/",
      cover: "/images/project3.png",
      background: "",
    },
    {
        title: "Travel Tourist",
        tech: [
          SiHtml5,
          SiCss3,
        ],
        Link: "https://asgarsidd.github.io/Geekster-Booster-Assignment/Travel_Site/index.html",
        cover: "/images/TravelSite.png",
        background: "",
      },
      {
        title: "Microsoft Clone",
        tech: [
          SiHtml5,
          SiCss3,
        ],
        Link: "https://asgarsidd.github.io/Geekster-Booster-Assignment/Microsoft_clone/index.html",
        cover: "/images/microsoft.png",
        background: "",
      },
      {
        title: "LobeTour",
        tech: [
          SiHtml5,
          SiCss3,
        ],
        Link: "https://asgarsidd.github.io/Geekster-Booster-Assignment/LobeTour/index.html",
        cover: "/images/LobeTour.png",
        background: "",
      },
      {
        title: "Netflix clone",
        tech: [
          SiHtml5,
          SiCss3,
        ],
        Link: "https://asgarsidd.github.io/Geekster-Booster-Assignment/Netflix_landing_page/index.html",
        cover: "/images/Netflix.png",
        background: "",
      },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨🖌️"
        className="flex flex-col items-center justify-center rotate-6 "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-2 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5 ">
                    <h1 className="text-2xl font-bold ">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
