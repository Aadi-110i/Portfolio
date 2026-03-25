import { portfolioData } from "../data/portfolio";

export const Skills = () => {
  return (
    <section className="w-full py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">We specialise in crafting the stories, brands and sites that shape what's next.</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="px-4 py-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
