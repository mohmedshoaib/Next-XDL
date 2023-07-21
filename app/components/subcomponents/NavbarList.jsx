'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarIcon from './NavbarIcon'
import MenubarList from './MenubarList'
const NavbarList = () => {
    const [showMenubar, setShowMenubar] = useState(false)

    const handleClick = () => {
        setShowMenubar(!showMenubar)
    } 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setShowMenubar(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            console.log('cleanup')
            window.removeEventListener('resize', handleResize)
        }
    }, [])
  return (
    <div className='flex justify-between items-center h-[5rem] max-w-[1240px] mx-auto px-4'>
      <Image src='/images/logo.png' alt='Logo Image' width={200} height={200} priority/>
      <ul className='hidden md:flex text-black'>
        <li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/"}>Home</Link></li>
        <li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/freightAudit"}>FreightAudit</Link></li>
        <li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/technology"}>Technology</Link></li>
        {/* <li className='p-4 hover:bg-[#526D82] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/otherServices"}>Services</Link></li> */}
        <li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/about"}>About</Link></li>
        <li className='p-4 hover:bg-[#1c8ee6] hover:text-white font-semibold rounded-sm cursor-pointer'><Link href={"/contact"}>Contact</Link></li>
      </ul>
      {/* <NavbarIcon /> */}
        <div className='block md:hidden' onClick={handleClick}>
            {!showMenubar ? (<Image src='/images/menubar.png' alt='Side Bar' width={50} height={200} priority/>) : null }      
        </div>
        {showMenubar && <MenubarList showMenubar={showMenubar} setShowMenubar={setShowMenubar}/>}
    </div>
  )
}

export default NavbarList
