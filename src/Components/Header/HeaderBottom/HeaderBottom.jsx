import React from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const HeaderBottom = () => {
  return (
    <>
      <section className="w-full py-[10px] ">
        <header className="w-[80%] m-auto flex ">
          <nav className="flex-[4] flex items-center justify-center ">
            <ul className="flex items-center gap-x-14 ">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Shop</Link>
              </li>
              <li>
                <Link href={"/"}>Men</Link>
              </li>
              <li>
                <Link href={"/"}>Women</Link>
              </li>
              <li>
                <Link href={"/"}>Sports</Link>
              </li>
              <li>
                <Link href={"/"}>Catogery</Link>
                <ArrowDropDownIcon sx={{ color: "#c2410c", fontSize: 25 }} />
              </li>
            </ul>
          </nav>
          <div className="flex-[1] flex items-center justify-end gap-x-5">
            <button className="flex items-center justify-center">
              <LocalMallIcon
                sx={{ color: "#f97316", fontSize: 40 }}
                className=" rounded-[50px] p-[7px] bg-white "
                style={{
                  boxShadow: "0 0 10px -5px black",
                }}
              />
            </button>
            <button className="flex items-center justify-center">
              <FavoriteIcon
                sx={{ color: "#f97316", fontSize: 40 }}
                className=" rounded-[50px] p-[7px] bg-white "
                style={{
                  boxShadow: "0 0 10px -5px black",
                }}
              />
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default HeaderBottom;
