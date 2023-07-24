import React from 'react'

const TechThirdSection = () => {
  return (
    <div className='bg-[#fff] text-black flex ed:flex-col'>
      
        <div className='max-w-[800px] my-[20px] ml-[55px] mr-[50px] px-4 w-full h-[91vh] text-center flex flex-col'>
            <h1 className='md:text-3xl sm:text-2xl text-xl text-bold text-left px-4 text-black md:py-6'>Freight Management <div className='w-[200px] h-[2px] mt-1 bg-blue-700 '></div></h1>
            <h2 className='md:text-lg sm:text-lg text-sm text-bold text-left px-4 text-black md:py-6'>
                Our state-of-the-art technology offers comprehensive data analysis capabilities, providing valuable insights at your fingertips. Example reports include transportation spend by region, customer, and supplier, 
                lane-by-lane analysis, volume analysis, GL, and payment analysis, accessorial cost analysis, 
                and shipping pattern identification.</h2>
            <h3 className='md:text-lg text-bold text-left px-4 text-black pb-2'>AP module: Audited invoice review, ensuring accuracy.</h3>   
            <h3 className='md:text-lg text-bold text-left px-4 text-black pb-2'>Seamless ERP integration for efficient final payments.</h3> 
            <h3 className='md:text-lg text-bold text-left px-4 text-black pb-2'>Flexible data transfer options: EDI, CSV, ERP formats.</h3> 
            <h3 className='md:text-lg text-bold text-left px-4 text-black pb-2'>On-time payments foster improved carrier relationships.</h3>
            <h3 className='md:text-lg text-bold text-left px-4 text-black pb-2'>Complete audit trail for streamlined financial audits.</h3>  
        </div>
        
        <div className='max-w-[510px] my-[20px] w-full h-[91vh] mr-[54px] bg-[url("/images/ti.avif")] rounded-tr-[50px] rounded-bl-[50px] shadow-2xl text-center flex flex-col justify-center'>
        </div>
        
    </div>
  )
}

export default TechThirdSection
