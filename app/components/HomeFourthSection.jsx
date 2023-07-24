import React from 'react'
import Image from 'next/image'
import { tick, circle_1, arrow } from '../utils/icons'
const HomeFourthSection = () => {
  return (
    <div className='bg-[#fff] text-black flex ed:flex-col'>
      
        <div className='ml-[55px] mr-[54px] my-[20px] w-full h-[180vh] text-center mx-auto flex flex-col'>
            <h1 className='md:text-4xl sm:text-3xl text-xl font-semibold text-black md:py-6'>Why Choose Us <div className='w-[180px] h-[2px] mt-1 mx-[490px] bg-blue-700 '></div></h1>

            <div className='flex justify-center mt-6'>
                <div className='transition ease-in-out delay-20 hover:-translate-y-2 hover:scale-105 hover:text-white hover:bg-blue-500 duration-100 shadow-lg w-[25vw] h-[70vh] pt-[20px] ml-5 my-5 bg-white rounded-md cursor-pointer'>
                    <div className='text-left'>
                        <div className='m-5'><Image src='/images/A1.png' alt='Icon' width={50} height={100} priority/></div>
                        <h1 className='font-bold  md:text-2xl sm:text:xl text:xl mb-5 ml-5'>Precision and Accuracy</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                <li className='mx-30  text-left md:text-base font-medium'>Expert auditors and advanced tech review invoices for accuracy and contractual compliance.</li>
                            </div>
                            <div className='flex my-2'>
                                <li className='mx-30 my-2 text-left md:text-base font-medium'>Detect errors, rectify mistakes, and optimize logistics expenses.</li>
                            </div>
                            <div className='flex my-2'>
                                <li className='mx-30  text-left md:text-base font-medium'>Skilled team, cutting-edge tech for streamlined Freight Audit & Payment processes.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
                <div className='transition ease-in-out delay-20 hover:-translate-y-2 hover:scale-105 hover:text-white hover:bg-blue-500 duration-100 shadow-lg w-[25vw] h-[70vh] pt-[20px] mx-5 my-5 bg-white rounded-md cursor-pointer'>
                    <div className='text-left'>
                        <div className='m-5'><Image src='/images/A2.png' alt='Icon' width={50} height={100} priority/></div>
                        <h1 className='font-bold  md:text-2xl sm:text:xl text:xl mb-5 ml-5'>Flexible Solutions</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>Customized solutions for your unique logistics requirements.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30 my-2 text-left md:text-base font-medium'>Adaptable to businesses of all sizes, from small enterprises to large corporations.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>Our services adjust to the complexity of your transportation operations, ensuring seamless integration.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
                <div className='transition ease-in-out delay-20 hover:-translate-y-2 hover:scale-105 hover:text-white hover:bg-blue-500 duration-100 shadow-lg w-[25vw] h-[70vh] pt-[20px] mr-5 my-5 bg-white rounded-md cursor-pointer'>
                    <div className='text-left'>
                        <div className='m-5'><Image src='/images/A3.png' alt='Icon' width={50} height={100} priority/></div>
                        <h1 className='font-bold  md:text-2xl sm:text:xl text:xl mb-5 ml-5'>Data Security</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>We prioritize your data's security, employing robust measures for protection.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30 my-2 text-left md:text-base font-medium'>Trust us with your information; we maintain strict privacy at all stages.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>We adhere to industry regulations for data security and privacy.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='flex justify-center mt-6'>
                <div className='transition ease-in-out delay-20 hover:-translate-y-2 hover:scale-105 hover:text-white hover:bg-blue-500 duration-100 shadow-lg w-[25vw] h-[70vh] pt-[20px] ml-5 my-5 bg-white rounded-md cursor-pointer'>
                    <div className='text-left'>
                        <div className='m-5'><Image src='/images/A4.png' alt='Icon' width={50} height={100} priority/></div>
                        <h1 className='font-bold  md:text-2xl sm:text:xl text:xl mb-5 ml-5'>Cost Optimization</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                <li className='mx-30  text-left md:text-base font-medium'>Our approach avoids unnecessary expenses and financial leakage.</li>
                            </div>
                            <div className='flex my-2'>
                                <li className='mx-30 my-2 text-left md:text-base font-medium'>Uncover discrepancies, identify savings, and achieve greater financial efficiency.</li>
                            </div>
                            <div className='flex my-2'>
                                <li className='mx-30  text-left md:text-base font-medium'>Empowering you to make the most of your investments.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
                <div className='transition ease-in-out delay-20 hover:-translate-y-2 hover:scale-105 hover:text-white hover:bg-blue-500 duration-100 shadow-lg w-[25vw] h-[70vh] pt-[20px] mx-5 my-5 bg-white rounded-md cursor-pointer'>
                    <div className='text-left'>
                        <div className='m-5'><Image src='/images/A5.png' alt='Icon' width={50} height={100} priority/></div>
                        <h1 className='font-bold  md:text-2xl sm:text:xl text:xl mb-5 ml-5'>Comprehensive Services</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>Beyond freight auditing, we offer payment reconciliation, data insights, and contract management.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30 my-2 text-left md:text-base font-medium'>Addressing logistics and financial aspects for improved efficiency.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>Complete solutions for seamless business processes.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
                <div className='transition ease-in-out delay-20 hover:-translate-y-2 hover:scale-105 hover:text-white hover:bg-blue-500 duration-100 shadow-lg w-[25vw] h-[70vh] pt-[20px] mr-5 my-5 bg-white rounded-md cursor-pointer'>
                    <div className='text-left'>
                        <div className='m-5'><Image src='/images/A6.png' alt='Icon' width={50} height={100} priority/></div>
                        <h1 className='font-bold  md:text-2xl sm:text:xl text:xl mb-5 ml-5'>Industry Expertise</h1>
                        <ul className='px-[20px] py-[10px]'>
                            <div className='flex'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>Our seasoned professionals possess extensive freight audit and payment experience.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30 my-2 text-left md:text-base font-medium'>Navigating billing structures, regulations, and rate changes for accurate solutions.</li>
                            </div>
                            <div className='flex my-2'>
                                {/* <i className='pl-2 py-0'>{arrow}</i> */}
                                <li className='mx-30  text-left md:text-base font-medium'>Trust our expertise for dependable logistics and transportation solutions.</li>
                            </div>
                        </ul>
                    </div> 
                </div>
            </div>


        </div>
    </div>
  )
}

export default HomeFourthSection
