"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Tv, Banknote } from 'lucide-react';

const verticals = [
    {
        title: "BNW Developments",
        description: " crafting immersive spaces that transcend the ordinary.",
        icon: <Building2 size={40} className="text-[#d4af37]" />,
        link: "/projects"
    },
    {
        title: "BNW Mortgages",
        description: "Tailored financial solutions for your property investments.",
        icon: <Banknote size={40} className="text-[#d4af37]" />,
        link: "/mortgages"
    },
    {
        title: "BNW Vacation Homes",
        description: "Exclusive holiday experiences in premium locations.",
        icon: <Home size={40} className="text-[#d4af37]" />,
        link: "/vacation-homes"
    },
    {
        title: "BNW Entertainment",
        description: "Curating world-class entertainment and lifestyle events.",
        icon: <Tv size={40} className="text-[#d4af37]" />,
        link: "/entertainment"
    }
];

export default function Verticals() {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-noto font-bold mb-4">Our Verticals</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Leveraging diverse expertise to deliver innovative solutions across multiple sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {verticals.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#111] p-8 border border-gray-800 hover:border-[#d4af37] transition-all duration-300 group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-noto font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold group-hover:underline">
                                Learn More
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
