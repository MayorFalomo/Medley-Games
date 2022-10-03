import React from 'react'
import Distributors from '../../distributors/Distributors'
import Explore from '../../explore/Explore'
import Footer from '../../footer/Footer'
import Herotexts from '../../Herotext/Herotexts'
import Navbar from '../../navbar/Navbar'
import Newreleases from '../../Newlyreleased/Newreleases'
import Partners from '../../partners/Partners'
import Slideshow from '../../Slideshow/Slideshow'
import '../homepage/Homepage.css'


const Homepage = () => {


  return (
    <div className='homeContainer' >
            <Slideshow />
      <Navbar />
      <Herotexts/>
      <Partners />
      <Newreleases />
      <Distributors />
      <Explore />
            <Footer />
    </div>
    
  )
}

export default Homepage