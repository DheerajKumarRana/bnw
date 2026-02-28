"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function NormalSlider({ slides }) {
    const swiperRef = useRef(null);

    return (
        <section className="relative w-full bg-[#faf8f5] py-20 px-6 overflow-hidden font-lato">
            {/* Background texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0zm39 0h1v1h-1zM0 39h1v1H0zm39 39h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />

            {/* Slider wrapper */}
            <div className="relative max-w-7xl mx-auto">
                {/* Left arrow */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full border border-[#b8975a] flex items-center justify-center transition-all duration-300 hover:bg-[#b8975a] hover:text-white text-[#b8975a]"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        el: ".swiper-custom-pagination",
                        clickable: true,
                        renderBullet: (_index, className) =>
                            `<span class="${className} custom-bullet"></span>`,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                    className="!pb-0"
                >
                    {slides.map((item, i) => (
                        <SwiperSlide key={`nor-slide-${i}`}>
                            <div className="group flex flex-col">
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-[3/4] rounded-sm">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gold corner accents */}
                                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#b8975a] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#b8975a] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </div>

                                {/* Label */}
                                <div className="mt-4 text-center">
                                    <p className="text-[11px] tracking-[0.2em] text-[#1a1612]/80 leading-relaxed">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right arrow */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full border border-[#b8975a] flex items-center justify-center transition-all duration-300 hover:bg-[#b8975a] hover:text-white text-[#b8975a]"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Custom pagination */}
            <div className="swiper-custom-pagination flex justify-center gap-2 mt-10" />

            <style>{`
                .swiper-custom-pagination .custom-bullet {
                    display: inline-block;
                    height: 1px;
                    width: 16px;
                    background: rgba(26, 22, 18, 0.2);
                    transition: width 0.5s, background 0.5s;
                    cursor: pointer;
                    border-radius: 0;
                    opacity: 1;
                }
                .swiper-custom-pagination .swiper-pagination-bullet-active.custom-bullet {
                    width: 32px;
                    background: #b8975a;
                }
            `}</style>
        </section>
    );
}