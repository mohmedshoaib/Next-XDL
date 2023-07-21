import React from 'react'
import Image from 'next/image'
const TechSecondSection = () => {
  return (
    <div className='text-black flex ed:flex-col'>
        <div className='max-w-[1400px] mt-[0px] ml-[55px] mr-[54px] bg-transperent w-full h-[60vh] ed:my-[-300px]'>
          <div className='mt-[100px] text-center mb-[20px]'>
            <h1 className='md:text-4xl sm:text-xl text-sm text-bold'>Features</h1>
          </div>
          <div className='max-w-[1200px] mx-[20px] w-full h-[20vh] text-center flex flex-col justify-center'>
            <ul className='flex justify-center h-[100px]'>
                <div className=''>
                    <Image src='/images/agreement1.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left md:text-lg font-semibold'>Agreement</h1>
                    <li className='mx-30 px-20 text-left md:text-base font-medium'>Contract parsing and change management, rate and tariff repository.</li>
                </div>
                <div className=''>
                    <Image src='/images/audit.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left md:text-lg font-semibold'>Auditing</h1>
                    <li className='mx-30 px-20 text-left md:text-base font-medium'>Proof of work history and delivery validation, accessorial evaluation.</li>
                </div>
                <div className=''>
                    <Image src='/images/payment.png' width={50} height={100} priority className='ml-[78px] mb-2'/>
                    <h1 className='mx-30 px-20 text-left md:text-lg font-semibold'>Payment Processing</h1>
                    <li className='mx-30 px-20 text-left md:text-base font-medium'>Comprehensive Freight Audit & Payment Processing.</li>
                </div>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default TechSecondSection
