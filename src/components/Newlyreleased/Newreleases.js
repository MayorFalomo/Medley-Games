import React, { useState } from 'react'
import './Newreleases.css'
import FilteredList from '../Newlyreleased/FilteredList'

import CallOfDuty from '../images/Call of Duty.svg'
import Fifa from '../images/Fifa.svg'
import Galaxy from '../images/Galaxy.svg'
import AlanWake from '../images/Alan Wake.svg'
import Farcry from '../images/FarCry.svg'
import PrinceOfPersia from '../images/PrinceOfPersia.svg'
import DeadIsland from '../images/DeadIsland.svg'
import SaintsRow from '../images/SaintsRow.svg'
    
const Newreleases = () => {

    const [games, setGames] = useState([
        {
        id: 1,
            image: CallOfDuty,
        category: "Ps5",
    },
        {
        id: 2,
            image: Fifa,
        category: 'Ps5',
    },
        {
        id: 3,
            image: Galaxy,
        category: 'Ps4',
    },
        {
        id: 4,
            image: AlanWake,
            category: 'Ps4',
    },
        {
        id: 5,
            image: Farcry,
            category: 'Xbox',
    },
        {
        id: 6,
            image: PrinceOfPersia,
        category: 'Xbox'
    },
        {
        id: 7,
            image: DeadIsland,
        category: 'Ps4',
    },
        {
        id: 8,
            image: SaintsRow,
        category: 'Xbox',
    },
        {
        id: 9,
            image: CallOfDuty,
        category: "Ps5",
    },
        {
        id: 10,
            image: Fifa,
        category: 'Ps5',
    },
        {
        id: 11,
            image: Galaxy,
        category: 'Ps4',
    },
        {
        id: 12,
            image: AlanWake,
            category: 'Ps4',
    },
        {
        id: 13,
            image: Farcry,
            category: 'Xbox',
    },
        {
        id: 14,
            image: PrinceOfPersia,
        category: 'Xbox'
    },
        {
        id: 15,
            image: DeadIsland,
        category: 'Ps4',
    },
        {
        id: 16,
            image: SaintsRow,
        category: 'Xbox',
    },
    ])

    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleClick = (params) => {
        setSelectedCategory(params)
    }

    const [seeMore, setSeeMore] = useState(8)
    
  return (
      <div id='point' className='newReleases' >
          <h3>Newly Released Games</h3>
          <ul>
              <li><button className={selectedCategory ==='All' ? 'highlight active' : 'highlight'} onClick= {() => handleClick('All') } >All</button></li>
              <li><button className={selectedCategory === 'ps4' ? 'highlight active' : 'highlight' } onClick= {() => handleClick('ps4') } >PS4</button></li>
              <li><button className={selectedCategory === 'ps5' ? 'highlight active' : 'highlight' } onClick= {() => handleClick('ps5') } >PS5</button></li>
              <li><button className={selectedCategory === 'xbox' ? 'highlight active' : 'highlight' } onClick={() => handleClick('xbox') } >X-Box</button></li>
          </ul>
          <div className='flexGame'>
              {games.filter((gamers) => {
                  if (selectedCategory === 'All') {
                      return gamers;
                  }
                  else if (gamers.category.toLowerCase().includes(selectedCategory.toLowerCase())
                  ) {
                      return gamers;
                  }
              }).slice(0, seeMore).map((game, index) => {
                  return (
                      <FilteredList key={index} game={game} setGames={setGames} />
                  );
              })
              }
          </div>
          <div className='colorOverlay'> </div>
          <button className={seeMore === 8 ? "slice active" : "slice"} onClick={() => setSeeMore(16)} >See More</button>
          <button className={seeMore === 16 ? 'slice active' : 'slice' } onClick={() => setSeeMore(8) } >See Less</button>
    </div>
  )
}

export default Newreleases