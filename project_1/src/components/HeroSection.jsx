import React from "react";

const HeroSection = () => {
  return (
    <div className="flex px-10 mt-20 justify-center">
      <div className="w-[50%]" >
        <h2 className="text-8xl font-bold">YOUR FEET <br /> DESERVE <br /> THE BEST</h2>
        <p className="text-sm font-semibold w-100 py-2 text-gray-500">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-15 py-2">
          <button className="px-4 py-2 bg-[#D01C28] font-semibold text-white">Shop Now</button>
          <button className="px-4 py-2 outline text-gray-700">Category</button>
        </div>

        <p className="py-2">Also Available on</p>

        <div className="flex gap-4 items-center">
          <a href="">
            <img src="public\amazon.png" alt="" />
          </a>
          <a href="">
            <img src="public\flipkart.png" alt="" />
          </a>
        </div>

      </div>

      <div className="flex items-baseline justify-end">
        <img src="\public\shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
