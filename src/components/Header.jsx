import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='flex bg-black text-white py-2 px-3 justify-between'>
      <h1 className='text-2xl text-red-400'><NavLink to={'/'}>App Logo</NavLink></h1>
      <nav className='space-x-4'>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/add-form'}>Add Form</NavLink>
      </nav>
    </div>
  )
}

export default Header