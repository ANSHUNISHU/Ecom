import React from "react";
import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderMid from "../HeaderMid/HeaderMid";
import HeaderBottom from "../HeaderBottom/HeaderBottom";

const HeaderFull = () => {
  return (
    <>
      <section
        style={{
          boxShadow: "0 0 10px -5px black",
        }}
      >
        <HeaderTop />
        <HeaderMid />
        <HeaderBottom />
      </section>
    </>
  );
};

export default HeaderFull;
