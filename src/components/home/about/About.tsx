"use client";
import Image from "next/image";
import CountUp from "react-countup";

export default function About() {
  const stats = [
    { label: "YEARS OF EXPERIENCE", value: 22, suffix: "+" },
    { label: "SATISFACTION CLIENTS", value: 100, suffix: "%" },
    { label: "CLIENTS ON WORLDWIDE", value: 70, suffix: "+" },
  ];

  const categories = [
    "Mentor",
    "IT Strategist",
    "Tech Entrepreneur",
    "Cybersecurity Advocate",
  ];

  return (
    <section className="relative w-full py-24 bg-background flex flex-col items-center">
      <div className="container w-full">
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[12px] md:text-[14px] font-fragment-mono tracking-[0.4em] text-black/40 uppercase mb-8">
            ABOUT KAHAFIL ORA
          </span>
          <h2 className="text-[24px] md:text-[35px] lg:text-[35px] font-poppins font-light leading-normal text-black max-w-[1440px]">
            Kahafil Ora Is An Experienced IT Consultant Known For Delivering
            Smart, Tech-Driven Solutions To Businesses. With A Strong Grasp Of
            IT Infrastructure And Digital Strategy, He Helps Organizations
            Improve Efficiency And Achieve Their Goals Through Innovative
            Technology
          </h2>
        </div>

        {/* Separator Line */}
        <div className="w-full h-0.5 bg-black/40 mb-32"></div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start ">
          {/* Left Column: Skills and Contact */}
          <div className="flex flex-col  h-[500px] justify-between">
            <div>
              <span className="text-[12px] md:text-[22px] font-fragment-mono tracking-wider text-black/40 uppercase block mb-4">
                DRIVING DIGITAL INNOVATION ACROSS BANGLADESH AND BEYOND
              </span>
              <ul className="flex flex-col gap-4">
                {categories.map((item) => (
                  <li
                    key={item}
                    className="text-[18px] md:text-[20px] font-plus-jakarta font-medium text-black/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[12px] md:text-[22px] font-fragment-mono tracking-widest text-black/40 uppercase block mb-4">
                CONTACT
              </span>
              <div className="flex flex-col gap-2 text-[18px] md:text-[20px] font-plus-jakarta font-medium text-black/80">
                <p>Kahafil Ora</p>
                <p>Dhaka | Bangladesh</p>
                <p>+880 1622-992222</p>
                <p>kahafil@goinnovior.com</p>
              </div>
            </div>
          </div>

          {/* Center Column: Profile Image */}
          <div className="flex justify-center items-center relative h-full">
            <div className="relative p-4 border border-black/60 rounded-[300px] h-[500px] w-[297px]">
              <div className="relative  h-full w-full  rounded-[300px] overflow-hidden">
                <Image
                  src="/assets/kahafil-ora-about-original.svg"
                  alt="Kahafil Ora Profile"
                  fill
                  className="grayscale hover:grayscale-0 object-cover scale-180 hover:scale-220 transition-all duration-1000 origin-top object-top -translate-y-30 hover:-translate-y-60"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Statistics */}
          <div className="flex flex-col  h-full justify-between ">
            {stats.map((stat) => (
              <div key={stat.label} className="text-right">
                <span className="text-[12px] md:text-[22px] font-fragment-mono tracking-wider text-black/40 uppercase block mb-4">
                  {stat.label}
                </span>
                <span className="text-[60px] md:text-[80px] font-poppins font-extralight leading-none text-black">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
