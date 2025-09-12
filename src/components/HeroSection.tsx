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
        />

        {/* Dark Overlay only on LEFT HALF */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black/60 z-[1]" />
      </div>

      {/* Content (aligned same as navbar) */}
      <div className="relative z-10 mr-15 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-start justify-center min-h-screen">
          {/* Small Label */}
          <span className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
            Khawaja Yanni
          </span>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white max-w-2xl">
            The new <br /> era of luxury
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-base md:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum.
          </p>

          {/* CTA Button */}
          <button
            className="flex items-center gap-3 px-8 py-4 bg-[#DCBB75] text-white font-medium text-lg rounded-full hover:bg-[#AD8749] transition-all duration-300 shadow-lg"
          >
            Book reservation now
            <ArrowRight className="w-5 h-5" />
          </button>
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
