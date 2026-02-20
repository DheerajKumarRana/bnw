import React from "react";

const LatestLaunch = () => {
    return (
        <section>
            {/* Intro Text */}
            <div className="pb-16 md:pb-20 bg-white">
                <div className="h-[1px] bg-[#daaf7d] w-[90%] md:w-[70%] mb-16 md:mb-20 mx-auto"></div>
                <div className="container mx-auto px-8 md:px-0 md:max-w-4xl text-center">
                    <p className="text-[#daaf7d] uppercase tracking-widest text-sm mb-2 font-normal">
                        LATEST LAUNCH
                    </p>
                    <h2 className="text-3xl md:text-5xl font-noto mb-4 md:mb-6 text-black">
                        Tonino Lamborghini Residences
                    </h2>
                    <p className="text-[22px] md:text-[28px] font-noto font-normal md:max-w-4xl mx-auto text-black leading-snug">
                        Tonino Lamborghini residences by BNW Developments in Ras Al Khaimah,
                        where Italian design, performance, and coastal living converge.
                        Discover impeccably designed 1-3 bedroom residences, crafted with
                        precision and prowess. An exclusive collection of penthouses, villas
                        and mansions on Al Marjan Island.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-2 md:gap-5 mt-8 md:mt-10 mb-10">
                        <a
                            href="#"
                            className="thm-btn thm-btn-white w-full md:w-[250px]"
                        >
                            Project Details
                        </a>
                        <button className="thm-btn thm-btn-gold w-full md:w-[250px]">
                            Register your interest
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Images */}
            <div className="lg:hidden">
                {["EXTERIOR", "AERIAL VIEW", "INTERIOR"].map((label, idx) => (
                    <div key={idx} className="relative w-full h-auto">
                        <img
                            src={`/launch-${idx + 1}.jpg`}
                            alt={label}
                            className="w-full h-auto"
                        />
                        <div className="absolute top-6 left-5">
                            <div className="bg-[#daaf7db3] w-[80px] h-[30px] flex justify-center items-center">
                                <p className="text-black text-[10px] font-bold">{label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Parallax Images */}
            <div className="hidden lg:block">
                <div
                    className="relative h-screen w-full bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url(/launch-1.jpg)" }}
                >
                    <div className="flex flex-row justify-items-start pt-20 pl-5 md:pt-24 md:pl-24">
                        <div className="bg-[#daaf7db3] w-[180px] h-[44px] md:w-[250px] md:h-[48px] flex justify-center items-center">
                            <p className="text-black text-xs font-bold tracking-widest">
                                EXTERIOR
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="relative h-screen w-full bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url(/launch-2.jpg)" }}
                >
                    <div className="flex flex-row justify-items-start pt-20 pl-5 md:pt-24 md:pl-24">
                        <div className="bg-[#daaf7db3] w-[180px] h-[44px] md:w-[250px] md:h-[48px] flex justify-center items-center">
                            <p className="text-black text-xs font-bold tracking-widest">
                                AERIAL VIEW
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="relative h-screen w-full bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url(/launch-3.jpg)" }}
                >
                    <div className="flex flex-row justify-items-start pt-20 pl-5 md:pt-24 md:pl-24">
                        <div className="bg-[#daaf7db3] w-[180px] h-[44px] md:w-[250px] md:h-[48px] flex justify-center items-center">
                            <p className="text-black text-xs font-bold tracking-widest">
                                INTERIOR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestLaunch;
