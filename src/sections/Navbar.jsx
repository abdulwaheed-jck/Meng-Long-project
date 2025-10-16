import React from "react";
import Logo from "../assets/LogoForWebsite.png";

function Navbar() {
  return (
    <div className="pb-[15px] pt-[15px] border-b-[3px] border-b-solid border-b-[#632393]">
      <div className="max-w-[1280px] m-auto flex items-center relative">
        <img className="h-[55px] xl:h-[65px] m-auto" src={Logo} alt="Logo" />
        <select
          name="languages"
          id="languages"
          className="absolute right-[15px] text-[#C92F28] border-none focus:outline-none font-roboto lg:text-[18px]"
          defaultValue="uzb"
        >
          <option value="rus">Rus</option>
          <option value="uzb">Uzb</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
