import React, {useState} from 'react'
import './Navbar.css'
import { IoIosSearch } from 'react-icons/io'
import mainLogo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [click, setClick] = useState(false)

  const updateMenu = () => {
  setClick(!click)
  }

  return (
      <>
      <div className='navCard'>
      <nav>
          <div className='logo'><img src={mainLogo} alt='img' /></div>
          <ul  className={click ? "links active" : "links"}>
             <Link to='/' > <li className="hover-underline-animation" >Home</li></Link>
             <Link to='/about' ><li className="hover-underline-animation">About</li></Link>
             <Link to='/preorder' > <li className="hover-underline-animation" >Pre-Order</li></Link>
            <Link to='/ourshop' >  <li className="hover-underline-animation" >Our Shop</li></Link>
            <Link to='/contact' ><li className="hover-underline-animation">Contact Us</li></Link>
              <div className='searchContainer'>
              <div className='searchInput' ><input typeof='text' placeholder='Search...' /> </div>
                  <div className='searchBtn'><button><IoIosSearch /></button> </div>
            </div>
            
                </ul>
          <button className='joinBtn' >Join our team</button>
                    <div id='hamburger' onClick={updateMenu} className={click ? 'hamBurgerMenu active' : 'hamBurgerMenu'}>
                    <span id='bars1' className="bars"></span>
                    <span id = 'bars2' className="bars"></span>
                    <span id='bars3' className="bars"></span>
                  </div>

            </nav>
       
      </div>
      <div className='navOverlay'></div>
           

    </>
  )
}

export default Navbar