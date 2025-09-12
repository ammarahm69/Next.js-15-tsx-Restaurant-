"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CurateExperienceSection = () => {
  return (
    <section
      className="py-20 px-4 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-1 space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                Curate your<br />
                experience<br />
                as you like
              </h2>
            </div>

            <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white font-medium text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 w-fit" style={{ fontFamily: 'var(--font-inter)' }}>
              Book Tickets
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Restaurants */}
          <div className="lg:col-span-1 flex flex-col items-center mt-10 ml-3">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden">
              <Image
                src="/images/slide2.png"
                alt="Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-white text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>Restaurants</p>
          </div>

          {/* Experiences */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/dance.png"
                alt="Traditional Performers"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-white text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>Experiences</p>
          </div>

          {/* Events */}
          <div className="lg:col-span-1 flex flex-col items-center mt-10">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden">
              <Image
                src="/images/box4.png"
                alt="Elegant Event Venue"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-white text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>Events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurateExperienceSection;
