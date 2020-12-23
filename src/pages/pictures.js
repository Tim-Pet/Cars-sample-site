import React from 'react'

import Header from '../components/header/header'
import ImgText from '../components/imgText/imgText'
import PicGallery from '../components/picGallery/picGallery'
import Spacer from '../components/spacer/spacer'

import picturesStyles from './pictures.module.scss'

const PicturesPage = () => {
    return (
        <div className={picturesStyles.page}>
            <title>Cars</title>
            <Spacer height={70+'px'}/>
            <Header />
            <ImgText />
            <Spacer height={4+'vw'}/>
            <PicGallery title='cars'/>
            <Spacer height={4+'vw'}/>
            <PicGallery title='people' />
            <Spacer height={4+'vw'}/>
            <PicGallery title='landscape'/>
        </div>
    )
}

export default PicturesPage
