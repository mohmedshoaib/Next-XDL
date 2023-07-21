'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const HomeThirdSection = () => {
    const router = useRouter();
  return (
    <div className='bg-[#fff] text-black flex ed:flex-col'>
        <div className='ml-[55px] mr-[54px] my-[20px] w-full h-[55vh] text-center flex flex-col'>
            <h1 className='md:text-4xl sm:text-3xl text-xl text-bold text-black md:py-6'>The Smart Move For</h1>
            <h1 className='md:text-2xl sm:text-xl text-xl text-bold'>Audit, Recovery and Analytics</h1>

            <div className='flex justify-center mt-[75px] text-black'> 
                <div className='h-[20vh] m-2 py-6 px-4 bg-green-200 rounded-lg hover:bg-blue-500 ease-in-out duration-500 cursor-pointer' onClick={()=> router.push("/freightAudit")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[100px] font-bold uppercase' >Logistics Expertise</h1>
                        <span className='mb-[5px]'><Image src='/images/truckimage.png' width={40} height={50} priority/></span>
                    </div>
                </div>
                <div className='h-[20vh] m-2 py-6 px-4 bg-green-200 rounded-lg hover:bg-orange-500 ease-in-out duration-500 cursor-pointer' onClick={()=> router.push("/technology")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[120px] font-bold uppercase' >Technology Dedication</h1>
                        <span className='mb-[5px]'><Image src='/images/17.png'  width={40} height={50} priority/></span>
                    </div>
                </div>
                <div className='h-[20vh] m-2 py-6 px-4 bg-green-200 rounded-lg hover:bg-red-500 ease-in-out duration-500 cursor-pointer' onClick={()=> router.push("/otherServices")}>
                    <div className='my-[10px] w-80 h-[10vh] py-2 px-2 flex justify-between'>
                        <h1 className='mr-20 w-[90px] font-bold uppercase' >Other Services</h1>
                        <span className='mb-[5px]'><Image src='/images/serviceicon1.png'  width={40} height={50} priority/></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeThirdSection
