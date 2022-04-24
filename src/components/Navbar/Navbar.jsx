import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import './popup.css';
import logo from '../../assets/Images/logoWithoutBg.png';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import popupLogo from '../../assets/Images/logoWithoutBg.png';
import { MdEmail } from 'react-icons/md';
import { GiHouseKeys } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';


const Navbar = () => {

  let Currentuser ={}

  const [isActive, setIsActive] = useState('#');
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState('');
  const [isUser, setIsUser] = useState(Currentuser);


  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const changeNavBg = () => {
    if(window.scrollY >= 160) {
      setIsNavActive(true);
    }else{
      setIsNavActive(false);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('email: ', isEmail, 'password: ', isPassword);
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    const user = data.find(user => user.email === isEmail && user.website === isPassword);
    if(user) {
      setIsLogin(true);
      setIsUser(user);
      setIsError('');
      onCloseModal();
      console.log('user: ', user);
    }else{
      setIsLogin(false);
      setIsError('Invalid email or password');
    }

  }

  useEffect(() => {
    setIsError('');
  },[isEmail,isPassword])

  window.addEventListener('scroll', changeNavBg);

  
  return (
    <nav className={ isNavActive === true ? 'active' : '' }>

        <ul className={ isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={ () => setIsMobile(false) } >
            <li className='navbar_item'><Link to="/#" onClick={ () => setIsActive('#') }  className={ isActive ==="#" ? 'active' : '' }> Home </Link></li>
            <li className='navbar_item'><Link to="/#about" onClick={ () => setIsActive('#about') }  className={ isActive ==="#about" ? 'active' : '' }> About </Link></li>
            <li className='navbar_item'><Link to="/#activities" onClick={ () => setIsActive('#activities') }  className={ isActive ==="#activities" ? 'active' : '' }> Activities </Link></li>
            <li><Link to="#"><img src={ logo } alt="muscleFactoryLogo" className='navbar_logo' onClick={ () => setIsActive('#') }/></Link></li>
            <li className='navbar_item'><Link to="/#coaches" onClick={ () => setIsActive('#coaches') }  className={ isActive ==="#coaches" ? 'active' : '' }> Coaches </Link></li>
            <li className='navbar_item'><Link to="/#contact" onClick={ () => setIsActive('#contact') }  className={ isActive ==="#contact" ? 'active' : '' }> Contact </Link></li>
            <li>{!isLogin ? (
              <button className='btn btn-navbar' onClick={onOpenModal}>Login</button>):(
              <Link to="/Profil" className='btn btn-navbar'>Profil</Link>
              )}
            </li>
        </ul>
        <div className='small-device'>
        <h4 className='mobile-logo'>muscle factory</h4>
        <a className='mobile-menu' onClick={ () => setIsMobile(!isMobile) } >
        { isMobile  ? <AiOutlineClose /> : <AiOutlineMenuFold /> }
        </a>
        </div>
        
        <Modal open={open} onClose={onCloseModal} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={500}>
        <div className='popup'>
          <p>{ isError }</p>
          <div className='popup-header'>
            <img src={popupLogo} alt="loginLogo" className='popup-logo'/>
            <h2>Connect to your GYM account</h2>
          </div>
          <div className='popup-container'>
            <form onSubmit={handleSubmit}>
            <div className='popup-container-email'>
              <label htmlFor="email"> <MdEmail /> </label>
              <input  type='email' name="email" value={isEmail}  onChange={(e) => setIsEmail(e.target.value)} placeholder='Email' required/>
            </div>
            <div className='popup-container-password'>
              <label htmlFor="password"> <GiHouseKeys /></label>
              <input type='password' name="password" placeholder='Password' onChange={(e) => setIsPassword(e.target.value)}  value={isPassword} required/>
            </div>
            <div className='popup-footer'>   
               <button className='btn btn-profil'>Connect</button>
               </div>
            </form>
          </div>
      </div>
      </Modal>
      

       {/* <Login open={open} onClose={onCloseModal} /> */}
    </nav>
  ) 
}

export default Navbar