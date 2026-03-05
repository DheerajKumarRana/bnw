"use client";

import React, { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const WynnSection = () => {
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
            message: "Submitted from Home Page Wynn Section",
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

    return (
        <section className="bg-white w-full">
            <div className="flex flex-col lg:flex-row w-full min-h-[600px]">

                {/* Left Side - Image with Text */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden group">
                    <img
                        src="/SECOND-SECTION.jpg"
                        alt="Wynn Al Marjan Island"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Gradient overlay to make text readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 lg:p-12">
                        <h3 className="text-white text-2xl md:text-4xl font-serif mb-2 leading-tight">
                            Your Address Steps Away from Wynn Casino..
                        </h3>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24" style={{ backgroundColor: "#000000" }}>
                    <div className="w-full max-w-md">
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#daaf7d] mb-4 uppercase tracking-wider" style={{ fontFamily: "Georgia, serif" }}>
                                Register Your <br /> Interest
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Experience luxury living at its finest. Connect with our experts to secure your address in the most sought-after development.
                            </p>
                        </div>

                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                                .wynn-phone-input .react-international-phone-input {
                                    width: 100%;
                                    padding: 16px;
                                    font-size: 14px;
                                    border: none;
                                    outline: none;
                                    color: white;
                                    background-color: transparent;
                                }
                                .wynn-phone-input .react-international-phone-country-selector-button {
                                    padding: 0 16px;
                                    border: none;
                                    border-right: 1px solid rgba(255,255,255,0.1);
                                    height: 100%;
                                    background-color: transparent !important;
                                }
                            `}} />
                            <div className="bg-transparent border border-white/20 focus-within:border-[#daaf7d] transition-colors wynn-phone-input">
                                <PhoneInput
                                    defaultCountry="ae"
                                    value={formData.phoneNumber}
                                    onChange={(phone) => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                    required
                                />
                            </div>

                            <label className="flex items-start gap-3 mt-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreedToTerms"
                                    checked={formData.agreedToTerms}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 accent-[#daaf7d]"
                                />
                                <span className="text-sm text-gray-400">
                                    I've read and agreed to the{" "}
                                    <a href="#" className="underline hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                    *.
                                </span>
                            </label>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="thm-btn-gold w-full py-4 uppercase font-bold text-sm tracking-widest mt-4 hover:bg-white hover:text-black transition-all duration-500 shadow-lg disabled:opacity-50"
                            >
                                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            </button>

                            {submitMessage && (
                                <div className={`mt-2 p-3 text-center text-sm rounded ${submitMessage.includes("Thank you") ? 'bg-green-100/20 text-green-400' : 'bg-red-100/20 text-red-400'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WynnSection;
