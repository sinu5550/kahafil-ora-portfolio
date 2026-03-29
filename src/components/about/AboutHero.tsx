"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "biography", label: "BIOGRAPHY" },
  { id: "vision", label: "VISION & VALUES" },
  { id: "words", label: "WORDS I LIVE BY" },
  { id: "leadership", label: "LEADERSHIP JOURNEY" },
  { id: "story", label: "MY STORY" },
];

const tabContent = {
  biography: (
    <div className="space-y-6">
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        A Visionary Leader With Over 22 Years Of Experience, Kahafil Ora Has
        Consistently Championed Innovation, Growth, And Meaningful Change. As
        The Managing Director Of Goinnovior Limited And Co-Founder Of 360D Soul,
        Lifeinnovior, And Codeinnovior, He Has Successfully Built Ventures That
        Bridge Technology, Business, And Social Development. His Journey
        Reflects A Rare Blend Of Entrepreneurial Grit And A Deep Commitment To
        Community Empowerment.
      </p>
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        Under His Leadership, Goinnovior Limited Has Emerged As A Reliable
        Provider Of ICT And Information Security Solutions—Supporting Businesses
        With Future-Ready Technology. Meanwhile, Through Lifeinnovior, He
        Advocates For Mental Health Awareness And Care, Addressing A Vital But
        Often Overlooked Area Of Well-Being. His Involvement In 360D Soul And
        Codeinnovior Highlights His Passion For Knowledge-Sharing And Youth
        Empowerment, Creating Platforms Where Free And Accessible Tech Education
        Is A Reality.
      </p>
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        Kahafil Ora Believes That Leadership Is Not Just About Driving
        Success—It's About Creating Sustainable Impact. He Envisions A Future
        Where Technology Uplifts People, Not Just Industries. Through Every
        Project And Initiative, He Aims To Build A Legacy That Inspires Purpose,
        Compassion, And Continuous Learning.
      </p>
    </div>
  ),
  vision: (
    <div className="space-y-6">
      <div>
        <h4 className="font-poppins font-bold text-[18px] text-[#444444] mb-2">
          Vision
        </h4>
        <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
          To Build A Future Where Technology, Leadership, And Compassion Come
          Together To Create Sustainable Impact—For Businesses, Individuals, And
          Society As A Whole. I Believe True Success Lies Not Only In Innovation
          But In The Ability To Uplift And Empower Those Around Us.
        </p>
      </div>
      <div>
        <h4 className="font-poppins font-bold text-[18px] text-[#444444] mb-2">
          Core Values
        </h4>
        <ul className="space-y-2 list-disc list-outside ml-6">
          {[
            {
              tag: "Integrity",
              text: "Every Action And Decision Is Rooted In Honesty, Ethics, And Accountability.",
            },
            {
              tag: "Innovation With Purpose",
              text: "I Pursue Technology Not Just For Progress, But For Positive, Meaningful Change.",
            },
            {
              tag: "People First",
              text: "Whether In Business Or Community, People Are At The Heart Of Every Solution I Design Or Support.",
            },
            {
              tag: "Continuous Learning",
              text: "Growth Never Stops. I Embrace Change, Challenge Norms, And Seek To Evolve.",
            },
            {
              tag: "Empowerment",
              text: "I Am Committed To Creating Opportunities—Especially Through Education, Mental Well-Being, And Digital Access—For Those Who Need It Most.",
            },
          ].map((item, id) => (
            <li
              key={id}
              className="font-plus-jakarta text-[14px] md:text-[16px] text-[#444444] font-light leading-relaxed"
            >
              <span className="font-medium"> {item.tag}</span> – {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
  words: (
    <div className="space-y-8 ">
      <div className="relative pl-6 border-l-2 border-[#444444]/10">
        <p className="font-plus-jakarta text-[16px] md:text-[18px] leading-relaxed text-[#444444] font-light italic">
          "Leadership Is Not About Being In Charge. It's About Taking Care Of
          Those In Your Charge."
        </p>
        <span className="block mt-2 font-poppins text-[#444444] text-[14px] md:text-[16px]  tracking-widest font-medium">
          – Simon Sinek
        </span>
      </div>
      <div className="relative pl-6 border-l-2 border-[#444444]/10">
        <p className="font-plus-jakarta text-[16px] md:text-[18px] leading-relaxed text-[#444444] font-light italic">
          "Innovation Is Seeing What Everybody Has Seen And Thinking What Nobody
          Has Thought."
        </p>
        <span className="block mt-2 font-poppins text-[#444444] text-[14px] md:text-[16px]  tracking-widest font-medium">
          – Dr. Albert Szent-Györgyi
        </span>
      </div>
      <div className="relative pl-6 border-l-2 border-[#444444]/10">
        <p className="font-plus-jakarta text-[16px] md:text-[18px] leading-relaxed text-[#444444] font-light italic">
          "Success Is Not Measured By What You Have, But By The Positive Impact
          You Leave Behind."
        </p>
        <span className="block mt-2 font-poppins text-[#444444] text-[14px] md:text-[16px]  tracking-widest font-medium">
          – Kahafil Ora
        </span>
      </div>
    </div>
  ),
  leadership: (
    <div className="space-y-6">
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        With Over 22 Years Of Experience Across Technology, Business, And Social
        Innovation, My Leadership Journey Has Always Been Guided By One
        Principle: Create Impact With Intention.
      </p>
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        It Began With A Passion For IT Solutions, Evolving Into A Broader
        Mission—Founding And Leading Multiple Ventures Like Goinnovior Limited,
        360D Soul Ltd., Lifeinnovior, And Codeinnovior. Each Of These Was Born
        From A Real-World Need: Transforming Businesses Through ICT And InfoSec
        Solutions, Promoting Mental Health Awareness, And Offering Free Tech
        Education To The Underserved.
      </p>
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        Through Every Challenge And Milestone, I've Stayed Grounded In
        Continuous Learning And Human Connection. Whether It's Earning Advanced
        Management Credentials From IBA, University Of Dhaka, Or Mentoring The
        Next Generation, Leadership For Me Is Not About A Title—It's About
        Responsibility, Growth, And Purpose.
      </p>
    </div>
  ),
  story: (
    <div className="space-y-6">
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        I Come From A Place Where Dreams Were Simple But Ambitions Were Strong.
        My Journey Began With A Deep Curiosity About Technology And A Desire To
        Solve Problems That Mattered. Over The Years, That Curiosity Turned Into
        A Mission—To Create Meaningful Change Through Innovation, Leadership,
        And Service.
      </p>
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        From Humble Beginnings To Becoming The Managing Director Of Goinnovior
        Limited And Co-Founder Of 360D Soul, Lifeinnovior, And Codeinnovior,
        Every Step Of The Way Has Been Driven By Purpose. I've Witnessed How
        Technology Can Transform Businesses—But More Importantly, How It Can
        Uplift People. That Belief Led Me To Support Mental Health Initiatives,
        Advocate For Youth Development, And Promote Free Tech Education For
        Those Who Need It Most.
      </p>
      <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#444444] font-light">
        This Story Is Still Being Written. Every Project, Every Challenge, Every
        Person I Meet Continues To Shape Who I Am. I Don't Just Lead Companies—I
        Build Communities, Nurture Ideas, And Stay Committed To Growth That Goes
        Beyond The Bottom Line. Because At THE Heart Of It All, I Believe In
        Building A Better Future—For Everyone.
      </p>
    </div>
  ),
};

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState("biography");

  return (
    <section className="relative h-screen min-h-[700px] w-full bg-white overflow-hidden pt-24 pb-10">
      {/* Background Dot Grid Pattern */}
      <div
        className="absolute top-22 right-0 bottom-10 left-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#444 1px, transparent 3px)",
          backgroundSize: "33px 33px",
        }}
      ></div>

      <div className="w-full h-full relative z-10 px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-0 items-stretch">
          {/* Left Column */}
          <div className="md:col-span-4 relative h-full">
            <div className="relative w-[90%] md:w-[95%] h-full overflow-hidden rounded-r-[8px]">
              <Image
                src="/assets/with-chair-pic.png"
                alt="Kahafil Ora"
                fill
                className="object-cover grayscale brightness-110 contrast-75"
                priority
              />
              {/* Quote Overlay */}
              <div className="absolute bottom-6 md:bottom-12 left-6 md:left-28 right-6 md:right-12 text-white z-20">
                <p className="text-[12px] md:text-[16px] leading-relaxed italic opacity-90 max-w-[400px] font-poppins font-extralight">
                  "I Believe In Progress Driven By Innovation And Integrity.
                  Every Project Is An Opportunity To Create Real Impact—With
                  Purpose, Clarity, And Care. This Portfolio Reflects Not Just
                  What We've Built, But How We Think, Lead, And Grow."
                </p>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* NAME BOX */}
              <div className="absolute top-6 left-6  bg-black/20 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-[4px] border border-white/20 z-30 uppercase font-poppins tracking-widest text-white font-bold text-[10px] md:text-[22px]">
                KAHAFIL ORA
              </div>
            </div>

            <div className="absolute top-14 right-0 md:-right-16 w-32 md:w-50 h-[30%] aspect-square overflow-hidden  shadow-xl z-40">
              <Image
                src="/assets/kahafil-ora-about-original.svg"
                alt="Kahafil Ora Profile"
                fill
                className="object-cover scale-185 grayscale-30"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 flex flex-col h-full justify-between px-6 md:px-12 mt-12 md:mt-20 md:pl-32">
            {/* Top Div: Tabs & Description (2 column layout) */}
            <div className="flex flex-col lg:flex-row  h-full">
              {/* Left Sub-div: Tabs & Scroll Down */}
              <div className="flex flex-col justify-between h-full lg:w-[28%] border-b lg:border-none border-[#444444]/10 pb-8 lg:pb-10 ">
                <nav className="flex flex-row lg:flex-col gap-8 lg:gap-8 overflow-x-auto no-scrollbar  pb-2 cursor-pointer">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-left text-[11px] md:text-[18px] font-poppins font-normal tracking-widest transition-all relative group whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                        activeTab === tab.id
                          ? "text-[#444444] font-bold"
                          : "text-[#444444]/40 hover:text-[#444444]/60"
                      }`}
                    >
                      {tab.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#444444] transition-all duration-300 ${
                          activeTab === tab.id
                            ? "w-[60%]"
                            : "w-0 group-hover:w-2/7"
                        }`}
                      ></span>
                    </button>
                  ))}
                </nav>

                {/* SCROLL DOWN Arrow */}
                <div className="hidden lg:flex flex-col gap-6 ">
                  <div className="flex flex-col gap-2 items-start">
                    <span className="text-[18px] font-poppins tracking-widest text-[#444444] uppercase">
                      SCROLL DOWN
                    </span>
                    <div className="relative flex flex-col items-center h-24 pl-3">
                      <motion.div
                        animate={{
                          height: [20, 90, 20],
                          y: [0, 5, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.4,
                          ease: [0.45, 0.05, 0.55, 0.95],
                        }}
                        className="w-[1.5px] bg-[#444444] relative origin-top"
                      >
                        <div className="absolute bottom-0  -translate-x-3/7 w-3 h-3 border-b-2 border-r-2 border-[#444444] rotate-45" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Content (Description) */}
              <div className="flex-1 lg:max-w-[800px] mt-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {tabContent[activeTab as keyof typeof tabContent]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Div */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center pb-20 ">
              <div className="max-w-[450px]">
                <p className="font-plus-jakarta text-[14px] md:text-[16px] leading-relaxed text-[#333333] font-medium">
                  Kahafil Ora Was Honored With A Crest Upon Successfully
                  Achieving The{" "}
                  <span className="font-bold text-black ">
                    Advanced Certificate For Management Professionals 4.0 (ACMP
                    4.0)
                  </span>{" "}
                  From{" "}
                  <span className="font-bold text-black ">
                    IBA, University Of Dhaka
                  </span>
                  .
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="relative w-36 md:w-66 aspect-4/2.5 rounded-[8px] overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/education-it.svg"
                    alt="ACMP 4.0 Celebration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-36 md:w-66 aspect-4/2.5 rounded-[8px] overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/with-mic.svg"
                    alt="ACMP 4.0 Celebration 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
