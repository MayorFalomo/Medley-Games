import React from 'react'
import './Testimonials.css'
import { BsDashLg } from 'react-icons/bs'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import charles from '../images/charles.svg'
import marysmith from '../images/marysmith.svg'


const Testimonials = () => {

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
    
  return (
      <div className='TestimonialCard' >
          <h3>{<BsDashLg />}Testimonials {<BsDashLg />}</h3>
          <h2>What Are Our Customers Saying</h2>
          < div className='comment'>
            <Slide slidesToScroll={1} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
          <img src={charles} alt='img'/>
          <img src={marysmith} alt='img'/>
          <img src={charles} alt='img'/>
          <img src={marysmith} alt='img'/>
          <img src={charles} alt='img'/>
          <img src={marysmith} alt='img'/>
          <img src={charles} alt='img'/>
          <img src={marysmith} alt='img'/>
          <img src={charles} alt='img'/>
          <img src={marysmith} alt='img'/>
            
            </Slide>

      </div>
      </div>
  )
}

export default Testimonials