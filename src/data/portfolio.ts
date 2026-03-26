export const portfolioData = {
  personal: {
    name: "Aadarsh Sharma",
    title: "Full Stack Developer",
    bio: "You bring the vision. Aadarsh brings the precision.",
    email: "aadarsh@sharma@gmail.com",
    phone: "+91-7018150566",
    location: "Punjab, India",
    linkedin: "http://www.linkedin.com/in/aadarsh-sharma11",
    github: "https://github.com/Aadi-110i",
  },
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Total Experience", value: "$130M+" },
  ],
  skills: {
    languages: ["Java", "JavaScript", "C++"],
    frameworks: ["React.js", "Node.js", "HTML/CSS", "Tailwind CSS"],
    tools: ["MongoDB", "Git", "GitHub"],
    softSkills: ["Problem-Solving", "Team Player", "Adaptability"],
  },
  projects: [
    {
      id: 1,
      title: "Farmer Friends - AI-Powered Smart Agriculture Assistant",
      duration: "Sep'25-Oct'25",
      category: "AI & Agriculture",
      image: "/assets/farmer-friends.png",
      description:
        "Built an AI-powered agriculture support platform offering multilingual chat assistance, climate-based crop recommendations, and real-time weather insights.",
      features: [
        "Enabled farmers to discover government schemes (Yojanas) by location",
        "Supported sustainable farming practices with real-time environmental data",
      ],
      tech: ["React.js", "Node.js", "OpenAI API", "Weather API", "Geolocation API"],
      link: "https://github.com/Aadi-110i/Farmer-Friends",
    },
    {
      id: 2,
      title: "Yatra - AI-Powered Digital Tourism Platform",
      duration: "Jul'25 - Aug'25",
      category: "Tourism & Culture",
      image: "/assets/yatra.png",
      description:
        "Developed Yatra, a digital tourism platform showcasing Sikkim's monasteries with interactive 3D models and immersive AR experiences.",
      features: [
        "Presented historical scripts, cultural insights, and monastery details",
        "Implemented smart navigation with unexplored path highlighting",
        "Promoted cultural preservation and responsible tourism",
      ],
      tech: ["HTML", "Tailwind CSS", "Three.js", "Node.js", "React.js", "MongoDB"],
      link: "https://github.com/Aadi-110i",
    },
    {
      id: 3,
      title: "Employee Leave Management System",
      duration: "Feb 2026",
      category: "HR & Management",
      image: "/assets/leave-management.png",
      description: "A comprehensive leave management solution allowing employees to apply for, track, and manage leaves, with admin and manager portals for approval workflows.",
      features: [
        "Multi-level approval workflows (Manager, Admin)",
        "Real-time leave balance tracking and role-based access control"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://leave-management-system-sigma-nine.vercel.app/",
    },
    {
      id: 4,
      title: "Study Plan Management System",
      duration: "Jan 2026",
      category: "Education & Productivity",
      image: "/assets/study-plan.png",
      description: "An interactive platform for students to organize, track, and manage their study schedules, assignments, and exam preparations effectively.",
      features: [
        "Customizable study calendars and reminder notifications",
        "Progress tracking and analytics for better time management"
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Aadi-110i",
    },
    {
      id: 5,
      title: "Obsidian - Modern Seat Booking System",
      duration: "Feb 2026",
      category: "SaaS & Booking",
      image: "/assets/obsidian-screenshot.png",
      description:
        "A high-performance seat booking platform built with Next.js 15, featuring a sleek obsidian-themed UI, real-time availability, and secure authentication.",
      features: [
        "Implemented real-time seat status tracking and interactive maps",
        "Secure user authentication with JWT and Bcrypt encryption",
        "Optimized database queries with Prisma and PostgreSQL",
      ],
      tech: ["Next.js 15", "Prisma", "Tailwind CSS", "Framer Motion", "MongoDB/PostgreSQL"],
      link: "https://github.com/Aadi-110i/Obsidian-Seat-Booking",
    },
  ],
  experience: [
    {
      title: "Open Source Contributor",
      company: "freeCodeCamp",
      duration: "Jun 2025 - Present",
      description: "Contributing to freeCodeCamp's open-source curriculum — fixing bugs, improving documentation, and building interactive coding challenges used by millions of learners worldwide",
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      duration: "Jan 2025 - May 2025",
      description: "Developed and delivered custom web applications for small businesses, including e-commerce dashboards and booking systems using the MERN stack",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      gpa: "6.3",
      startDate: "August 2023",
    },
    {
      degree: "Intermediate",
      field: "CBSE",
      institution: "H.P. Board Of School Education",
      location: "Himachal Pradesh, Solan",
      gpa: "7.9",
      endDate: "2021",
    },
    {
      degree: "Matriculation",
      field: "CBSE",
      institution: "MRA DAV Public School",
      location: "Himachal Pradesh, Solan",
      gpa: "7.5",
      endDate: "2019",
    },
  ],
  certificates: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      date: "October 2025",
      link: "#",
    },
    {
      title: "Full Stack Development with MERN",
      date: "July 2025",
      link: "#",
    },
  ],
  achievements: [
    {
      title: "Smart India Hackathon Participant",
      description: "Developed 'Yatra', a 3D digital tourism platform for Sikkim's monasteries",
      date: "August 2025",
    },
    {
      title: "Secured Global Rank 253rd",
      description: "Among 27k+ participants in Leetcode Biweekly Contest 168",
      date: "September 2025",
    },
    {
      title: "Earned 4-Star Rating (1800+) on CodeChef",
      description:
        "By consistently solving DSA and competitive programming challenges",
      date: "2025",
    },
  ],
};
