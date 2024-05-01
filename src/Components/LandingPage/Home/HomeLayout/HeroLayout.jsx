import React from "react";
import HeroSidebar from "../HomeSidebar/HeroSidebar";
import HeroSlider from "../HomeSlider/HeroSlider";

const HeroLayout = () => {
  return (
    <>
      <section className="w-full py-[20px] ">
        <main className=" w-[80%] m-auto  ">
          <div className="">
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-orange-400 flex flex-col px-[30px] py-[15px] text-white rounded-tl-[15px] rounded-tr-[15px] ">
              <span className=" text-[20px] font-[700] ">All Departments</span>
              <span className=" text-[13px] font-[500] ">
                Total 1000 products
              </span>
            </div>
          </div>
          <div className="flex ">
            <div className=" flex-[1.3] ">
              <HeroSidebar />
            </div>
            <div className="flex-[3.7] ">
              <HeroSlider />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroLayout;
