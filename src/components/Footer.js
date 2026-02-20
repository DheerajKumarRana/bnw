"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    ArrowRight,
    Instagram,
    Facebook,
    Linkedin,
    Youtube,
    Twitter,
    ChevronUp,
} from "lucide-react";

const TikTokIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="w-5 h-5 text-white hover:text-[#daaf7d] transition-colors"
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Footer = () => {
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-[#151515] text-white pt-20 pb-10 relative border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* LEFT SIDE (Links) - Spans 7 cols */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* About Us */}
                            <div>
                                <h6 className="font-bold text-white uppercase text-sm mb-8 tracking-wider">
                                    ABOUT US
                                </h6>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm text-gray-400">
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Leadership
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Team
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Media
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Contact Us
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Blogs
                                    </Link>
                                </div>
                            </div>

                            {/* Our Portfolio */}
                            <div>
                                <h6 className="font-bold text-white uppercase text-sm mb-8 tracking-wider">
                                    OUR PORTFOLIO
                                </h6>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-sm text-gray-400">
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Projects
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Mortgages
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Vacation Homes
                                    </Link>
                                    <Link href="#" className="hover:text-[#daaf7d] transition-colors">
                                        Entertainment
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Buttons & Awards (Bottom Left) */}
                        <div className="mt-20 flex flex-col xl:flex-row items-start xl:items-center gap-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <a href="tel:800269823">
                                    <button className="border border-[#daaf7d] text-white px-6 py-4 flex items-center gap-3 hover:bg-[#daaf7d] hover:text-white transition-colors min-w-[220px] justify-center h-[60px]">
                                        <Phone size={16} className="text-[#daaf7d] group-hover:text-white" />
                                        <div className="text-left leading-tight">
                                            <span className="block text-xs font-bold tracking-widest text-[#daaf7d] group-hover:text-white">
                                                800 BNWUAE
                                            </span>
                                            <span className="block text-xs font-normal text-[#daaf7d] group-hover:text-white">
                                                (269 823)
                                            </span>
                                        </div>
                                    </button>
                                </a>

                                <a href="https://wa.me/+971549994155">
                                    <button className="thm-btn thm-btn-gold !w-full md:!min-w-[220px] !h-[60px]">
                                        <span className="text-xs font-bold tracking-widest uppercase">
                                            GET EXPERT HELP
                                        </span>
                                    </button>
                                </a>
                            </div>

                            {/* Awards Images */}
                            <div className="flex gap-4 items-center mt-6 xl:mt-0 xl:ml-6">
                                {/* Construction Week - Red Box */}
                                <div className="h-[60px] w-auto">
                                    <img src="/footer-award-1.jpg" alt="Construction Week" className="h-full w-auto object-contain" />
                                </div>
                                {/* Great Place to Work */}
                                <div className="h-[60px] w-auto">
                                    <img src="/footer-award-2.png" alt="Great Place to Work" className="h-full w-auto object-contain" />
                                </div>
                                {/* Property Awards - Tall Ribbon */}
                                <div className="h-[140px] w-auto -mt-6">
                                    <img src="/footer-award-3.png" alt="Property Awards" className="h-full w-auto object-contain drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (Branding & Form) - Spans 5 cols */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:pl-10">
                        {/* Logo Section */}
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-[84px]">
                                <Image src="/logo-white.png" alt="BNW Logo" width={100} height={80} className="w-full h-auto" />
                            </div>
                            <div className="flex flex-col border-l border-gray-600 pl-6 h-[60px] justify-center">
                                <span className="text-xl font-normal tracking-[0.15em] text-white uppercase font-sans">BNW DEVELOPMENTS</span>
                                <span className="text-base text-gray-400 font-arabic text-right mt-1">بي ان دبليو للتطوير العقاري</span>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-12 w-full max-w-md">
                            <p className="text-sm font-light text-white mb-4">Subscribe to our newsletter</p>
                            <div className="relative border-b border-gray-700 pb-2 flex justify-between items-center group focus-within:border-[#daaf7d] transition-colors">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-transparent w-full outline-none text-white text-sm placeholder-gray-500"
                                />
                                <button className="text-white hover:text-[#daaf7d] transition-colors">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-6 mt-8">
                            <Instagram size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                            <Facebook size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                            <TikTokIcon />
                            <Linkedin size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                            <Youtube size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                            <Twitter size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                        </div>

                        {/* Address */}
                        <div className="mt-10 flex flex-col gap-6 w-full">
                            <div>
                                <p className="text-sm text-white font-bold mb-1">Sales Gallery – <span className="font-normal text-gray-400">33rd Floor, Ubora Tower, Business Bay, Dubai - UAE</span></p>
                            </div>
                            <div>
                                <p className="text-sm text-white font-bold mb-1">Corporate Office – <span className="font-normal text-gray-400">30th and 48th and 48th Floor, Ubora Tower, Business Bay, Dubai - UAE</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-wide">
                    <p className="mb-4 md:mb-0 hover:text-white cursor-pointer transition-colors">Privacy Policy and Terms of Service.</p>
                    <div className="flex items-center gap-4">
                        <p>@2026 BNW Developments. All Rights Reserved.</p>
                        <button
                            onClick={scrollToTop}
                            className="border border-[#daaf7d] w-10 h-10 flex items-center justify-center hover:bg-[#daaf7d] hover:text-white transition-colors text-[#daaf7d]"
                        >
                            <ChevronUp size={20} />
                        </button>
                    </div>
                </div>

                {/* WhatsApp Floating */}
                <div className="fixed bottom-10 right-10 z-50">
                    <a href="https://wa.me/+971549994155" target="_blank" rel="noopener noreferrer">
                        <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
