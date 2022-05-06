import React from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import './products.css'


const Products = () => {
  return (
    <>
    <div id="train" className='train'>
    <div  className="elfsight-app-f39a8d3d-542f-4ef8-b8de-0c736a091242"></div>
    </div>
    <div className='products-container' id='products'>
        <div className='products-header'>
            <h1>Trending Products</h1>
        </div>
        <div className='products-body'>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
        <div className="product-footer">
            <Link to='/Products' className='btn btn-product'>See More</Link>
        </div>
    </div>
    </>
  )
}

export default Products