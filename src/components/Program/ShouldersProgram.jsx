import React from 'react'

export const ShouldersProgram = ({ shoulder }) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${shoulder.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ shoulder.Exercise_Name }</h2>
        <h5>{ shoulder.Repetition }</h5>
    </div>
</div>
  )
}
