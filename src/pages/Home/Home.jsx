import React from "react";
import Navbar from "../../sections/Navbar";
import Thread from "../../assets/Thread.png";
import BackgroundHero from "../../assets/BackgroundHero.png";
function Home() {
  return (
    <div className="min-w-[400px]">
      <Navbar />
      {/* Hero section */}
      <div className="bg-[url(assets/BackgroundHero.png)] bg-cover">
        <div className="max-w-[1280px] m-auto">
          <div className="text-center pt-[80px] pb-[80px]">
            <h1 className="font-serif text-[50px] text-[#632393] font-bold [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]">
              MENG LONG
            </h1>
            <h2 className="font-roboto text-[#C92F28] font-[500] [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]">
              Best quality sewing threads
            </h2>
          </div>
          <img className="hidden lg:block" src={Thread} alt="thread" />
        </div>
      </div>
    </div>
  );
}

export default Home;

// Hero qismining mobile ko'rinishi tayyor bo'ldi. Desktop ko'rinishini yasaymiz
