import React from 'react'

const ChestProgram = ({ chest }) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${chest.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ chest.Exercise_Name }</h2>
        <h5>{ chest.Repetition }</h5>
    </div>
</div>
  )
}

export default ChestProgram