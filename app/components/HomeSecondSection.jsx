import React from 'react'
import Image from 'next/image'
import { tick, circle_1 } from '../utils/icons'
import RightContainer from './subcomponents/RightContainer'
const HomeSecondSection = () => {
  return (
    <div className='bg-[#f8f8f8] text-black flex ed:flex-col'>
      
        <div className='max-w-[800px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[91vh] text-center flex flex-col'>
            <h1 className='md:text-4xl sm:text-3xl text-xl text-bold text-left px-4 text-black md:py-6'>Your Enternal Data Services Provider</h1>
            <ul className='text-left'>
              <div className='flex bg-[#fff] shadow-sm rounded-lg mt-2'>
                {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                <li className='my-4 md:text-base sm:text-xl font-medium px-4 text-opacity-25'>Xdatalogix Solutions was formed in 2009 with a goal to provide quality data processing, auditing, and software consulting service.</li>
              </div>
              <div className='flex bg-[#fff] shadow-sm rounded-lg my-2'>
                {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                <li className='my-4 md:text-base sm:text-xl text-xl font-medium px-4 text-opacity-25'>We provide service to fortune 500 companies directly as well indirectly by collaborating with our business partners.</li>
              </div>
              <div className='flex bg-[#fff] shadow-sm rounded-lg my-2'>
                {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                <li className='my-4 md:text-base sm:text-xl text-xl font-medium px-4 text-opacity-25'>We work very closely with our clients to understand their needs and provide them with a service that will help them run their business smoothly and efficiently.</li>
              </div>
              <div className='flex bg-[#fff] shadow-sm rounded-lg mb-2'>
                {/* <i className='px-5 py-0 my-5'>{circle_1}</i> */}
                <li className='my-4 md:text-base sm:text-xl text-xl font-medium px-4 text-opacity-25'>We enable our clients to take control of their business and empower them to make better business decisions by the use of technology.</li>
              </div>
            </ul>
        </div>
        
        <div className='max-w-[510px] my-[20px] w-full h-[91vh] mr-[54px] text-center flex flex-col justify-center'>
          <RightContainer />
        </div>
        
    </div>
  )
}

export default HomeSecondSection
