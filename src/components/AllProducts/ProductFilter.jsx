import React,{ useId} from 'react'
import { useDispatch,useSelector } from 'react-redux'

const ProductFilter = ({ filterName }) => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.filters.filters);
  const idFilter = useId()
  const handleFilter = (e) => {
    const currentFilter = selector.indexOf(e.target.value);
    const newChecked = currentFilter === -1 ? [...selector, e.target.value] : selector.filter(filter => filter !== e.target.value);
    dispatch({ type: 'filters/setFilter', payload: newChecked })
 }

  return (
    <div className='filter-container-item'>
      <input id={ idFilter } type="checkbox" value={ filterName }  name={ filterName } onChange={ handleFilter } className='checkbox-filter' />
      <label htmlFor={ idFilter }>{ filterName }</label>
    </div>
  )
}

export default ProductFilter