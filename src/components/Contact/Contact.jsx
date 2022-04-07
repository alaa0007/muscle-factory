import React from 'react'
import './contact.css'
import logo from '../../assets/Images/logoWithoutBg.png';
import map from '../../assets/Images/map.png';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-container'>
        <div className='contact-left-side'>
        <div className='contact-title'>
          <h2>CONNECTED MUSCLES</h2>
          <h4>Tunisia, ARIANA</h4>
        </div>
      <div className='contact-text'>
        <div className='contact-days'>
          <div> <span className='contact-day'> MONDAY TO FRIDAY </span> <span className='contact-hour'> 07H-22H </span></div>
          <div> <span className='contact-day'> SATURDAY </span>  <span className='contact-hour'> 09H-17H </span></div>
          <div> <span className='contact-day'> SUNDAY </span>  <span className='contact-hour'> 09H-14H </span></div>
        </div>
          <div className='contact-media'>
          <div> <span className='contact-socialMedia'> PHONE </span> <span className='contact-socialMediaText'> +216 xx xxx xxx </span></div>
          <div> <span className='contact-socialMedia'> EMAIL </span> <span className='contact-socialMediaText'> connectedm@mail.com </span></div>
        </div>
      </div>
      </div>
      <div className='contact-right-side'>
        <div className='logo-contianer'>
          <img src={ logo } alt="Logo" className='contact-logo'/>
        </div>
        <div className='contact-location'>
          <img src={ map } alt="Location" className='contact-location-img'/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact