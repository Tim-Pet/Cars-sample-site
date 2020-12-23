import React from 'react'

import imgTextStyle from './imgText.module.scss'
//optional put all letters into a grid which scales with vw
//optional parallax effect --> make small header scroll faster
const ImgText = () => {
    return (
        <div className={imgTextStyle.section}>            
            <div className={imgTextStyle.textContainer}>
                <p className={`${imgTextStyle.bigText} ${imgTextStyle.text}`}>Pictures</p> 
                <p className={`${imgTextStyle.text} ${imgTextStyle.smallText}`}>Pictures</p>
            </div>
        </div>
    )
}

export default ImgText
