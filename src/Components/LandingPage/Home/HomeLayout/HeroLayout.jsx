import React from "react";
import HeroSidebar from "../HomeSidebar/HeroSidebar";
import HeroSlider from "../HomeSlider/HeroSlider";
import { FiMenu } from "react-icons/fi";

const HeroLayout = () => {
  return (
    <>
      <section className="w-full py-[15px]">
        <main className=" w-[97%] m-auto xl:w-[80%]  ">
          <div className="">
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-orange-400 px-[20px] xl:px-[30px] py-[15px] text-white rounded-tl-[15px] rounded-tr-[15px] ">
              <div className="hidden xl:flex xl:flex-col ">
                <span className=" text-[20px] font-[700] ">
                  All Departments
                </span>
                <span className=" text-[13px] font-[500] ">
                  Total 1000+ products
                </span>
              </div>
              <div className=" xl:hidden">
                <FiMenu className="text-[30px]" />
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className=" xl:flex-[2.5] ">
              <HeroSidebar />
            </div>
            <div className="xl:flex-[7.5] pt-[10px] xl:pl-[20px] ">
              <HeroSlider />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroLayout;
