import React from "react";
import { GiClothes, GiHealthNormal } from "react-icons/gi";
import { RiBearSmileLine } from "react-icons/ri";
import { PiDressBold } from "react-icons/pi";
import { FaHome, FaAngleRight } from "react-icons/fa";
import {
  MdOutlinePets,
  MdBluetoothAudio,
  MdSportsVolleyball,
  MdOutlineSell,
} from "react-icons/md";

const HeroSidebar = () => {
  return (
    <>
      <div className="">
        <ul className=" font-[700]  ">
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <RiBearSmileLine className=" text-[25px]" />
              Beauty
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdBluetoothAudio className=" text-[25px]" />
              Electronic
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px] ">
              <PiDressBold className=" text-[25px] " />
              Women & Girls Fashion
            </span>
            <FaAngleRight className="text-[20px]  " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <GiClothes className=" text-[25px]" />
              Men & Boys Fashion
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <GiHealthNormal className=" text-[25px]" />
              Health & Household
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <FaHome className=" text-[25px]" />
              Home & Kitchen
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdOutlinePets className=" text-[25px]" />
              Pet Supplies
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdSportsVolleyball className=" text-[25px]" />
              Sports
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
          <li className="py-[15px] px-[20px] heroSidebarLi">
            <span className="flex gap-x-[15px]">
              <MdOutlineSell className=" text-[25px]" />
              Best Seller
            </span>
            <FaAngleRight className="text-[20px] " />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroSidebar;
