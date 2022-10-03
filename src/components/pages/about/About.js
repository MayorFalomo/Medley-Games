import React from 'react'
import './About.css'
import Distributors from '../../distributors/Distributors'
import Explore from '../../explore/Explore'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import Slideshow from '../../Slideshow/Slideshow'
import { BsDashLg } from 'react-icons/bs'

const About = () => {
  return (
      <div className='AboutUsContainer'>          
          <Slideshow />
          <div className='aboutText'>
          <h1>ABOUT US</h1>
              <p>Swift Delivery at your Timeline </p>
          </div>
                <h3>{<BsDashLg />} WHAT WE DO {<BsDashLg/>}</h3>
          <div className='aboutUs'>
              <p>  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
              <p> She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, </p>
          </div>
          <Navbar />
          <Distributors />
          {/* <Explore /> */}
          <Footer/>
    </div>
  )
}

export default About