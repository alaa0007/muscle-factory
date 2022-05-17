import React from 'react'

const LegsProgram = ({ legs }) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${legs.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ legs.Exercise_Name }</h2>
        <h5>{ legs.Repetition }</h5>
    </div>
</div>
  )
}

export default LegsProgram