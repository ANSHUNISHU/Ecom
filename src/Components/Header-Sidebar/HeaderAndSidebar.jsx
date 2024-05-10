import React from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileSidebar from "./MobileSidebar/MobileSidebar";

const HeaderAndSidebar = () => {
  return (
    <>
      <div className="hidden xl:block">
        <DesktopHeader />
      </div>
      <div className="block xl:hidden">
        <MobileSidebar />
      </div>
    </>
  );
};

export default HeaderAndSidebar;
