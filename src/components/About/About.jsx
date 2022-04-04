import React from 'react'
import './about.css'
import AboutText from './AboutText'
import Activities from './Activities/Activities'

const About = () => {
  return (
    <section id='about' className='about_container'>
      <div className='about-left-side'>
        <div className='about-title'>
          <h2>CONNECTED MUSCLES</h2>
          <h4>Our temple is yours</h4>
        </div>
      </div>
      <div className='about-right-side'>
        <AboutText />
        <Activities />
      </div>
    </section>
  )
}

export default About