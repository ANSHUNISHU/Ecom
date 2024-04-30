import React from "react";
import Image from "next/image";
import logo from "../../../../public/Logos/Shoppy-black.png";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const HeaderMid = () => {
  return (
    <>
      <section className="w-full border-b-[1px] border-black">
        <header className="w-[80%] m-auto py-[10px] flex justify-between ">
          <div className="flex-[0.5] flex items-center justify-start  ">
            <Image
              src={logo}
              alt="Image"
              height={100}
              width={100}
              className="rounded-[5px]"
            />
          </div>

          <div className="flex-[3] flex items-center justify-center">
            <div className="flex border-black border-[1px] ">
              <div className="border-black flex items-center px-[10px] ">
                <SearchIcon sx={{ color: "#b91c1c", fontSize: 25 }} />
                <input
                  type="text"
                  placeholder="Search Here"
                  className=" font-[500] text-[20px] p-[10px] "
                />
              </div>

              <button className="p-[12px] pl-[20px] font-[500] border-l-[1px] border-black ">
                All Categories
                <ArrowDropDownIcon />
              </button>

              <button className="bg-orange-500 py-[6px] px-[15px] font-[500] text-[20px] text-white ">
                Search
              </button>
            </div>
          </div>

          <div className=" flex-[1.5] flex items-center justify-between ">
            <div className="flex-[4] flex items-center justify-center     ">
              <span className=" border-r-[1px] border-black flex-1 flex items-center justify-center">
                <PersonIcon sx={{ color: "#f97316", fontSize: 25 }} />
                Login
              </span>
              <span className="flex-1 flex items-center justify-center">
                <ContactPageIcon sx={{ color: "#f97316", fontSize: 25 }} />
                Register
              </span>
            </div>
            <span className="flex-1 flex items-center justify-end">
              <LocalMallIcon
                sx={{ color: "#f97316", fontSize: 40 }}
                className=" rounded-[50px] p-[7px]  "
                style={{
                  boxShadow: "0 0 10px -3px #c2410c",
                }}
              />
            </span>
          </div>
        </header>
      </section>
    </>
  );
};

export default HeaderMid;
