import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import Navbar from '../navbar/Navbar';
import Nav from '../navbar/Nav';

const Men = () => {
  // Array of categories with their corresponding items
  const categories = [
    {
      name: 'SHOES',
      items: [
        'Everyday Sneakers',
        'Active Shoes',
        'Water repellent Sneakers',
        'Slip Ons',
        'Hiking',
        'High Tops',
        'Sales',
        'Shop All'
      ]
    },
    {
      name: 'BEST SELLERS',
      items: [
        'Everyday Sneakers',
        'Active Shoes',
        'Water repellent Sneakers',
        'Slip Ons',
        'Hiking',
        'High Tops',
        'Sales'
      ]
    },
    {
      name: 'APPARELS AND MORE',
      items: [
        'Everyday Sneakers',
        'Active Shoes',
        'Water repellent Sneakers',
        'Slip Ons',
        'Hiking',
        'High Tops',
        'Sales'
      ]
    },
    {
      name: 'FEATURED',
      items: [
        'THREE RUNNER GO',
        'SHOE FOR SPRING'
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <Nav />
      <div className="all">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <button className='product-button'>{category.name}</button>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;