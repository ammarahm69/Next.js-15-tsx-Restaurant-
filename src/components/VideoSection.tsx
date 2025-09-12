"use client";

import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";

const VideoSection = () => {
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
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl  text-white mb-6">
            Mall Of Endless Possibilities
          </h2>
          <p className="font-inter font-medium text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mb-12 rounded-2xl overflow-hidden w-full h-[500px] md:h-[600px]">
          {/* Background Video Image */}
          <Image
            src="/images/video.png"
            alt="Restaurant Video"
            fill
            className="object-cover"
            priority
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl">
              <Play
                className="w-12 h-12 text-[#2A2A2A] ml-1"
                fill="currentColor"
              />
            </button>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#344114] rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
            {/* Left Content */}
            <div className="mb-6 md:mb-0 space-y-4">
              <p className="text-white text-sm uppercase tracking-wider">
                25 GRIQUEST
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white">
                Get your General Access Ticket
              </h3>
              <p className="font-inter font-medium text-gray-200 max-w-md leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>

            {/* Big Arrow with Hover Effect */}
            <ArrowRight className="w-12 h-12 text-white transition-all duration-300 transform hover:scale-125 hover:text-[#DCBB75] hover:drop-shadow-[0_0_10px_#DCBB75] cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
