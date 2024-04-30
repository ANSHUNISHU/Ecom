import React from "react";
import CallIcon from "@mui/icons-material/Call";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderTop = () => {
  return (
    <>
      <section className="w-full border-b-[1px] border-black">
        <header className="w-[80%] m-auto py-[10px] flex items-center justify-between ">
          <div className="flex-1 flex items-center justify-start pl-[10px] ">
            <div className="flex items-center justify-center pl-[10px] gap-x-[5px] ">
              <CallIcon sx={{ color: "black", fontSize: 20 }} />
              <span className="font-[500] text-[13px] ">8890275972</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end text-[12px] ">
            <div className="px-[20px] flex items-center justify-center gap-x-[10px]">
              <span>Language</span>
              <span className=" border-[2px] border-black flex items-center justify-center pl-[10px] rounded-md ">
                English
                <ArrowDropDownIcon sx={{ color: "black", fontSize: 20 }} />
              </span>
            </div>
            <div className="px-[20px] flex items-center justify-center gap-x-[10px] border-l-[1px] border-black ">
              <span>Currency</span>
              <span className=" border-[2px] border-black flex items-center justify-center pl-[10px] rounded-md ">
                USD
                <ArrowDropDownIcon sx={{ color: "black", fontSize: 20 }} />
              </span>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default HeaderTop;
