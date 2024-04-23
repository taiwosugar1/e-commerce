import React from 'react'
import './Nav.css';
import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { LuHelpCircle } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";

const nav = () => {
  return (
    <div  style={{background:"white", width:"100%",position:"sticky", top:"0", zIndex:"999"}}>
     
     <div className="nav">
     
        <nav>
          <ul>
       <li><a href="/men">MEN</a></li>
            <li><a href="/women">WOMEN</a></li>
            <li><a href="/all">KIDS</a></li>
            <li><a href="/all">SOCKS</a></li>
            <li><a href="/category">SALES</a></li>
          </ul>
          <div className="logo">
            <h2>multibrand</h2>
          </div>
          <ul>
            <li><a href="/all/sustainability">SUSTAINABILITY</a></li>
            <li><a href="/">RETURN</a></li>
            <li><a href="/category">STORES</a></li>
            
          </ul>
          <div className='icons'>
          <IoSearch className='icon'/>
          <LuUser className='icon'/>
          <LuHelpCircle className='icon' />
          <BsCartCheck  className='icon'/>
          
          </div>
        </nav>
      </div>
    </div>
  )
}

export default nav
