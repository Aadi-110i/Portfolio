import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { styles } from "../styles";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src="/logo.svg" alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Aadarsh &nbsp;
                        <span className='sm:block hidden'> | Computer Science</span>
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {["About", "Projects", "Contact"].map((nav) => (
                        <li
                            key={nav}
                            className={`${active === nav ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav)}
                        >
                            <MagneticButton>
                                <a href={`#${nav.toLowerCase()}`}>{nav}</a>
                            </MagneticButton>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
