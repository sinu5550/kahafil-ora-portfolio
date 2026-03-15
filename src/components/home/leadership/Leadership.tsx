"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Leadership = () => {
  const containerRef = useRef<HTMLElement>(null);

  const roles = [
    {
      organization: "Goinnovior Limited",
      impact:
        "Spearheading strategic growth and digital transformation as Founder & Managing Director since 2016, delivering enterprise ICT and cybersecurity solutions.",
    },
    {
      organization: "360D Soul Limited",
      impact:
        "Orchestrating technology-driven mental health and well-being initiatives as Founder & Managing Director since 2023, bridging the gap between tech and social impact.",
    },
    {
      organization: "CodeInnovior",
      impact:
        "Establishing institutional excellence in tech education as Founder & Managing Director since 2020, focusing on free localized learning and quality software development.",
    },
    {
      organization: "Skylark Soft Limited",
      impact:
        "Directed business engineering and scaled organizational capacity as Head of Businesses (2022-2024), fostering key B2B partnerships and market expansion.",
    },
    {
      organization: "Impress Group",
      impact:
        "Managed comprehensive IT operations for a major industrial conglomerate as Head of Information Technology Operations (2018-2022), modernizing legacy infrastructures.",
    },
    {
      organization: "Next IT Ltd.",
      impact:
        "Pioneered early-stage digital innovations as Founder & Managing Director (2016-2018), delivering high-impact custom software solutions for diverse global clients.",
    },
    {
      organization: "MASCO Group",
      impact:
        "Designed and implemented robust enterprise IT frameworks and information security protocols as Head of Information Technology Department (2010-2016).",
    },
  ];

  // Map scroll progress (0 to 1) to table translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the transform distance.
  // We want the table to move up by its height - container height.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        {/* Vertical Striped Background */}
        <div className="container-custom absolute inset-0 z-0 pointer-events-none flex justify-between px-4 md:px-0">
          {Array(14)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-px h-full bg-black/5" />
            ))}
        </div>

        <div className="container mx-auto relative z-10 px-4 md:px-0">
          <div className="mb-20">
            <h2 className="text-[32px] md:text-[48px] font-poppins font-semibold text-[#333] mb-8">
              leadership roles<span className="text-[#9747FF]">.</span>
            </h2>
            <div className="w-full h-px bg-black/20 mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Description */}
            <div className="lg:col-span-5">
              <p className="text-[16px] md:text-[25px] font-poppins text-black/60 leading-relaxed max-w-[550px]">
                I&apos;ve worked with companies and clients, both in agency
                settings. I enjoy collaborating with clients who appreciate the
                importance of good design.
              </p>
            </div>

            {/* Right Table Section - Pinned & Scrollable */}
            <div className="lg:col-span-7 h-[70vh] flex flex-col relative overflow-hidden">
              {/* Fixed Header */}
              <div className="w-full border-b border-black/10 bg-white z-20">
                <div className="flex text-left">
                  <div className="w-2/5 py-6 text-[14px] font-fragment-mono text-black/40 uppercase tracking-widest font-normal text-left">
                    Organization
                  </div>
                  <div className="w-3/3 py-6 text-[14px] font-fragment-mono text-black/40 uppercase tracking-widest font-normal text-left">
                    Impact
                  </div>
                </div>
              </div>

              {/* Scrolling Body */}
              <motion.div style={{ y }} className="w-full">
                <div className="w-full">
                  {roles.map((role, index) => (
                    <div
                      key={index}
                      className="border-b border-black/10 group hover:bg-black/2 transition-colors flex py-8 text-left"
                    >
                      <div className="w-2/5 pr-8 text-[18px] md:text-[22px] font-amiri text-black/80 font-medium align-top whitespace-nowrap text-left">
                        {role.organization}
                      </div>
                      <div className="w-3/3 text-[16px] md:text-[20px] font-amiri text-black/60 leading-relaxed text-left">
                        {role.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
