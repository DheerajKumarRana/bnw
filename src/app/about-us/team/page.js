import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Our Team | BNW Developments',
    description: 'Meet the BNW Group Team - A team that turns possibilities into realities.'
};

export default function TeamPage() {
    return (
        <main className="bg-black min-h-screen font-lato text-white">
            <Navbar />

            {/* Nav Background Placeholder */}
            <div className="w-full h-24 lg:h-32 bg-black absolute top-0 left-0 z-0 hidden lg:block"></div>

            {/* Section 1: Hero */}
            <section className="relative w-full h-[60vh] md:h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/team/hero-banner.jpg" // Main team page hero background
                        alt="BNW Group Team Background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
                </div>

                <div className="absolute top-28 lg:top-40 left-0 w-full z-20">
                    <div className="container mx-auto px-5">
                        <div className="flex justify-start items-center gap-2">
                            <Link href="/" className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-[#daaf7d] transition-colors">Home</Link>
                            <span className="text-[10px] md:text-sm text-gray-400">/</span>
                            <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-white">Our Team</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-5 text-center flex-1 flex flex-col justify-end pb-20 md:pb-32">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif leading-tight drop-shadow-2xl">
                        Meet the BNW Group Team
                    </h1>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21L12 3M12 21L5 14M12 21L19 14" stroke="#daaf7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </section>

            {/* Section 2: Management Team */}
            <section className="py-20 bg-black relative z-10 text-center">
                <div className="container mx-auto px-5 max-w-7xl">
                    <p className="max-w-4xl mx-auto text-sm md:text-base text-gray-300 font-light leading-relaxed mb-16 px-4">
                        At BNW Group, our strength lies in the exceptional talent and dedication of our team. Comprising industry experts, visionary leaders, and passionate professionals, our team is committed to delivering excellence across all our ventures. Each member brings unique skills and a shared commitment to innovation, integrity, and outstanding service. Together, we strive to exceed expectations, driving success for our clients and partners worldwide.
                    </p>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-20">Management Team</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
                        {/* Member 1 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/ibrahim_hassen.jpg" alt="Ibrahim Hassen" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">IBRAHIM HASSEN</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">MANAGING PARTNER</p>
                            </div>
                        </div>

                        {/* Member 2 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/yadhu_mittal.jpg" alt="Yadhu Mittal" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">YADHU MITTAL</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">GROUP CHIEF STRATEGY AND INVESTMENT OFFICER</p>
                            </div>
                        </div>

                        {/* Member 3 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/sandeep_aggarwal.jpg" alt="Sandeep Aggarwal" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">SANDEEP AGGARWAL</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">VP-REAL ESTATE ADVISORY</p>
                            </div>
                        </div>

                        {/* Member 4 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/naresh_golapalli.jpg" alt="Naresh Golapalli" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">NARESH GOLAPALLI</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">CHIEF SALES OFFICER</p>
                            </div>
                        </div>

                        {/* Member 5 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/sahil_arora.jpg" alt="Sahil Arora" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">SAHIL ARORA</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">CHIEF OF CORPORATE AFFAIRS AND BUSINESS DEVELOPMENT</p>
                            </div>
                        </div>

                        {/* Member 6 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/dilip_rankawat.jpg" alt="Dilip Rankawat" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">DILIP RANKAWAT</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">GENERAL MANAGER - FINANCE</p>
                            </div>
                        </div>

                        {/* Member 7 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/tushar_khiste.jpg" alt="Tushar Khiste" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">TUSHAR KHISTE</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">CHIEF OF PROJECTS DEVELOPMENT</p>
                            </div>
                        </div>

                        {/* Member 8 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/iqbal_khurram.jpg" alt="Iqbal Khurram" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">IQBAL KHURRAM</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">VP - PROJECT MANAGEMENT</p>
                            </div>
                        </div>

                        {/* Member 9 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/mishant_gwalani.jpg" alt="Mishant Gwalani" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">MISHANT GWALANI</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">HEAD OF MARKETING</p>
                            </div>
                        </div>

                        {/* Member 10 */}
                        <div className="flex flex-col border border-white/10 bg-[#0a0a0a] group hover:border-[#daaf7d]/50 transition-colors">
                            <div className="w-full h-[350px] overflow-hidden">
                                <img src="/team/suman_k_singh.jpg" alt="Suman K Singh" className="w-full h-full object-cover object-top filter transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div className="p-6 text-left flex flex-col justify-end bg-gradient-to-t from-[#daaf7d]/10 to-transparent flex-1 border-t border-white/5">
                                <h3 className="text-[#daaf7d] font-serif tracking-widest uppercase text-xl mb-1">SUMAN K SINGH</h3>
                                <p className="text-xs tracking-[0.1em] text-white uppercase opacity-80">CHIEF HUMAN RESOURCES OFFICER</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3: Group Photo */}
            <section className="bg-white text-black py-20 lg:py-32">
                <div className="container mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif mb-4">Welcome to the heart of BNW Group</h2>
                        <p className="text-gray-600 tracking-wide text-sm mb-4">A team that turns possibilities into realities.</p>
                    </div>
                </div>

                <div className="w-full mt-10">
                    <img
                        src="/team/bnw_group_team.jpg"
                        alt="BNW Group Full Team"
                        className="w-full h-auto object-cover border-y border-gray-200 shadow-xl"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}
