import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='bg-white text-black flex ed:flex-col'>

        <div className='max-w-[800px] mt-[20px] w-full h-[60vh] text-center mx-auto flex flex-col'>
              <div className='flex py-[20px] justify-between'>
                {/* <div className='px-[139px] py-10'> */}
                    <h1 className='md:text-2xl sm:text-xl text-xl ml-[50px] font-bold'>Offices</h1>
                {/* </div> */}
                {/* <div className='px-[139px] py-10'> */}
                    <h1 className='md:text-2xl sm:text-xl text-xl mr-[140px] font-bold'>Our services</h1>
                {/* </div> */}
              </div>
              <div className='flex pt-[0px] font-mono'>
                {/* contact */}
                <div className='flec-col'>
                    <div className='pl-[60px] pr-[162px] pb-10 text-left'>
                        <ul>
                            <li>ControlPay</li>
                            <li>The Netherlands</li>
                            <li className='font-semibold'>+31 00000 11111</li>
                            <li className='font-semibold'>info@datalogix.com</li>
                        </ul>
                    </div>
                    <div className='pl-[60px] pr-[162px] pb-10 text-left'>
                        <ul>
                            <li>ControlPay</li>
                            <li>The India</li>
                            <li className='font-semibold'>+91 99999 11111</li>
                            <li className='font-semibold'>info@datalogix.com</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='px-[144px] pb-10'>
                        <ul className=''>
                            <li className='md:text-lg sm:text-lg text-lg pb-2 text-left font-semibold hover:text-blue-700 cursor-pointer'><Link href={"/"}>Home</Link></li>
                            <li className='md:text-lg sm:text-lg text-lg pb-2 text-left font-semibold hover:text-blue-700 cursor-pointer'><Link href={"/freightAudit"}>FreightAudit</Link></li>
                            <li className='md:text-lg sm:text-lg text-lg pb-2 text-left font-semibold hover:text-blue-700 cursor-pointer'><Link href={"/technology"}>Technology</Link></li>
                            {/* <li className='md:text-lg sm:text-lg text-lg pb-2 text-left font-semibold hover:text-blue-700 cursor-pointer'><Link href={"/otherServices"}>Services</Link></li> */}
                            <li className='md:text-lg sm:text-lg text-lg pb-2 text-left font-semibold hover:text-blue-700 cursor-pointer'><Link href={"/about"}>About</Link></li>
                            <li className='md:text-lg sm:text-lg text-lg pb-2 text-left font-semibold hover:text-blue-700 cursor-pointer'><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
              </div>
        </div>

        <div className='max-w-[515px] mt-[20px] pt-[60px] w-full h-[60vh] mx-auto text-center flex flex-col'>
            <h1 className='md:text-4xl sm:text-3xl text-xl text-bold font-mono md:py-6'>Contact US</h1>
            <div>

            </div>
          {/* <RightContainer /> */}
        </div>

    </div>

    
  );
};

export default Footer;
