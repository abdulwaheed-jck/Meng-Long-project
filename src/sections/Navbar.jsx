import React from "react";
import Logo from "../assets/LogoForWebsite.png";

function Navbar() {
  return (
    <div className="pb-[15px] pt-[15px] border-b-[3px] border-b-solid border-b-[#632393] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img className="h-[55px] lg:h-[65px] m-auto" src={Logo} alt="Logo" />
    </div>
  );
}

export default Navbar;
