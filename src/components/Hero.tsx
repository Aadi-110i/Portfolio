import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import AvatarCanvas from "./canvas/Avatar";

const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 300], [0, 100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className={`relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden bg-primary`}>

            {/* Background Grid / Texture (Optional for Infracorp feel, keeping clean black for now) */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-primary to-primary"></div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className={`relative z-10 flex flex-col items-center justify-center text-center ${styles.paddingX} max-w-7xl mx-auto`}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`${styles.heroHeadText} text-white-100 font-bold tracking-tighter uppercase`}
                >
                    AADARSH <br className="sm:hidden" /> <span className="text-secondary">SHARMA</span>
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="w-24 h-1 bg-white-100 mt-6 mb-6"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`${styles.heroSubText} text-secondary max-w-2xl font-light tracking-wide uppercase text-sm md:text-base`}
                >
                    Infrastructure of the Future <br className="sm:hidden" />
                    Computer Science & Engineering
                </motion.p>
            </motion.div>

            {/* 3D Element - Subtle and centered or minimal */}
            <div className="absolute bottom-0 w-full h-[40vh] z-0 opacity-60">
                <AvatarCanvas />
            </div>

            {/* Scroll Indicator - Minimal Line */}
            <motion.div
                className='absolute bottom-10 w-full flex justify-center items-center z-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className='w-[1px] h-[80px] bg-secondary overflow-hidden'>
                    <motion.div
                        animate={{ y: [-80, 80] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className='w-full h-1/2 bg-white-100'
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
