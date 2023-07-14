import React from "react";

const HeroTextContent = () => {
  return (
    <div className="flex flex-col gap-8 items-start w-[80%">
      <h1 className="text-7xl font-bold " >Wood Candy Sofa</h1>
      <p className="text-[#999999]" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        quisquam aspernatur. Dolorem cupiditate repudiandae error reiciendis,
        iusto tempora odio ullam?
      </p>
      <strong className="text-2xl font-semibold" >$399.00</strong>
      <button className=" bg-[#FFE8A9] px-8 py-2" >Buy Now</button>
    </div>
  );
};

export default HeroTextContent;
