"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const MapSection = () => {
  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Map */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
              <Image
                src="/images/map.png"
                alt="Interactive Map of The Groves"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 lg:pl-6 xl:pl-12 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-2 sm:space-y-4">
              <p
                className="text-xs sm:text-sm font-medium text-white/80 tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                EXPERIENCE THE GROVES
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sm:leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Find your place
            </h2>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our interactive map will show you the way to the shops and
              restaurants that you want to see.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white font-medium text-base sm:text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Open the Map
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
