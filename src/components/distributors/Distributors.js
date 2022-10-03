import React from 'react'
import './Distributors.css'
import Alien from '../images/Alien.svg'
import gameConsole from '../images/gameConsole.svg'
import playButton from '../images/playButton.svg'
import Testimonials from './Testimonials'

const Distributors = () => {

    const distributers = [
        {
            id: 1,
            image: gameConsole,
            comment: 'Find Wholesale prices and suppliers of video games, consoles, and game accessories',
        },
        {
            id: 2,
            image: gameConsole,
            comment: 'Find Wholesale prices and suppliers of video games, consoles, and game accessories',
        },
        {
            id: 3,
            image: gameConsole,
            comment: 'Find Wholesale prices and suppliers of video games, consoles, and game accessories',
        },
        {
            id: 4,
            image: gameConsole,
            comment: 'Find Wholesale prices and suppliers of video games, consoles, and game accessories',
        },
    ]


    return (
      <div className='distributorSection'>
      <div className='newSection'>
          <div className='alienCard'>
              <div className='image'><img src={Alien} alt='img' /> </div>
              <div className='playCard'><img src={playButton} alt='img' /></div>
          </div>
          <div className='textContainer'>
                    <h2>We are the Best Game Distributors for all Gamers. </h2>
                    <div>
                        {distributers.map((distributer) => (
                  <div key={distributer.id}>
                  <div className='textCard'  >
                      <img src={gameConsole} alt='img' />
                      <div className='title'>
                          <h4>Title Goes Here</h4>
                          <p>{distributer.comment }</p>
                                    </div>
                                    
                                </div>
                    </div>
              ))}
                        </div>
              </div>
            </div>
            <Testimonials/>
            </div>
  )
}

export default Distributors