import HeroImg from "@/assets/images/aa.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="max-w-5xl px-6 mx-auto space-y-8 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium text-white lg:text-5xl">
            Engineer, Developer, Designer, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="relative p-px bg-linear-to-b aspect-76/59 rounded-2xl from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Abhinav Anand, a passionate engineer
                specializing in creating innovative solutions and
                user-friendly interfaces.{" "}
                I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development and deployment faster and easier. Currently, I'm expanding into Java and Go backend development and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="pl-4 border-l-4 border-gray-300">
                  <p className="text-white">
                    
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. 
                  </p>

                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
