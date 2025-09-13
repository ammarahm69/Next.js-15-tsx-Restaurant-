"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "/images/box1.png",
    title: "Vida Vera",
    badge: "100 SR PER GUEST",
  },
  {
    src: "/images/box2.png",
    title: "Zama Zulu",
    badge: "150 SR PER GUEST",
  },
  {
    src: "/images/box3.png",
    title: "Khawaja Yanni",
    badge: "150 SR PER GUEST",
  },
  {
    src: "/images/box4.png",
    title: "Yamagata",
    badge: "150 SR PER GUEST",
  },
];

const ExperienceSection = () => {
  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-playfair text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
            Experience the Finest Cuisine
          </h2>
          <p className="font-inter font-medium text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#2F3E0C] rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="mt-4 sm:mt-6 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 truncate">
                    {item.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-[#C49C62] text-white font-inter rounded-full whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>
                <button className="ml-4 flex-shrink-0" aria-label={`View ${item.title}`}>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-[#DCBB75] transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
