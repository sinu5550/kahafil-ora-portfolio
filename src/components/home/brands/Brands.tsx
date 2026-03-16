"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Brands = () => {
  const logos = Array(10).fill("/assets/maheen-logo.svg");

  return (
    <section className="pb-24 pt-8 bg-white overflow-hidden">
      <div className="container mx-auto px-22 3xl:px-0">
        <h2 className="text-[32px] md:text-[48px] font-poppins font-semibold text-[#333] mb-20">
          I help brands to drive results
          <span className="text-[#9747FF]">.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 relative container-custom px-25">
        {/* Decorative Gradients for Fading Edges */}
        <div className="absolute top-0 left-25 w-[10%] h-full bg-linear-to-r from-white via-white/60 via-40% to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-25 w-[10%] h-full bg-linear-to-l from-white via-white/60 via-40% to-transparent z-10 pointer-events-none"></div>

        {/* Top Marquee: Right to Left */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-20 items-center justify-around min-w-full"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`top-${index}`}
                className="shrink-0 w-[200px] md:w-[300px]"
              >
                <Image
                  src={logo}
                  alt="Maheen Accessories Limited"
                  width={300}
                  height={80}
                  className="object-contain  "
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee: Left to Right */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-20 items-center justify-around min-w-full"
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`bottom-${index}`}
                className="shrink-0 w-[200px] md:w-[300px]"
              >
                <Image
                  src={logo}
                  alt="Maheen Accessories Limited"
                  width={300}
                  height={80}
                  className="object-contain "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
