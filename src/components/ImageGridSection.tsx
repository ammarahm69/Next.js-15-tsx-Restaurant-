"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "/images/slide1.png",
    title: "Little Krazy",
    position: "left-3 sm:left-6",
    size: "h-64 xs:h-80 sm:h-96 md:h-[500px] lg:h-[600px]", // big
  },
  {
    src: "/images/slide2.png",
    title: "Hawanim",
    subtitle: "Groves City",
    position: "left-3 sm:left-6",
    size: "h-48 xs:h-64 sm:h-80 md:h-[380px]", // small
  },
  {
    src: "/images/slide3.png",
    title: "Picnic Market",
    position: "left-3 sm:left-6",
    size: "h-56 xs:h-72 sm:h-96 md:h-[450px]", // medium
  },
  {
    src: "/images/slide4.png",
    title: "Lucaw",
    position: "right-3 sm:right-6",
    size: "h-52 xs:h-64 sm:h-80 md:h-[400px]", // custom
  },
];

const ImageGridSection = () => {
  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="font-playfair text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 max-w-4xl">
            Book General Access ticket and enjoy the attractions for free
          </h2>

          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white font-inter font-medium text-base sm:text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              Book General Access Ticket
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Masonry Style Image Grid */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative group break-inside-avoid overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <div className={`relative w-full ${item.size}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl sm:rounded-2xl"
                  priority={idx < 2} // Only preload first 2 images for better performance
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Title */}
                <div className={`absolute bottom-4 sm:bottom-6 ${item.position}`}>
                  <h3 className="font-playfair text-lg xs:text-xl sm:text-2xl font-bold text-white text-left">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <h4 className="font-playfair text-base sm:text-xl font-bold text-white text-left">
                      {item.subtitle}
                    </h4>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGridSection;
