import { styles } from "../styles";

const skillsData = [
    {
        category: "Languages",
        skills: ["Java", "JavaScript", "C++"],
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React.js", "Node.js", "Three.js", "Tailwind CSS"],
    },
    {
        category: "Tools & Databases",
        skills: ["MongoDB", "Git", "GitHub"],
    },
];

const Skills = () => {
    return (
        <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <div className='flex flex-col text-center w-full mb-10'>
                <p className={styles.sectionSubText}>What I bring to the table</p>
                <h2 className={styles.sectionHeadText}>Skills.</h2>
            </div>

            <div className='flex flex-wrap justify-center gap-10'>
                {skillsData.map((category) => (
                    <div
                        key={category.category}
                        className='bg-black-200 p-6 rounded-2xl w-full sm:w-[300px] border border-white-100/10'
                    >
                        <h3 className='text-white text-[20px] font-bold mb-4 border-b border-secondary pb-2'>
                            {category.category}
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className='bg-tertiary text-secondary py-1 px-3 rounded-lg text-[14px]'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
