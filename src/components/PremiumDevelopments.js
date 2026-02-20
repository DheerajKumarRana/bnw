"use client";
import React, { useState, useMemo } from "react";
import Slider from "react-slick";

const PremiumDevelopments = () => {
    const [activeCategory, setActiveCategory] = useState("All properties");

    const NextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#AD8B3A] flex items-center justify-center text-[#AD8B3A] scale-90 hover:scale-100 transition-all duration-200 ease-linear shadow-lg"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#AD8B3A] flex items-center justify-center text-[#AD8B3A] scale-90 hover:scale-100 transition-all duration-200 ease-linear shadow-lg"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    swipe: true,
                },
            },
        ],
    };

    const allProjects = [
        {
            images: ["/project-1.png", "/project-2.jpg"],
            name: "Pelagia",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/project-2.jpg", "/project-3.jpg"],
            name: "Aqua Arc",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/project-3.jpg"],
            name: "Tonino Lamborghini Residences",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/launch-1.jpg", "/launch-3.jpg"],
            name: "La Perla",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/launch-3.jpg"],
            name: "Aqua Maya",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/launch-2.jpg"],
            name: "Ramada Residences",
            location: "Al Jaddaf, Dubai",
            category: "Dubai"
        },
        {
            images: ["/project-2.jpg"],
            name: "Aquino",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/launch-1.jpg"],
            name: "Radisson Blu Residences & Hotel",
            location: "RAK Central",
            category: "RAK Central"
        },
        {
            images: ["/project-1.png"],
            name: "Acacia",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        },
        {
            images: ["/project-3.jpg"],
            name: "Taj Wellington Mews",
            location: "Al Marjan Island",
            category: "Al Marjan Island"
        }
    ];

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All properties") return allProjects;
        return allProjects.filter(p => p.category === activeCategory);
    }, [activeCategory, allProjects]);

    return (
        <section className="py-12 md:py-24 bg-[#151515] text-white overflow-hidden">
            <div className="container mx-auto px-5 mt-4 md:mt-10 mb-8 md:mb-12">
                {/* Top Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-20">
                    <button className="thm-btn bg-white !text-black border-white hover:bg-black hover:!text-white !w-full md:!w-[250px]">
                        Chat on WhatsApp
                    </button>
                    <button className="thm-btn thm-btn-gold !w-full md:!w-[250px]">
                        Register your interest
                    </button>
                </div>

                {/* Centered Heading */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-6xl font-serif mb-8 md:mb-12 text-white">
                        Premium Developments by BNW
                    </h2>

                    {/* Filters */}
                    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 max-w-[440px] md:max-w-none mx-auto">
                        {["All properties", "Al Marjan Island", "RAK Central", "Dubai"].map((cat) => {
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`thm-btn thm-btn-tab ${isActive ? 'active' : ''} !h-[45px] md:!h-[48px] !w-full md:!w-[220px] uppercase text-[10px] md:text-xs tracking-widest font-semibold`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Slider */}
                <div className="premium-slider px-0 md:px-10 mt-8 md:mt-10 relative">
                    <Slider key={activeCategory} {...settings}>
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="px-2 md:px-3 outline-none">
                                <div className="relative group overflow-hidden cursor-pointer h-[350px] md:h-[400px]">
                                    {/* Project Image */}
                                    <div className="w-full h-full overflow-hidden">
                                        <img
                                            src={project.images[0]}
                                            alt={project.name}
                                            className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 opacity-90 transition-opacity group-hover:opacity-100 pointer-events-none"></div>

                                    {/* Content Top */}
                                    <div className="absolute top-8 w-full flex flex-col items-center px-6 pointer-events-none transition-transform duration-500 group-hover:translate-y-[-5px]">
                                        <h3 className="text-white text-2xl md:text-3xl font-serif text-center uppercase tracking-wider mb-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-[#daaf7d] text-xs uppercase tracking-widest font-semibold">
                                            {project.location}
                                        </p>
                                    </div>

                                    {/* Content Bottom */}
                                    <div className="absolute bottom-10 w-full flex flex-col items-center px-6">
                                        <button className="thm-btn thm-btn-gold !h-[45px] !w-[180px] text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            Visit Property &gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section >
    );
};

export default PremiumDevelopments;
