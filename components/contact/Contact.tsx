import style from '@/styles/contact.module.css';

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className={` ${style.contact_text} w-full `}>
                <h1 className='text-[3.5rem] md:text-[4.28rem] lg:text-[4.92rem] xl:text-[5.1rem] font-medium'>
                    Contact Me
                </h1>
                <p>
                    Hello dear? Send us an&emsp;
                    <span>
                        email 
                    </span>
                    &emsp;instead.
                </p>
               
            </div>
            <div className={` ${style.contact_form} w-full `}>
                <form method="" >

                    <div className="flex flex-col min-[479px]:flex-row gap-6 w-full ">
                        <div className={` ${style.form_div} flex flex-col w-full `}>
                            <label htmlFor="name" >First name</label>
                            <input className='bg-transparent' type="text" maxLength={256} name="name" data-name="Name" placeholder="e.g. John" id="name" required />
                        </div>
                        <div className={` ${style.form_div} flex flex-col w-full`}>
                            <label htmlFor="name-4">Last name</label>
                            <input className='bg-transparent' type="text" maxLength={256} name="name-4" data-name="Name 4" placeholder="e.g. Doe" id="name-4" required />
                        </div>
                    </div>
                    
                    <div className="flex flex-col min-[479px]:flex-row gap-6 w-full my-6 ">
                        <div className={` ${style.form_div} flex flex-col w-full`}>
                            <label htmlFor="name-3">your email</label>
                            <input className='bg-transparent' type="text" maxLength={256} name="name-3" data-name="Name 3" placeholder="e.g. john@mail.co" id="name-3" required />
                        </div>
                        <div className={` ${style.form_div} flex flex-col w-full`}>
                            <label htmlFor="name-2">Your company</label>
                            <input className='bg-transparent' type="text" maxLength={256} name="name-2" data-name="Name 2" placeholder="e.g. Webflow" id="name-2" />
                        </div>
                    </div>
                    
                    <div className={` ${style.form_div} flex flex-col`}>
                        <label htmlFor="field">your message</label>
                        <textarea className='bg-transparent' required placeholder="Tell me more about the project." maxLength={5000} id="field" name="field" data-name="Field"></textarea>
                    </div>

                    <input className='h-[4.4rem] bg-neutral-800 hover:bg-neutral-950 border-none outline-none w-full my-6 text-neutral-200 rounded-full' type="submit" value="Submit" data-wait="Please wait..." />

                </form>
            </div>
        </div>
    );
}

export default Contact;

