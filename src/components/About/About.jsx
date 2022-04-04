import React from 'react'
import './about.css'
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
        <div className='about-text'>
          <h4 id='activities'>
          WHO ARE WE ?
          </h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a aliquam velit. Ut diam ante, tempor vel mollis malesuada, 
          vehicula sed lorem. Curabitur lobortis maximus purus nec elementum.
           Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec maximus.
          </p>
        </div>
        <Activities />
      </div>
    </section>
  )
}

export default About