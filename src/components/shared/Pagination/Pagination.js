import React, { useEffect } from 'react'

import './Pagination.css'

function Pagination({paginate, currentPage, postsPerPage, datalength}) {

    const pageNumbers = []

    for(let i=1; i <= Math.ceil(datalength / postsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    
    <nav className='d-flex justify-content-center'>
      <ul className="pagination">
        {pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} className={number == currentPage ? 'page-link active pagination-link' : 'page-link pagination-link'}>
                  {number}
                </a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination