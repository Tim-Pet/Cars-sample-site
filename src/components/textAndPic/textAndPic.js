import React from 'react'

import textAndPicStyle from './textAndPic.module.scss';

const TextAndPic = () => {
    return (
        <div className={textAndPicStyle.section}>
            <div className={textAndPicStyle.content}>
                <p className={textAndPicStyle.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci optio, voluptas sapiente accusamus, autem eius pariatur aut illum, harum quae? Non mollitia quos rem adipisci quas sit eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro quo repudiandae incidunt laborum sed error! Incidunt, perspiciatis eveniet. Quaerat totam illum quas ad atque fuga, neque adipisci rem eum!</p>
                <div className={textAndPicStyle.img}>
                </div>
            </div>
        </div>
    )
}

export default TextAndPic
