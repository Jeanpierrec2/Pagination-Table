import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home-container">
            <h2 className='home-h2'>Visit users page</h2>
            <p><Link className='home-link' to='/users'>USERS</Link></p>
            <h2 className='home-h2'>Visit products page</h2>
            <p><Link className='home-link' to='/products'>PRODUCTS</Link></p>
        </div>
    </div>
  )
}

export default Home