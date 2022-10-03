import React from 'react'
import './Contact.css'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import {FcHome} from 'react-icons/fc'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div>
      <div className='bgImage'> </div>
       <div className='contactText' >
        <h1>Contact Us</h1>
        <p>We are available to be contacted anytime </p>
        </div>
      <Navbar />
      <div className='messages'>
        <form action='#' className='FormSection' >
          <p>Get in Touch</p>
          <div className='textArea'><textarea rows="9" cols="70" name="comment" placeholder='Enter Message'></textarea></div>
          
          <div className='messageFlex'>
        <div className='enterName'> <input typeof='text' className='enterName' placeholder='Enter your name' /></div>
            <div className='enterEmail'><input typeof='text' className='enterEmail' placeholder='Enter your email' /></div>
            </div>
          <div className='EnterText'><input typeof='text' className='enterEmail' placeholder='Enter your subject' /></div>
          <button className='messageBtn' >SEND MESSAGE</button>
      </form>

      <div className='contact'>
          <div className='house'><p>{<FcHome/> } Lagos, Nigeria </p> </div>
        <div className='house'><p>{<BsPhone/>} (+234) 81781 52 952 </p> </div>
        <div className='house'><p>{<AiOutlineMail/>} </p> Medley@gmail.com </div>
        </div>
        </div>

      <Footer/>
    </div>
  )
}

export default Contact