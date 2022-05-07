import React from 'react'

const CategoieItem = ( {name, numbre} ) => {
  return (
    <div className='categorie-item'>
    <h4>{ name }</h4> 
    <h5>{ numbre } Products</h5> 
  </div>
  )
}

export default CategoieItem