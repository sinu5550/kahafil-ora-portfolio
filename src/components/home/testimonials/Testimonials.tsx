"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "“Kahafil Ora is a visionary leader with a rare blend of technical depth and strategic foresight. His insights on cybersecurity and infrastructure optimization have been invaluable to our team. Collaborating with him has always meant progress and clarity.”",
    name: "Farzana Rahman",
    role: "CTO,",
    company: "Skylark Soft Limited",
  },
  {
    quote:
      "“Under Kahafil sir’s mentorship, I not only learned programming but also gained confidence in problem-solving and real-world application development. His guidance shaped my career path and helped me break into the tech industry successfully.”",
    name: "Rafiul Hasan",
    role: "Jr. Software Engineer,",
    company: "Codeinnovior Alumni",
  },
  {
    quote:
      "“We consulted Kahafil Ora during our digital transformation phase, and his expertise was instrumental in streamlining our business processes. His solutions were both innovative and practical, tailored exactly to our organizational needs.”",
    name: "Mahbub Alam",
    role: "Director of Operations,",
    company: "FutureBiz Solutions",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col items-center px-4 md:px-22 3xl:px-0">
        <span className="text-[20px] font-fragment-mono tracking-wider text-[#444444]/40 mb-12 uppercase text-center">
          TESTIMONIAL
        </span>

        <div className="relative w-full  h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              <p className="text-[20px] md:text-[32px] lg:text-[35px] font-light font-poppins text-[#333] leading-[1.4] mb-10 w-full px-4">
                {testimonials[index].quote}
              </p>

              <div className="flex flex-col font-amiri  items-center">
                <h4 className="text-[20px] md:text-[24px] font-amiri font-bold text-[#444444] mb-1">
                  {testimonials[index].name}
                </h4>
                <p className="text-[14px] md:text-[16px] font-amiri text-[#444444] font-medium">
                  {testimonials[index].role}{" "}
                  <span className="text-[#9747FF]">
                    {testimonials[index].company}
                  </span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Optional: Slide Indicators (Passive) */}
        <div className="flex gap-2 mt-12">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? "w-8 bg-[#9747FF]" : "w-2 bg-black/10"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
