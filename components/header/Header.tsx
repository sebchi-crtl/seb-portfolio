import Image from "next/image";
import {AiFillTwitterCircle} from "react-icons/ai";
import devseb from "@/public/image/mypix.png"

const Header = () => {
    return (
        <section className="min-h-screen text-center">
            <div className="text-red-700 px-10">
                <h1 className="text-5xl py-3 text-teal-700 font-medium ">
                    Chiemelie Nwobodo
                    {/* text-gray-900 dark:text-gray-100 */}
                </h1>
                <h3 className="text-2xl py-2">
                    Developer and Designer 
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-md leading-6">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                    
                </p>
                {/* <div className="soc">
                <AiFillTwitterCircle />
                </div> */}
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-red-600 rounded-full w-80 h-80 overflow-hidden ">
                <Image src={devseb} layout="fill" objectFit="cover" alt={""}/>
            </div>
        </section>
    );
}

export default Header;