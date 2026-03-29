"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { thoughtsData } from "@/data/thoughtsData";

const categories = [
  { id: "blogs", label: "BLOGS & ARTICLES" },
  { id: "speaking", label: "PUBLIC SPEAKING & TRAINING" },
  { id: "events", label: "RECENT EVENT ACTIVATES" },
  { id: "social", label: "SOCIAL ACTIVITIES" },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  
  // Only show first 2 items on the homepage
  const displayItems = thoughtsData[activeTab].slice(0, 2);

  return (
    <section id="thoughts" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-22 3xl:px-0">
        <h2 className="text-[32px] md:text-[48px] font-poppins font-semibold text-[#333] mb-12 flex items-center gap-2">
          some solutions that i created<span className="text-[#9747FF]">.</span>
        </h2>

        {/* Tab Navigation */}
        <div className="">
          <div className="flex items-center justify-between mb-16 overflow-x-auto no-scrollbar">
            {categories.map((category, index) => (
              <React.Fragment key={category.id}>
                <button
                  onClick={() => setActiveTab(category.id)}
                  className={`pb-4 px-4 text-[12px] md:text-[22px] font-fragment-mono tracking-wider transition-all relative whitespace-nowrap ${
                    activeTab === category.id
                      ? "text-[#444444] font-semibold"
                      : "text-[#444444]/30 hover:text-[#444444]/60"
                  }`}
                >
                  {category.label}
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#444444]"
                    />
                  )}
                </button>
                {index < categories.length - 1 && (
                  <span className="text-[#444444]/30 font-fragment-mono text-[22px] mb-4">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible gap-8 md:gap-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
            >
              {displayItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer min-w-[85vw] md:min-w-0 snap-center"
                >
                  <div className="relative overflow-hidden rounded-[24px] mb-6 aspect-[1.4/0.8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[14px] md:text-[20px] font-poppins font-medium text-black/40"
                        >
                          {tag}{i < item.tags.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-black/40">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="text-[12px] md:text-[15px] font-poppins font-medium">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[18px] md:text-[28px] font-poppins font-bold text-[#444444] mb-4 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[13px] md:text-[20px] font-plus-jakarta text-[#444444] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#444444] font-semibold text-[14px] md:text-[16px] hover:gap-3 hover:text-[#9747FF] transition-all">
                    {item.linkText}
                    <span className="text-[18px]">→</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
