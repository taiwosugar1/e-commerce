import React from 'react'
import './Nav.css';
import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { LuHelpCircle } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';

// import SearchBar from '../search/SearchBar';

const nav = () => {
  return (
    <div  style={{background:"white", width:"100%",position:"sticky", top:"0", zIndex:"999"}}>
     
     <div className="nav">
     
        <nav>
          <ul>
       <li><a href="/men">MEN</a></li>
            <li><a href="/women">WOMEN</a></li>
            <li><a href="/all">KIDS</a></li>
            <li><a href="SearchBar">MARKETS</a></li>
            <li><a href="/category">SALES</a></li>
          </ul>
          <div className="logo">
             <a href="https://instagram.com/multibrandprints">multibrand</a>
          </div>
          <ul>
            <li><a href="/all/sustainability">SUSTAINABILITY</a></li>
            <li><a href="/">RETURN</a></li>
            <li><a href="/category">STORES</a></li>
            
          </ul>
          <div className='icons'>
          <Link to={'/SearchBar'} ><IoSearch className='icon'/></Link>
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
