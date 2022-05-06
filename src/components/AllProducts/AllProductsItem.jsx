import React from 'react'
import logo from '../../assets/Images/logoWithoutBg.png';

const AllProductsItem = () => {
  return (
    <div className='product-item'>
    <div className='product-image'>
        <img src={ logo } alt="Products" />
    </div>
    <div className='product-item-info'>
        <h2>Product Name</h2>
        <p>Product Prix</p>
        <button className='btn btn-cart'>BUY NOW</button>
    </div>
</div>
  )
}

export default AllProductsItem