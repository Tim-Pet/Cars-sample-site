import React, {useEffect} from 'react'
import lpPictureStyles from "./lpPicture.module.scss"

import Button from "../button/button"

const LpPicture = () => {

    useEffect(() => {
        if(typeof window !== undefined){
            //selectors
            const transformItem1 = document.querySelector(`.${lpPictureStyles.section}`);
            const transformItem2 = document.querySelector(`.${lpPictureStyles.text}`);

            const handleScroll = () => {
                //what happens on scroll?
                transformItem1.style.opacity = 1-+window.pageYOffset/700;
                transformItem2.style.marginBottom = 0+window.pageYOffset/2+'%';

            };

            window.addEventListener('scroll', handleScroll, {passive:true});
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className={lpPictureStyles.section}>
            <div className={lpPictureStyles.bg}>
                <h2 className={lpPictureStyles.text}>Create Different</h2>
            </div>
            <Button link='/pictures' content='See more'/>
        </div>
    )
}

export default LpPicture
