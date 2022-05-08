import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const ProductFilter = ({ filterName }) => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.filters.filters);


  return (
    <div className='filter-container-item'>
      <input type="radio" value={ filterName }  name="e" onChange={((e) => dispatch({ type: 'filters/setFilter', payload: e.target.value }))} /> <h4>{ filterName }</h4>
    </div>
  )
}

export default ProductFilter