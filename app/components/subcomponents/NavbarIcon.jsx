'use client'
import React, {useState} from 'react'
import Image from 'next/image'
const NavbarIcon = () => {
    const [showIcon, setShowIcon] = useState(false)
    const handleClick = () => {
        setShowIcon(!showIcon)
    }
    const buttonWithSound = () => {
        const audio = new Audio('/audio/sunClick.wav')
        audio.play()
    }
  return (
    <div onClick={() => {handleClick(); buttonWithSound();}} className='hidden md:flex w-[30px] p-0 cursor-pointer'>
        {showIcon ? (<Image src='/images/moonicon.png' alt='Moon Icon' width={50} height={50} priority />) : (<Image src='/images/sunicon.png' alt='Sun Icon' width={50} height={50} priority />) }
    </div>
  )
}

export default NavbarIcon
