"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/assets/education-it.svg", alt: "IT Professional Meetup" },
  { src: "/assets/leadership.svg", alt: "Job Fest 2025" },
  {
    src: "/assets/kahafil-ora-about-original.svg",
    alt: "Kahafil Ora Portrait",
  },
  { src: "/assets/4th-pic.svg", alt: "Training at Skylark Soft" },
  { src: "/assets/childs.svg", alt: "Empowering Fresh Graduates" },
  { src: "/assets/education-it.svg", alt: "IBA Meetup" },
];

const Gallery = () => {
  return (
    <section className="bg-white pt-16">
      {/* 6 Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 w-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative group aspect-4/5 overflow-hidden cursor-pointer border-r border-white/10 last:border-0 md:aspect-square"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
            />

            {/* Hover Overlay with Blur and Icon */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
              <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-[24px] border border-white/30 shadow-2xl">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-lg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Large Display Text */}
      <div className="w-full py-12 flex justify-center">
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1920 / 218",
          }}
        >
          <Image
            src="/assets/name-text.svg"
            alt="Name Text"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
