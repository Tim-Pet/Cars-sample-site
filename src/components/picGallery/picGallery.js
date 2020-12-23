import React from 'react'

import picGalleryStyle from './picGallery.module.scss'
import picOne from './content/picOne.jpg'
import picTwo from './content/picTwo.jpg'
import picThree from './content/picThree.jpg'


const PicGallery = (props) => {
    
    const title = props.title;

    return (
        <div>
            <p className={picGalleryStyle.title}>{title}</p>
            <div className={picGalleryStyle.gallery}>
                <div className={picGalleryStyle.container} >
                    <img className={picGalleryStyle.img} src={picOne} alt=""/>
                </div>
                <div className={picGalleryStyle.container}>
                    <img className={picGalleryStyle.img} src={picTwo} alt=""/>
                </div>
                <div className={picGalleryStyle.container}>
                    <img className={picGalleryStyle.img} src={picThree} alt=""/>
                    <div className={picGalleryStyle.fadeBg}>
                        <div className={picGalleryStyle.arrow}></div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PicGallery
