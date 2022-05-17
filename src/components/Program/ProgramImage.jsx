import React from 'react'

const ProgramImage = ( { program } ) => {


  return (
    <div>
        <img src={ `https://res.cloudinary.com/dhncrtnjp/${program[0].Programme_Image}` } alt="programImg" />
    </div>
  )
}

export default ProgramImage