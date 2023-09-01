import {
    TbBrandGithub,
    TbBrandFacebookFilled,
    TbBrandLinkedin
} from 'react-icons/tb';

import { AiOutlineMedium, AiOutlineInstagram } from 'react-icons/ai'


const RightSide = () => {
    return (
        <div>
            <TbBrandGithub />
            <TbBrandFacebookFilled />
            <AiOutlineMedium />
            <TbBrandLinkedin />
            <AiOutlineInstagram />
        </div>
    );
}

export default RightSide;