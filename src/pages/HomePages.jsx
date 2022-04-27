import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Coaches from '../components/Coaches/Coaches'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const HomePages = () => {
  return (
    <>
    <Navbar/>
    <Header />
    <About/>
    <Coaches />  
    <Contact />
    <Footer />
    </>
  )
}

export default HomePages