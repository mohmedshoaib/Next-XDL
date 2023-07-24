'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const HomeThirdSection = () => {
    const router = useRouter();
  return (
    <div className='bg-[#1B2430] text-white flex ed:flex-col'>
        <div className='ml-[55px] mr-[54px] my-[20px] w-full h-[50vh] text-center flex flex-col'>
            <h1 className='md:text-4xl sm:text-2xl text-xl font-semibold md:py-6'>The Smart Move For <div className='w-[190px] h-[2px] mt-1 mx-[450px] bg-blue-700 '></div></h1>
            <h1 className='md:text-2xl sm:text-xl text-xl font-medium'>Audit, Recovery and Analytics</h1>

            <div className='flex justify-center mt-[35px] text-black'> 
                <div className='h-[20vh] m-2 py-6 px-4 bg-white rounded-lg hover:bg-blue-200 ease-in-out duration-500 cursor-pointer' onClick={()=> router.push("/freightAudit")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[100px] font-bold uppercase' >Logistics Expertise</h1>
                        <span className='mb-[5px]'><Image src='/images/truckimg.png' width={50} height={50} priority/></span>
                    </div>
                </div>
                <div className='h-[20vh] m-2 py-6 px-4 bg-white rounded-lg hover:bg-blue-200 ease-in-out duration-500 cursor-pointer' onClick={()=> router.push("/technology")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[120px] font-bold uppercase' >Technology Dedication</h1>
                        <span className='mb-[5px]'><Image src='/images/technologyimage.png'  width={40} height={50} priority/></span>
                    </div>
                </div>
                <div className='h-[20vh] m-2 py-6 px-4 bg-white rounded-lg hover:bg-blue-200 ease-in-out duration-500 cursor-pointer' onClick={()=> router.push("/otherServices")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[90px] font-bold uppercase' >Other Services</h1>
                        <span className='mb-[5px]'><Image src='/images/serviceimage.png'  width={40} height={50} priority/></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeThirdSection
