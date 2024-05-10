import React from "react";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const HeaderOne = () => {
  return (
    <>
      <section className="w-full py-[10px]">
        <header className="w-[90%] m-auto flex justify-between">
          {/* <div className="flex-[1] flex items-center justify-start ">
          <Image
            src={logo}
            alt="Image"
            height={100}
            width={100}
            className="rounded-[5px]"
          />
        </div> */}
          <div
            className="flex-[3] flex items-center justify-center rounded-[50px] bg-white "
            style={{
              boxShadow: "0 0 10px -5px",
            }}
          >
            <div className="flex w-full ">
              <div className="flex items-center flex-[3] ">
                <div className="px-[15px]">
                  <SearchIcon sx={{ color: "#b91c1c", fontSize: 30 }} />
                </div>
                <input
                  type="text"
                  placeholder="Search Here"
                  className="font-[500] text-[20px] flex-[3] py-[10px]  "
                />
              </div>
              <button className="py-[10px] px-[15px] font-[500] text-[17px] text-white flex-[0.5] rounded-tr-[50px] rounded-br-[50px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 ...">
                Search
              </button>
            </div>
          </div>

          <div className=" flex-[1.5] flex items-center justify-end  ">
            <div className="  flex items-center justify-end gap-x-[15px] text-white ">
              <button className="py-[7px] px-[15px] flex gap-x-[5px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 ... rounded-[50px]   ">
                <PersonIcon sx={{ color: "white", fontSize: 25 }} />
                Login
              </button>
              <button className="py-[7px] px-[15px] flex gap-x-[5px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 ... rounded-[50px]   ">
                <ContactPageIcon sx={{ color: "white", fontSize: 25 }} />
                Register
              </button>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default HeaderOne;
