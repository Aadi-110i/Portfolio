import { portfolioData } from "../data/portfolio";
import { SparklesCore } from "./ui/sparkles";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-black text-center px-6 relative overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesherohero"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#14b8a6"
          speed={0.5}
        />
      </div>

      {/* Content overlay */}
      <div className="space-y-6 max-w-3xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          {portfolioData.personal.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Full Stack Developer | AI Enthusiast | Problem Solver
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            View My Work
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
