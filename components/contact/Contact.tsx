import style from '@/styles/contact.module.css';

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className={` ${style.contact_text} w-full `}>
                <h1>
                    Contact
                </h1>
            </div>
            <div className={` ${style.contact_text} w-full `}>
                <form method="" >
                    <div className={` ${style.form_div} flex flex-col `}>
                        <label htmlFor="name" >First name</label>
                        <input type="text" maxLength={256} name="name" data-name="Name" placeholder="e.g. John" id="name" required />
                    </div>
                    <div className={` ${style.form_div} flex flex-col`}>
                        <label htmlFor="name-4">Last name</label>
                        <input type="text" maxLength={256} name="name-4" data-name="Name 4" placeholder="e.g. Doe" id="name-4" required />
                    </div>
                    <div className={` ${style.form_div} flex flex-col`}>
                        <label htmlFor="name-3">your email</label>
                        <input type="text" maxLength={256} name="name-3" data-name="Name 3" placeholder="e.g. john@mail.co" id="name-3" required />
                    </div>
                    <div className={` ${style.form_div} flex flex-col`}>
                        <label htmlFor="name-2">Your company</label>
                        <input type="text" maxLength={256} name="name-2" data-name="Name 2" placeholder="e.g. Webflow" id="name-2" />
                    </div>
                    <div className={` ${style.form_div} flex flex-col`}>
                        <label htmlFor="field">your message</label>
                        <textarea required placeholder="Tell us more about the project." maxLength={5000} id="field" name="field" data-name="Field"></textarea>
                    </div>

                    <input type="submit" value="Submit" data-wait="Please wait..." />

                </form>
            </div>
        </div>
    );
}

export default Contact;

