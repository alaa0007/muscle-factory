import React,{ useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import './products.css'
import axios from 'axios'


const Products = () => {
  const [products, setProducts] = useState([])



  useEffect(() => {
    axios.get('https://projet-tekup.herokuapp.com/Product/').then(res => {
      setProducts(res.data)
    })
  },[])




  return (
    <>
    <div id="train" className='train'>
    <div  className="elfsight-app-f39a8d3d-542f-4ef8-b8de-0c736a091242"></div>
    </div>
    <div className='products-container' id='products'>
        <div className='products-header'>
            <h1>Trending Products</h1>
        </div>
        <div className='products-body'>
          {
            products.slice(0,4).map((product ,index) => { 
              return <ProductItem key={ index } product={ product }/>
            })
          }
        </div>
        <div className="product-footer">
            <Link to='/Products' className='btn btn-product'>See More</Link>
        </div>
    </div>
    </>
  )
}



export default Products