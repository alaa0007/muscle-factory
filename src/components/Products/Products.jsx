import React from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import './products.css'


const Products = () => {
  return (
    <div className='products-container'>
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
  )
}

export default Products