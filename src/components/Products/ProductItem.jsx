import React, { useState, useRef, useEffect } from 'react'
import { Modal } from 'react-responsive-modal';
import './productItem.css'
import Swal from 'sweetalert2'



const ProductItem = ( { product } ) => {

  const [open, setOpen] = useState(false);
  const paypal = useRef();
  const [paypalBtn, setPaypalBtn] = useState(false);

  const onCloseModal = () => setOpen(false)

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  useEffect(() => {
    const price =  product.Price/3.21
    let res = price.toFixed(2);

    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: product.Product_Name,
                amount: {
                  currency_code: "EUR",
                  value: res,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          
          const order = await actions.order.capture();
          console.log(order);
          setOpen(false);
          Toast.fire({
            icon: 'success',
            title: 'Thank you for your purchase!'
          })
        },
        onError: (err) => {
          console.log(err);
          setOpen(false);
        },
        onShippingChange: function(data,actions){
          return actions.resolve();
      }
      })
      .render(paypal.current);
  }, [paypalBtn, product,open,Toast]);
  
  
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
              {
                !paypalBtn ? <button className='btn btn-cart' onClick={ () => { setPaypalBtn(true)} }>Paypal</button> : <div ref={ paypal } />
              }            
              </div>
          </div>
        </div>
      </Modal>
</div>
  )
}

export default ProductItem