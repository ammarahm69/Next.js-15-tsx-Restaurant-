"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const MapSection = () => {
  return (
    <section
      className="py-20 px-4 lg:px-12" // increased top/bottom padding
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> {/* gap increased */}
          {/* Left Side - Interactive Map */}
          <div className="relative">
            <div className="relative w-full h-[600px] lg:h-[900px]">
              <Image
                src="/images/map.png"
                alt="Interactive Map of The Groves"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-12 lg:pl-12"> {/* more spacing between text blocks */}
            {/* Header */}
            <div className="space-y-4">
              <p
                className="text-sm font-medium text-white/80 tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                EXPERIENCE THE GROVES
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Find your place
            </h2>

            {/* Description */}
            <p
              className="text-lg text-white/90 leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our interactive map will show you the way to the shops and
              restaurants that you want to see.
            </p>

            {/* CTA Button */}
            <button
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white font-medium text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Open the Map
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
