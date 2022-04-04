import React from 'react'
import './coaches.css'
import  Coache1  from '../../assets/Images/coache1.jpg'
import  Coache2  from '../../assets/Images/coache2.jpg'
import  Coache3  from '../../assets/Images/coache3.jpg'

const Coaches = () => {
  return (
    <section id='coaches' className='coaches'>Coaches
    <h1 className='coaches-title'>Coaches</h1>
    <div className='coaches-container'>
      <div className='coaches-card'>
        <img className='coaches-img' src={ Coache1 } alt='coach' />
        <h3 className='coaches-name'>Foulen Ben Foulen</h3>
      </div>
      <div className='coaches-card'>
        <img className='coaches-img' src={ Coache2 } alt='coach' />
        <h3 className='coaches-name'>Foulen Ben Foulen</h3>
      </div>
      <div className='coaches-card'>
        <img className='coaches-img' src={ Coache3 } alt='coach' />
        <h3 className='coaches-name'>Foulen Ben Foulen</h3>
      </div>
    </div>
    </section>
  )
}

export default Coaches