import React from 'react'
import './coaches.css'
import  Coach1  from '../../assets/Images/coache1.jpg'
import  Coach2  from '../../assets/Images/coache2.jpg'
import  Coach3  from '../../assets/Images/coache3.jpg'
import CoachCard from './Coach_card'

const Coaches = () => {
  return (
    <section id='coaches' className='coaches'>Coaches
    <h1 className='coaches-title'>Coaches</h1>
    <div className='coaches-container'>
      <CoachCard image={Coach1} name="Foulena ben Foulen" />
      <CoachCard image={Coach2} name="Foulen ben Foulen"/>
      <CoachCard image={Coach3} name="Foulena ben Foulena"/>
    </div>
    </section>
  )
}

export default Coaches