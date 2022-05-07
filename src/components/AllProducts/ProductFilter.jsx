import React from 'react'

const ProductFilter = ({ filterName }) => {
  return (
    <div className='filter-container-item'>
      <input type="checkbox" value={ filterName }  name={ filterName } /> <h4>{ filterName }</h4>
    </div>
  )
}

export default ProductFilter