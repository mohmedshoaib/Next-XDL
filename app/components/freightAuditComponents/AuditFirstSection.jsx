import React from 'react'
import Image from 'next/image'
const AuditFirstSection = () => {
  return (
    <div className='bg-[#f8f8f8] text-black flex ed:flex-col'>
        <div className='ml-[55px] mr-[54px] my-[20px] w-full h-[60vh] text-center flex flex-col'>
            <h1 className='md:text-4xl sm:text-3xl text-xl text-bold text-black md:py-6'>Unlocking Freight Efficiency</h1>
            <h1 className='lg:text-2xl md:text-lg text-sm text-bold'>Driving Your Success.</h1>
            <div className='flex justify-center'>
              <Image src='/images/12.png' alt='FreightAudit Image' className='mt-5 lg:w-[500px] md:w-[400px] rd:w-[300px] rm:w-[250px] xrm:w-[200px]' width={500} height={200} priority/>
            </div>
            
        </div>
    </div>
  )
}

export default AuditFirstSection
