import React from 'react'
import './coaches.css'

const Coach_card = (props) => {
  return (
    <div className='coaches-card'>
    <img className='coaches-img' src={ props.image } alt='coach' />
    <h3 className='coaches-name'> { props.name} </h3>
  </div>
  )
}

export default Coach_card