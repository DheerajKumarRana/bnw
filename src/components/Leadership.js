"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Leadership = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    };

    const leaders = [
        {
            name: "Ankur Aggarwal",
            designation: "CHAIRMAN & FOUNDER",
            bio: [
                "Ankur Aggarwal, the visionary founder of BNW, brings a wealth of professional experience to the helm of our real estate venture. With a decade-long career as a Chartered Accountant, Ankur‘s expertise in financial management laid the groundwork for his transition into real estate in 2021.",
                "Driven by a commitment to ethical guidance, Ankur established BNW, swiftly transforming it into a reputable 360-degree real-estate consulting and development organization boasting a group of multi-talented consultants, CPA‘s, and Legal Advisors. In just 3 years, BNW‘s Gross Development Value (GDV) has reached a striking 32 Billion AED.",
                "As the consultancy business expanded, Mr. Ankur embarked on exploring development avenues to sustain its growth trajectory. Consequently, in 2023, he established BNW Buying and Selling LLC to procure land and plots in the UAE. In 2024, Mr. Ankur initiated BNW Developments, marking the launch of luxurious mixed-use developments in Ras Al Khaimah and Dubai."
            ],
            image: "/about-us/ankur-aggarwal.jpg",
            imageLeft: true,
            awards: [
                { img: "/about-us/ankur-awards/pillars.png", title: "Visionary of the Year", text: "Awarded at the Pillars of Real Estate Awards 2025 by Construction Business News ME and BNC" },
                { img: "/about-us/ankur-awards/global-icon.png", title: "Global Icon award", text: "Awarded the prestigious Global Icon award - Real estate industry" },
                { img: "/about-us/ankur-awards/top-150.png", title: "Finance World Magazine", text: "Top 150 Real Estate Icons of the UAE" },
                { img: "/about-us/ankur-awards/indian-aces.png", title: "Indian Aces 2025", text: "#9 in Indian Aces 2025 List - New Mavericks by Arabian Business" },
                { img: "/about-us/ankur-awards/power-150.png", title: "Power 15 List 2025", text: "Featured in Construction Week Middle East" },
                { img: "/about-us/ankur-awards/indywood.png", title: "Exemplary Leadership", text: "Awarded by Indywood Billionaires Club 2025" },
                { img: "/about-us/ankur-awards/more.png", title: "Masters of Real Estate", text: "Featured in the cover of MORE Magazine" },
                { img: "/about-us/ankur-awards/world-realty.png", title: "Real Estate Excellence", text: "Awarded by World Realty Congress" },
                { img: "/about-us/ankur-awards/golden.png", title: "Best Young Entrepreneur", text: "Golden Entrepreneur Awards - 2024" },
                { img: "/about-us/ankur-awards/icons-uae.png", title: "Icons of the UAE - 2023", text: "NMN Media & NDTV India" },
                { img: "/about-us/ankur-awards/ceo.png", title: "CEO of the Year 2023", text: "Real Estate Sector in the Middle East Region" },
                { img: "/about-us/ankur-awards/experience.png", title: "17+ Years Experience", text: "Financial Services & Asset Management" },
                { img: "/about-us/ankur-awards/entrepreneur.png", title: "Focused Entrepreneur", text: "Expert in deal structuring and financial transactions" }
            ]
        },
        {
            name: "Dr. Vivek Anand Oberoi",
            designation: "MANAGING DIRECTOR & CO-FOUNDER",
            bio: [
                "Dr. Vivek Anand Oberoi, Co-Founder and Managing Director of BNW Developments offers a holistic perspective with over two decades of leadership across industries. He has been instrumental in shaping BNW into a prominent name in the UAE’s ultra-luxury real estate market.",
                "Under his stewardship, BNW Developments has expanded its portfolio with over AED 32 billion in Gross Development Value, earning recognition for setting new benchmarks in architectural excellence and modern luxury.",
                "An actorpreneur and philanthropist, Dr. Oberoi’s diverse repertoire spans edutech, fintech, agritech, media and entertainment, real estate and ethical luxury. He is the first Indian actor to be named among Forbes’ 40 Under 40 Heroes of Philanthropy and continues to merge profitability with purpose.",
                "At BNW, his vision is to create developments that uphold the highest standards of living while leaving a lasting impact on communities, reflecting his acumen for forward-looking, value-driven investments."
            ],
            image: "/about-us/vivek-oberoi.jpg",
            imageLeft: false,
            awards: [
                { img: "/about-us/vivek-awards/who-award.png", title: "World Health Organization", text: "WHO Special Director’s General Award (2004)" },
                { img: "/about-us/vivek-awards/rotary-award.png", title: "Rotary Good Samaritan", text: "Exemplary humanitarian service (2005)" },
                { img: "/about-us/vivek-awards/forbes-hero.png", title: "Forbes Philanthropy Hero", text: "Forbes 40 Under 40 Hero (2011)" },
                { img: "/about-us/vivek-awards/swfi-award.png", title: "SWFI Good Fellows", text: "Excellence in social and financial initiatives (2023)" },
                { img: "/about-us/vivek-awards/uae-ultimate-realty.png", title: "UAE Ultimate Realty", text: "Exceptional leadership in real estate (2024)" },
                { img: "/about-us/vivek-awards/elites-influential.png", title: "Most Influential Indian", text: "Elite’s Most Influential Indian Award (2024)" },
                { img: "/about-us/vivek-awards/asia-one-leader.png", title: "Asia One Greatest Leader", text: "Greatest Real Estate Leader (2024)" },
                { img: "/about-us/vivek-awards/mother-teresa-award.png", title: "Mother Teresa Award", text: "Dedicated humanitarian work (2024)" },
                { img: "/about-us/vivek-awards/prajyot-award.png", title: "Prajyot Award", text: "Social development and community welfare (2024)" },
                { img: "/about-us/vivek-awards/dada-vasu-shroff.png", title: "Philanthropy Award", text: "Dada Vasu Shroff Philanthropy Award (2024)" },
                { img: "/about-us/vivek-awards/world-realty-congress.png", title: "World Realty Congress", text: "Leadership in global real estate (2024)" },
                { img: "/about-us/vivek-awards/et-now-realty.png", title: "ET Now Realty Conclave", text: "Innovation and strategic development (2025)" }
            ]
        }
    ];

    if (!isMounted) return null;

    return (
        <section className="bg-black text-white py-20 lg:py-32 overflow-hidden font-lato">
            <div className="container mx-auto px-5 max-w-7xl">
                <div className="text-center mb-20 lg:mb-32">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#daaf7d] mb-6 tracking-wider">Our Leadership</h2>
                    <div className="w-24 h-[1px] bg-[#daaf7d] mx-auto opacity-50"></div>
                </div>

                {leaders.map((leader, index) => (
                    <div key={index} className="mb-32 lg:mb-48 last:mb-0">
                        <div className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-24 ${leader.imageLeft ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Bio Text Column */}
                            <div className="flex-1 w-full order-2 lg:order-1">
                                <h3 className="text-3xl md:text-5xl font-serif text-white mb-2 leading-tight">
                                    {leader.name}
                                </h3>
                                <p className="text-[#daaf7d] text-sm tracking-[0.3em] font-bold mb-8 uppercase">
                                    {leader.designation}
                                </p>

                                <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg">
                                    {leader.bio.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="flex-1 w-full order-1 lg:order-2 flex justify-center lg:justify-start">
                                <div className="relative max-w-md lg:max-w-full">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="relative z-10 w-full h-auto object-cover shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Awards Carousel Below Bio & Image */}
                        <div className="mt-20 lg:mt-32 border-t border-white/10 pt-16">
                            <Slider {...sliderSettings} className="logos-slider">
                                {leader.awards.map((award, i) => (
                                    <div key={i} className="px-4 outline-none">
                                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                            <div className="h-20 md:h-24 flex items-center justify-center lg:justify-start mb-6">
                                                <img
                                                    src={award.img}
                                                    alt={award.title}
                                                    className="max-h-full w-auto object-contain"
                                                />
                                            </div>
                                            <h4 className="text-[#daaf7d] font-serif text-sm md:text-md mb-2 line-clamp-2 min-h-[3rem] leading-tight">
                                                {award.title}
                                            </h4>
                                            <p className="text-gray-400 text-[10px] md:text-xs font-light leading-snug line-clamp-3">
                                                {award.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                .logos-slider .slick-track {
                    display: flex !important;
                    align-items: flex-start !important;
                }
                .logos-slider .slick-slide {
                    height: inherit !important;
                }
            `}</style>
        </section>
    );
};

export default Leadership;
