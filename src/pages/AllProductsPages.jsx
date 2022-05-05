import React from 'react'
import AllProducts from '../components/AllProducts/AllProducts'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const AllProductsPages = () => {
  return (
    <>
        <Navbar />
        <AllProducts />
        <Contact />
        <Footer />
    </>
  )
}

export default AllProductsPages