import React, { useState , useEffect } from 'react'
import './allProducts.css'
import ProductsItem from '../Products/ProductItem'
import { IoIosOptions } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'

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
              <div className='categorie-item'>
                <h4>WHEY PROTEIN</h4> 
                <h5>{products.length} Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>WEIGHT GAINER</h4> 
                <h5>3 Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>CASEIN</h4> 
                <h5>3 Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>PACK</h4> 
                <h5>3 Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>MULTIVITAMIN</h4> 
                <h5>3 Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>ACCESSORIES</h4> 
                <h5>3 Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>T-SHIRT</h4> 
                <h5>3 Products</h5> 
              </div>
              <div className='categorie-item'>
                <h4>SHAKERS</h4> 
                <h5>3 Products</h5> 
              </div>
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
                          <div className='filter-container-item'>
                            <input type="checkbox" value='WHEY PROTEIN' name='WHEY PROTEIN'/> <h4>WHEY PROTEIN</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='SHAKERS' name='SHAKERS'/> <h4>SHAKERS</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='ACCESSORIES' name='ACCESSORIES'/> <h4>ACCESSORIES</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='CASEIN' name='CASEIN' /> <h4>CASEIN</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='T-SHIRT' name='T-SHIRT'/> <h4>T-SHIRT</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='WEIGHT GAINER' name='WEIGHT GAINER'/> <h4>WEIGHT GAINER</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='MULTIVITAMIN' name='MULTIVITAMIN'/> <h4>MULTIVITAMIN</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" value='PACK' name='PACK'/> <h4>PACK</h4>
                          </div>
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