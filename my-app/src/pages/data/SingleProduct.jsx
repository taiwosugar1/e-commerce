import React from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import Categories from '../../components/category/Categories'
import './SingleProduct.css'

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {pathName} = useLocation()

  //get product
  const singleProduct = Categories.find(product =>product.id===parseInt(productId))

const { id,  title, price, image, description} = singleProduct

  return (
    <main>
       <div className="pg-header">
        <div className="container">
            <div className="head" >
                <div className="col-lg-7" >
                    <h1>{title}</h1>
                </div>
                <div className="col-lg-5">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-end">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li >
                            <li className="breadcrumb-item"><Link to={"/category"}>Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"> {title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
       </div>
       <div className="container content">
        <div className="row">
          <div className="col-lg-5">
           <img src={image} alt="" className='product-img' />
          </div>
          <div className="col-lg-7">
            <h2>{title}</h2>
            <p className="price"><strong>${price}</strong></p>
            <p>{description} {description} {description} {description} {description}</p>
            <br />
            <button className="btn btn-primary btn-sm" onClick={() =>navigate(-1)}>BACK</button>
            <button className="btn btn-primary btn-sm"  onClick={() =>navigate('/searchbar')}>SEARCH FOR PRODUCTS</button>
            <Link to={"/cart"} className="btn btn-primary btn-sm">Cart</Link>
          </div>
        </div>
       </div>
    </main>
  )
}

export default SingleProduct