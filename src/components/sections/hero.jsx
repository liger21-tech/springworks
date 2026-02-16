import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="bg-image bg-size bg-repeat absolute inset-0 scale-105" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col py-10 ">

        {/* Huge Title */}
        <h1 className="mt-16 uppercase font-extrabold text-center leading-none 
                       text-[3rem] sm:text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-[10rem]">
          springworks
        </h1>

        <p className="uppercase -mt-2 sm:-mt-2 md:-mt-6 font-extrabold 
                       text-right  md:text-right mr-[5rem]  
                      text-[16px] sm:text-[22px] md:text-[32px] tracking-wide">
          entrepreneurial campus
        </p>

        {/* Description */}
        <div className="mt-8 md:mt-20 flex justify-center">
          <div className="max-w-3xl text-center px-2">
            <h3 className="font-extrabold tracking-tight text-[#000000] 
                           text-base sm:text-xl md:text-3xl 
                           leading-snug uppercase p-4 sm:p-6">
              SpringWorks is a new entrepreneurial campus designed for founders,
              makers, artists, and early-stage businesses bringing workspace,
              studios, galleries, and commercial opportunities together under one
              roof
            </h3>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 mb-12 md:mt-[120px] mb-10 flex flex-wrap justify-center gap-3 sm:gap-4 font-mono font-bold">

          <Link to="/walkthrough">
            <button className="rounded-full bg-white uppercase px-6 sm:px-8 py-3 text-xs sm:text-sm 
                               text-[#333018] shadow-xl hover:bg-[#333018] hover:text-[#FFF200] 
                               transition-all hover:scale-105">
              Walk Through the Campus
            </button>
          </Link>

          <Link to="/galleries">
            <button className="rounded-full bg-white uppercase px-6 sm:px-8 py-3 text-xs sm:text-sm 
                               text-[#333018] shadow-xl  hover:bg-[#333018] hover:text-[#FFF200] 
                               transition-all hover:scale-105">
              View the Galleries
            </button>
          </Link>

          <Link to="/membership">
            <button className="rounded-full bg-white uppercase px-6 py-3 text-xs sm:text-sm 
                               text-[#333018] shadow-xl hover:bg-[#333018] hover:text-[#FFF200] 
                               transition-all hover:scale-105">
              Join SpringWorks
            </button>
          </Link>

          <Link to="/corporate">
            <button className="rounded-full bg-white uppercase px-6 py-3 text-xs sm:text-sm 
                               text-[#333018] shadow-xl hover:bg-[#333018] hover:text-[#FFF200] 
                               transition-all hover:scale-105">
              Corporate
            </button>
          </Link>

          <Link to="/shop">
            <button className="rounded-full uppercase  px-6 py-3 text-xs sm:text-sm 
                               text-[#333018] bg-white/70 backdrop-blur-xl shadow-xl 
                               hover:bg-[#333018] hover:text-[#FFF200] 
                               transition-all hover:scale-105">
              Shop / E-commerce
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}
