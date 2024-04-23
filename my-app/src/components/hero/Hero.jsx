import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-box">
            <div className="hero-right">
               <h2>FEATURED</h2>
               <Link to={'/men'}><button>Men's Shoes</button></Link>
               <Link to={'/women'}><button>women's Shoes</button></Link>
               <Link><button>New Arrivals</button></Link>
            </div>
            <div className="hero-left">
                <h1>New: Tree Runner Go</h1>
                <h3>Super packable. Ultra wearable. Perfectly travel-able.</h3>

                <div >
              <Link to={'/men'}><button>SHOP MEN</button></Link>
       <Link to={'/women'}><button>SHOP WOMEN</button></Link>
               </div>

            </div>
        
        </div>
    </div>
  )
}

export default Hero