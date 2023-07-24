import React from 'react'
import Image from 'next/image'
const AboutSecondSection = () => {
  return (
    <div className='text-white flex ed:flex-col bg-[#1B2430]'>
        <div className='max-w-[1400px] mt-[0px] ml-[55px] mr-[54px] w-full h-[60vh] ed:my-[-300px]'>
          <div className='mt-[100px] text-center mb-[20px]'>
            <h1 className='md:text-4xl sm:text-xl text-sm text-bold'>Core Values <div className='w-[150px] h-[2px] mt-1 mx-[520px] bg-blue-700 '></div></h1>
          </div>
          <div className='max-w-[1200px] mx-[20px] w-full h-[20vh] text-center flex flex-col justify-center'>
            <ul className='flex justify-center h-[100px]'>
                <div className='mx-5'>
                    <Image src='/images/trustimg.png' alt='Trust Image' width={80} height={100} priority className='mx-[70px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left md:text-lg font-semibold'>Trust</h1>
                    {/* <li className='mx-30 px-20 text-left md:text-base font-medium'>Contract parsing and change management, rate and tariff repository.</li> */}
                </div>
                <div className='mx-5'>
                    <Image src='/images/resultimage.png' width={80} height={100} priority className='mx-[100px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left md:text-lg font-semibold'>Result-Driven</h1>
                    {/* <li className='mx-30 px-20 text-left md:text-base font-medium'>Proof of work history and delivery validation, accessorial evaluation.</li> */}
                </div>
                <div className='mx-5'>
                    <Image src='/images/increaseimage.png' width={80} height={100} priority className='mx-[100px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left md:text-lg font-semibold'>Consultative</h1>
                    {/* <li className='mx-30 px-20 text-left md:text-base font-medium'>Comprehensive Freight Audit & Payment Processing.</li> */}
                </div>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default AboutSecondSection
