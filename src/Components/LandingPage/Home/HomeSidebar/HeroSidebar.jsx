import React from "react";
import { GiClothes, GiHealthNormal } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { RiBearSmileLine } from "react-icons/ri";
import { PiDressBold } from "react-icons/pi";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { LuDog } from "react-icons/lu";
import {
  MdOutlinePets,
  MdBluetoothAudio,
  MdSportsVolleyball,
  MdOutlineSell,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa6";

const HeroSidebar = () => {
  return (
    <>
      <div className="hidden xl:block ">
        <ul className=" font-[700] text-[18px] ">
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <RiBearSmileLine className=" text-[25px]" />
              Beauty
            </span>
            {/* <FaAngleRight className="text-[20px] " /> */}
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdBluetoothAudio className=" text-[25px]" />
              Electronic
            </span>
            {/* <FaAngleRight className="text-[20px] " /> */}
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px] ">
              <PiDressBold className=" text-[25px] " />
              Women & Girls Fashion
            </span>
            <FaAngleRight className="text-[20px]  " />
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <GiClothes className=" text-[25px]" />
              Men & Boys Fashion
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <FaHandHoldingMedical className=" text-[25px]" />
              Health & Household
            </span>
            {/* <FaAngleRight className="text-[20px] " /> */}
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <HiOutlineHomeModern className=" text-[25px]" />
              Home & Kitchen
            </span>
            {/* <FaAngleRight className="text-[20px] " /> */}
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <LuDog className=" text-[25px]" />
              Pet Supplies
            </span>
            {/* <FaAngleRight className="text-[20px] " /> */}
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdOutlineSportsBasketball className=" text-[25px]" />
              Sports
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className=" " id="heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdOutlineSell className=" text-[25px]" />
              Best Seller
            </span>
            {/* <FaAngleRight className="text-[20px] " /> */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroSidebar;
