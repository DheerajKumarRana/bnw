"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

export default function RelatedArticles({ articles }) {
    const [mounted, setMounted] = useState(false);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, [])

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap"
                rel="stylesheet"
            />

            <section className="bg-[#0a0a0a] px-5 lg:px-14 pt-14 pb-20">
                {/* Heading */ }
                <h2
                    className="text-white font-light uppercase tracking-[0.15em] text-2xl md:text-4xl mb-10 max-w-7xl mx-auto"
                    style={ { fontFamily: "'Cormorant Garamond', Georgia, serif" } }
                >
                    Related Articles
                </h2>

                {/* Outer wrapper: clips the swiper strictly */ }
                <div className="relative overflow-hidden max-w-7xl mx-auto">

                    {/* Left edge fade — blurs/fades cards as they exit left */ }
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-28 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                    {/* Right edge fade — blurs/fades cards as they exit right */ }
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-28 z-10 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                    <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                    {/* Prev button overlaid on left fade */ }
                    <button
                        ref={ prevRef }
                        aria-label="Previous slide"
                        className=" absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/[0.08] border border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.16] hover:border-white/40 disabled:opacity-25 disabled:cursor-not-allowed"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Next button overlaid on right fade */ }
                    <button
                        ref={ nextRef }
                        aria-label="Next slide"
                        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-white/[0.08] border border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.16] hover:border-white/40 disabled:opacity-25 disabled:cursor-not-allowed"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    {/* Swiper — overflow-hidden forces cards to clip inside wrapper */ }
                    {mounted && <Swiper
                        modules={ [Navigation] }
                        onBeforeInit={ (swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        } }
                        spaceBetween={ 16 }
                        slidesPerView={ 1 }
                        breakpoints={ {
                            640: { slidesPerView: 1.5, spaceBetween: 16 },
                            768: { slidesPerView: 2.2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        } }
                        style={ { overflow: "hidden" } }
                    >
                        { articles.map((article, i) => (
                            <SwiperSlide key={ i }>
                                <ArticleCard article={ article } />
                            </SwiperSlide>
                        )) }
                    </Swiper>}
                </div>
            </section>
        </>
    );
}

function ArticleCard({ article }) {
    return (
        <div
            className="group relative overflow-hidden rounded-[3px] cursor-pointer bg-neutral-900"
            style={ { aspectRatio: "4 / 3" } }
        >
            <Link
                target="_blank"
                href={ `/news/${article.slug}` }
            >
                {/* Image */ }
                { article.images && article.images.length > 0 && <img
                    src={ article.images[0] }
                    alt={ article.title }
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                /> }

                {/* Gradient overlay */ }
                <div
                    className="absolute inset-0"
                    style={ {
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.06) 100%)",
                    } }
                />

                {/* Text content */ }
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
                    <p
                        className="text-white/80 leading-relaxed mb-1 text-[1.05rem] tracking-[0.01em]"
                        style={ { fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 } }
                    >
                        { article.title }
                    </p>

                    <button
                        className="
            text-[#c9a96e] uppercase text-[0.65rem] tracking-[0.12em]
            bg-transparent border-0 p-0 cursor-pointer font-medium
            transition-all duration-300
            hover:tracking-[0.18em] hover:opacity-75
          "
                        style={ { fontFamily: "'Montserrat', sans-serif" } }
                    >
                        Read More &gt;
                    </button>
                </div>
            </Link>
        </div>
    );
}