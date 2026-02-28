import Image from "next/image";
import Link from "next/link";

const SingleListingHero = ({ project }) => {
    return (
        <>
            {/* Mobile Hero */ }
            <section className="lg:hidden relative bg-black pb-10 h-[60vh] flex items-end">
                <div className="h-full w-full absolute overflow-hidden">
                    {project.image && <img
                        alt="Exploring Dubai"
                        src={`${project.image}`}
                        className="h-full w-full object-cover object-center"
                    />}
                    <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                </div>

                <div className="container mx-auto px-5 mt-8 z-10 relative h-[65%] flex flex-col justify-between">
                    {/* Breadcrumb */ }
                    <nav className="flex items-center gap-2 text-md font-lato text-white/70 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white">BNW Projects</span>
                    </nav>
                    <div className="flex flex-col items-center justify-center gap-2 text-center mb-5">
                        <div>
                            <h1 className="text-3xl font-serif font-light text-white tracking-wide">
                                { project.title }
                            </h1>
                        </div>
                        {/* Animated Arrow */ }
                        <div className="animate-bounce-slow mt-0"
                            style={ {
                                animation: "arrowBounce 1.8s ease-in-out infinite",
                            } }>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white/80"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={ 1.5 }
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop Hero */ }
            <section className="hidden lg:block relative h-screen w-full overflow-hidden">
                {project.image && <Image
                    src={`${project.image}`}
                    alt="BNW Developments"
                    width={ 1920 }
                    height={ 1080 }
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />}

                {/* Dark overlay for depth */ }
                <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />


                {/* Breadcrumb — top left */ }
                <nav className="absolute top-36 max-w-7xl left-40 z-50 flex items-center gap-2 text-sm text-white/70">
                    <Link href="/" className="hover:text-white transition-colors duration-200">
                        Home
                    </Link>
                    <span className="text-white/40">/</span>
                    <Link href="/projects" className="hover:text-white transition-colors duration-200">BNW Projects</Link>
                    { project.listingPageTitle &&
                        <>
                            <span className="text-white/40">/</span>
                            <span className="text-white">{ project.listingPageTitle }</span>
                        </>
                    }
                </nav>

                {/* Centered Content */ }
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 z-10">
                    {/* Gradient Overlay at bottom */ }
                    <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                    {/* Title */ }
                    <h1 className="text-5xl xl:text-6xl font-noto text-white tracking-widest text-center drop-shadow-lg">
                        {project.title}
                    </h1>

                    {/* Animated bounce arrow */ }
                    <div
                        className="mt-4"
                        style={ {
                            animation: "arrowBounce 1.8s ease-in-out infinite",
                        } }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-white/90"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={ 1.2 }
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>


        </>
    );
};

export default SingleListingHero;