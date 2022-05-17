import React from 'react'

const TricepsProgram = ({ triceps}) => {
  return (
    <div className='program-item'>
    <div className='program-image'>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${triceps.Product_Image}` } alt="Chest" />
    </div>
    <div className='program-item-info'>
        <h2>{ triceps.Exercise_Name }</h2>
        <h5>{ triceps.Repetition }</h5>
    </div>
</div>
  )
}

export default TricepsProgram