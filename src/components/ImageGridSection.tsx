"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "/images/slide1.png",
    title: "Little Krazy",
    position: "left-6",
    size: "h-100", // big
  },
  {
    src: "/images/slide2.png",
    title: "Hawanim",
    subtitle: "Groves City",
    position: "left-6",
    size: "h-74", // small
  },
  {
    src: "/images/slide3.png",
    title: "Picnic Market",
    position: "left-6",
    size: "h-90", // medium
  },
  {
    src: "/images/slide4.png",
    title: "Lucaw",
    position: "right-6",
    size: "h-78", // custom
  },
];

const ImageGridSection = () => {
  return (
    <section
      className="py-16 px-4 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-8 max-w-4xl">
            Book General Access ticket and enjoy the attractions for free
          </h2>

          <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white font-inter font-medium text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            Book General Access Ticket
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Masonry Style Image Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative group break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div className={`relative w-full ${item.size}`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Title */}
                <div className={`absolute bottom-6 ${item.position}`}>
                  <h3 className="font-playfair text-2xl font-bold text-white text-left">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <h4 className="font-playfair text-xl font-bold text-white text-left">
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
