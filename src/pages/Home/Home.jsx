import React from "react";
import Navbar from "../../sections/Navbar";
import Thread from "../../assets/Thread.png";
import BackgroundHero from "../../assets/BackgroundHero.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const headline = "MENG LONG";
  const words = headline.split(" ");

  const text = "Best quality sewing threads".split(" ");
  const whychooseus = "Nega aynan biz?".split(" ");
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
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
                key={index}
                className={` ${
                  index !== words.length - 1 ? "mr-5" : ""
                } inline-block xl:text-[80px] cursor-default font-serif text-[50px] text-[#632393] font-bold [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]`}
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
                  delay: 1.2 + i * 0.1,
                }}
                key={i}
                className="cursor-default xl:text-[20px] font-roboto text-[#C92F28] font-[500] [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]"
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
      {/* Why Choose Us section */}
      <div className="max-w-[1280px] m-auto">
        <div className="text-center mt-[40px] xl:mt-[110px]">
          {whychooseus.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + 0.1 * i,
              }}
              key={i}
              className={` ${
                i !== whychooseus.length - 1 ? "mr-[7px] xl:mr-[10px]" : ""
              } cursor-default text-center xl:text-[55px] text-[30px] font-roboto text-[#632393] font-[500] inline-block`}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
        <div className="text-center flex flex-col xl:flex-row xl:justify-center items-center gap-[50px] xl:gap-[80px] mt-[40px] xl:mt-[110px] mb-[40px] xl:mb-[120px]">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="rounded-[40px] border-[1px] border-solid border-[#632393] h-[300px] w-[350px] xl:h-[320px] xl:w-[370px] flex flex-col justify-center bg-[#632393] overflow-hidden 
        transition-all duration-500 ease-in-out hover:bg-white hover:border-[#632393] hover:shadow-[0_8px_25px_#C92F28] group"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="cursor-default text-[70px] xl:text-[75px] font-[700] text-white transition-colors duration-500 ease-in-out group-hover:text-[#632393]"
            >
              <CountUp
                start={inView1 ? 0 : null}
                end={10}
                duration={3}
                delay={1.5}
                suffix="+"
              />
            </motion.h2>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={inView1 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
              className="text-white text-[25px] xl:text-[30px] font-[600] transition-colors duration-500 ease-in-out group-hover:text-[#632393] cursor-default"
            >
              Yillik tajriba
            </motion.h2>

            <motion.hr
              initial={{ scaleX: 0 }}
              animate={inView1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
              className="border-t-2 border-white w-[250px] mx-auto my-[10px] origin-center transition-colors duration-500 ease-in-out group-hover:border-[#632393]"
            />

            <motion.h3
              initial={{ y: -10, opacity: 0 }}
              animate={inView1 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
              className="text-white cursor-default text-[15px] xl:text-[17px] font-[500] transition-colors duration-500 ease-in-out group-hover:text-[#632393]"
            >
              Yillar sinovidan o‘tgan
              <br />
              ishonchli sifat
            </motion.h3>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="rounded-[40px] border-[1px] border-solid border-[#632393] h-[300px] w-[350px] xl:h-[320px] xl:w-[370px] flex flex-col justify-center bg-[#632393] overflow-hidden 
        transition-all duration-500 ease-in-out hover:bg-white hover:border-[#632393] hover:shadow-[0_8px_25px_#C92F28] group"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="cursor-default text-[70px] xl:text-[75px] font-[700] text-white transition-colors duration-500 ease-in-out group-hover:text-[#632393]"
            >
              <i className="fa-solid fa-gem"></i>
            </motion.h2>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
              className="text-white text-[25px] xl:text-[30px] font-[600] transition-colors duration-500 ease-in-out group-hover:text-[#632393] cursor-default"
            >
              Yuqori sifat
            </motion.h2>

            <motion.hr
              initial={{ scaleX: 0 }}
              animate={inView2 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
              className="border-t-2 border-white w-[250px] mx-auto my-[10px] origin-center transition-colors duration-500 ease-in-out group-hover:border-[#632393]"
            />

            <motion.h3
              initial={{ y: -10, opacity: 0 }}
              animate={inView2 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
              className="text-white cursor-default text-[15px] xl:text-[17px] font-[500] transition-colors duration-500 ease-in-out group-hover:text-[#632393]"
            >
              Har bir ipda mukammallikni
              <br />
              ta’minlaymiz
            </motion.h3>
          </motion.div>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0 }}
            animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="rounded-[40px] border-[1px] border-solid border-[#632393] h-[300px] w-[350px] xl:h-[320px] xl:w-[370px] flex flex-col justify-center bg-[#632393] overflow-hidden 
        transition-all duration-500 ease-in-out hover:bg-white hover:border-[#632393] hover:shadow-[0_8px_25px_#C92F28] group"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="cursor-default text-[70px] xl:text-[75px] font-[700] text-white transition-colors duration-500 ease-in-out group-hover:text-[#632393]"
            >
              <CountUp
                start={inView3 ? 0 : null}
                end={1500}
                duration={1.7}
                delay={1.5}
                suffix="+"
              />
            </motion.h2>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              animate={inView3 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
              className="text-white text-[25px] xl:text-[30px] font-[600] transition-colors duration-500 ease-in-out group-hover:text-[#632393] cursor-default"
            >
              Jozibali ranglar
            </motion.h2>

            <motion.hr
              initial={{ scaleX: 0 }}
              animate={inView3 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
              className="border-t-2 border-white w-[250px] mx-auto my-[10px] origin-center transition-colors duration-500 ease-in-out group-hover:border-[#632393]"
            />

            <motion.h3
              initial={{ y: -10, opacity: 0 }}
              animate={inView3 ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
              className="text-white cursor-default text-[15px] xl:text-[17px] font-[500] transition-colors duration-500 ease-in-out group-hover:text-[#632393]"
            >
              Har qanday g‘oyani ifodalovchi
              <br />
              boy rang palitrasi
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// Why choose us section tayyor bo'ldi
