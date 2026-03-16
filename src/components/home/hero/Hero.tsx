import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen 3xl:h-[950px] w-full flex items-center justify-center overflow-hidden bg-background ">
      {/* Background Texture/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero-bg.svg"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container-custom relative w-full h-screen 3xl:h-[950px] flex flex-col items-center justify-center z-10 font-poppins">
        {/* Large Background Text: KAHAFIL */}
        <div className="absolute top-28 md:left-4 z-0">
          <h1 className="text-[100px] md:text-[140px] 3xl:text-[150px]  font-black leading-none tracking-tighter text-[#444444] select-none ">
            KAHAFIL
          </h1>
          <span className="text-xl ml-1.5 md:text-3xl font-bold text-[#444444] tracking-tighter -mt-2 md:block hidden">
            {`2K${new Date().getFullYear().toString().slice(-2)}`}
          </span>
        </div>

        {/* Large Background Text: ORA */}
        <div className="absolute bottom-50 md:bottom-8 3xl:bottom-12 right-10 z-0">
          <h2 className="text-[100px] md:text-[120px]  lg:text-[150px] font-black leading-none tracking-tighter text-[#444444] select-none ">
            ORA
          </h2>
        </div>

        {/* Center Person Image */}
        <div className="relative z-50 -top-[50px] md:top-[30px] flex items-center justify-center">
          <div className="relative flex justify-center cursor-pointer group">
            <Image
              src="/assets/kahafil-ora-original.svg"
              alt="Kahafil Ora"
              width={1038}
              height={888}
              className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out object-contain scale-100 110:scale-90 125:scale-80 3xl:scale-100"
              priority
            />
          </div>
        </div>

        {/* Biography Section */}
        <div className="absolute bottom-[4%] md:top-[20%] px-4 md:px-0 md:right-8 w-full max-w-[440px] md:max-w-[550px] 3xl:max-w-[650px] z-30 text-right">
          <span className="text-[24px] font-fragment-mono tracking-widest text-[#444444]/50 block mb-3 uppercase">
            BIOGRAPHY
          </span>
          <p className="font-plus-jakarta text-[13px] md:text-[20px]  leading-relaxed text-[#444444] font-medium">
            A Visionary Leader With 22+ Years of Experience In Innovation And
            Growth. As MD Of Goinnovior Limited And Co-Founder Of 360D Soul,
            Lifeinnovior, And Codeinnovior, He Blends Tech, Business, And Social
            Impact—Delivering ICT And InfoSec Solutions, Promoting Mental
            Health, And Enabling Free Tech Education.
          </p>
        </div>

        {/* IT CONSULTANT Label and Arrow */}
        <div className="absolute left-[18%] md:left-[28%] top-[42%] md:top-[58%] z-19 flex flex-col items-center group">
          <div className="relative w-[100px] h-[80px] md:w-[156px] md:h-[122px] -mb-10 md:-mb-16">
            <Image
              src="/assets/arrow-vector.svg"
              alt="Decorative Arrow"
              fill
              className="object-contain"
            />
          </div>
          <span className="relative text-[12px] md:text-[22px] font-fragment-mono tracking-widest text-[#444444] uppercase -ml-34 md:-ml-46">
            IT CONSULTANT
          </span>
        </div>

        {/* Vertical Text: /PORTFOLIO */}
        <div className="absolute left-12 bottom-[20%] 3xl:bottom-[25%] z-30 hidden md:flex items-center gap-4 -rotate-90 origin-left">
          <span className="text-[22px] font-medium tracking-widest text-[#444444] uppercase">
            ./PORTFOLIO
          </span>
          <div className="w-24 h-[0.5px] bg-black"></div>
        </div>

        {/* Scroll Down Section */}
        <div className="absolute left-8 bottom-12 3xl:bottom-16 z-30 md:flex hidden flex-col items-start gap-4 ">
          <span className="text-[22px] font-poppins tracking-widest text-[#444444] uppercase">
            SCROLL DOWN
          </span>
          <div className="text-[#444444] text-4xl">↓</div>
        </div>
      </div>
    </section>
  );
}
