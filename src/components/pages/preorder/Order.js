import React from 'react'
import '../preorder/Order.css'
import {AiFillStar} from 'react-icons/ai'


const Order = ({game,setGames}) => {
    return (
      <div className='orderContainer'>
          <div className='gameImage'><img src={game.image} alt='img' /></div>
          <div className='gameText'>
              <div className='infos'>{game.info}
              <p>{game.available}</p>
              <p>{game.ps} </p>
                  <p>{game.tag} </p>
              </div>
              <div className='stars'>
              <p>{<AiFillStar/>} </p>         
              <p>{<AiFillStar/>} </p>         
              <p>{<AiFillStar/>} </p>          
              <p>{<AiFillStar/>} </p>
              <p>{<AiFillStar />}</p>    
                </div>  
            <button className='preorderBtn' >PreOrder</button>    
          </div>
            </div>
  )
}

export default Order