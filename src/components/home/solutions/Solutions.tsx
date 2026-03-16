"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "blogs", label: "BLOGS & ARTICLES" },
  { id: "speaking", label: "PUBLIC SPEAKING & TRAINING" },
  { id: "events", label: "RECENT EVENT ACTIVATES" },
  { id: "social", label: "SOCIAL ACTIVITIES" },
];

const solutionsData = {
  blogs: [
    {
      image: "/assets/cyber-security.svg",
      tags: ["Cybersecurity"],
      date: "May 25, 2025",
      title: "Why Cybersecurity Is No Longer Optional For Businesses",
      description:
        "As Our World Becomes More Digital, The Threats Facing Organizations Grow More Complex And Dangerous. Cybersecurity Is No Longer A Lu...",
      linkText: "Read More",
    },
    {
      image: "/assets/education.svg",
      tags: ["Education", "Social Impact"],
      date: "May 25, 2025",
      title: "Tech For Good: How Codeinnovior Is Shaping Future Innovators",
      description:
        "When We Launched Codeinnovior, The Mission Was Simple—Make Coding Fun And Accessible For Kids. Technology Shouldn't Just Be For...",
      linkText: "Read More",
    },
  ],
  speaking: [
    {
      image: "/assets/cyber-talk.svg",
      tags: ["Cybersecurity"],
      date: "May 25, 2025",
      title: "Cyber Talk On ATN Bangla",
      description:
        "As Our World Becomes More Digital, The Threats Facing Organizations Grow More Complex And Dangerous. Cybersecurity Is No Longer A Lu...",
      linkText: "Watch On Facebook",
    },
    {
      image: "/assets/training.svg",
      tags: ["Training & Learning"],
      date: "May 25, 2025",
      title: "Training @ Skylark Soft Limited",
      description:
        "When We Launched Codeinnovior, The Mission Was Simple—Make Coding Fun And Accessible For Kids. Technology Shouldn't Just Be For...",
      linkText: "Watch & Read On LinkedIn",
    },
  ],
  events: [
    {
      image: "/assets/leadership.svg",
      tags: ["Leadership & Soft Skills"],
      date: "May 25, 2025",
      title: "Honored to Speak at Job Fest 'চাকরি মেলা ২০২৫'!",
      description:
        "On February 22, 2025, I Had The Privilege Of Being A Panel Speaker On 'Leadership & Soft Skills' At Job Fest 'চাকরি মেলা ২০২৫' Organized By Daff...",
      linkText: "Read On Facebook",
    },
    {
      image: "/assets/education-it.svg",
      tags: ["Education", "Social Impact"],
      date: "May 25, 2025",
      title: "আইটি প্রফেশনাল মিটআপ",
      description:
        "দেশের আইটি খাতের ১৬০ জন আইটি প্রফেশনালকে বিশ্বমানের দক্ষতা উন্নয়ন প্রশিক্ষণ দেওয়া হয়েছে। ...",
      linkText: "Read On Facebook",
    },
  ],
  social: [
    {
      image: "/assets/empowering.svg",
      tags: ["Training & Education"],
      date: "May 25, 2025",
      title:
        "Empowering Fresh Graduates: How Goinnovior Is Shaping Tomorrow's Tech Leaders",
      description:
        "Working With Fresh Graduates To Prepare Them For The Tech Industry Is A Crucial Step Toward Driving Nationwide Growth. At Goinnovior Li...",
      linkText: "Read On Facebook",
    },
    {
      image: "/assets/coading-the-future.svg",
      tags: ["Education", "Social Impact"],
      date: "May 25, 2025",
      title:
        "Coding The Future: Why Early Tech Education Matters For Students Today",
      description:
        "In Today's Fast-Paced, Technology-Driven World, Digital Proficiency Is No Longer A Luxury—It's A Necessity. As A Technology Enthusiast Dedic...",
      linkText: "Read On Facebook",
    },
  ],
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] md:text-[48px] font-poppins font-semibold text-[#333] mb-12">
          some solutions that i created<span className="text-[#9747FF]">.</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-between mb-16 ">
          {categories.map((category, index) => (
            <React.Fragment key={category.id}>
              <button
                onClick={() => setActiveTab(category.id)}
                className={`pb-4 px-4 text-[12px] md:text-[22px] font-fragment-mono tracking-wider transition-all relative ${
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
                <span className="text-[#444444]/30 font-fragment-mono text-[22px] hidden md:block mb-4">
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            {solutionsData[activeTab as keyof typeof solutionsData].map(
              (item, index) => (
                <div key={index} className="group cursor-pointer">
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
                          className="text-[20px] font-poppins font-medium text-black/40"
                        >
                          {tag}
                          {i < item.tags.length - 1 ? "," : ""}
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
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className="text-[14px] md:text-[15px] font-poppins font-medium">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[20px] md:text-[28px] font-poppins font-bold text-[#444444] mb-4 leading-tight ">
                    {item.title}
                  </h3>

                  <p className="text-[14px] md:text-[20px] font-plus-jakarta text-[#444444] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#444444] font-semibold text-[14px] md:text-[16px] hover:gap-3 hover:text-[#9747FF] transition-all">
                    {item.linkText}
                    <span className="text-[18px]">→</span>
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Solutions;
