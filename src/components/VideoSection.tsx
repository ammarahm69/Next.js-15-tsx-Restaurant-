"use client";

import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";

const VideoSection = () => {
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
          <h2 className="font-playfair text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 px-2">
            Mall Of Endless Possibilities
          </h2>
          <p className="font-inter font-medium text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mb-10 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Background Video Image */}
          <Image
            src="/images/video.png"
            alt="Restaurant Video"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 sm:p-5 md:p-6 transition-all duration-300 hover:scale-110 shadow-2xl"
              aria-label="Play video"
            >
              <Play
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#2A2A2A] ml-0.5 sm:ml-1"
                fill="currentColor"
              />
            </button>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#344114] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
            {/* Left Content */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-white text-xs sm:text-sm uppercase tracking-wider">
                25 GRIQUEST
              </p>
              <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Get your General Access Ticket
              </h3>
              <p className="font-inter font-medium text-gray-200 max-w-md text-sm sm:text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text.
              </p>
            </div>

            {/* Big Arrow with Hover Effect */}
            <div className="w-full md:w-auto flex justify-end mt-4 md:mt-0">
              <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 text-white transition-all duration-300 transform hover:scale-125 hover:text-[#DCBB75] hover:drop-shadow-[0_0_10px_#DCBB75] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
