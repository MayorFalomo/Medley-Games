import React from 'react'
import '../explore/Explore.css'

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import { BsDashLg } from 'react-icons/bs'
import ironMan from '../images/ironMan.svg'
import logo from '../images/logo.svg'
import {FaAngleRight} from 'react-icons/fa'




const Explore = () => {

    return (
      <div className='exploreContainer'>
      <div className='exploreCard' >
          <div  id='point' className='exploreText'>
          <h3>{<BsDashLg />}Explore A New Dimension{<BsDashLg />}</h3>
          <h2>Ready to unlock your potentials in a world of fun? </h2>
              <button className='joinFreeBtn' >Join For Free</button>
                </div>
                         <img id='eachSlide' className='slideOne' src={ironMan} alt='img' />
            </div>
            <div className='signUp'>
                    <div className='footerLogo'><img src={logo} alt='img' /> </div>
                <div className='EmailInput'>
                    <div className='email'> <input type='email' placeholder='Email address' /></div>
                    <button className='angleRight' >{<FaAngleRight/>}</button>
                </div>
            </div>
            </div>
  )
}

export default Explore