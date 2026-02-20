"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="py-24 bg-white text-black overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-[#d4af37] uppercase tracking-widest text-sm font-bold mb-4">About BNW</h4>
                        <h2 className="text-4xl md:text-5xl font-noto font-bold mb-6 leading-tight">
                            Redefining the Skyline <br /> of the UAE
                        </h2>
                        <p className="text-gray-600 leading-loose mb-6">
                            With a premier real estate Gross Development Value of AED 32 billion, BNW is shaping the UAE's most iconic skylines,
                            from the tranquil shores of Ras Al Khaimah to the rising verticals of Dubai.
                        </p>
                        <p className="text-gray-600 leading-loose mb-8">
                            Beyond real estate, BNW excels in diverse investments, project and capital management, and forging strategic alliances,
                            ensuring value for investors, families, and the world's most discerning residents.
                        </p>
                        <button className="border-b-2 border-black pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Read Our Story
                        </button>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
                            {/* Placeholder for About Image - use a generic luxury building or interior */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')" }}
                            ></div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#d4af37] -z-10 hidden md:block"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
