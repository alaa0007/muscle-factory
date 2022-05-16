import React, { useState } from 'react'
// import logo from '../../assets/Images/logoWithoutBg.png';
import { Modal } from 'react-responsive-modal';
import './productItem.css'

const ProductItem = ( { product } ) => {

  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false)

  
  return (
    <div className='product-item'>
    <div className='product-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${product.Product_Image}` } alt="Products" />
    </div>
    <div className='product-item-info'>
        <h2>{ product.Product_Name }</h2>
        <p>Prise : { product.Price } DT</p>
        <button className='btn btn-cart' onClick={ () => { setOpen(true)} }>BUY NOW</button>
    </div>


    { /* Product popup */}
        <Modal open={open} onClose={onCloseModal} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={500}>
          <div className='product-contianer'>
            <div className='product-content'>
              <div className='product-header'>
                <div className='product-header-img'>
                  <img src={ `https://res.cloudinary.com/dhncrtnjp/${product.Product_Image}` } alt="Products" />
                </div>
                <div className='product-info'>
                  <h1>{ product.Product_Name }</h1>
                  <h3> { product.Category }</h3>
                  <h4> { product.Detail } </h4>
                  <p>Prise : { product.Price } DT</p>
                </div>
            </div>
            <div className='product-footer'>
              <button className='btn btn-cart'>BUY NOW</button>
            </div>
          </div>
        </div>
      </Modal>
</div>
  )
}

export default ProductItem