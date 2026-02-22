import React from "react";

const Collaboration = () => {
    const partners = [
        { name: "Radisson Blu", img: "/collab-radisson.png" },
        { name: "Tonino Lamborghini", img: "/collab-1.png" },
        { name: "Fashion TV", img: "/collab-2.png" },
        { name: "Michel Adam", img: "/collab-3.png" },
        { name: "Taj", img: "/collab-4.png" },
    ];

    return (
        <section className="bg-white overflow-hidden py-16 md:py-20">
            <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-10 lg:gap-10 xl:gap-20">
                {/* Text Content */}
                <div className="w-full lg:w-[45%]">
                    <h2 className="text-3xl md:text-[42px] font-noto text-black text-center lg:text-start mb-8 leading-tight">
                        Elevated by Collaboration, Inspired by Excellence
                    </h2>
                    <p className="text-base md:text-lg text-center lg:text-start text-black/70 leading-relaxed">
                        Our world-class partners bring their legacy. BNW brings its vision.
                        Together, we create immersive spaces that transcend the ordinary.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="w-full lg:w-[55%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center border border-[#daaf7d] border-opacity-30 rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-300 h-[100px] md:h-[120px] ${index === partners.length - 1 && partners.length % 2 !== 0
                                    ? "col-span-2 md:col-span-2 lg:col-span-1 lg:max-w-none max-w-[50%] mx-auto w-full"
                                    : ""
                                }`}
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="h-full w-full object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collaboration;
