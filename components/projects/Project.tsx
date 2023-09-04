'use client';
// import { url } from 'inspector';
import { Tilt } from 'react-tilt';


const Project = () => {

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row my-[5rem]">
                <div className="text w-full">
                    texting
                </div>
                <div className="img w-full h-[60vh]">
                    <Tilt options={defaultOptions} className={` flex items-center justify-center w-full h-full `} style={{  
                        backgroundImage: `url(/image/preview.jpeg) `,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',  objectFit: 'cover' }}>
                        <div className=' text-[5rem]'>👽</div>
                    </Tilt>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse my-[5rem]">
                <div className="text w-full">
                    texting
                </div>
                <div className="img w-full h-[60vh]">
                    <Tilt options={defaultOptions} className={` flex items-center justify-center w-full h-full `} style={{  
                        backgroundImage: `url(/image/preview.jpeg) `,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',  objectFit: 'cover' }}>
                        <div className=' text-[5rem]'>👽</div>
                    </Tilt>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row my-[5rem]">
                <div className="text w-full">
                    texting
                </div>
                <div className="img w-full h-[60vh]">
                    <Tilt options={defaultOptions} className={` flex items-center justify-center w-full h-full `} style={{  
                        backgroundImage: `url(/image/preview.jpeg) `,
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',  objectFit: 'cover' }}>
                        <div className=' text-[5rem]'>👽</div>
                    </Tilt>
                </div>
            </div>
            
            
        </div>
    );
}

export default Project;