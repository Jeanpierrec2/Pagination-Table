import React, { useContext } from 'react'

import './Filters.css'
import DropDown from '../UIElements/DropDown'
import FilterSearch from '../UIElements/FilterSearch'
import UserFilters from '../UserFilters/UserFilters'
import ProductFilters from '../ProductFilters/ProductFilters'

import { Context } from '../../context/ContextApi'
  //We get a number of props to use them in the same reusable components
  function Filters({selectedNumber,setCurrentPage,setPostsPerPage,setSelectedNumber,setSearchTerm }) {
  
  //Context
  const contextData = useContext(Context)
  
  //Dropdown and FilterSearch are common for both the users and products page
  return (
    <div className='filters'>
      {contextData.showDropDown && <DropDown 
        selectedNumber={selectedNumber}
        setCurrentPage={setCurrentPage}
        setPostsPerPage={setPostsPerPage}
        setSelectedNumber={setSelectedNumber}
      />}
      <div className='overall-filter'>
        <FilterSearch setSearchTerm={setSearchTerm} />
      </div>
      {contextData.userFilters && <UserFilters />}
      {contextData.productFilters && <ProductFilters />}
    </div>
  )
}

export default Filters