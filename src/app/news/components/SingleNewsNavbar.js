"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SingleNewsNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1 + 0.2,
            },
        }),
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Portfolio", href: "#" },
        { name: "Media", href: "#" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <>
            <header className="w-full bg-black md:pb-4">
                <div className="container mx-auto px-8 lg:px-24">
                    <div className="flex justify-between items-start relative">
                        {/* Left Side: Contact & About */ }
                        <div className="flex justify-start items-center gap-6 lg:gap-32 mt-6 md:mt-6">
                            <div className="hidden lg:flex items-center">
                                <a
                                    href="tel:800269823"
                                    className="text-white hover:text-[#daaf7d] transition-colors"
                                >
                                    <div className="flex flex-col items-start leading-none">
                                        <p className="text-[16px] font-lato text-nowrap mb-1">
                                            800 BNWUAE (269 823)
                                        </p>
                                        <div className="flex items-center justify-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#90EE90]"></div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-300">
                                                Available 24/7
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="lg:block hidden">
                                <Link
                                    href="/about-us"
                                    className="text-white hover:text-[#daaf7d] uppercase text-[11px] font-lato tracking-[0.2em] transition-all"
                                >
                                    About us
                                </Link>
                            </div>
                        </div>

                        {/* Center: Logo */ }
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                            <Link href="/">
                                <div className="transition-all duration-300 flex flex-col items-center mt-4  w-[60px] h-[45px] md:w-[90px] md:h-[60px] lg:w-[120px] lg:h-[90px]" >
                                    <Image
                                        src="/logo-white.png"
                                        alt="BNW Developments"
                                        width={ 200 }
                                        height={ 184 }
                                        className="w-full h-auto"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Right Side: Contact, EN, Badges, Menu */ }
                        <div className="flex justify-end items-start gap-6 lg:gap-8">
                            <div className="hidden lg:flex items-center mt-6 md:mt-6 h-[28px]">
                                <Link
                                    href="/contact-us"
                                    className="text-white hover:text-[#daaf7d] uppercase text-[11px] font-lato tracking-[0.2em] transition-all"
                                >
                                    Contact us
                                </Link>
                            </div>

                            {/* EN Dropdown and Menu container for alignment */ }
                            <div className="flex items-start gap-4 h-full">
                                {/* EN Dropdown */ }
                                <div className="hidden lg:flex items-center justify-center border border-white/30 rounded-full px-4 py-1 cursor-pointer hover:border-[#daaf7d] transition-colors h-[28px] mt-6 md:mt-8">
                                    <span className="text-[10px] text-white font-bold mr-1">EN</span>
                                    <svg width="6" height="6" viewBox="0 0 24 24" fill="white"><path d="M7 10l5 5 5-5z" /></svg>
                                </div>

                                {/* Badges - Desktop Only */ }
                                <div className="hidden xl:flex items-start gap-2 h-full">
                                    {/* Construction Week - Top flush */ }
                                    <div className="h-10 w-auto">
                                        <img src="/footer-award-1.jpg" alt="Award" className="h-full w-auto object-cover" />
                                    </div>
                                    {/* Great Place to Work - Top flush, slightly taller */ }
                                    <div className="h-12 w-auto">
                                        <img src="/footer-award-2.png" alt="Award" className="h-full w-auto object-cover" />
                                    </div>
                                    {/* International Property - The Vertical Ribbon - Tallest */ }
                                    <div className="h-32 w-auto relative z-10">
                                        <img src="/footer-award-3.png" alt="Award" className="h-full w-auto drop-shadow-lg object-cover" />
                                    </div>
                                </div>

                                {/* Hamburger Menu Button */ }
                                <button
                                    aria-label="Open menu"
                                    onClick={ toggleMenu }
                                    className="text-white hover:text-[#daaf7d] transition-colors z-50 relative ml-6 mt-6 md:mt-8"
                                >
                                    <div className="w-[25px] h-[25px] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 25 25" className="w-full h-full fill-current">
                                            <path d="M24.5 1h-20v1h20z"></path>
                                            <path d="M25 2.5H4v-2h21zm-20-1h19zM4.5 23h20v1h-20z"></path>
                                            <path d="M25 24.5H4v-2h21zm-20-1h19zM.4 11.7h24.2v1.5H.4z"></path>
                                            <path d="M25 13.7H0v-2.5h25zm-24.2-1h23.4v-.5H.8z"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 mt-6 md:mt-1">
                        <nav className="text-sm font-medium text-gray-400">
                            <ol className="flex items-center space-x-2">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-gray-500">/</li>
                                <li className="text-white font-semibold">
                                    News & Media
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */ }
            <AnimatePresence>
                { isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={ menuVariants }
                        className="fixed inset-0 bg-[#0a0a0a] z-50 flex flex-col items-center justify-center p-5 text-white overflow-y-auto"
                    >
                        {/* Close Button */ }
                        <button
                            onClick={ toggleMenu }
                            className="absolute top-6 right-6 text-white hover:text-[#daaf7d] transition-colors"
                        >
                            <X size={ 40 } strokeWidth={ 1 } />
                        </button>

                        {/* Links */ }
                        <nav className="flex flex-col items-center gap-8 mb-10 w-full">
                            { navLinks.map((link, i) => (
                                <motion.div
                                    key={ i }
                                    custom={ i }
                                    variants={ linkVariants }
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={ link.href }
                                        onClick={ toggleMenu }
                                        className="text-3xl font-noto hover:text-[#daaf7d] transition-colors inline-block"
                                    >
                                        { link.name }
                                    </Link>
                                </motion.div>
                            )) }
                        </nav>

                        {/* Mobile Contact Info */ }
                        <motion.div
                            variants={ linkVariants }
                            custom={ 5 }
                            className="flex flex-col items-center gap-6 mt-5 w-full border-t border-gray-800 pt-10"
                        >
                            <a href="tel:800269823" className="flex items-center gap-3 text-white hover:text-[#daaf7d]">
                                <Phone size={ 20 } />
                                <span className="text-xl font-bold">800 BNWUAE</span>
                            </a>

                            <button className="bg-[#daaf7d] text-white px-8 py-4 w-full max-w-xs uppercase font-bold tracking-widest text-sm hover:bg-white hover:text-[#daaf7d] transition-colors">
                                Register Interest
                            </button>
                        </motion.div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </>
    );
};

export default SingleNewsNavbar;
