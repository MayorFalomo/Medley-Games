import React from 'react'
import '../Ourshop/Ourshop.css'
import Explore from '../../explore/Explore'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'

const Ourshop = () => {


  return (
      <div className='shopContainer' >
          <Navbar />
          <div className='shopHeader'>
          </div>
            <div className='shopHeading'> <h1>Our Shop</h1></div>
          <Explore/>
          <Footer/>
    </div>
  )
}

export default Ourshop