import React from 'react';
import './Women.css'
import Navbar from '../navbar/Navbar';

import Nav from '../navbar/Nav';

const Men = () => {
  return (
    <>
     <Navbar/>
     <Nav/>
     
    <div className='men'>
     

      <div className="men-shoes">
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" />
      </div>
      <div className='single-men'>
        <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <div className="men-details">
        <h1>Lorem ipsum dolor sit.
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quibusdam.</p>
      </div>
    </div>
    </>
  )
}

export default Men
