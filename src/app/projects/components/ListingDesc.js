"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "400", label: "Real estate\nexperts" },
  { value: "18+", label: "Languages\nspoken" },
  { value: "7+", label: "Offices around\nthe world" },
  { value: "32B", superscript: "AED", label: "Gross\nDevelopment\nValue" },
];

function useCountUp(target, duration = 1800, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime= null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  animate,
}) {
  const numericValue = parseInt(stat.value.replace(/\D/g, ""));
  const suffix = stat.value.replace(/[0-9]/g, "");
  const count = useCountUp(numericValue, 1600, animate);

  return (
    <div
      className={`
        flex flex-col gap-3 px-8 py-6
        border-l border-[#b8975a]/30
        transition-all duration-700
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Number */}
      <div className="flex items-start gap-1">
        <span
          className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-light tracking-tight"
          style={{ color: "#b8975a" }}
        >
          {animate ? count : 0}
          {suffix}
        </span>
        {stat.superscript && (
          <span
            className="font-['Cormorant_Garamond'] text-sm mt-2 tracking-widest"
            style={{ color: "#b8975a" }}
          >
            {stat.superscript}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-[#9a9a9a] text-sm tracking-wide leading-relaxed whitespace-pre-line font-['Jost'] font-light">
        {stat.label}
      </p>
    </div>
  );
}

export default function ListingDesc() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <section
        ref={sectionRef}
        className="w-full py-20 px-6 md:px-16 bg-black"
      >
        <div className="max-w-5xl mx-auto">
          {/* Description */}
          <p
            className={`
              text-center text-[#cccccc] text-sm md:text-base leading-8 tracking-wide mb-16 max-w-3xl mx-auto
              font-lato 
              transition-all duration-700
              ${animate ? "opacity-100 translate-y-0"    : "opacity-0 translate-y-4"}
            `}
          >
            At BNW Real Estate Developments, we are focused on transforming visionary concepts into
            reality. With a steadfast commitment to innovation and excellence, we specialize in
            creating exceptional properties that stand out in the market, priding ourselves on
            high-end luxury projects that shape the future of Ras Al Khaimah and Dubai. In addition
            to our development capabilities, we offer strategic support to help you navigate and
            optimize your real estate investments. Partner with us to experience exceptional luxury
            living and be part of the transformative growth in the UAE real estate market.
          </p>

          {/* Stats — Desktop: horizontal, Mobile: vertical */}
          <div className="hidden md:grid grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} index={i} animate={animate} />
            ))}
          </div>

          <div className="flex flex-col md:hidden gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`
                  flex flex-col gap-3 py-5 px-4
                  border-t border-[#b8975a]/30
                  transition-all duration-700
                  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-1">
                  <span
                    className="font-['Cormorant_Garamond'] text-5xl font-light tracking-tight"
                    style={{ color: "#b8975a" }}
                  >
                    {parseInt(stat.value.replace(/\D/g, ""))}
                    {stat.value.replace(/[0-9]/g, "")}
                  </span>
                  {stat.superscript && (
                    <span
                      className="font-['Cormorant_Garamond'] text-sm mt-2 tracking-widest"
                      style={{ color: "#b8975a" }}
                    >
                      {stat.superscript}
                    </span>
                  )}
                </div>
                <p className="text-[#9a9a9a] text-sm tracking-wide font-['Jost'] font-light">
                  {stat.label.replace(/\n/g, " ")}
                </p>
              </div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-[#b8975a]/30" />
          </div>
        </div>
      </section>
    </>
  );
}