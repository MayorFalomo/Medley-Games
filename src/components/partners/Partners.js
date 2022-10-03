import React from 'react'
import './Partners.css'
import { BsDashLg } from 'react-icons/bs'


import steam from '../images/steam.svg'
import microsoft from '../images/microsoft.svg'
import xbox from '../images/xbox.svg'
import playstation from '../images/playstation.svg'
import play from '../images/play.svg'

import suppliers from '../images/suppliers.svg'
import supplies from '../images/supplies.svg'
import gamepad from '../images/gamepad.svg'

import marketPlace from '../images/marketPlace.svg'
import cart from '../images/cart.svg'
import market from '../images/market.svg'

import calendar from '../images/calendar.svg'
import rocket from '../images/rocket.svg'
import releases from '../images/releases.svg'

import EllipseLeft from '../images/EllipseLeft.svg'
import EllipseRight from '../images/EllipseRight.svg'

const Partners = () => {

    


    return (
        <div className='PartnerSection'>
      <div className='LogoSection' >
          <img className='logos' src={steam} alt='img'/>
          <img className='logos' src={microsoft} alt='img'/>
          <img className='logos' src={xbox} alt='img'/>
          <img className='logos' src={playstation} alt='img'/>
                <img className='logos' src={play} alt='img' />
            </div>

            <div className='mainContainer'>
                                <span>{<BsDashLg />} What we do {<BsDashLg />} </span>
                <h3>Meeting the needs of players across the world</h3>

                <div className='WhatWeDo'>
                    <div className='CardContainer'>
                    <div id='green' className='infoCard'>
                            <div className='positioning'>
                        <div className='suppliers'> <img className='cardImage' src={suppliers} alt='img' /></div>
                            <div className='icons'> <img className='cardIcons' src={gamepad} alt='img' /></div>
                            </div>
                        <div className='board'> <img src={supplies} alt='img' /></div>
                        <p>list of carefully selected, verified, high quality suppliers in different regions worldwide.</p>
                    </div>
                    
                    <div id='purple' className='infoCard'>
                        <div className='positioning'>
                        <div className='suppliers'> <img className='cardImage' src={marketPlace} alt='img' /></div>
                            <div className='icons'> <img className='cardIcons' src={cart} alt='img' /></div>
                            </div>
                        <div className='board'> <img src={market} alt='img' /></div>
                        <p>Find Wholesale prices and suppliers of video games, consoles, and game accessories.</p>
                    </div>
                    
                    <div id='red' className='infoCard'>
                            <div className='positioning'>
                        <div className='suppliers'> <img className='cardImage' src={ calendar} alt='img' /></div>
                            <div className='icons'> <img className='cardIcons' src={rocket} alt='img' /></div>
                            </div>
                        <div className='board'> <img src={releases} alt='img' /></div>
                        <p>Release date and information on upcoming or recently released video games.</p>
                        </div>
                            </div>
                </div>
                </div>

            <div className='lighthing'><img src={EllipseLeft} alt='img'/> </div>
            <div className='ellipse'><img src={EllipseRight} alt='img'/> </div>
                   </div>

  )
}

export default Partners