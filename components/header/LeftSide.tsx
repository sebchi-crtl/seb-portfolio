import {
    TbBrandGithub,
    TbBrandFacebookFilled,
    TbBrandLinkedin
} from 'react-icons/tb';
import styles from "@/styles/left_layout.module.css"

import { AiOutlineMedium, AiOutlineInstagram } from 'react-icons/ai'

const LeftSide = () => {
    return (
        <div className=' h-full hidden lg:flex flex-col items-center justify-end gap-4 text-red-900'>
            <div className={` ${styles.left_icon} relative flex flex-col gap-4 border-neutral-100 rounded-full border-[.2rem] p-[.6rem] `}>
                <a href="http://" target="_blank">
                    <span className='w-10 h-10 text-xl bg-slate-50 hover:bg-red-600 rounded-full inline-flex items-center justify-center 
                    hover:text-neutral-800 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub />
                    </span>
                </a>
                <a href="http://" target="_blank">
                    <span className='w-10 h-10 text-xl bg-slate-50 hover:bg-red-600 rounded-full inline-flex items-center justify-center 
                    hover:text-neutral-800 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandFacebookFilled />
                    </span>
                </a>
                <a href="http://" target="_blank">
                    <span className='w-10 h-10 text-xl bg-slate-50 hover:bg-red-600 rounded-full inline-flex items-center justify-center 
                    hover:text-neutral-800 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <AiOutlineMedium />
                    </span>
                </a>
                <a href="http://" target="_blank">
                    <span className='w-10 h-10 text-xl bg-slate-50 hover:bg-red-600 rounded-full inline-flex items-center justify-center 
                    hover:text-neutral-800 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandLinkedin />
                    </span>
                </a>
                <a href="http://" target="_blank">
                    <span className='w-10 h-10 text-xl bg-slate-50 hover:bg-red-600 rounded-full inline-flex items-center justify-center 
                    hover:text-neutral-800 cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <AiOutlineInstagram />
                    </span>
                </a>
            </div>
            <div className="w-[2px] h-32 bg-neutral-50">

            </div>
        </div>
    );
}

export default LeftSide;