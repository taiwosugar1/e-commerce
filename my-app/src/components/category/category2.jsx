import React, { useState } from 'react';
import './Men.css';
import Navbar from '../navbar/Navbar';
import Nav from '../navbar/Nav';
import Categories from '../category/Categories';

const Men = () => {
  const [data, setData] = useState([]);
  
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <Navbar />
      <Nav />
      <div className='men'>
        <div className="men-shoes">
          <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men1')} />
          <img src="https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men2')} />
          <img src="https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men3')} />
          <img src="https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men4')} />
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men5')} />
          <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shoes" onClick={() => filterResult('men6')} />
          
        </div>
        <div className='single-men'>
          {data.map((values) => {
            const { id, image } = values;
            return (
              <div className='product' key={id}>
                <img src={image} alt="" />
              </div>
            );
          })}
          <div className="men-details">
            <div className="men-details-ul">
              <a href="/">Home</a>/
              <a href="/all">Men's Shoes</a>/
              <a href="/shoe">Everyday's Sneakers</a>/
            </div>
            <h1>Men's Tree Runner Go</h1>
            <p>$120  <i> FREE SHIPPING</i></p>
            <p>CLASSICS: Natural Black (Blizzard Sole)</p>
            <div className='round'>
              <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => filterResult('men-white')} />
              <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => filterResult('men-black')} />
              <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => filterResult('men-blue')} />
              <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" onClick={() => filterResult('men-yellow')} />
            </div>
            <p>LIMITED EDITION:</p>
            <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='men-round' onClick={() => filterResult('men-grey')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Men;