"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Blogs from "@/components/Blogs";
import { usePopup } from "@/providers/PopupProvider";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const OurVerticals = ({ articles, showCTA = true }) => {
    const { openPopup } = usePopup();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        agreedToTerms: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.agreedToTerms) {
            setSubmitMessage("Please agree to the privacy policy.");
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage("");

        const payload = {
            ...formData,
            apartmentType: "",
            message: "Submitted from Our Verticals Form",
        };

        try {
            const response = await fetch("/api/submit-interest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage("Thank you for your interest! We will contact you soon.");
                setFormData({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    agreedToTerms: false,
                });
            } else {
                setSubmitMessage(`Failed to submit: ${data.message || "Unknown error"}`);
            }
        } catch (error) {
            setSubmitMessage("An error occurred while submitting the form. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 } // Mobile breakpoint
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 } // Small mobile breakpoint
            }
        ]
    };

    const verticals = [
        { name: "BNW Developments", img: "/vertical-1.jpg" },
        { name: "BNW Mortgages", img: "/vertical-2.jpg" },
        { name: "BNW Vacation homes", img: "/vertical-3.jpg" },
        { name: "BNW Entertainment", img: "/vertical-4.jpg" },
    ];

    return (
        <section className="py-20 bg-[#151515]">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl md:text-5xl font-noto text-center mb-5 text-white">Our Verticals</h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
                    At BNW, we leverage our diverse expertise to deliver innovative solutions across multiple sectors.
                </p>

                <div className="verticals-slider">
                    <Slider {...settings}>
                        {verticals.map((v, i) => (
                            <div key={i} className="px-2 pb-5">
                                <div className="relative overflow-hidden group h-[300px] md:h-[500px] w-full card-shine border border-white/10">
                                    <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                    <div className="absolute bottom-10 left-0 w-full text-center">
                                        <h3 className="text-white text-xl font-bold uppercase tracking-wider">{v.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {articles && articles.length > 0 && <Blogs articles={articles} />}

            {/* CTA Section (Register Your Interest Background) */}
            {showCTA && (
                <div className="mt-20 relative bg-[#151515] lg:py-0 py-20 min-h-[480px] flex items-center border-t border-white/5">
                    <div className="container mx-auto px-5 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-[45%_25%_30%] gap-10 lg:gap-5 justify-center items-center">
                            {/* 1. Brochure Image (Left) */}
                            <div className="hidden lg:block lg:relative lg:w-full lg:h-[480px]">
                                <img
                                    src="https://bnw.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleft.fcfa48c1.png&w=1920&q=75"
                                    alt="Brochure"
                                    className="lg:absolute lg:-left-10 lg:top-1/2 lg:-translate-y-1/2 object-contain w-full h-[120%] pointer-events-none"
                                />
                            </div>

                            {/* 2. Text Content (Center) */}
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl md:text-[52px] font-noto text-[#daaf7d] mb-6 uppercase leading-[1.1] tracking-wider">
                                    Register <br className="hidden lg:block" /> Your <br className="hidden lg:block" /> Interest
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                                    From IHCL Taj to FashionTV and more, explore the most exclusive branded developments across the UAE. Connect with us for personalised assistance and reserve a coveted address in the fast-growing UAE real estate landscape. Get in touch!
                                </p>
                            </div>

                            {/* 3. Registration Form (Right) */}
                            <div className="w-full">
                                <form className="flex flex-col gap-4 max-w-md mx-auto lg:ml-auto lg:mr-0" onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Full Name"
                                            className="w-full bg-transparent border border-white/20 p-4 text-white outline-none focus:border-[#daaf7d] transition-colors"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email"
                                            className="w-full bg-transparent border border-white/20 p-4 text-white outline-none focus:border-[#daaf7d] transition-colors"
                                        />
                                        <style dangerouslySetInnerHTML={{
                                            __html: `
                                            .dark-phone-input .react-international-phone-input {
                                                width: 100%;
                                                padding: 16px;
                                                font-size: 14px;
                                                border: none;
                                                outline: none;
                                                color: white;
                                                background-color: transparent;
                                            }
                                            .dark-phone-input .react-international-phone-country-selector-button {
                                                padding: 0 16px;
                                                border: none;
                                                border-right: 1px solid rgba(255,255,255,0.1);
                                                height: 100%;
                                                background-color: transparent !important;
                                            }
                                        `}} />
                                        <div className="bg-transparent border border-white/20 focus-within:border-[#daaf7d] transition-colors dark-phone-input">
                                            <PhoneInput
                                                defaultCountry="ae"
                                                value={formData.phoneNumber}
                                                onChange={(phone) => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                                required
                                            />
                                        </div>
                                        <div className="flex items-start gap-3 mt-4">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                name="agreedToTerms"
                                                checked={formData.agreedToTerms}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 accent-[#daaf7d]"
                                            />
                                            <label htmlFor="privacy" className="text-xs text-gray-400 leading-normal cursor-pointer">
                                                I've read and agreed to the <span className="underline hover:text-white transition-colors cursor-pointer">Privacy Policy</span>*.
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="thm-btn-gold w-full py-4 uppercase font-bold text-sm tracking-widest mt-4 hover:bg-white hover:text-black transition-all duration-500 shadow-lg disabled:opacity-50"
                                        >
                                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                                        </button>
                                        {submitMessage && (
                                            <div className={`mt-2 p-2 text-center text-xs rounded ${submitMessage.includes("Thank you") ? 'bg-green-100/20 text-green-400' : 'bg-red-100/20 text-red-400'}`}>
                                                {submitMessage}
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default OurVerticals;
