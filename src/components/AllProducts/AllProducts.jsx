import React from 'react'
import './allProducts.css'
import AllProductsItem from './AllProductsItem'
import { IoIosOptions } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'


const AllProducts = () => {
  return (
    
    <div className='all-products-container'>
        <div className='all-products-header'>
            <h1>PRODUCTS</h1>
            <div className='products-categorie'>
              <div className='products-categorie-content'> 
              <div className='categorie-item'>
                <h4>WHEY PROTEIN</h4> 
                <h5>3 Products</h5> 
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
                            <input type="checkbox" /> <h4>WHEY PROTEIN</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>SHAKERS</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>ACCESSORIES</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>CASEIN</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>T-SHIRT</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>WEIGHT GAINER</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>MULTIVITAMIN</h4>
                          </div>
                          <div className='filter-container-item'>
                            <input type="checkbox" /> <h4>PACK</h4>
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
                <AllProductsItem/>
                <AllProductsItem/>
                <AllProductsItem/>
                <AllProductsItem/>
                <AllProductsItem/>
            </div>
        </div>
    </div>
  )
}

export default AllProducts