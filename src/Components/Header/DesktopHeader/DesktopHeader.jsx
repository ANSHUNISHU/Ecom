import React from "react";
import Image from "next/image";
import HeaderOne from "./DesktopHeaderTwo/HeaderOne";
import HeaderTwo from "./DesktopHeaderOne/HeaderTwo";
import logo from "../../../../public/Logos/Shoppy-black.png"

const DesktopHeader = () => {
  return (
    <>
      <div
        className="hidden items-center p-[10px] xl:flex "
        style={{
          boxShadow: "0 0 10px -5px black",
        }}
      >
        <div className="flex-[2.5] flex items-center justify-center ">
          <Image src={logo} alt="Image" height={200} width={200} />
        </div>
        <div className="flex-[7.5]">
          {/* <HeaderTop /> */}
          <HeaderOne/>
          <HeaderTwo />
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
