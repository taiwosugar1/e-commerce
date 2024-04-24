import React, { useState } from 'react';
import './Category.css';
import Nav from '../navbar/Nav';
import Categories from './Categories';
import { Link } from 'react-router-dom';
// import Search from '../search/Search';

const Category = () => {
    const [data, setData] = useState(Categories);

    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    };

    const showAllCategories = () => {
        setData(Categories);
    };

    return (
        <div className='category-parent'>
            <Nav />
            {/* <Search/> */}
            <h1>Let's shop</h1>
            <div className='category-width'>
                <div className='category'>
                    <div className="category-child">
                        {/* home button */}
                        <Link to={'/'}><button className='category-button' style={{ background: "blue" }}>  return home</button></Link>

                        {/* category buttons */}
                        <button className='category-button' onClick={() => showAllCategories()}>All</button>
                        <button className='category-button' onClick={() => filterResult('men')}>Men</button>
                        <button className='category-button' onClick={() => filterResult('women')}>Women</button>
                        <button className='category-button' onClick={() => filterResult('children')}>Children</button>
                        <button className='category-button' onClick={() => filterResult('black')}>Black</button>
                        <button className='category-button' onClick={() => filterResult('white')}>White</button>
                        <button className='category-button' onClick={() => filterResult('red')}>Red</button>
                        <button className='category-button' onClick={() => filterResult('shoes')}>Shoes</button>
                        <button className='category-button' onClick={() => filterResult('watches')}>Watches</button>
                    </div>
                    <div className="products-container">
                        <div className="products-childs">
                            {data.map((values) => {
                                const { id, title, price, image, description } = values;
                                return (
                                    <div className='product' key={id}>
                                        <div className="card">
                                            <img src={image} alt="" />
                                            <div className="card-body">
                                                <h5>{title}</h5>
                                                <p>Price: ${price}</p>
                                                <p>{description}</p>
                                                <a href="/">Buy now</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;