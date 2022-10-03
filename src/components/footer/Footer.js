import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
      <footer>
      <div className='footerContainer'>
          <div className='footerCard'>
              <h2>Get updates on your favourite games </h2>
                <div className='update'>
              <p>Ready to explore?</p>
                  <div className='starting'><button className='getStartedBtn' >Get Started</button></div>
              </div>
              </div>
              <div className='footerLinks'>
              <ul>
                  <p>SERVICES</p>
                  <li>Our Stores</li>
                  <li>Campaigns</li>
                  <li>Tournaments</li>
                  <li>Offline</li>
              </ul>
              <ul>
                   <p>ABOUT</p>
                   <li>Our Story</li>
                   <li>Benefits</li>
                   <li>Team</li>
                   <li>Careers</li>
              </ul>
              <ul>
                  <p>HELP</p>
                  <li>Faqs</li>
                  <li>Contact Us</li>
              </ul>
                </div>
                
            </div>
            <div className='conditions'>
                <div className='terms'>
                <p>Terms & Conditions</p>
                    <span>Privacy Policy</span>
                </div>
                <ul className='socials'>
                    <li>{<BsFacebook/> }</li>
                    <li>{<AiOutlineTwitter/>}</li>
                    <li>{<FaInstagramSquare/>}</li>
                </ul>
            </div>

            <p className='copyRight' >&copy; Copyright 2021 Medley</p>
            </footer>
  )
}

export default Footer