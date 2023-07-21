import React from 'react'

const RightContainer = () => {
  return (
    <div className='flex h-full mr-[20px] text-white'>
        <div className='max-w-[300px] my-[35px] w-full mr-4'>
          <div className='transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-red-500 mb-3 rounded-xl pt-12'>
            <div>
              <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold'>20%</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>of Fortune 50 companies</h1>
            </div>
            {/* <h2>20%<span>of Fortune 50 companies</span></h2> */}
          </div>
          <div className='transition ease-in-out delay-100 hover:translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-yellow-500 rounded-xl pt-12'>
            <div>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>Audit & Analysis:</h1>
              <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold'>100%</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>of out business</h1>
            </div>
            {/* <h2>Audit & Analysis:<span>100%</span> of out business</h2> */}
          </div>
        </div>
        <div className='max-w-[300px] my-[65px] w-full'>
          <div className='transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-blue-500 mb-3 rounded-xl pt-12'>
            <div>
              <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold'>1.1 M+</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>shipments audited in</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>2022</h1>
            </div>
            {/* <h2>1.1 M+<span>shipments audited</span></h2> */}
          </div>
          <div className='transition ease-in-out delay-100 hover:translate-y-2 hover:scale-105 duration-200 h-[37.7vh] bg-green-500 rounded-xl pt-12'>
            <div>
              <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold'>13</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>Years</h1>
              <h1 className='md:text-xl sm:text-3xl text-2xl font-semibold'>in business</h1>
            </div>
            {/* <h2 className='text-2xl font-bold'>13<span>Years</span></h2> */}
          </div>
        </div>
    </div>
  )
}

export default RightContainer
