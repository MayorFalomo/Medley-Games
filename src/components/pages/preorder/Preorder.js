import React, { useState } from 'react'
import '../preorder/Preorder.css'
import Explore from '../../explore/Explore'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import Newreleases from '../../Newlyreleased/Newreleases'
import Slideshow from '../../Slideshow/Slideshow'
import Order from './Order'

const Preorder = () => {

  const [games, setGames] = useState([
    {
      id: 1,
      image: 'https://www.teahub.io/photos/full/8-86919_4k-resolution-gaming-wallpaper-4k.jpg',
      info: '',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Shooting '
    },
    {
      id: 2,
      image: 'https://www.teahub.io/photos/full/8-86768_4k-wallpaper-video-game.jpg',
      info: '',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Fantasy '
    },
    {
      id: 3,
      image: 'https://www.teahub.io/photos/full/8-86363_mass-effect-andromeda-2017-video-game-4k.jpg',
      info: "Mass Effect Andromeda",
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, space, Scifi, Aliens '
    },
    {
      id: 4,
      image: 'https://www.teahub.io/photos/full/53-530697_game-of-thrones-wallpapers-4k.jpg',
      info: 'Game Of Thrones',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Fantasy, Story '
    },
    {
      id: 5,
      image: 'https://www.teahub.io/photos/full/2-29979_movie-wallpapers-assassins-creed-syndicate-wallpaper-4k.jpg',
      info: 'Assassins Creed Syndicate',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Assassinations, Fantasy, Guild  '
    },
    {
      id: 6,
      image: 'https://www.teahub.io/photos/full/28-286838_pubg-wallpaper-4k-pubg-game-wallpaper-4k.jpg',
      info: 'PUBG',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Assassinations, Fantasy, Guild'

    },
    {
      id: 7,
      image: 'https://www.teahub.io/photos/full/270-2700915_metal-gear-rising-raiden-best-gaming-wallpapers-4k.jpg',
      info: 'Metal Gear',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Anime, shooting '
    },
    {
      id: 8,
      image: 'https://www.teahub.io/photos/full/116-1164835_photo-wallpaper-naruto-war-anime-boy-ninja-asian.jpg',
      info: 'Naruto',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Fantasy, Anime  '
    },
    {
      id: 9,
      image: 'https://www.teahub.io/photos/full/6-67671_standard-data-src-spiderman-homecoming-wallpaper-1920.jpg',
      info: 'SpiderMan',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, SuperHero, SuperPowers, Story, Villains '
    },
    {
      id: 10,
      image: 'https://www.teahub.io/photos/full/6-63951_justice-league-wallpaper-justice-league-hd-wallpapers-1080p.jpg',
      info: 'Justice League',
      available: 'Available on all platforms',
      ps: 'PS4, PS5, Xbox one, Xbox Series X ',
      tag: 'Action, Adventure, Superhero, SuperPowers, Villains '
    },
  ])
  return (
    <div>
      <Slideshow />
      <div className='preOrderText' >
        <h1>PreOrder Your Games Now And get 10% Off!</h1>
        <button className='PreOrderBtn' >Pre-Order Now</button>
      </div>
      <div className='FlexOrder'>
      {games.map((game) => {
        return <div  key={game.id} className='order' >
          <Order game={game} setGames={setGames} />
        </div>
      })}
</div>
      <Navbar />
      <Newreleases />
      <Explore />
      <Footer/>
    </div>
  )
}

export default Preorder