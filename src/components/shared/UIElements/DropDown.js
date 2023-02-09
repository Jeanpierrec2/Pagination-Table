import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

import './DropDown.css'

function DropDown({setSelectedNumber,setPostsPerPage,setCurrentPage,selectedNumber}) {
  
  const [isActive, setIsActive] = useState(false)

  const dropdownHandler = (number) => {
    setSelectedNumber(number)
    setPostsPerPage(number)
    setIsActive(false)
    setCurrentPage(1)
  }


  return (
    <div className='dropdown'>
      <div className="menu-dropdown" onClick={() => setIsActive(prev => !prev)}>
        <p className='dropdown-number'>{selectedNumber}</p>
        <FaArrowDown className='dropdown-icon' />
      </div>
      {isActive && (
        <div className="dropdown-content">
        <div className="dropdown-item" onClick={() => dropdownHandler(5)}>
          5
        </div>
        <div className="dropdown-item" onClick={() => dropdownHandler(10)}>
          10
        </div>
        <div className="dropdown-item" onClick={() => dropdownHandler(20)}>
          20
        </div>
        <div className="dropdown-item" onClick={() => dropdownHandler(50)}>
          50
        </div>
      </div>
      )}
    </div>
  )
}

export default DropDown