import React from 'react'
import './header.css'
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';

const SocialMediaBtn = () => {
  return (
    <div className='social-media'>
    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><GrFacebook/></a>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram/></a>
  </div>
  )
}

export default SocialMediaBtn