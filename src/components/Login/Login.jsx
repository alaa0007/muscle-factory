// import React, {useState, useEffect} from 'react'
// import { Modal } from 'react-responsive-modal';
// import popupLogo from '../../assets/Images/logoWithoutBg.png';
// import { MdEmail } from 'react-icons/md';
// import { GiHouseKeys } from 'react-icons/gi';
// import './popup.css';


// const Login = (props) => {

//   const [open, setOpen] = useState(false);
//   const [isEmail, setIsEmail] = useState('');
//   const [isPassword, setIsPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(false);
//   const [isError, setIsError] = useState('');

//   const onCloseModal = () => setOpen(false);


  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('email: ', isEmail, 'password: ', isPassword);
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const data = await response.json();
//     console.log('data: ', data);
//     const user = data.find(user => user.email === isEmail && user.website === isPassword);
//     if(user) {
//       setIsLogin(true);
//       setIsError('');
//       onCloseModal();
//     }else{
//       setIsLogin(false);
//       setIsError('Invalid email or password');
//     }

//   }

//   useEffect(() => {
//     setIsError('');
//   },[isEmail,isPassword])


//   return (
//     <div >
//       <Modal open={props.open} onClose={props.onCloseModal} center classNames={{
//           overlayAnimationIn: 'customEnterOverlayAnimation',
//           overlayAnimationOut: 'customLeaveOverlayAnimation',
//           modalAnimationIn: 'customEnterModalAnimation',
//           modalAnimationOut: 'customLeaveModalAnimation',
//         }}
//         animationDuration={500}>
//         <div className='popup'>
//           <p>{ isError }</p>
//           <div className='popup-header'>
//             <img src={popupLogo} alt="loginLogo" className='popup-logo'/>
//             <h2>Connect to your GYM account</h2>
//           </div>
//           <div className='popup-container'>
//             <form onSubmit={handleSubmit}>
//             <div className='popup-container-email'>
//               <label htmlFor="email"> <MdEmail /> </label>
//               <input  type='email' name="email" value={isEmail}  onChange={(e) => setIsEmail(e.target.value)} placeholder='Email' required/>
//             </div>
//             <div className='popup-container-password'>
//               <label htmlFor="password"> <GiHouseKeys /></label>
//               <input type='password' name="password" placeholder='Password' onChange={(e) => setIsPassword(e.target.value)}  value={isPassword} required/>
//             </div>
//             <div className='popup-footer'>   
//                <button className='btn btn-profil'>Connect</button>
//                </div>
//             </form>
//           </div>
//       </div>
//       </Modal>
//     </div>
//   )
// }

// export default Login