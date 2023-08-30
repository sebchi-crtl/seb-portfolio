import Link from 'next/link';
import {motion} from "framer-motion";



const Navbar = () => {
    return (
        <section className={`  `}>
            <header className="nav m-4 text-neutral-800 dark:text-slate-400">
                <div className="nav-container md:flex md:justify-between items-center">
                    <div className="nav-logo md:flex hidden">
                        sebastine
                    </div>
                    <div className="nav-links flex justify-between md:gap-14 md:text-lg text-xl">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="nav-logo md:flex hidden">
                        <button className='border-[.168rem] border-neutral-800  rounded-[0.5rem] outline-none bg-gradient-to-r from-red-400 to-red-700 px-8 py-2 bg- text-slate-100'>Resume</button>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Navbar;