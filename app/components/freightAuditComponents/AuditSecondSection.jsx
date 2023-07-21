import React from 'react'

const AuditSecondSection = () => {
  return (
    <div className='bg-[#fff] text-black flex ed:flex-col'>
        <div className='ml-[55px] mr-[54px] my-[20px] w-full h-[100vh] flex flex-col'>
            <h1 className='md:text-4xl sm:text-3xl text-xl text-bold text-center text-black md:py-6'>Freight Audit</h1>
            <div className='bg-[url("/images/16.webp")] bg-no-repeat bg-cover ml-10 mr-10  h-[80vh] my-5 rounded-xl'>
            <div className='flex'>
                <div className=' shadow-lg lg:w-[40vw] h-[70vh] pt-[20px] ml-5 my-10 bg-white rounded-md'>
                    <div className='text-left'>
                        <h1 className='font-bold lg:text-2xl md:text-2xl sm:text-2xl text:xl mb-5 pl-5'>Global Freight Audit</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                <li className='mx-30 text-left md:text-base msm:text-xs msm1:text-[] font-medium'>ControlPay provides comprehensive Freight Audit services via our unique web-based audit platform. Our services are enhanced by deep logistics knowledge and can be custom-tailored to the needs of multinational customers. As such, we empower our clients’ operations on a global scale. The web-based platform is supported by professional auditor teams that work in close cooperation with your Logistics and Finance departments.</li>
                            </div>
                            <div className='flex my-2'>
                                <li className='mx-30  text-left md:text-base msm:text-xs font-medium'>ControlPay handles the most complex global logistics structures on a daily basis. We assist our customers in unparalleled control of freight costs and provide crystal-clear visibility of logistical data.</li>
                            </div>
                            <div className='flex my-2'>
                                <li className='mx-30  text-left md:text-base msm:text-xs font-medium'>Ensuring Transparency for Clients.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default AuditSecondSection
