import React from 'react'
import NavbarList from './subcomponents/NavbarList'
import styles from '@/app/styles/navbar.module.css'
const Navbar = () => {
  return (
    <div className='lg:sticky md:fixed top-0 left-0 z-10 shadow-md bg-white'>
      <NavbarList />
    </div>
  )
}

export default Navbar
