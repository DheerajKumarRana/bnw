import React from "react";

const LatestLaunch = () => {
    const projects = [
        {
            title: "Tonino Lamborghini Residences",
            description: "Tonino Lamborghini residences by BNW Developments in Ras Al Khaimah, where Italian design, performance, and coastal living converge. Discover impeccably designed 1-3 bedroom residences, crafted with precision and prowess. An exclusive collection of penthouses, villas and mansions on Al Marjan Island.",
            detailsLink: "#",
            id: "tonino"
        },
        {
            title: "Radisson Blu Residences & Hotel",
            description: "Radisson Blu Residences & Hotel, a signature BNW Development, is a thoughtfully envisioned residential landmark in RAK Central, designed as a contemporary mixed-use development with extraordinary views, refined living, social energy, and distinction.",
            detailsLink: "#",
            id: "radisson"
        }
    ];

    return (
        <section className="bg-white">
            {projects.map((project, index) => (
                <div key={project.id} className={`py-16 md:py-24 ${index !== 0 ? 'border-t border-gray-100' : ''}`}>
                    <div className="container mx-auto px-6 md:px-0 md:max-w-5xl text-center">
                        <p className="text-[#daaf7d] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 font-semibold">
                            LATEST LAUNCH
                        </p>
                        <h2 className="text-3xl md:text-[56px] font-noto mb-6 md:mb-10 text-black leading-tight">
                            {project.title}
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-[20px] md:text-[32px] font-noto font-light text-black leading-[1.3] md:leading-[1.4] mb-10 md:mb-16">
                                {project.description}
                            </p>
                        </div>

                        {/* Responsive Buttons Container */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
                            {/* Project Details Button - Dynamic Style */}
                            <a
                                href={project.detailsLink}
                                className="order-2 md:order-1 text-[12px] md:text-xs font-bold tracking-[0.2em] uppercase text-black hover:text-[#daaf7d] transition-colors
                                           w-full md:w-auto py-5 md:px-8 border border-black flex justify-center items-center"
                            >
                                PROJECT DETAILS
                            </a>

                            {/* Register Button - Always Gold Box */}
                            <button className="order-1 md:order-2 thm-btn thm-btn-gold !w-full md:!w-[280px] !h-[60px] text-[12px] md:text-xs font-bold tracking-[0.2em]">
                                REGISTER YOUR INTEREST
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Parallax Images / Sections (Kept as global for the whole "Launch" area or can be per project) */}
            <div className="mt-10">
                {/* Desktop Images */}
                <div className="hidden lg:block">
                    {["EXTERIOR", "AERIAL VIEW", "INTERIOR"].map((label, idx) => (
                        <div
                            key={idx}
                            className="relative h-screen w-full bg-cover bg-center bg-fixed"
                            style={{ backgroundImage: `url(/launch-${idx + 1}.jpg)` }}
                        >
                            <div className="absolute top-24 left-24">
                                <div className="bg-[#daaf7db3] px-10 h-[48px] flex justify-center items-center">
                                    <p className="text-black text-xs font-bold tracking-widest uppercase">
                                        {label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Images */}
                <div className="lg:hidden">
                    {["EXTERIOR", "AERIAL VIEW", "INTERIOR"].map((label, idx) => (
                        <div key={idx} className="relative w-full aspect-video">
                            <img
                                src={`/launch-${idx + 1}.jpg`}
                                alt={label}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-5">
                                <div className="bg-[#daaf7db3] px-4 h-[30px] flex justify-center items-center">
                                    <p className="text-black text-[10px] font-bold">{label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestLaunch;
