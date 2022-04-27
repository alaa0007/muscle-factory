import React,{ useRef } from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Coaches from '../components/Coaches/Coaches'

const HomePages = () => {
  const myRef = useRef(null)
  return (
    
    <>
    <Header />
    <About ScrollTo={myRef}/>
    <Coaches />  
    </>
  )
}

export default HomePages