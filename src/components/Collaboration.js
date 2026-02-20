import React from "react";

const Collaboration = () => {
    const partners = [
        { name: "Tonino Lamborghini", img: "/collab-1.png" },
        { name: "Fashion TV", img: "/collab-2.png" },
        { name: "Michel Adam", img: "/collab-3.png" },
        { name: "Taj", img: "/collab-4.png" },
    ];

    return (
        <section className="bg-white overflow-hidden py-16 md:py-20">
            <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-15">
                {/* Text Content */}
                <div className="w-full lg:w-[50%]">
                    <h2 className="text-3xl md:text-4xl font-noto text-black text-center lg:text-start mb-5 leading-tight">
                        Elevated by Collaboration, Inspired by Excellence
                    </h2>
                    <p className="text-sm md:text-base text-center lg:text-start text-black pb-5 lg:pb-0 text-[#1B1F26B8]">
                        Our world-class partners bring their legacy. BNW brings its vision.
                        Together, we create immersive spaces that transcend the ordinary.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-between items-center flex-wrap sm:flex-nowrap gap-5 sm:gap-0 lg:pt-5">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="w-[150px] h-[75px] sm:flex-1 sm:h-[100px] lg:h-[85px] xl:h-[100px] flex items-center justify-center border border-[#daaf7d] border-opacity-50 rounded-md sm:mr-5 px-4 hover:shadow-md transition-shadow"
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="h-[70%] w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collaboration;
