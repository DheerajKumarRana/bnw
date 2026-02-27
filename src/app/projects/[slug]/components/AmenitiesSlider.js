'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';


export default function AmenitiesSlider({ slides }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full py-12 px-4">
      {/* Title */ }
      <h2
        className="text-center text-3xl md:text-4xl lg:text-4xl tracking-[0.3em] text-black font-noto mb-12"
      >
        AMENITIES
      </h2>

      {/* Slider wrapper */ }
      <div className="relative max-w-6xl mx-auto px-10">
        {/* Prev Button */ }
        <button
          ref={ prevRef }
          className="amenities-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-[#1a2744] transition-colors"
          aria-label="Previous"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 1L3 6L8 11" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <Swiper
          modules={ [Navigation] }
          navigation={ {
            prevEl: '.amenities-prev',
            nextEl: '.amenities-next',
          } }
          spaceBetween={ 16 }
          slidesPerView={ 1 }
          breakpoints={ {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          } }
          loop={ true }
          className="amenities-swiper"
        >
          { slides.map((item, i) => (
            <SwiperSlide key={ `amen-${i}` }>
              <div className="border border-gray-200 flex flex-col items-center justify-center py-12 px-6 gap-6 min-h-[220px] hover:border-[#1a2744] transition-colors duration-300 cursor-default">
                <div className="flex justify-center">
                  <Image
                    src={ item.icon }
                    width={100}
                    height={100}
                    alt='icon Alt'
                    className='w-1/2 rounded-lg'
                  />
                </div>
                <div className="text-center">
                  <p
                    className="text-[#1a2744] text-xs tracking-[0.2em] leading-5"
                    style={ { fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif", fontWeight: 500 } }
                  >
                    { item.title }
                  </p>
                  {/* <p
                    className="text-[#1a2744] text-xs tracking-[0.2em] leading-5"
                    style={{ fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif", fontWeight: 500 }}
                  >
                    {item.subtitle}
                  </p> */}
                </div>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>

        {/* Next Button */ }
        <button
          ref={ nextRef }
          className="amenities-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-[#1a2744] transition-colors"
          aria-label="Next"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 1L9 6L4 11" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </section>
  );
}