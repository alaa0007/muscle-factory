import React, { useState , useEffect } from 'react'
import './allProducts.css'
import ProductsItem from '../Products/ProductItem'
import { IoIosOptions } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import CategoieItem from './CategoieItem'
import ProductFilter from './ProductFilter'

const AllProducts = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    axios.get('https://projet-tekup.herokuapp.com/Product/').then(res => {
      setProducts(res.data)
      console.log(res.data);
    });
    },[])


  return (
    <div className='all-products-container'>
        <div className='all-products-header'>
            <h1>PRODUCTS</h1>
            <div className='products-categorie'>
              <div className='products-categorie-content'> 
                <CategoieItem name="WHEY PROTEIN" numbre="3"/>
                <CategoieItem name="WEIGHT GAINER" numbre="3"/>
                <CategoieItem name="CASEIN" numbre="3"/>
                <CategoieItem name="PACK" numbre="3"/>
                <CategoieItem name="MULTIVITAMIN" numbre="3"/>
                <CategoieItem name="ACCESSORIES" numbre="3"/>
                <CategoieItem name="T-SHIRT" numbre="3"/>
                <CategoieItem name="SHAKERS" numbre="3"/>
              </div>
            </div>
        </div>
        <div className='all-products-body'>
            <div className='all-products-body-content-filter'>
                <div className='all-products-body-content-filter-item'>
                    <div className='all-products-body-content-filter-item-categorie'>
                      <div className='filter'>
                        <div className='filter-icon'>
                          <h4>FILTER</h4>
                          <IoIosOptions/>
                        </div>
                        <div className='filter-container'>
                          <ProductFilter filterName="WHEY PROTEIN"/>
                          <ProductFilter filterName="SHAKERS"/>
                          <ProductFilter filterName="ACCESSORIES"/>
                          <ProductFilter filterName="CASEIN"/>
                          <ProductFilter filterName="T-SHIRT"/>
                          <ProductFilter filterName="WEIGHT GAINER"/>
                          <ProductFilter filterName="MULTIVITAMIN"/>
                          <ProductFilter filterName="PACk"/>
                        </div>
                        </div>
                        <div className='filter-search'>
                          <input type="search" placeholder="Search for product" className='search'/>
                          <BsSearch className='search-btn'/>
                       </div>
                    </div>
                </div>
            </div>
            <div className='all-products-body-content'>
              {
                products.map(( product, index ) => {
                  return ( 
                    <ProductsItem key={ index } product={ product } />
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default AllProducts