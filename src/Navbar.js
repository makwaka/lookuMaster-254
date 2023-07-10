import React from 'react'
import './Navbar.css'
import './Navbar.css'
import banner from './Assets/banner.jpg'

// navbar info
function Navbar() {
  return (
    <div>
      <div className='topBar'>
      <img src={banner} className='banner' alt='banner' />
      </div>
    </div>
  )
}

export default Navbar