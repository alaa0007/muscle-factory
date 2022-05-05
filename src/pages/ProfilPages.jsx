import React from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Profil from '../components/Profil/Profil'
import { Navigate } from 'react-router-dom'

const ProfilPages = ( { isloggin } ) => {
  // console.log("Component",isloggin);
  // if (isloggin) {
    return (
      <>
        <Navbar />
        <Profil />
        <Contact />
        <Footer />
      </>
    )
//   } else {
//   return (
//     <Navigate to='/' />
//   )
// }
}
export default ProfilPages