import React from 'react';
import './All.css'
import Navbar from '../navbar/Navbar';

import Nav from '../navbar/Nav';

const Men = () => {
  return (
    <div>
      <Navbar/>
     <Nav/>
      
        <div className="all">
          <div className="all-shoes">
          <button className='product-button'>SHOES</button>

            <ul>
              <li><a href="">Everyday Sneakers</a></li>
              <li><a href="">Active Shoes</a></li>
              <li><a href="">Water repellent Sneakers</a></li>
              <li><a href="">slip ons</a> </li>
              <li><a href="">Hiking</a></li>
              <li><a href="">High tops</a></li>
              <li><a href="">Sales</a></li>
              <li><a href="">shop All</a></li>
              
            </ul>
          </div>
          <div className="best-sellers">
          <button className='product-button'>BEST SELLERS</button>
            <ul>
            <li><a href="">Everyday Sneakers</a></li>
              <li><a href="">Active Shoes</a></li>
              <li><a href="">Water repellent Sneakers</a></li>
              <li><a href="">slip ons</a> </li>
              <li><a href="">Hiking</a></li>
              <li><a href="">High tops</a></li>
              <li><a href="">Sales</a></li>
              
            </ul>
          </div>
          <div className="apparel">
          <button className='product-button'>APPARELS AND MORE</button>
             
            <ul>
            <li><a href="">Everyday Sneakers</a></li>
              <li><a href="">Active Shoes</a></li>
              <li><a href="">Water repellent Sneakers</a></li>
              <li><a href="">slip ons</a> </li>
              <li><a href="">Hiking</a></li>
              <li><a href="">High tops</a></li>
              <li><a href="">Sales</a></li>
              <li><a href="">Sales</a></li>
            </ul>
          </div>
          <div className="featured">
          <button className='product-button'> FETURED</button>
            <div className="featured1">
              <button>THREE RUNNER GO</button>
            </div>
            <div className="featured2">
            <button>SHOE FOR SPRING</button>
            </div>
            
          </div>
          
        </div>
      
    </div>
  )
}

export default Men

