'use client'
import Link from 'next/link';
import {motion} from "framer-motion";
import style from "@/styles/layout.module.css"



const Navbar = () => {
    return (
        <section className={`  my-4`}>
            <header className="nav m-4 text-neutral-50 ">
                <div className="nav-container md:flex md:justify-between items-center">
                    <motion.div 
                        initial={{ opacity:0 }} 
                        animate={{ opacity:1 }} 
                        transition={{ duration:0.5 }}
                         className={` ${style.logo_name} md:flex hidden`}  >
                        <p>sebastine</p>
                    </motion.div>
                    <div className={` ${style.nav}`}>
                        <ul className="nav-links flex justify-between md:gap-14 md:text-lg text-xl lg:px-[20px]">
                            <Link href="#about">About</Link>
                            <Link href="#projects">Projects</Link>
                            <Link href="#contact">Contact</Link>
                        </ul>
                        
                    </div>
                    <div className="nav-logo md:flex hidden">
                        <button className={` ${style.resume_btn} relative border-[.15rem] border-[#cfcccc]  rounded-[4rem] outline-none bg-gradient-to-r from-red-400 to-red-700 px-10 py-[.6rem] text-[#161616] font-bold `}>Resume</button>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Navbar;