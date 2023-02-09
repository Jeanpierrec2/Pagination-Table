import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import './FilterSearch.css'

import { Context } from '../../context/ContextApi'

function FilterSearch({setSearchTerm}) {

  const contextData = useContext(Context)

  const activeHandler = () => {
    contextData.setGlobalSearchActive(prev => !prev)
    if(contextData.globalSearchActive) {
      contextData.setUserSearchTerm('')
      contextData.setProductsSearchTerm('')
    }
    if(!contextData.globalSearchActive){
      contextData.setNameActive(false)
      contextData.setNameFilter('')
      contextData.setemailActive(false)
      contextData.setEmailFilter('')
      contextData.setBirthActive(false)
      contextData.setBirthFilter('')
      contextData.setGenderActive(false)
      contextData.setGenderFilter('')
      contextData.setBrandActive(false)
      contextData.setBrandFilter('')
      contextData.setCategoryActive(false)
      contextData.setCategoryFilter('')
      contextData.setTitleActive(false)
      contextData.setTitleFilter('')
      contextData.setTabActive(false)
      contextData.setTabFilter('')
    }
  }

  return (
    <div className='filter'>
      <FaSearch className='search-icon' onClick={activeHandler}/>
      {contextData.globalSearchActive && <input 
        type='text'
        placeholder='Search..'
        className='form-control input-filter'
        onChange={(e) => {
            setSearchTerm(e.target.value)
            if(e.target.value !== '') {
              contextData.setUsersPostsPerPage(50)
              contextData.setProductsPostsPerPage(50)
              contextData.setUserSelectedNumber(50)
              contextData.setProductsSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setProductsPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
              contextData.setProductsSelectedNumber(5)
            }
        }}
      />}
    </div>
  )
}

export default FilterSearch