import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import AvatarCanvas from "./canvas/Avatar";

const services = [
    {
        title: "Full Stack Developer",
        icon: "💻", // Placeholder icon
    },
    {
        title: "3D Web Experiences",
        icon: "🌐",
    },
    {
        title: "AI Solutions",
        icon: "🤖",
    },
    {
        title: "Problem Solver",
        icon: "🧩",
    },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ index, title, icon }: any) => (
    <Tilt className='xs:w-[250px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className='w-full bg-gradient-to-r from-gray-700 to-gray-900 p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <div className='text-white text-[40px]'>{icon}</div>
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <section className={`relative w-full mx-auto ${styles.padding} max-w-7xl`}>
            <div className={`flex flex-col-reverse lg:flex-row gap-10 overflow-hidden`}>
                <motion.div
                    className='flex-1 h-[350px] md:h-[550px] w-full'
                >
                    <AvatarCanvas />
                </motion.div>

                <div className='flex-1 flex flex-col justify-center'>
                    <motion.div>
                        <p className={styles.sectionSubText}>Introduction</p>
                        <h2 className={styles.sectionHeadText}>Overview.</h2>
                    </motion.div>

                    <motion.p
                        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                    >
                        I am Aadarsh Sharma, a Computer Science and Engineering student at Lovely Professional University.
                        I specialize in building immersive web applications using React, Three.js, and Node.js.
                        With a strong foundation in Data Structures and Algorithms (C++, Java), I solve complex problems efficiently.
                        My projects range from AI-powered agricultural assistants to immersive 3D tourism platforms.
                        Certifications: Oracle Cloud Infrastructure 2025 AI Foundations, Full Stack MERN.
                    </motion.p>
                </div>
            </div>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default About;
