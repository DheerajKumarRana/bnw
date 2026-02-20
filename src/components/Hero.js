import React from "react";

const Hero = () => {
    return (
        <>
            {/* Mobile Hero */}
            <section className="lg:hidden block bg-black pb-10">
                <div className="w-full overflow-hidden">
                    <img
                        alt="Exploring Dubai"
                        src="/mobile-hero.png"
                        className="w-full h-auto"
                    />
                </div>
                <div className="container mx-auto px-5 mt-8">
                    <div className="flex flex-col items-start justify-between gap-6">
                        <div className="basis-10/12">
                            <h1 className="flex flex-col sm:max-w-xl text-3xl md:text-4xl font-noto font-medium leading-tight">
                                <span className="text-white inline-block">
                                    Legacy that <i>Leads</i>
                                </span>
                                <span className="text-white text-right inline-block">
                                    Innovation that <i>Lasts</i>
                                </span>
                            </h1>
                            <p className="mt-4 font-normal text-[#f5f5f5] text-sm leading-relaxed">
                                With a premier real estate Gross Development Value of AED 32
                                billion, BNW is shaping the UAE's most iconic skylines, from the
                                tranquil shores of Ras Al Khaimah to the rising verticals of
                                Dubai. Beyond real estate, BNW excels in diverse investments,
                                project and capital management, and forging strategic alliances,
                                ensuring value for investors, families, and the world's most
                                discerning residents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop Hero */}
            <section className="hidden lg:block relative h-screen w-full overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/desktop-hero-poster.png"
                >
                    <source src="/bnwVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div className="absolute w-full bottom-0 pt-24 pb-12 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="container mx-auto px-5">
                        <div className="grid grid-cols-7">
                            <div className="col-span-1"></div>
                            <div className="col-span-12 lg:col-span-5">
                                <div className="flex flex-col mb-4">
                                    <span className="text-6xl md:text-7xl font-noto text-white inline-block">
                                        Legacy that <i>Leads</i>
                                    </span>
                                    <span className="text-6xl md:text-7xl font-noto text-white text-right lg:mr-32 inline-block">
                                        Innovation that <i>Lasts</i>
                                    </span>
                                </div>
                                <p className="mt-4 text-lg font-normal text-[#f5f5f5] leading-relaxed max-w-3xl">
                                    With a premier real estate Gross Development Value of AED 32
                                    billion, BNW is shaping the UAE's most iconic skylines, from the
                                    tranquil shores of Ras Al Khaimah to the rising verticals of
                                    Dubai. Beyond real estate, BNW excels in diverse investments,
                                    project and capital management, and forging strategic alliances,
                                    ensuring value for investors, families, and the world's most
                                    discerning residents.
                                </p>
                            </div>
                            <div className="col-span-1"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
