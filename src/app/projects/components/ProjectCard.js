import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {

    return (
        <div
            className="relative flex flex-col items-center font-noto bg-black"
        >
            {/* Ambient top glow */ }
            {/* <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
                style={ {
                    background:
                        "radial-gradient(ellipse at center, rgba(180,150,90,0.12) 0%, transparent 70%)",
                } }
            /> */}

            {/* Title */ }
            { project.title && <div
                className="w-full text-center pt-12 pb-8"
            >
                <h1
                    className="tracking-[0.35em] uppercase text-2xl md:text-3xl"
                    style={ { color: "#e8d9b8", letterSpacing: "0.3em" } }
                >
                    { project.title }
                </h1>
                {/* <div
                    className="mx-auto mt-3"
                    style={ {
                        width: "60px",
                        height: "1px",
                        background:
                            "linear-gradient(to right, transparent, #c9a84c, transparent)",
                    } }
                /> */}
            </div> }

            {/* Hero Image */ }
            { project && project.image && <div
                className="relative w-full max-w-7xl mx-auto px-4 md:px-8"
            >
                <div
                    className="relative w-full overflow-hidden"
                    style={ {
                        aspectRatio: "16/9",
                        borderRadius: "2px",
                        boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                    } }
                >
                    {/* Placeholder towers illustration using CSS */ }
                    <Image
                        src={ `${project.image}` }
                        width={ 400 }
                        height={ 300 }
                        className="w-full"
                        alt="Image"
                    />
                </div>
            </div> }

            {/* Content section */ }
            <div
                className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 pb-16"
            >
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                    {/* Left: label + heading */ }
                    <div className="md:w-2/5">
                        { project.listingPageTitle && <div className="flex items-center gap-3 mb-4">
                            <p
                                className="text-xs tracking-[0.25em] uppercase text-white/60"
                            >
                                { project.listingPageTitle }
                            </p>
                            <div style={ { flex: 1, height: "1px", backgroundColor: "#2a2a2a" } } />
                        </div> }
                        { project.apartmentTypes && <h2
                            className="text-2xl md:text-4xl leading-tight text-[#bf9e77]"
                        >
                            { project.apartmentTypes }
                        </h2> }
                    </div>

                    {/* Right: description + price + CTAs */ }
                    <div className="md:w-3/5 flex flex-col justify-between gap-6">
                        { project.description && <p
                            className="text-sm leading-relaxed text-white font-lato"
                        >
                            { project.description }
                        </p> }

                        { project.startingFrom && <div className="flex gap-2 font-lato">
                            <p className="mb-1 text-white text-md md:text-xl" >
                                Starting from
                            </p>
                            <p
                                className="text-md md:text-xl font-bold tracking-wide text-white"
                            >
                                { project.startingFrom }
                            </p>
                        </div> }

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                className="group bg-white text-black font-lato font-bold relative px-8 py-3 text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300"
                            >
                                Register Your Interest
                            </button>

                            <Link
                                href={ `/projects/${project.slug}` }
                                className="px-8 py-3 text-xs tracking bg-transparent text-white font-lato font-bold border border-white uppercase transition-all duration-300"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}