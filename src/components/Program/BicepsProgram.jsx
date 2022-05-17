import React from 'react'

const BicepsProgram = ({ biceps }) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${biceps.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ biceps.Exercise_Name }</h2>
        <h5>{ biceps.Repetition }</h5>
    </div>
</div>  )
}

export default BicepsProgram