import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import './popup.css';
import logo from '../../assets/Images/logoWithoutBg.png';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MdEmail } from 'react-icons/md';
import { GiHouseKeys } from 'react-icons/gi';
import { Link as LinkTo } from 'react-router-dom';
import  shutDown  from '../../assets/Images/shutdown.png';
import { Link  } from 'react-scroll';




const Navbar = () => {

  let Currentuser ={}

  const [isActive, setIsActive] = useState('# ');
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

  const myRef = useRef(null)
  // const slideInTop = (elem, delay, duration) => {
  //   gsap.fromTo(elem,{
  //       opacity: 0,
  //       y: -300
  //   },
  //   {
  //       opacity: 1,
  //       y: 0,
  //   } 
  //   )}

  // useEffect(() => {
  //   slideInTop('#headerText')
  // },[])


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
      onCloseModal();
      console.log('user: ', user);
    }else{
      setIsLogin(false);
      setIsError('Invalid email or password');
    }
  }

  const handleLogOut = () => {
    setIsLogin(false);
    setIsUser({});
  }

  useEffect(() => {
    setIsError('');
  },[isEmail,isPassword])


  const changeNavBg = () => {
    if(window.scrollY >= 160) {
      setIsNavActive(true);
    }else{
      setIsNavActive(false);
    }
  }

  window.addEventListener('scroll', changeNavBg);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  
  return (
    <nav className={ isNavActive === true ? 'active' : '' } id="nav">

        <ul className={ isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={ () => setIsMobile(false) } >
            <li className='navbar_item'><LinkTo to="/#"  onClick={ () => {setIsActive('#'); window.scrollTo(0,0)} }  className={ isActive ==="#" ? 'active' : '' }> Home </LinkTo></li>
            <li className='navbar_item'><Link to="about" smooth="true" onClick={ () => {setIsActive('#about')}}  className={ isActive ==="#about" ? 'active' : '' }> About </Link></li>
            <li className='navbar_item'><Link to="activities" smooth="true"  onClick={ () => {setIsActive('#activities')} }  className={ isActive ==="#activities" ? 'active' : '' }> Activities </Link></li>
            <li><Link to="header" smooth="true"> <img src={ logo } alt="muscleFactoryLogo" className='navbar_logo' onClick={ () => {setIsActive('#')}}/></Link></li>
            <li className='navbar_item'><Link to="coaches" smooth="true" onClick={ () => {setIsActive('#coaches')} }  className={ isActive ==="#coaches" ? 'active' : '' }> Coaches </Link></li>
            <li className='navbar_item'><Link to="contact" smooth="true" onClick={ () => {setIsActive('#contact')} }  className={ isActive ==="#contact" ? 'active' : '' }> Contact </Link></li>
            { !isLogin ? (
            <li>
              <button className='btn btn-navbar' onClick={onOpenModal}>Login</button></li> ): (
              <li className='isLogin'><LinkTo to={`/Profil/${isUser.id}`} onClick={() => setIsActive('')} className='btn btn-navbar'>Profil</LinkTo>
              <Link to='/'><img className="shutDownLogo" src={shutDown} alt='shutDownLogo' onClick={handleLogOut} /></Link></li>
              )
            }
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
          <div className='popup-header'>
            <img src={ logo } alt="loginLogo" className='popup-logo'/>
            <h2>Connect to your GYM account</h2>
          </div>
          <p className='error'>{ isError }</p>
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