import React, { useState,useContext } from 'react'
import { FaArrowDown } from 'react-icons/fa'

import './ProductFilters.css'

import { Context } from '../../context/ContextApi'

function ProductFilters() {

  const contextData = useContext(Context)

  const titleActive = () => {
    contextData.setTitleActive(prev => !prev)
    if(contextData.titleActive) {
      contextData.setTitleFilter('')
    }
    if(!contextData.titleActive){
      contextData.setGlobalSearchActive(false)
      contextData.setProductsSearchTerm('')
      contextData.setBrandActive(false)
      contextData.setBrandFilter('')
      contextData.setCategoryActive(false)
      contextData.setCategoryFilter('')
      contextData.setTabActive(false)
      contextData.setTabFilter('')
    }
  }

  const brandActive = () => {
    contextData.setBrandActive(prev => !prev)
    if(contextData.brandActive) {
      contextData.setBrandFilter('')
    }
    if(!contextData.brandActive){
      contextData.setGlobalSearchActive(false)
      contextData.setProductsSearchTerm('')
      contextData.setTitleActive(false)
      contextData.setTitleFilter('')
      contextData.setCategoryActive(false)
      contextData.setCategoryFilter('')
      contextData.setTabActive(false)
      contextData.setTabFilter('')
    }
  }

  const categoryActive = () => {
    contextData.setCategoryActive(prev => !prev)
    if(contextData.categoryActive) {
      contextData.setCategoryActive('')
    }
    if(!contextData.categoryActive){
      contextData.setGlobalSearchActive(false)
      contextData.setProductsSearchTerm('')
      contextData.setTitleActive(false)
      contextData.setTitleFilter('')
      contextData.setBrandActive(false)
      contextData.setBrandFilter('')
      contextData.setTabActive(false)
      contextData.setTabFilter('')
    }
  }

  const tabActive = () => {
    contextData.setTabActive(prev => !prev)
    if(contextData.tabActive) {
      contextData.setTabFilter('')
      contextData.setTabActive(false)
    }
    if(!contextData.genderActive){
      contextData.setGlobalSearchActive(false)
      contextData.setProductsSearchTerm('')
      contextData.setTitleActive(false)
      contextData.setTitleFilter('')
      contextData.setBrandActive(false)
      contextData.setBrandFilter('')
      contextData.setCategoryActive(false)
      contextData.setCategoryFilter('')
    }
  }

  return (
    <div  className='user-filters'>
      <div className="user-filter_container">
        <div className="user-filter_title user-filter" onClick={titleActive}>
          <h2 className='user-filters_h2'>Title</h2>
          <FaArrowDown className='user-filters_icon'/>
        </div>
          {contextData.titleActive && <input 
            type='text'
            placeholder='Title..'
            className='form-control input-filter filter-border'
            onChange={(e) => {
              contextData.setTitleFilter(e.target.value)
              if(e.target.value !== '') {
              contextData.setProductsPostsPerPage(50)
              contextData.setProductsSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setProductsPostsPerPage(5)
              contextData.setProductsSelectedNumber(5)
            }
            }}
          />}
        <div className="user-filter_brand user-filter" onClick={brandActive}>
          <h2 className='user-filters_h2'>Brand</h2>
          <FaArrowDown className='user-filters_icon'/>
        </div>
          {contextData.brandActive && <input 
            type='text'
            placeholder='Brand..'
            className='form-control input-filter filter-border'
            onChange={(e) => {
              contextData.setBrandFilter(e.target.value)
              if(e.target.value !== '') {
              contextData.setProductsPostsPerPage(50)
              contextData.setProductsSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setProductsPostsPerPage(5)
              contextData.setProductsSelectedNumber(5)
            }
            }}
          />}
        <div className="user-filter_category user-filter" onClick={categoryActive}>
          <h2 className='user-filters_h2'>Category</h2>
          <FaArrowDown className='user-filters_icon'/>
        </div>
          {contextData.categoryActive && <input 
            type='text'
            placeholder='Category'
            className='form-control input-filter filter-border'
            onChange={(e) => {
              contextData.setCategoryFilter(e.target.value)
              if(e.target.value !== '') {
              contextData.setProductsPostsPerPage(50)
              contextData.setProductsSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setProductsPostsPerPage(5)
              contextData.setProductsSelectedNumber(5)
            }
            }}
          />}
        <div className="user-filter_tabs user-filter" onClick={tabActive}>
          <h2 className='user-filters_h2'>Tabs</h2>
        </div>
        {contextData.tabActive && 
        <div className='gender-dropdown'>
          <p className='gender-text' onClick={(e) => {
            contextData.setTabFilter('laptops')
            contextData.setTabActive(false)
            if(e.target.value !== '') {
              contextData.setProductsPostsPerPage(50)
              contextData.setProductsSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setProductsPostsPerPage(5)
              contextData.setProductsSelectedNumber(5)
            }
          }}>Laptops</p>
          <p className='gender-text' onClick={(e) => {
            contextData.setTabFilter('all')
            contextData.setTabActive(false)
            if(e.target.value !== ''){
              contextData.setProductsPostsPerPage(5)
              contextData.setProductsSelectedNumber(5)
            }
          }}>All</p>
        </div>
        }
      </div>
    </div>
  )
}

export default ProductFilters