'use client'
import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
const HomeFirstSection = () => {
  // const el = useRef(null);
  //   useEffect(() => {
  //       const options = {
  //           strings: [
  //               `Audit`,
  //               `Data`,
  //           ],
  //           typeSpeed: 60,
  //           backSpeed: 30,
  //           loop: true,
  //           cursorChar: "",
  //       };
        
  //       const typed = new Typed(el.current, options);
  //       return () => {
  //           typed.destroy();
  //       };
  //   }, []);
  return (
    <div className='text-black flex ed:flex-col'>
      {/* <div className='flex'> */}
        {/* Left Image Section*/}
        <div className='max-w-[600px] my-[20px] ml-[55px] w-full h-[87.5vh] flex flex-col justify-center ed:mt-[-200px]'>
          <Image src='/images/12.png' alt='Hero Section Image' className='w-[600px] h-[70%]' width={700} height={500} priority />
          {/* <h1>Left Image</h1> */}
        </div>
        {/* End left Image Section */}

        {/* Center Text Section */}
        <div className='max-w-[800px] my-[20px] mr-[54px] w-full h-[87.7vh] text-center flex flex-col justify-center ed:my-[-300px]'>
          {/* <p className='text-[#3a88c7] font-bold p-2'>Growing with Data Processing, Auditing</p> */}
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 ed:mt-[-300px] uppercase'>Unleash Your Potential</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-xl text-xl font-bold py-4'>Thrive with XDataLogix</p>
            
            {/* <p ref={el} className='md:text-3xl sm:text-xl text-xl font-bold py-4 px-2 text-blue-600'></p>
            <p className='md:text-3xl sm:text-xl text-xl font-bold py-4'>Bussiness</p> */}
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Provide Data processing, Auditing, and Software Counsulting Services</p>
          <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-white'>Get Started</button>
        </div>
        {/* End Center Text Section */}

        {/* Right Image Section */}
        {/* <div className='max-w-[300px] mt-[0px] w-full h-[87.5vh] text-center flex flex-col justify-center'> */}
          {/* <Image src='/images/rightimage.svg' alt='Right Section Image' width={200} height={200} priority /> */}
          {/* <h1>Right Image</h1>
        </div> */}
        {/* End Right Image Section */}

      {/* </div> */}
    </div>
  )
}

export default HomeFirstSection

