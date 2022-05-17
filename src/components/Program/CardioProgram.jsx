import React from 'react'

const CardioProgram = ({ cardio }) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${cardio.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ cardio.Exercise_Name }</h2>
        <h5>{ cardio.Repetition }</h5>
    </div>
</div>
  )
}

export default CardioProgram