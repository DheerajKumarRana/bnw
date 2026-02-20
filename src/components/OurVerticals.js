"use client";
import React from "react";
import Slider from "react-slick";

const OurVerticals = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    const verticals = [
        { name: "BNW Developments", img: "/vertical-1.jpg" },
        { name: "BNW Mortgages", img: "/vertical-2.jpg" },
        { name: "BNW Vacation homes", img: "/vertical-3.jpg" },
        { name: "BNW Entertainment", img: "/vertical-4.jpg" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl md:text-5xl font-noto text-center mb-5 text-black">Our Verticals</h2>
                <p className="text-center text-[#57575E] max-w-2xl mx-auto mb-12">
                    At BNW, we leverage our diverse expertise to deliver innovative solutions across multiple sectors.
                </p>

                <div className="verticals-slider">
                    <Slider {...settings}>
                        {verticals.map((v, i) => (
                            <div key={i} className="px-2">
                                <div className="relative overflow-hidden group h-[500px] w-full">
                                    <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                    <div className="absolute bottom-10 left-0 w-full text-center">
                                        <h3 className="text-white text-xl font-bold uppercase tracking-wider">{v.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* CTA Section (Register Your Interest Background) */}
            <div className="mt-20 relative bg-[#111] py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                    {/* Abstract background shape if available, relying on dark background for now */}
                </div>
                <div className="container mx-auto px-5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-4xl font-noto text-[#daaf7d] mb-4 uppercase">Register Your Interest</h2>
                        <p className="text-[#daaf7d]/80 text-sm leading-relaxed max-w-md">
                            From IHCL Taj to FashionTV and more, explore the most exclusive branded developments across the UAE. Connect with us for personalised assistance.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 bg-transparent">
                        <form className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                            <input type="text" placeholder="Full Name" className="bg-white p-4 text-black outline-none border-none" />
                            <input type="email" placeholder="Email" className="bg-white p-4 text-black outline-none border-none" />
                            <input type="tel" placeholder="+971" className="bg-white p-4 text-black outline-none border-none" />
                            <button className="bg-[#daaf7d] text-white p-4 uppercase font-bold hover:bg-white hover:text-[#daaf7d] transition-colors">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OurVerticals;
