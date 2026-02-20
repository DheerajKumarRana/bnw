"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { name: "Tonino Lamborghini Residences", location: "Ras Al Khaimah", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" },
    { name: "Aqua Arc", location: "Al Marjan Island", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop" },
    { name: "The Bay", location: "Dubai", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
];

export default function Projects() {
    return (
        <section className="py-24 bg-white" id="projects">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <h4 className="text-[#d4af37] uppercase tracking-widest text-sm font-bold mb-2">Portfolio</h4>
                    <h2 className="text-4xl md:text-5xl font-noto font-bold text-black">Featured Projects</h2>
                </div>
                <button className="hidden md:block thm-btn thm-btn-white !h-[48px] !w-auto !px-8">
                    View All Projects
                </button>
            </div>

            <div className="flex overflow-x-auto pb-10 hide-scrollbar gap-8 px-6 md:px-[calc((100vw-1400px)/2)]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] relative group cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="h-[500px] w-full relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${project.img}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-2">{project.location}</p>
                                <h3 className="text-2xl font-noto">{project.name}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
