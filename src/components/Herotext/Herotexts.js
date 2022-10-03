import React from 'react'
import './Herotexts.css'
import { BsArrowDown, BsDashLg } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Herotexts = () => {


  return (
    <div className='HeroTextContainer' >
                    <div className='HeroText' >
          <small>{<BsDashLg />} GAMEWORLD DISTRIBUTORS {<BsDashLg />} </small>
          <h1 className='headerText' >Connecting Players &  Games in an immersive environment.</h1>
        <button  className='button-63' >Become A Member For Free!</button>
      </div>
       <Link to='point' spy={true} smooth={true} offset={80} duration={1000}>
          <button   className='scroll' >Scroll down {<BsArrowDown />}</button>
          </Link>
    </div>
  )
}

export default Herotexts