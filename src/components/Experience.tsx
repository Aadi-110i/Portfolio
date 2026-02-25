import { portfolioData } from "../data/portfolio";

export const Experience = () => {
  return (
    <section className="w-full py-20 bg-zinc-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-teal-500 pl-6">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-teal-400 text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-teal-500 pl-6">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-teal-400 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">
                    {edu.startDate && `${edu.startDate}`}
                    {edu.endDate && ` - ${edu.endDate}`}
                  </p>
                  <p className="text-gray-300 text-sm">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.certificates.map((cert, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition">
                <p className="font-bold text-white">{cert.title}</p>
                <p className="text-teal-400 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8">Achievements</h3>
          <div className="space-y-6">
            {portfolioData.achievements.map((achievement, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                  <p className="text-gray-500 text-xs mt-1">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
