import React from 'react'

const BackProgram = ({ back }) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${back.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ back.Exercise_Name }</h2>
        <h5>{ back.Repetition }</h5>
    </div>
</div>
  )
}

export default BackProgram