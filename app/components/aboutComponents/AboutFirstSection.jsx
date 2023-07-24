import React from "react";
import Image from "next/image";
const AboutFirstSection = () => {
  return (
    <div className="text-black flex ed:flex-col">
      <div className="max-w-[500px] my-[20px] ml-[55px] mr-10 w-full h-[80vh] flex flex-col justify-center ed:mt-[-200px]">
        <Image
          src="/images/Aboutimage.png"
          alt="Right Section Image"
          className="w-[600px] h-[100%] shadow-sm rounded-tl-[50px] rounded-br-[50px]"
          width={700}
          height={500}
          priority
        />
        {/* <h1>Left Image</h1> */}
      </div>

      <div className="max-w-[800px] my-[20px] mr-[54px] w-full h-[80vh] text-center flex flex-col justify-center ed:my-[-300px]">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 ed:mt-[-300px]">
          About Us
          <div className="w-[150px] h-[2px] mt-1 ml-[240px] bg-blue-700 "></div>
        </h1>
        <div className="flex justify-center px-[100px]">
          <p className="md:text-lg sm:text-lg text-sm font-medium py-4">
            we provide cutting-edge solutions to help you
            maintain control, achieve savings, and gain end-to-end visibility.
            Get accurate insights into Freight & Payments and Value-Added
            Services. Partner with us for data-driven success.
          </p>
        </div>
          <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-blue-700 w-[200px] rounded-md font-bold my-6 mx-auto py-2 text-white'>Read More</button>
      </div>
    </div>
  );
};

export default AboutFirstSection;
