import React, { useContext, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

import './UserFilters.css'

import { Context } from '../../context/ContextApi'

function UserFilters() {

  const contextData = useContext(Context)

  const nameActive = () => {
    contextData.setNameActive(prev => !prev)
    if(contextData.nameActive) {
      contextData.setNameFilter('')
    }
    if(!contextData.nameActive){
      contextData.setGlobalSearchActive(false)
      contextData.setUserSearchTerm('')
      contextData.setemailActive(false)
      contextData.setEmailFilter('')
      contextData.setBirthActive(false)
      contextData.setBirthFilter('')
      contextData.setGenderActive(false)
      contextData.setGenderFilter('')
    }
  }

  const emailActive = () => {
    contextData.setemailActive(prev => !prev)
    if(contextData.emailActive) {
      contextData.setEmailFilter('')
    }
    if(!contextData.emailActive){
      contextData.setGlobalSearchActive(false)
      contextData.setUserSearchTerm('')
      contextData.setNameActive(false)
      contextData.setNameFilter('')
      contextData.setBirthActive(false)
      contextData.setBirthFilter('')
      contextData.setGenderActive(false)
      contextData.setGenderFilter('')
    }
  }

  const birthActive = () => {
    contextData.setBirthActive(prev => !prev)
    if(contextData.birthActive) {
      contextData.setBirthFilter('')
    }
    if(!contextData.birthActive){
      contextData.setGlobalSearchActive(false)
      contextData.setUserSearchTerm('')
      contextData.setemailActive(false)
      contextData.setEmailFilter('')
      contextData.setNameActive(false)
      contextData.setNameFilter('')
      contextData.setGenderActive(false)
      contextData.setGenderFilter('')
    }
  }

  const genderActive = () => {
    contextData.setGenderActive(prev => !prev)
    if(contextData.genderActive) {
      contextData.setGenderFilter('')
      contextData.setGenderActive(false)
    }
    if(!contextData.genderActive){
      contextData.setGlobalSearchActive(false)
      contextData.setUserSearchTerm('')
      contextData.setemailActive(false)
      contextData.setEmailFilter('')
      contextData.setNameActive(false)
      contextData.setNameFilter('')
      contextData.setBirthActive(false)
      contextData.setBirthFilter('')

    }
  }


  return (
    <div className='user-filters'>
      <div className="user-filter_container">
        <div className="user-filter_name user-filter" onClick={nameActive}>
          <h2 className='user-filters_h2'>Name</h2>
          <FaArrowDown className='user-filters_icon' />
        </div>
        {contextData.nameActive && <input 
            type='text'
            placeholder='Name..'
            className='form-control input-filter filter-border'
            onChange={(e) => {
              contextData.setNameFilter(e.target.value)
              if(e.target.value !== '') {
              contextData.setUsersPostsPerPage(50)
              contextData.setUserSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
            }
            }}
          />}
        <div className="user-filter_email user-filter" onClick={emailActive}>
          <h2 className='user-filters_h2'>Email</h2>
          <FaArrowDown className='user-filters_icon'/>
        </div>
        {contextData.emailActive && <input 
            type='text'
            placeholder='Email..'
            className='form-control input-filter filter-border'
            onChange={(e) => {
              contextData.setEmailFilter(e.target.value)
              if(e.target.value !== '') {
              contextData.setUsersPostsPerPage(50)
              contextData.setUserSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
            }
            }}
          />}
        <div className="user-filter_birthdate user-filter" onClick={birthActive}>
          <h2 className='user-filters_h2'>BirthDate</h2>
          <FaArrowDown className='user-filters_icon'/>
        </div>
        {contextData.birthActive && <input 
            type='text'
            placeholder='Birth..'
            className='form-control input-filter filter-border'
            onChange={(e) => {
              contextData.setBirthFilter(e.target.value)
              if(e.target.value !== '') {
              contextData.setUsersPostsPerPage(50)
              contextData.setUserSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
            }
            }}
          />}
        <div className="user-filter_gender user-filter" onClick={genderActive}>
          <h2 className='user-filters_h2'>Gender</h2>
        </div>
        {contextData.genderActive && 
        <div className='gender-dropdown'>
          <p className='gender-text' onClick={(e) => {
            contextData.setGenderFilter('male')
            contextData.setGenderActive(false)
            if(e.target.value !== '') {
              contextData.setUsersPostsPerPage(50)
              contextData.setUserSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
            }
          }}>Male</p>
          <p className='gender-text' onClick={(e) => {
            contextData.setGenderFilter('female')
            contextData.setGenderActive(false)
            if(e.target.value !== '') {
              contextData.setUsersPostsPerPage(50)
              contextData.setUserSelectedNumber(50)
            }
            if(e.target.value === ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
            }
          }}>Female</p>
          <p className='gender-text' onClick={(e) => {
            contextData.setGenderFilter('all')
            contextData.setGenderActive(false)
            if(e.target.value !== ''){
              contextData.setUsersPostsPerPage(5)
              contextData.setUserSelectedNumber(5)
              contextData.setShowDropDown(true)
            }
          }}>All</p>
        </div>
        }
      </div>
    </div>
  )
}

export default UserFilters