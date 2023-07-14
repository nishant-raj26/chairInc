import React from "react";

const RightFooter = () => {
  return (
    <div className="flex justify-between  " >
      <div className="pl-24" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
        <button className="absolute bottom-0 right-0 py-8 px-16 bg-[#FFE192] font-semibold text-2x " >Add To Cart</button>
    </div>
  );
};

export default RightFooter;
