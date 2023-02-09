import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

import './Products.css'
import Pagination from '../../shared/Pagination/Pagination'
import Filters from '../../shared/Filters/Filters'

import { Context } from '../../context/ContextApi'

function Products() {

    //Context 
    const contextData = useContext(Context)

    //Fetching Products API
    const fetchPosts = async () => {
        const productsURL = 'https://dummyjson.com/products'
        contextData.setProductsLoading(true)
        try {
            const res = await axios.get(productsURL)
            contextData.setProducts(res.data.products)
            contextData.setProductsLoading(false)
        } catch (error) {
            console.log(error)
        }

    }
    
    //UseEffect for fetching
    useEffect(() => {
        fetchPosts()
        contextData.setUserFilters(false)
        contextData.setProductsFilter(true)
        contextData.setProductsPostsPerPage(5)
        contextData.setProductsSelectedNumber(5)
    },[])

    useEffect(() => {
        if(contextData.productsSearchTerm !== '' ||
           contextData.titleFilter !== '' ||
           contextData.brandFilter !== '' ||
           contextData.categoryFilter !== '' ||
           contextData.tabFilter !== ''){
            contextData.setShowDropDown(false)
        }else{
            contextData.setShowDropDown(true)
            contextData.setUsersPostsPerPage(5)
            contextData.setUserSelectedNumber(5)
        }
    },[contextData.productsSearchTerm,contextData.titleFilter,contextData.brandFilter,contextData.categoryFilter,contextData.tabFilter])

    
    //Get current posts
    const indexOfLastPost = contextData.productsCurrentPage * contextData.productsPostsPerPage
    const indexOfFirstPost = indexOfLastPost - contextData.productsPostsPerPage
    const currentPosts = contextData.products.slice(indexOfFirstPost, indexOfLastPost)

    //Change Page
    const paginate = (pageNumber) => {
      contextData.setProductsCurrentPage(pageNumber)
  }

    //Loading
    if(contextData.productsLoading) {
        return (
        <div className='clip-loader'>
            <ClipLoader 
            className='clip-loader'
            color='black'
            loading={contextData.productsLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
        )
    }


  return (
    <div className='products'>
      <div className='products-container'>
        <Filters 
            selectedNumber={contextData.productsSelectedNumber}
            setCurrentPage={contextData.setProductsCurrentPage}
            setPostsPerPage={contextData.setProductsPostsPerPage}
            setSelectedNumber={contextData.setProductsSelectedNumber}
            setSearchTerm={contextData.setProductsSearchTerm}
        />
        <div className='container'>
            <table className='table table-bordered table-dark'>
              <thead>
                <tr style={{color: '#c0e3e5'}}>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>PRICE</th>
                <th>DISCOUNTPERCENTAGE</th>
                <th>RATING</th>
                <th>STOCK</th>
                <th>BRAND</th>
                <th>CATEGORY</th>
                </tr>
              </thead>
            <tbody>
                {
                    currentPosts.filter(val => {
                        if(contextData.titleFilter === '') {
                            return val
                        }else if(val.title.toLowerCase().includes(contextData.titleFilter.toLowerCase())){
                            return val
                        }
                    }).filter(val => {
                        if(contextData.brandFilter === '' ){
                            return val
                        }else if(val.brand.toLowerCase().includes(contextData.brandFilter.toLowerCase())){
                            return val
                        }
                    }).filter(val => {
                        if(contextData.categoryFilter === '') {
                            return val
                        }else if(val.category.toLowerCase().includes(contextData.categoryFilter.toLowerCase())){
                            return val
                        }
                    }).filter(val => {
                        if(contextData.tabFilter === '' || contextData.tabFilter === 'all') {
                            return val
                        } else if(val.category.toString().toLowerCase() === contextData.tabFilter.toLowerCase()) {
                            return val
                        }
                    }).filter(val => {
                        if(contextData.productsSearchTerm === ''){
                            return val
                        }else if(
                            val.id.toString().toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.title.toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.description.toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.price.toString().toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.discountPercentage.toString().toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.rating.toString().toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.stock.toString().toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.brand.toLowerCase().includes(contextData.productsSearchTerm.toLowerCase()) ||
                            val.category.toLowerCase().includes(contextData.productsSearchTerm.toLowerCase())
                        ) {
                            return val
                        }
                    }).map((product, index) => (
                        <tr style={{color: '#c0e3e5'}} key={index}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.discountPercentage}</td>
                            <td>{product.rating}</td>
                            <td>{product.stock}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
        <Pagination 
            currentPage={contextData.productsCurrentPage} 
            datalength={contextData.products.length} 
            postsPerPage={contextData.productsPostsPerPage} 
            paginate={paginate} 
        />
        <div className="links">
            <button className="home-button link-button"><Link to='/' className="home-button_link">HomePage</Link></button>
            <button className="switch-button link-button"><Link to='/users' className="home-button_link">Users</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Products