import React,{Fragment,useContext} from 'react';
import{FoodContext}from '../App';
import {Link} from 'react-router-dom';
function Home() {
    let context= useContext(FoodContext);
  return <div className='home-wrapper'>
  {
      context.data.map((e,i)=>{
          return <Fragment key={i}>
              <Link to={`/`+e.name.toLowerCase()} className='item-link'>
              <div className='item-wrapper'>
              <img src={e.image} className='item-image' alt='img'></img>
              <div className='item-name'>
              <span>{e.name}</span>
              </div>
              </div>
              </Link>
          </Fragment>
      })
  }
  </div>;
}

export default Home;