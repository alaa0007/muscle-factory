import React, { useState, useEffect} from 'react';
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
import { Link  } from 'react-scroll';
import axios from 'axios';
import QrCode from 'qrcode';
import { RiArrowDropDownLine } from 'react-icons/ri';





const Navbar = () => {

  const [isActive, setIsActive] = useState('#');
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [OpenQrcode, setOpenQrcode] = useState(false);
  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [isLoggin, setIsLoggin] = useState(false);
  const [user, setUser] = useState({});
  const [qrCodeImg, setQrCodeImg] = useState('');
  const [dropDown, setDropDown] = useState(false);



  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onOpenModalQrcode = () => setOpenQrcode(true);
  const onCloseModalQrcode = () => setOpenQrcode(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.get('https://projet-tekup.herokuapp.com/Member/')
    .then(res => {
      console.log(res.data);
      const user = res.data.find(user => user.Email === isEmail && user.Password === isPassword);
      if(user){
        setUser(window.localStorage.setItem('user', JSON.stringify(user)));
        setIsLoggin(window.localStorage.setItem('isLoggin',  JSON.stringify(true)));
        onCloseModal();
      }
      else{
        setIsError('Email ou mot de passe incorrect');
      }
    });
  }

  useEffect(() => {
    let QRCode = "Nothing"
    if(isLoggin === true){
    QRCode = user.Subscription_expire_Date;
    }
    console.log(QRCode);
    QrCode.toDataURL(QRCode).then(url => {
      setQrCodeImg(url);
    });
  } , [isLoggin]);

  
  const handleLogOut = () => {
    setUser(window.localStorage.setItem('user', JSON.stringify({})));
    setIsLoggin(window.localStorage.setItem('isLoggin', JSON.stringify(false)));
  }

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
    setIsLoggin(JSON.parse(window.localStorage.getItem('isLoggin')));
  }, [isLoggin]);

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
            <li className='navbar_item'><LinkTo to="/"  onClick={ () => {setIsActive('#'); window.scrollTo(0,0)} }  className={ isActive ==="#" ? 'active' : '' }> Home </LinkTo></li>
            <li className='navbar_item'><Link to="about" smooth="true" onClick={ () => {setIsActive('#about')}}  className={ isActive ==="#about" ? 'active' : '' }> About </Link></li>
            <li className='navbar_item'><Link to="activities" smooth="true"  onClick={ () => {setIsActive('#activities')} }  className={ isActive ==="#activities" ? 'active' : '' }> Activities </Link></li>
            <li className='navbar_item'><Link to="coaches" smooth="true" onClick={ () => {setIsActive('#coaches')} }  className={ isActive ==="#coaches" ? 'active' : '' }> Coaches </Link></li>
            <li><Link to="header" smooth="true"> <img src={ logo } alt="muscleFactoryLogo" className='navbar_logo' onClick={ () => {setIsActive('#')}}/></Link></li>
            <li className='navbar_item'><Link to="train" smooth="true" onClick={ () => {setIsActive('#train')} }  className={ isActive ==="#train" ? 'active' : '' }> Train pack </Link></li>
            <li className='navbar_item'><Link to="products" smooth="true" onClick={ () => {setIsActive('#products')} }  className={ isActive ==="#products" ? 'active' : '' }> Products </Link></li>
            <li className='navbar_item'><Link to="contact" smooth="true" onClick={ () => {setIsActive('#contact')} }  className={ isActive ==="#contact" ? 'active' : '' }> Contact </Link></li>
            { !isLoggin ? (
            <li>
              <button className='btn btn-navbar' onClick={onOpenModal}>Login</button></li> ): (
              // <li className='isLogin'><LinkTo to={`/Profil/${user.id}`} onClick={() => setIsActive('')} className='btn btn-navbar'>Profil</LinkTo>
              // <LinkTo to='/'><img className="shutDownLogo" src={shutDown} alt='shutDownLogo' onClick={handleLogOut} /></LinkTo></li>
              <div>
                <div class="dropdown">
                <div onClick={() => setDropDown(!dropDown)} className="userDropDown"> {user.Email} <RiArrowDropDownLine/> </div>
                  <div className='dropdown-content'>  
                   <li><LinkTo to={`/Profil/${user.id}`} onClick={() => setIsActive('')}>Profil</LinkTo></li>
                  <li><span className='qrCode' onClick={onOpenModalQrcode}>Your Pass</span></li>
                  <hr/>
                  <li><LinkTo to='/'><span onClick={handleLogOut}> Logout </span></LinkTo></li> 
                  </div>
                  </div>
              </div>
              )
            }
        </ul>

        <div className='small-device'>
        <h4 className='mobile-logo'>muscle factory</h4>
        <a className='mobile-menu' onClick={ () => setIsMobile(!isMobile) } >
        { isMobile  ? <AiOutlineClose /> : <AiOutlineMenuFold /> }
        </a>
        </div>


        { /* QRCode popup */}
        <Modal open={OpenQrcode} onClose={onCloseModalQrcode} center classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={500}>
          <div className='qrcode-modal'>
            <img src={qrCodeImg} alt="qrcode" className='qrcode-img'/>
          </div>
      </Modal>
        



      { /* Login popup */}
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
               <button className='btn btn-login'>Connect</button>
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