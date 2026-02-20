import React from "react";

const Introduction = () => {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-8 md:px-0 md:max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-noto text-center mb-5 text-black">
                    Redefining the Skyline of the UAE
                </h2>
                <p className="text-[16px] md:text-[18px] font-normal mx-auto text-center text-[#1B1F26B8] pb-10 max-w-3xl">
                    From branded collaborations to purpose-built luxury communities,{" "}
                    <b>BNW</b> is redefining what it means to live, and invest well. Each
                    project reflects a commitment to design innovation, high-growth
                    locations, and investment-grade quality.
                </p>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 mx-auto px-4">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center">
                        <p className="font-noto text-black font-light text-5xl md:text-[65px] text-center mb-2">
                            02
                        </p>
                        <p className="text-black font-normal text-base md:text-xl text-center leading-tight">
                            Master-Planned <br />
                            Communities
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-36 w-[1px] bg-[#9F9D9880]"></div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center">
                        <p className="font-noto text-black font-light text-5xl md:text-[65px] text-center mb-2">
                            06
                        </p>
                        <p className="text-black font-normal text-base md:text-xl text-center leading-tight">
                            Residential Developments <br />
                            Launched
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-36 w-[1px] bg-[#9F9D9880]"></div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row items-baseline gap-2">
                            <p className="font-noto text-black font-light text-5xl md:text-[65px] text-center mb-2 whitespace-nowrap">
                                32 Bn.
                            </p>
                            <p className="font-noto text-black font-light text-xl md:text-[25px]">
                                AED
                            </p>
                        </div>
                        <p className="text-black font-normal text-base md:text-xl text-center leading-tight">
                            Gross Development <br />
                            Value
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
