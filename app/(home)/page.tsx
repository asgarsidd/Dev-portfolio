import { Navbar } from "./Navbar";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
//import FooterCard, { ThreeDCardDemo } from "./FooterCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.06] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-22 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full "></div>
        <div className="max-w-7xl mx-auto p-5 mt-20 ">
          {/* <ThreeDCardDemo /> */}
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}
