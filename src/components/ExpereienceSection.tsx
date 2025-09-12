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
      className="py-16 px-4 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Experience the Finest Cuisine
          </h2>
          <p className="font-inter font-medium text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-[1100px] gap-8 mx-auto">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#2F3E0C] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4"
            >
              {/* Image */}
              <div className="relative h-64  rounded-xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <span className="inline-block px-4 py-1 text-sm bg-[#C49C62] text-white font-inter rounded-full">
                    {item.badge}
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-white hover:text-[#DCBB75] transition-colors cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
