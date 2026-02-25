import { Timeline } from "./ui/timeline";

export const TimelineSection = () => {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Building innovative AI-powered applications and digital tourism platforms
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">Farmer Friends - AI-Powered Smart Agriculture</h4>
              <p className="text-neutral-300 text-sm">Sep - Oct 2025</p>
              <p className="text-neutral-400 text-xs mt-2">
                Built an AI-powered agriculture support platform with multilingual chat, climate-based crop recommendations, and real-time weather insights
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="text-white font-bold mb-2">Yatra - Digital Tourism Platform</h4>
              <p className="text-neutral-300 text-sm">Jul - Aug 2025</p>
              <p className="text-neutral-400 text-xs mt-2">
                Developed an immersive tourism platform showcasing Sikkim's monasteries with interactive 3D models and AR experiences
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
            Recognition and milestones in competitive programming
          </p>
          <div className="space-y-3">
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
