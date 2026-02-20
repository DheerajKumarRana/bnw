"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const awards = [
        { img: "/s1.png", text: "Best Workplaces in the Middle East™ List 2025" },
        { img: "/s2.png", text: "Honored by the Dubai Police Acadamy" },
        { img: "/s3.png", text: "Divya Chakra 2023, celebrated for his visionary leadership" },
        { img: "/s4.png", text: "ACE OF VISIONS - 2023 presented by JSG" },
        { img: "/s5.png", text: "CEO of the Year Middle East - 2023 Real Estate" },
        { img: "/s6.png", text: "The Ultimate Reality Awards 2024 presented by NDTV & NKN" },
        { img: "/s7.png", text: "Icons of the UAE - 2023 Soaring on the wings of Excellence" },
        { img: "/s8.png", text: "Honoured with the Global Icon Award at GIA 2023" },
        { img: "/s9.png", text: "The Pillars of Real Estate Award - 2023 Rising Developer of the Year" },
        { img: "/s10.png", text: "The Pillars of Real Estate Award - 2023 Developer of the Year-Luxury Projects" },
        { img: "/s11.png", text: "Top Branded Residential Project - International Property Award 2023" },
        { img: "/s12.png", text: "Luxury Lifestyle Award 2023 - Best Luxury Innovative Real Estate Developer" }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#f1f1f1] overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-playfair text-center mb-5 text-black">
                    An award-winning real-estate developer
                </h2>
                <p className="text-sm md:text-base max-w-3xl mx-auto text-center text-gray-800 pb-12">
                    We have grown steadily and remained resilient despite challenging market
                    conditions, making impressive progress in a short period of time.
                </p>

                <div className="logoSlider">
                    <Slider {...settings}>
                        {awards.map((award, index) => (
                            <div key={index} className="px-3 outline-none group cursor-pointer">
                                <div className="flex flex-col items-center justify-center transition-all duration-500">
                                    <div className="h-[120px] md:h-[150px] flex items-center justify-center relative">
                                        <img
                                            src={award.img}
                                            alt="Award"
                                            className="max-h-[100px] md:max-h-[140px] w-auto object-contain transition-all duration-500 opacity-40 group-hover:opacity-100 filter brightness-125 group-hover:brightness-100"
                                        />
                                    </div>
                                    <span className="inline-block text-center text-[10px] md:text-[11px] leading-snug mt-4 text-gray-500 font-lato max-w-[180px] transition-all duration-500 group-hover:text-black">
                                        {award.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default LogoSlider;
