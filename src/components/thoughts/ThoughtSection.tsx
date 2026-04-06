"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThoughtItem } from "@/data/thoughtsData";

interface ThoughtSectionProps {
  title: string;
  items: ThoughtItem[];
}

export default function ThoughtSection({ title, items }: ThoughtSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show 3 items initially, or all if expanded
  const visibleItems = isExpanded ? items : items.slice(0, 3);
  const hasMore = items.length > 3;

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 ">
        <h2 className="text-[32px] md:text-[50px] font-poppins font-bold text-[#333] mb-12 flex items-center gap-2">
          {title}<span className="text-[#9747FF]">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence>
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[24px] mb-6 aspect-[1.4/0.9]">
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
                        className="text-[12px] lg:text-[14px] xl:text-[20px] font-poppins font-medium text-black/40"
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
                    <span className="text-[12px]  xl:text-[20px] font-poppins font-medium">
                      {item.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-[18px] md:text-[22px] xl:text-[26px] font-poppins font-bold text-[#444444] mb-4 leading-tight group-hover:text-[#333]">
                  {item.title}
                </h3>

                <p className="text-[13px] md:text-[16px] xl:text-[20px] font-poppins text-[#444444] leading-relaxed mb-6 font-light opacity-80">
                  {item.description}
                </p>

                <a 
                  href={item.fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#444444] hover:text-[#9747FF]  font-semibold text-[14px] md:text-[18px] hover:gap-3 transition-all"
                >
                  {item.linkText}
                  <span className="text-[20px]">→</span>
                </a>
                
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#444444] hover:bg-[#333333] text-white font-poppins font-semibold px-10 py-3 rounded-[8px] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              {isExpanded ? "Load Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
