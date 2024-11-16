import React from "react";

const Content = () => {
  return (
    <div className="mt-[80px] mx-[152px] h-[613px] w-[1125px] flex-row flex">
      
      <div className="">
            <h1 className="font-extrabold text-[108px] leading-[102px] m-0  w-[595px] h-[306px]">YOUR FEET DESERVE THE BEST</h1>
            <p className="font-[600] text-[16px] leading-[24px] w-[404px] h-[91px] my-8">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.
            </p>
            <div className="flex flex-row w-[350px] h-[41px] justify-between">
                <button className="w-[150px] h-[41px] text-white bg-red-600 rounded">Shop Now</button>
                <button className="w-[150px] h-[41px] bg-blue-600 text-white rounded">Category</button>
            </div>
            <div className="h-[131px] w-[67px] flex-col my-8">
                <p className="text-[13px] w-[131px] my-4 ">Also Available On</p>
                <div className="flex flex-row items-center justify-between w-[80px] h-[32px]">
                    <img className="w-[32px] h-[32px] p-0 m-0" src="/images/flipkart.png" alt="flipkart" />
                    <img className="w-[32px] h-[32px] p-0 m-0" src="/images/amazon.png" alt="amazon" />
                </div>
                
            </div>
      </div>

      <div>
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </div>
  );
};

export default Content;
