"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface ThoughtHeroProps {
  session?: string;
  category: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  fbLink: string;
}

const defaultThought: ThoughtHeroProps = {
  category: "Education, Social Impact",
  title: "আইটি প্রফেশনাল মিটআপ",
  description:
    "দেশের আইটি খাতের ১৬০ জন আইটি প্রফেশনালকে বিশ্বমানের দক্ষতা উন্নয়ন প্রশিক্ষণ দেওয়া হয়েছে। সম্প্রতি প্রশিক্ষণ শেষে ঢাকা বিশ্ববিদ্যালয়ের আইবিএ বিভাগে ACMP 4.0 মিটআপ ২০২৪ অনুষ্ঠিত হয়।",
  date: "May 25, 2025",
  imageUrl: "/assets/education-it.svg",
  fbLink: "https://facebook.com",
};

export default function ThoughtsHero({
  session = defaultThought.session,
  category = defaultThought.category,
  title = defaultThought.title,
  description = defaultThought.description,
  date = defaultThought.date,
  imageUrl = defaultThought.imageUrl,
  fbLink = defaultThought.fbLink,
}: Partial<ThoughtHeroProps>) {
  return (
    <section className="relative w-full pt-24 pb-12 md:pb-16 bg-white">
      <div className="container-custom mx-auto px-4 md:px-0">
        <div className="relative w-full h-[450px]  md:h-[800px]  rounded-[24px] overflow-hidden group">
          {/* Background Image */}
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 object-[center_25%]"
            priority
          />

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Content Overlays */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
            <div className="w-full space-y-4">
              {/* Top Row: Category and Date */}
              <div className="flex justify-between items-center w-full">
                <span className="text-white/60 font-poppins text-[12px] md:text-[30px] tracking-wider block font-medium">
                  {category}
                </span>
                <div className="flex items-center gap-3 text-white/60 font-poppins">
                  <Calendar size={25} className="md:w-5 md:h-5" />
                  <span className="text-[14px] md:text-[25px] font-medium whitespace-nowrap">
                    {date}
                  </span>
                </div>
              </div>

              {/* Middle Row: Title and Description */}
              <div className="w-full space-y-4">
                <h1 className="text-white font-poppins font-bold text-[28px] md:text-[48px] lg:text-[50px] leading-tight">
                  {title}
                </h1>
                <p className="text-white/80 font-poppins text-[14px] md:text-[30px] leading-relaxed ">
                  {description}
                </p>
              </div>

              {/* Bottom Row: Social Link */}
              <div className="pt-4">
                <a
                  href={fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-poppins font-medium hover:gap-4 transition-all duration-300 group/link"
                >
                  Read On Facebook
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
