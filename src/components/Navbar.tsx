"use client";

import Image from "next/image";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "DINE WITH US", href: "#dine" },
        { name: "PLAN YOUR VISIT", href: "#plan" },
        { name: "EVENTS", href: "#events" },
        { name: "VIEW GROVES MAP", href: "#map" },
        { name: "OUR STORY", href: "#story" },
        { name: "CONTACT US", href: "#contact" },
    ];

    return (
        <nav className="absolute top-0 w-full z-50">
            {/* --------- Top Bar --------- */}
            <div className="bg-black px-4 lg:px-8 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            alt="Groves Logo"
                            width={180}
                            height={80}
                            priority
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-6">
                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 text-white">
                            {/* TikTok */}
                            <a href="#" className="hover:text-[#DCBB75] transition-colors">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="hover:text-[#DCBB75] transition-colors">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* Twitter / X */}
                            <a href="#" className="hover:text-[#DCBB75] transition-colors">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Snapchat */}
                            <a href="#" className="hover:text-[#DCBB75] transition-colors">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017.001z" />
                                </svg>
                            </a>
                        </div>

                        {/* Login */}
                        <button className="px-6 py-2 bg-gradient-to-r from-[#AD8749] to-[#DCBB75] text-white text-sm rounded-full hover:shadow-lg transition-all duration-300">
                            Log in
                        </button>

                        {/* Language */}
                        <div className="flex items-center space-x-2 text-white cursor-pointer">
                            {/* UK Flag */}
                            <div className="w-6 h-4 bg-blue-800 rounded-sm relative overflow-hidden">
                                {/* White diagonal crosses (St. Andrew's Cross) */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-white transform origin-left rotate-12"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left -rotate-12"></div>
                                    <div className="absolute top-0 right-0 w-full h-0.5 bg-white transform origin-right -rotate-12"></div>
                                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white transform origin-right rotate-12"></div>
                                </div>
                                {/* Red diagonal crosses (St. Patrick's Cross) */}
                                <div className="absolute inset-0">
                                    <div
                                        className="absolute top-0 left-0 w-full h-0.5 bg-red-600 transform origin-left rotate-12"
                                        style={{ marginTop: "1px" }}
                                    ></div>
                                    <div
                                        className="absolute bottom-0 right-0 w-full h-0.5 bg-red-600 transform origin-right rotate-12"
                                        style={{ marginBottom: "1px" }}
                                    ></div>
                                </div>
                                {/* White cross (St. George's Cross) */}
                                <div className="absolute inset-0">
                                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>
                                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -translate-y-1/2"></div>
                                </div>
                                {/* Red cross (St. George's Cross) */}
                                <div className="absolute inset-0">
                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform -translate-x-1/2"></div>
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                                </div>
                            </div>
                            <span className="text-sm">English</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------- Main Navigation --------- */}
            <div className="bg-black bg-opacity-70 border-t border-b border-gray-700">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-medium text-white hover:text-[#DCBB75] transition-colors duration-200 text-sm tracking-wide"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            className="text-white p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {/* --------- Mobile Navigation --------- */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black bg-opacity-95 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-[#DCBB75] transition-colors duration-200 text-sm tracking-wide py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
