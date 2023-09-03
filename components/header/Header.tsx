'use client'

import Image from "next/image";
import {AiFillTwitterCircle} from "react-icons/ai";
import devseb from "@/public/image/mypix.png"
import style from "@/styles/header_layout.module.css"

const Header = () => {
   
    return (
        <section className="min-h-[85vh] my-10 text-center max-w-[40rem]">
            <div className="text-red-700 px-10 font-bold">
                <h1 className="text-[2.45rem] py-3 text-neutral-700 ">
                    <span className={` ${style.emoji} `}>✋</span>
                    <span className="text-neutral-400">, I&lsquo;m </span>
                    Chiemelie Nwobodo
                    {/* text-gray-900 dark:text-gray-100 */}
                </h1>
                <h3 className="text-2xl py-2">
                    Developer and Engineer 
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-md leading-6 font-semibold ">
                Inspired by the adage &lsquo;predict the future by inventing it,&lsquo; 
                I, a dedicated software engineer, am poised to be a trailblazer. 
                With a vision for innovation and a drive to create impactful solutions, 
                I am excited to contribute my skills to startups and established companies, shaping the future.
                    
                </p>
                {/* <div className="soc">
                <AiFillTwitterCircle />
                </div> */}
            </div>
            <div className={ `  relative mx-auto bg-gradient-to-b from-red-600 rounded-full my-6 w-60 h-60 overflow-hidden border-[.168rem] border-neutral-800 `}>
                <Image src={devseb} layout="fill" objectFit="cover" alt={""}/>
            </div>
        </section>
    );
}

export default Header;