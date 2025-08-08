import React from "react";
import Navbar from "../../sections/Navbar";
import HeroBanner from "../../assets/HeroBanner.png";
function Home() {
  return (
    <div className="min-w-[400px]">
      <Navbar />
      <div className="w-[100%] lg:max-w-[1300px] mx-auto mt-[12px]">
        <img
          className="max-h-[619px] w-[100%] object-cover"
          src={HeroBanner}
          alt="HeroBanner"
        />
      </div>
    </div>
  );
}

export default Home;
