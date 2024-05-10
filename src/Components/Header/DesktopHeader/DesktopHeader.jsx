import React from "react";
import Image from "next/image";
import HeaderOne from "./DesktopHeaderTwo/HeaderOne";
import HeaderTwo from "./DesktopHeaderOne/HeaderTwo";
import logo from "../../../../public/Logos/Shoppy-black.png";

const DesktopHeader = () => {
  return (
    <>
      <div className=" hidden xl:block xl:h-[16.5vh] ">
        <div
          className="hidden items-center p-[10px] xl:flex fixed w-full bg-white z-[3] "
          style={{
            boxShadow: "0 0 10px -5px black",
          }}
        >
          <div className="flex-[2.5] flex items-center justify-center ">
            <Image src={logo} alt="Image" height={200} width={200} />
          </div>
          <div className="flex-[7.5]">
            {/* <HeaderTop /> */}
            <HeaderOne />
            <HeaderTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
