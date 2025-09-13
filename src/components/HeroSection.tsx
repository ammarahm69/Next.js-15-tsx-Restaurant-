'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute -mt-10 inset-0 z-9">
        <Image
          src="/images/hero.png"
          alt="Luxury Outdoor Restaurant"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />

        {/* Responsive Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent z-[1]" />
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-black/60 z-[2]" />
      </div>

      {/* Content (aligned same as navbar) */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-screen py-20 md:py-0">
          {/* Small Label */}
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
            Khawaja Yanni
          </span>

          {/* Main Heading */}
          <h1 className="font-playfair text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white max-w-2xl">
            The new <br className="hidden xs:block" /> era of luxury
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum.
          </p>

          {/* CTA Button */}
          <div className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#DCBB75] text-white font-medium text-base sm:text-lg rounded-full hover:bg-[#AD8749] transition-all duration-300 shadow-lg"
            >
              Book reservation now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          {/* Dots / Slider Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="w-2 h-2 rounded-full bg-white/50" />
            <span className="w-2 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
