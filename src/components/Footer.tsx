"use client";

import Image from "next/image";
import { Download, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(97deg, #283606 0%, #0F1500 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Side - Heading */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-4xl xl:text-5xl text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Join us for an <br />
              unforgettable experience.
            </h2>
          </div>

          {/* Right Side - App Download */}
          <div className="flex flex-col justify-center items-start lg:items-end space-y-4 sm:space-y-6">
            <p
              className="text-xs sm:text-sm font-medium text-white/80 tracking-[0.15em] sm:tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              DOWNLOAD THE GROVES APP
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              {/* App Store Button */}
              <div className="bg-white rounded-lg px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 hover:bg-gray-100 transition-colors cursor-pointer justify-center sm:justify-start">
                {/* Apple Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M318.7 268.7c-.3-37.7 16.4-66.2 51.4-87.1-19.1-27.7-47.9-43.4-88-47.9-36.8-3.9-77.4 22.1-91.6 22.1-15.1 0-50.4-21.2-78-20.7-56.6.9-117 44.4-117 133.4 0 25.8 4.7 52.4 14.1 79.6 12.5 34.6 57.9 119.3 105.1 117.7 24.8-.6 42.3-17.5 74.5-17.5 31.5 0 48.1 17.5 75.8 17.1 47.9-.7 88.7-78.3 100.7-112.9-64.5-30.7-46.9-90.5-46.9-83.8zm-58.2-177.3c27.3-32.9 24.8-62.6 24-73.4-23.5 1.4-51 16.1-66.7 34.4-17.5 19.6-26.5 43.6-24.5 72.4 25.5 2 48.9-11.2 67.2-33.4z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-600">Download on the</p>
                  <p className="text-sm sm:text-lg font-semibold text-black">App Store</p>
                </div>
              </div>

              {/* Google Play Button */}
              <div className="bg-white rounded-lg px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 hover:bg-gray-100 transition-colors cursor-pointer justify-center sm:justify-start">
                {/* Google Play Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M325.3 234.3 104.6 36.1c-7.9-6.9-20-1.3-20 9.1v421.5c0 10.4 12.1 16 20 9.1l220.7-198.2c9.1-8.2 9.1-22.6 0-30.8zM371.5 255 426 296.7c7.6 5.7 18.4-.1 18.4-9.4V224.7c0-9.3-10.8-15.1-18.4-9.4L371.5 255z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-600">GET IT ON</p>
                  <p className="text-sm sm:text-lg font-semibold text-black">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Location */}
          <div className="space-y-4">
            <h3
              className="text-sm font-medium text-white/80 tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              LOCATION
            </h3>
            <div className="space-y-2">
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Al-Hizam Park
              </p>
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                As-Semairi, Yanbu Al Bahr 46455
              </p>
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Riyadh Saudi Arabia
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3
              className="text-sm font-medium text-white/80 tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              WORKING HOURS
            </h3>
            <div className="space-y-2">
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Sun until Thurs: 4:00PM
              </p>
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Fri & Sat: 2:30PM
              </p>
              <div className="mt-4">
                <p
                  className="text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Gates Close at:
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Sat until Wed: 12:00AM
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Thu & Fri: 12:30AM
                </p>
              </div>
            </div>
          </div>

          {/* Guest Service */}
          <div className="space-y-4">
            <h3
              className="text-sm font-medium text-white/80 tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              GUEST SERVICE CALL
            </h3>
            <div className="space-y-2">
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                cc@thegroves-sa.com
              </p>
              <p
                className="text-white"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                920001672
              </p>
              <div className="mt-4">
                <p
                  className="text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  +966556631309
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-48 sm:w-56 md:w-64 h-16 sm:h-20">
              <Image
                src="/images/logo.png"
                alt="The Groves Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            {/* TikTok */}
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.39a4.85 4.85 0 0 1-1-.05z" />
              </svg>
            </div>

            {/* Instagram */}
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>

            {/* X (Twitter) */}
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>

            {/* Snapchat */}
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.418-6.026 1.418-6.026s-.362-.72-.362-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.09.109.104.2.077.311-.085.334-.402 1.653-.402 1.653-.052.225-.17.271-.402.165-1.507-.7-2.448-2.78-2.448-4.958 0-3.778 2.745-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Privacy Policy
            </a>
          </div>
          <p
            className="text-white/80"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ©2023 The Groves for Entertainment
          </p>
          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-600 font-bold text-lg">VISA</span>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <div className="flex">
                <div className="w-6 h-4 bg-red-500 rounded-l"></div>
                <div className="w-6 h-4 bg-yellow-500 rounded-r"></div>
              </div>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <span className="text-blue-600 font-bold text-sm">AMEX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
