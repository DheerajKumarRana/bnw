'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper styles in your global CSS or _app.js:
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export default function GallerySlider({ slides }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const mainSwiperRef = useRef(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-10 font-noto">
            {/* Title */ }
            <h2
                className="text-center text-3xl md:text-4xl mb-6 tracking-wide font-noto text-black"
            >
                Gallery
            </h2>

            {/* Main Swiper */ }
            <div className="relative rounded-sm overflow-hidden mb-3">
                <Swiper
                    modules={ [Navigation, Thumbs, FreeMode] }
                    thumbs={ { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } }
                    navigation={ {
                        prevEl: '.gallery-prev',
                        nextEl: '.gallery-next',
                    } }
                    loop={ true }
                    className="w-full aspect-[16/9] md:aspect-[16/8]"
                    onSwiper={ (swiper) => (mainSwiperRef.current = swiper) }
                >
                    { slides.map((slide, i) => (
                        <SwiperSlide key={ `gal-slide-${i}` }>
                            <img
                                src={ slide }
                                alt="Image"
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    )) }
                </Swiper>
            </div>

            {/* Thumbnail Swiper */ }
            <div className="relative">
                {/* Prev Arrow */ }
                <button
                    className="gallery-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white shadow-md rounded-full transition -translate-x-1/2"
                    aria-label="Previous"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M9 2L4 7L9 12" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <Swiper
                    modules={ [FreeMode, Navigation, Thumbs] }
                    onSwiper={ setThumbsSwiper }
                    spaceBetween={ 10 }
                    slidesPerView={ 2 }
                    freeMode={ true }
                    watchSlidesProgress={ true }
                    loop={ true }
                    breakpoints={ {
                        640: { slidesPerView: 4 },
                    } }
                    className="thumbs-swiper px-4"
                >
                    { slides.map((slide) => (
                        <SwiperSlide key={ slide.id }>
                            <div className="overflow-hidden rounded-sm cursor-pointer aspect-[16/9]">
                                <img
                                    src={ slide }
                                    alt={ "img" }
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    )) }
                </Swiper>

                {/* Next Arrow */ }
                <button
                    className="gallery-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white shadow-md rounded-full transition translate-x-1/2"
                    aria-label="Next"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2L10 7L5 12" stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

         
        </section>
    );
}