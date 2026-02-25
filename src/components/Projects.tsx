import { portfolioData } from "../data/portfolio";

export const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 bg-zinc-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Featured projects</h2>
        <p className="text-gray-400 mb-12">
          Carefully crafted digital experiences that push boundaries
        </p>

        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="bg-gradient-to-br from-teal-400 to-green-500 rounded-lg h-64 md:h-80 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold text-center px-6">
                    {project.title}
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-teal-400 text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold my-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-400 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800 text-teal-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-teal-500 text-black font-semibold rounded hover:bg-teal-400 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
