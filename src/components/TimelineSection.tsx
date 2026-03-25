import { Timeline } from "./ui/timeline";

export const TimelineSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Starting the technical journey with foundational certifications and core computer science concepts
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">Google & IBM Certifications</h4>
              <p className="text-neutral-300 text-sm">Completed in Sep 2024</p>
              <p className="text-neutral-400 text-xs mt-2">
                Successfully mastered 'Bits and Bytes of Computer Networking' (Google) and 'Introduction to Hardware and Operating Systems' (IBM) to build a strong hardware/software foundation.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Building innovative AI-powered applications and digital tourism platforms
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">Yatra - Smart India Hackathon Project</h4>
              <p className="text-neutral-300 text-sm">Jul - Aug 2025</p>
              <p className="text-neutral-400 text-xs mt-2">
                Developed for SIH, this immersive tourism platform showcases Sikkim's monasteries with interactive 3D models and AR experiences.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Deepening expertise in Generative AI and advanced software engineering
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">GEN AI NASSCOM Certificate</h4>
              <p className="text-neutral-300 text-sm">Feb 2026</p>
              <p className="text-neutral-400 text-xs mt-2">
                Advanced certification in Generative AI, focusing on practical implementation and industry-standard skill development.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Building strong foundations in computer science
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">Bachelor of Technology - CSE</h4>
              <p className="text-neutral-300 text-sm">Lovely Professional University, India</p>
              <p className="text-teal-400 text-sm mt-2">GPA: 6.3 | Since Aug 2023</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">H.P. Board of School Education</h4>
              <p className="text-neutral-300 text-sm">Intermediate - CBSE</p>
              <p className="text-teal-400 text-sm mt-2">GPA: 7.9</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Achievements",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Recognition and milestones in competitive programming & innovation
          </p>
          <div className="space-y-3">
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> GEN AI NASSCOM Certified — Practical Implementation & Industry Skills
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> Smart India Hackathon Participant — Developed cultural preservation platform 'Yatra'
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> Secured Global Rank 253rd in Leetcode Biweekly Contest 168
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> Earned 4-Star Rating (1800+) on CodeChef
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> Certified in Oracle Cloud Infrastructure 2025 AI Foundations
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> Google & IBM Foundations Certified (Networking, Hardware & OS)
            </div>
            <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm bg-zinc-800 p-3 rounded">
              <span className="text-teal-400">✓</span> Full Stack Development with MERN Certified
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-black">
      <Timeline data={timelineData} />
    </section>
  );
};
