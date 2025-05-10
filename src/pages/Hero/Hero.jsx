import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Backend Engineer",
    "DevOps Engineer",
    "Full-Stack Developer",
    "Learning: Java",
    "Go"
  ];


      // yearsOfExperience: 1, 
      
    // hireable: function() {
    //     return (
    //         this.hardWorker &&
    //         this.problemSolver &&
    //         this.skills.length >= 5 &&
    //     );
  const [code] = useState(`
const profile = {
    name: 'Abhinav Anand',
    title: 'Backend Engineer | DevOps Engineer | Problem Solver',
    skills: [
        'React', 'NextJS', 'Redux', 'Express', 'Node.js',
        'Java', 'Postman', 'PostgreSQL', 'RESTful API',
        'MySQL', 'MongoDB', 'Docker', 'AWS', 'Kubernetes',
        'Git', 'Linux', 
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="relative flex items-center justify-center min-h-screen px-4 py-10 hero sm:px-6 lg:px-8 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* Choose one of these background options */}
          <GridBackground />

          {/* Or keep the original backgrounds if you prefer */}
          {/* <HexagonBackground /> */}
          {/* <AnimatedGrid /> */}
          {/* <DotBackground /> */}

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div
            className="container relative z-10 flex flex-col items-center justify-between py-8 mx-auto lg:flex-row md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="relative w-full mb-12 lg:w-1/2 lg:mb-0 animate__animated animate__fadeInLeft">
              {/* Decorative blurs */}
              <div className="absolute hidden w-48 h-48 rounded-full lg:-top-20 lg:-left-20 lg:block lg:w-64 lg:h-64 bg-blue-500/10 blur-3xl"></div>
              <div className="absolute hidden w-48 h-48 rounded-full lg:block lg:top-40 lg:-right-20 lg:w-64 lg:h-64 bg-teal-500/10 blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 mb-6 border rounded-full sm:px-4 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-300 sm:text-sm">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I&apos;m
                    <span className="typing-effect gradient-text">
                      {" "}
                      Abhinav Anand
                    </span>
                  </span>
                </h1>
                <div className="absolute w-24 h-24 -translate-y-1/2 rounded-full -z-10 top-1/2 left-1/4 sm:w-32 sm:h-32 bg-blue-500/20 blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border sm:gap-3 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border-blue-500/20 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="text-sm text-blue-400 fas fa-rocket animate-bounce sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative max-w-xl mb-8 sm:mb-12">
                <p className="text-base leading-relaxed sm:text-xl text-gray-300/90">
                  Development Enthusiast | Coding the future 💻✨
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/abhinavanand-010/"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 font-medium text-white">
                      <span>GitHub</span>
                      <i className="transition-all duration-300 transform fas fa-arrow-right group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <a
                  href="https://drive.google.com/file/d/1JRplUple-5W5Y85XOORMjsgsUShuxS9G/view?usp=drivesdk"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 font-medium text-gray-300 group-hover:text-white">
                      <span>Get Resume</span>
                      <i className="transition-all duration-300 transform fas fa-envelope group-hover:rotate-12"></i>
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating badges */}
              {/* <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
                <div className="px-4 py-2 text-purple-400 border rounded-lg bg-purple-500/10 backdrop-blur-sm border-purple-500/20">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI
                  Magic
                </div>
              </div> */}
              <div className="absolute hidden lg:block right-10 top-20 animate-float">
                <div className="px-4 py-2 text-blue-400 border rounded-lg bg-blue-500/10 backdrop-blur-sm border-blue-500/20">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 border rounded-lg bg-amber-500/10 backdrop-blur-sm border-amber-500/20 text-amber-400">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="bg-red-500 window-dot"></div>
                    <div className="bg-yellow-500 window-dot"></div>
                    <div className="bg-green-500 window-dot"></div>
                    <span className="flex items-center gap-2 ml-2 text-sm text-gray-400">
                      <i className="fas fa-code"></i>
                      profile.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute flex flex-col items-center gap-2 transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <i className="text-blue-400 fas fa-mouse"></i>
            About me
          </span>
          <i className="text-xl text-blue-400 fas fa-chevron-down"></i>
        </div>
        <PortfolioPage />
      </main>
    </>
  );
}
