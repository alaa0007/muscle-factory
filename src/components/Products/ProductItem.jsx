import React from 'react'
// import logo from '../../assets/Images/logoWithoutBg.png';

const ProductItem = ( { product } ) => {
  return (
    <div className='product-item'>
    <div className='product-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${product.Product_Image}` } alt="Products" />
    </div>
    <div className='product-item-info'>
        <h2>{ product.Product_Name }</h2>
        <p>{ product.Price } DT</p>
        <button className='btn btn-cart'>BUY NOW</button>
    </div>
</div>
  )
}

export default ProductItem