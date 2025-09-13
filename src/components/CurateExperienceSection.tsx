"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CurateExperienceSection = () => {
  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 flex flex-col justify-center text-center lg:text-left">
            <div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Curate your<br />
                experience<br />
                as you like
              </h2>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white font-medium text-base sm:text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 w-fit" style={{ fontFamily: 'var(--font-inter)' }}>
                Book Tickets
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Restaurants */}
          <div className="lg:col-span-1 flex flex-col items-center mt-6 sm:mt-8 lg:mt-10 mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/images/slide2.png"
                alt="Restaurant Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Restaurants</p>
          </div>

          {/* Experiences */}
          <div className="lg:col-span-2 flex flex-col items-center mt-6 sm:mt-8 lg:mt-0 mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative w-full aspect-[2/3] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[2/3] xl:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/images/dance.png"
                alt="Traditional Performers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Experiences</p>
          </div>

          {/* Events */}
          <div className="lg:col-span-1 flex flex-col items-center mt-6 sm:mt-8 lg:mt-10 mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/images/box4.png"
                alt="Elegant Event Venue"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurateExperienceSection;
