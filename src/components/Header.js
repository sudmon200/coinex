import React from 'react'
import logo from '../icon-coins.svg'

function Header() {
  return (
    <div className='logo'>
      <span className='logo__textPrimary'>coin</span>
      <span className='logo__textSecondary'>ex</span>
      <img src={logo} className="logo__image" alt="logo"/>
    </div>
  )
}

export default Header
