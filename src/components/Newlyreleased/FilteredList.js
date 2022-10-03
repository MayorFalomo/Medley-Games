import React from 'react'
import './FilteredList.css'

const filteredList = ({game}) => {
  return (
      <div className='filteredContainer' >
          <div className='filteredGames'><img src={game.image} alt='img' /></div>
    </div>
  )
}

export default filteredList