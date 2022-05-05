import React from 'react'
import ProductItem from '../Products/ProductItem'
import './allProducts.css'


const AllProducts = () => {
  return (
    <div className='all-products-container'>
        <div className='all-products-header'>
        </div>
        <div className='all-products-body'>
            <div className='all-products-body-header'>
                <h2>Products</h2>
            </div>
            <div className='all-products-body-content-filter'>

            </div>
            <div className='all-products-body-content'>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    </div>
  )
}

export default AllProducts