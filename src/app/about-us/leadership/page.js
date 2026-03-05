import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import ProjectForm from "@/components/ProjectForm";

export const metadata = {
    title: 'Our Leadership | BNW Developments',
    description: 'Meet the visionary leaders behind BNW Developments - Ankur Aggarwal and Dr. Vivek Anand Oberoi.'
};

export default function LeadershipPage() {
    return (
        <main className="bg-black min-h-screen font-lato text-white">
            <Navbar />

            {/* Nav Background Placeholder */}
            <div className="w-full h-24 lg:h-32 bg-black absolute top-0 left-0 z-0 hidden lg:block"></div>

            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/team/hero-banner.jpg"
                        alt="Leadership Background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
                </div>

                <div className="absolute top-28 lg:top-40 left-0 w-full z-20">
                    <div className="container mx-auto px-5 text-left">
                        <div className="flex justify-start items-center gap-2">
                            <Link href="/" className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-[#daaf7d] transition-colors">Home</Link>
                            <span className="text-[10px] md:text-sm text-gray-400">/</span>
                            <Link href="/about-us" className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-[#daaf7d] transition-colors">About Us</Link>
                            <span className="text-[10px] md:text-sm text-gray-400">/</span>
                            <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-white">Our Leadership</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-5 text-center flex-1 flex flex-col justify-end pb-20 md:pb-32">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif leading-tight drop-shadow-2xl">
                        Our Leadership
                    </h1>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21L12 3M12 21L5 14M12 21L19 14" stroke="#daaf7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </section>

            {/* Leadership Content */}
            <Leadership />

            {/* Project Form for Register Your Interest */}
            <ProjectForm />

            <Footer />
        </main>
    );
}
