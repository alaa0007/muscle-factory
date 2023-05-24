import React, { useState , useEffect } from 'react'
import './allProducts.css'
import ProductsItem from '../Products/ProductItem'
import { IoIosOptions } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import CategoieItem from './CategoieItem'
import ProductFilter from './ProductFilter'
import { useSelector } from 'react-redux'

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [searchProduct, setSearchProduct] = useState('')
  const selector = useSelector(state => state.filters.filters);

    useEffect(() =>{
      axios.get('http://localhost:8000/Product/').then((res) => {
        setProducts(res.data)
      axios.get("http://localhost:8000/Category/").then((res) =>{
        setCategories(res.data)
      })
      });
      
    },[])

    
  return (
    <div className='all-products-container'>
        <div className='all-products-header'>
            <h1>PRODUCTS</h1>
            <div className='products-categorie'>
              <div className='products-categorie-content'> 
              {
                categories.map((category, index) => {
                  return <CategoieItem key={ index } name={ category.Titre } numbre="5" />
                })
              }
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
                          {
                            categories.map((category, index) => {
                              return <ProductFilter key={ index } filterName={ category.Titre }/>
                            })
                          }
                        </div>
                        </div>
                        <div className='filter-search'>
                          <input type="search" placeholder="Search for product" className='search' onChange={(e) => setSearchProduct(e.target.value)}/>
                          <BsSearch className='search-btn'/>
                       </div>
                    </div>
                </div>
            </div>
            <div className='all-products-body-content'>
              {
                products.filter((el) => {
                  if (searchProduct === '') {
                    return el
                  } else if
                    ( el.Product_Name.toLowerCase().includes(searchProduct.toLowerCase())){
                      return el
                    }
                   }).filter((el) => {
                    if (selector === []) {
                      return el
                    } else if
                      ( el.Category.includes(selector)){
                        return el
                  }
                  })
                  .map(( product, index ) => {
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