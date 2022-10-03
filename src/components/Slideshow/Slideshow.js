import React from 'react'
import './Slideshow.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import imageOne from '../images/Asphalt.svg'
import imageTwo from '../images/Batman.svg'
import imageThree from '../images/GodOfWar.svg'
import imageFour from '../images/Knight.svg'
import imageFive from '../images/CallOfDuty.svg'
import imageSix from '../images/COD.svg'
import imageSeven from '../images/skullHead.svg'

const Slideshow = () => {

    const buttonStyle = {
        visibility: 'hidden'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }
    
    
    return (
    <Fade {...properties} >
            <div className="each-slide-effect">
        <div className='slide' style={{ 'backgroundImage': `url(${imageOne})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
        <div className='SlideOne' style={{ 'backgroundImage': `url(${imageTwo})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
        <div className='SlideOne' style={{ 'backgroundImage': `url(${imageSeven})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='SlideOne' style={{ 'backgroundImage': `url(${imageThree})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='SlideOne' style={{ 'backgroundImage': `url(${imageFour})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='SlideOne' style={{ 'backgroundImage': `url(${imageFive})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='SlideOne' style={{ 'backgroundImage': `url(${imageSix})` }}>
                </div>
            </div>
            </Fade>
  )
}

export default Slideshow