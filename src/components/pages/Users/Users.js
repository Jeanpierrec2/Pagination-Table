import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

import './Users.css'
import Pagination from '../../shared/Pagination/Pagination'
import Filters from '../../shared/Filters/Filters'

import { Context } from '../../context/ContextApi'

function Users() {

    //Context
    const contextData = useContext(Context)

    //Fetching Users API
    const fetchPosts = async () => {
        const usersURL = 'https://dummyjson.com/users'
        contextData.setUsersLoading(true)
        try {
            const res = await axios.get(usersURL)
            contextData.setUsers(res.data.users)
            contextData.setUsersLoading(false)
        } catch (error) {
            console.log(error)
        }

    }
    
    //UseEffect
    useEffect(() => {
        fetchPosts()
        contextData.setUserFilters(true)
        contextData.setProductsFilter(false)
        contextData.setUsersPostsPerPage(5)
        contextData.setUserSelectedNumber(5)
    },[])

    useEffect(() => {
        if(contextData.userSearchTerm !== '' ||
           contextData.nameFilter !== '' ||
           contextData.emailFilter !== '' ||
           contextData.birthFilter !== '' ||
           contextData.genderFilter !== ''){
            contextData.setShowDropDown(false)
        }else{
            contextData.setShowDropDown(true)
            contextData.setUsersPostsPerPage(5)
            contextData.setUserSelectedNumber(5)
        }
    },[contextData.userSearchTerm,contextData.nameFilter,contextData.emailFilter,contextData.birthFilter,contextData.genderFilter])

    
    //Get current posts
    const indexOfLastPost = contextData.usersCurrentPage * contextData.usersPostsPerPage
    const indexOfFirstPost = indexOfLastPost - contextData.usersPostsPerPage
    const currentPosts = contextData.users.slice(indexOfFirstPost, indexOfLastPost)

    //Change Page
    const paginate = (pageNumber) => {
        contextData.setUsersCurrentPage(pageNumber)
    }

    //Users Loading
    if(contextData.usersLoading) {
        return (
        <div className='clip-loader'>
            <ClipLoader 
            className='clip-loader'
            color='black'
            loading={contextData.usersLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
      )
    }

  return (
    <div className='users'>
      <div className='users-container'>
        <Filters 
            selectedNumber={contextData.userSelectedNumber}
            setCurrentPage={contextData.setUsersCurrentPage}
            setPostsPerPage={contextData.setUsersPostsPerPage}
            setSelectedNumber={contextData.setUserSelectedNumber}
            setSearchTerm={contextData.setUserSearchTerm}
        />
        <div className='container'>
            <table className='table table-bordered table-dark'>
              <thead>
                <tr style={{color: '#c0e3e5'}}>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>MAIDEN NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
                <th>EMAIL</th>
                <th>USERNAME</th>
                <th>BLOODGROUP</th>
                <th>EYECOLOUR</th>
                <th>DOMAIN</th>
                <th>UNIVERSITY</th>
                <th>BIRTHDATE</th>
                </tr>
              </thead>
            <tbody>
                {
                    currentPosts.filter(val => {
                        if(contextData.nameFilter === ''){
                            return val
                        }else if(val.firstName.toLowerCase().includes(contextData.nameFilter.toLowerCase())){
                            return val
                        }
                    }).filter(val => {
                        if(contextData.emailFilter === '' ){
                            return val
                        }else if(val.email.toLowerCase().includes(contextData.emailFilter.toLowerCase())){
                            return val
                        }
                    }).filter(val => {
                        if(contextData.birthFilter === ''){
                            return val
                        }else if(val.birthDate.toLowerCase().includes(contextData.birthFilter.toLowerCase())){
                            return val
                        }
                    }).filter(val => {
                        if(contextData.userSearchTerm === ''){
                            return val
                        }else if(
                            val.id.toString().toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.firstName.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.lastName.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.maidenName.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.age.toString().toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.gender.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.email.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.bloodGroup.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.eyeColor.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.username.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.university.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.domain.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) ||
                            val.birthDate.toLowerCase().includes(contextData.userSearchTerm.toLowerCase()) 
                        ) {
                            return val
                        }
                    }).filter(val => {
                        if(contextData.genderFilter === '' || contextData.genderFilter === 'all') {
                            return val
                        }else if(val.gender.toString().toLowerCase()===contextData.genderFilter.toLowerCase()){
                            return val
                        }
                    }).map((user, index) => (
                        <tr style={{color: '#c0e3e5'}} key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.maidenName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.bloodGroup}</td>
                            <td>{user.eyeColor}</td>
                            <td>{user.university}</td>
                            <td>{user.domain}</td>
                            <td>{user.birthDate}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
        <Pagination 
            currentPage={contextData.usersCurrentPage} 
            datalength={contextData.users.length} 
            postsPerPage={contextData.usersPostsPerPage} 
            paginate={paginate} 
        />
        <div className="links">
            <button className="home-button link-button"><Link to='/' className="home-button_link">HomePage</Link></button>
            <button className="switch-button link-button"><Link to='/products' className="home-button_link">Products</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Users