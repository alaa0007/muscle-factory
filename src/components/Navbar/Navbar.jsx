import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';


const Navbar = () => {
  const [isActive, setIsActive] = useState('#');
  
  const Active = () => {
    setIsActive('#');
  }

  return (
    <nav className='navbar_items'>
        <ul>
            <li className='navbar_item'><a href="#" onClick={ () => setIsActive('#') }  className={isActive ==="#" ? 'active' : ''}>Home</a></li>
            <li className='navbar_item'><a href="#about" onClick={ () => setIsActive('#about') }  className={isActive ==="#about" ? 'active' : ''}>About</a></li>
            <li className='navbar_item'><a href="#activities" onClick={ () => setIsActive('#activities') }  className={isActive ==="#activities" ? 'active' : ''}>Activities</a></li>
            <li><img src={logo} alt="muscleFactoryLogo" className='navbar_logo'/></li>
            <li className='navbar_item'><a href="#coaches" onClick={ () => setIsActive('#coaches') }  className={isActive ==="#coaches" ? 'active' : ''}>Coaches</a></li>
            <li className='navbar_item'><a href="#contact" onClick={ () => setIsActive('#contact') }  className={isActive ==="#contact" ? 'active' : ''}>Contact</a></li>
            <li><a href=""  className='btn'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar