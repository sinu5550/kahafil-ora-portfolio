"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companies = [
    "Goinnovior Limited",
    "360d Soul Limited",
    "Codinnovior",
    "LifeInnovior",
  ];

  return (
    <footer className="bg-white  pt-16">
      <div className="container mx-auto px-12">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 flex justify-between">
          {/* Column 1: Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="text-[18px] md:text-[22px] font-plus-jakarta text-black/60 group-hover:text-black transition-colors">
                kahafil@goinnovior.com
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black/20 group-hover:text-black/40 transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText("kahafil@goinnovior.com")
                }
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="text-[18px] md:text-[22px] font-plus-jakarta text-black/60 group-hover:text-black transition-colors">
                +880 1622-992222
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black/20 group-hover:text-black/40 transition-colors"
                onClick={() =>
                  navigator.clipboard.writeText("+880 1622-992222")
                }
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
          </div>

          {/* Column 2: Companies */}
          <div className="flex flex-col gap-4 text-[18px] md:text-[22px] font-plus-jakarta text-black/60">
            {companies.map((company) => (
              <Link
                key={company}
                href="#"
                className="group flex items-center gap-0 hover:gap-3 transition-all duration-300 hover:text-black"
              >
                <MoveLeft
                  className="w-0 h-0 group-hover:w-5 group-hover:h-5 transition-all duration-300 opacity-0 group-hover:opacity-100 "
                  strokeWidth={2.5}
                />
                {company}
              </Link>
            ))}
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col items-end">
            <div className="flex flex-col gap-4 text-[18px] md:text-[22px] font-plus-jakarta text-black/60 ">
              <p className="hover:border-b w-fit">
                Lift 4, House 774, Road 11, Avenue
              </p>
              <p className="hover:border-b w-fit">Mirpur DOHS</p>
              <p className="hover:border-b w-fit">Dhaka 1216</p>
              <p className="hover:border-b w-fit">Bangladesh</p>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col items-end">
            <div className="flex flex-col  gap-4 text-[18px] md:text-[22px] font-plus-jakarta text-black/60 text-right md:text-left">
              <Link href="#" className="hover:border-b w-fit">
                X
              </Link>
              <Link href="#" className="hover:border-b w-fit">
                LinkedIn
              </Link>
              <Link href="#" className="hover:border-b w-fit">
                YouTube
              </Link>
              <Link href="#" className="hover:border-b w-fit">
                Facebook
              </Link>
              <Link href="#" className="hover:border-b w-fit">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f0f0f0] py-6 px-12">
        <div className="container mx-auto flex justify-between items-center ">
          <p className="text-[14px] md:text-[16px] text-black/50 font-plus-jakarta">
            Copyright © 2025 Kahafil Ora
          </p>

          <Link
            href="#"
            className="text-[14px] md:text-[16px] text-black/50 hover:text-black font-plus-jakarta transition-colors"
          >
            Privacy & Policy
          </Link>
          <Link
            href="#"
            className="text-[14px] md:text-[16px] text-black/50 hover:text-black font-plus-jakarta transition-colors"
          >
            Terms & Conditions
          </Link>

          <button onClick={scrollToTop} className="p-3  transition-all group ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#444444]/60 group-hover:text-[#444444] transition-colors cursor-pointer"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
