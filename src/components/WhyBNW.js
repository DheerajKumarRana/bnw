"use client";
import React from "react";
import { CheckCircle2, Key, BarChart3, MapPin, Trophy, Activity, FileCheck, Gem } from "lucide-react";

const WhyBNW = () => {
    const features = [
        {
            icon: <CheckCircle2 className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "Proven Track Record",
            desc: "Trusted and reliable, fostering strong investor relationships."
        },
        {
            icon: <Key className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "Freehold Ownership",
            desc: "Full ownership rights, ensuring control over your investment."
        },
        {
            icon: <BarChart3 className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "Capital Appreciation",
            desc: "Prime locations that increase your investment's value over time."
        },
        {
            icon: <MapPin className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "Strategic Locations",
            desc: "Conveniently located, maximizing rental and resale potential."
        },
        {
            icon: <Trophy className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "World-Class Amenities",
            desc: "Luxury facilities setting a high standard for comfort."
        },
        {
            icon: <Activity className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "High ROI",
            desc: "Managed projects designed for profitable returns."
        },
        {
            icon: <FileCheck className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "Regulatory Assurance",
            desc: "Fully compliant with Dubai Land Department regulations."
        },
        {
            icon: <Gem className="w-[34px] h-[35px] text-[#daaf7d] stroke-[1.2px]" />,
            title: "Luxury Finishes",
            desc: "Sophisticated interiors for a premium lifestyle."
        }
    ];

    return (
        <section className="py-24 bg-white font-lato overflow-hidden">
            <div className="container mx-auto px-5">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-[32px] md:text-[45px] font-noto text-[#DAAF7D] mb-4 md:mb-10 leading-tight">
                        Why BNW Developments?
                    </h2>
                </div>

                {/* Intro Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
                    <div className="order-2 md:order-1">
                        <p className="text-[#000000] text-[16px] md:text-[20px] font-bold mb-4 md:mb-8 leading-[1.2] pb-1">
                            Invest with <span className="font-bold">BNW</span> to access a high-growth portfolio backed by deep industry expertise, full ownership rights, and an unshakable commitment to quality.
                        </p>
                        <p className="text-[#57575E] text-[12px] md:text-[14px] mb-8 md:mb-12 leading-[1.8] pb-2">
                            Each project is strategically located, intelligently planned, and crafted with finishes that meet the world's most refined tastes. From capital appreciation to regulatory confidence, BNW offers a rare blend of luxury and logic, built for today's global investor.
                        </p>
                        <button className="bg-[#000A0D] text-white w-full md:w-[250px] md:h-[58px] py-4 md:py-0 text-[12px] font-bold tracking-[0.25em] hover:bg-[#DAAF7D] transition-all duration-500 uppercase mt-5">
                            INVEST WITH BNW
                        </button>
                    </div>
                    <div className="order-1 md:order-2 relative h-[300px] md:h-[350px] overflow-hidden shadow-2xl shadow-black/5">
                        <img
                            src="/whyBnwDevelopment.png"
                            alt="Why BNW Developments Cinematic Image"
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-6 md:gap-y-10">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="group border border-[#daaf7d]/20 p-4 py-6 md:p-5 md:py-8 flex flex-col justify-center items-center text-center hover:border-[#DAAF7D] transition-all duration-500 bg-white min-h-[220px]"
                        >
                            <div className=" transform group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-[#000000] text-[16px] md:text-[20px] font-bold mb-2 md:mb-4 tracking-tight pt-2 md:pt-5 pb-1">
                                {item.title}
                            </h3>
                            <p className="text-[#57575E] text-[12px] md:text-[14px] leading-[1.6] max-w-[240px] pb-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyBNW;
