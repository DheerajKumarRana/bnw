"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
    return (
        <div className="relative overflow-hidden shadow-xl">
            <Swiper
                modules={ [Navigation, Pagination, Autoplay] }
                navigation
                pagination={ { clickable: true } }
                autoplay={ { delay: 5000, disableOnInteraction: true } }
                loop={ images.length > 1 }
                slidesPerView={ 1 }
                className={ `
                        [&_.swiper-button-prev]:bg-transparent
                        [&_.swiper-button-prev]:backdrop-blur-md
                        [&_.swiper-button-prev]:border 
                        [&_.swiper-button-prev]:border-white/60
                        [&_.swiper-button-prev]:text-white 
                        [&_.swiper-button-prev]:rounded-full 
                        [&_.swiper-button-prev]:w-8
                        [&_.swiper-button-prev]:h-8 
                        [&_.swiper-button-prev]:md:w-10
                        [&_.swiper-button-prev]:md:h-10 
                        [&_.swiper-button-prev]:flex 
                        [&_.swiper-button-prev]:items-center 
                        [&_.swiper-button-prev]:justify-center
                        [&_.swiper-button-prev]:transition 
                        [&_.swiper-button-prev]:hover:bg-white/10
                        [&_.swiper-button-prev]:p-2 
                        [&_.swiper-button-prev]:md:p-3 


                        [&_.swiper-button-next]:bg-transparent 
                        [&_.swiper-button-next]:backdrop-blur-md
                        [&_.swiper-button-next]:border 
                        [&_.swiper-button-next]:border-white/60
                        [&_.swiper-button-next]:text-white 
                        [&_.swiper-button-next]:rounded-full 
                        [&_.swiper-button-next]:w-8
                        [&_.swiper-button-next]:h-8 
                        [&_.swiper-button-next]:md:w-10
                        [&_.swiper-button-next]:md:h-10 
                        [&_.swiper-button-next]:flex 
                        [&_.swiper-button-next]:items-center 
                        [&_.swiper-button-next]:justify-center
                        [&_.swiper-button-next]:transition 
                        [&_.swiper-button-next]:hover:bg-white/10
                        [&_.swiper-button-next]:p-2 
                        [&_.swiper-button-next]:md:p-3 

                        [&_.swiper-button-prev]:after:text-lg
                        [&_.swiper-button-next]:after:text-lg

                        [&_.swiper-pagination-bullet]:bg-white/60 
                        [&_.swiper-pagination-bullet]:opacity-100
                        [&_.swiper-pagination-bullet-active]:bg-white 
                        [&_.swiper-pagination-bullet-active]:scale-125
                        `}
            >
                { images.map((img, i) => (
                    <SwiperSlide key={ i }>
                        <img
                            src={ typeof img === "string" ? img : img.url }
                            alt={ typeof img === "string" ? `Image ${i + 1}` : img.alt || `Image ${i + 1}` }
                            className="w-full object-cover"
                        />
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    );
}