import React from "react";
import Navbar from "../../sections/Navbar";
import Thread from "../../assets/Thread.png";
import BackgroundHero from "../../assets/BackgroundHero.png";
import { motion } from "framer-motion";

function Home() {
  const headline = "MENG LONG";
  const words = headline.split(" ");

  const text = "Best quality sewing threads".split(" ");
  return (
    <div className="min-w-[400px]">
      <Navbar />
      {/* Hero section */}
      <div className="bg-[url(assets/BackgroundHero.png)] bg-cover">
        <div className="max-w-[1280px] m-auto xl:flex xl:items-center xl:justify-between xl:px-[70px]">
          <div className="text-center pt-[80px] pb-[80px]">
            {words.map((word, index) => (
              <motion.p
                initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
                animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                key={index}
                className="inline-block mr-5 xl:text-[80px] font-serif text-[50px] text-[#632393] font-bold [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]"
              >
                {word}
              </motion.p>
            ))}
            <br />
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + i * 0.1,
                }}
                key={i}
                className=" xl:text-[20px] font-roboto text-[#C92F28] font-[500] [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]"
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          <img
            className="hidden xl:block drop-shadow-[0_0_100px_rgba(255,255,255,0.8)] xl:h-[650px]"
            src={Thread}
            alt="thread"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

// Hero qismi tayyor bo'ldi