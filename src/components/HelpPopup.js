"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const HelpPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        enquiry: "",
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

    const handlePhoneChange = (phone) => {
        setFormData((prev) => ({ ...prev, phoneNumber: phone }));
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
            // Send formType so the backend / Google Script can differentiate and save to Sheet2
            formType: "HelpForm",
            message: "Submitted from Help/Expert Form",
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
                setSubmitMessage("Thank you for your enquiry! We will get back to you shortly.");
                setFormData({
                    fullName: "",
                    phoneNumber: "",
                    enquiry: "",
                    agreedToTerms: false,
                });
                // Optional: Close after 3 seconds
                setTimeout(() => {
                    onClose();
                }, 3000);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Popup Container */}
            <div className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 text-gray-500 hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Left Side - Image (Optional, hidden on small screens) */}
                <div className="hidden md:block md:w-5/12 relative">
                    <img
                        src="/popup-bg.jpg" // Using same image as Register popup or maybe fallback
                        alt="Expert Help"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-[#151515]');
                        }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                        <div className="text-center">
                            <h3 className="text-white text-2xl font-serif mb-2 font-bold tracking-wider">EXPERT HELP</h3>
                            <p className="text-gray-300 transform font-semibold text-sm">We're here to assist you</p>
                            <div className="w-12 h-[2px] bg-[#daaf7d] mx-auto mt-4"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-7/12 p-8 overflow-y-auto">
                    <div className="mb-6">
                        <h2 className="text-3xl font-noto text-black uppercase tracking-wider mb-2">GET EXPERT HELP</h2>
                        <p className="text-gray-600 text-sm">Fill out the form below and our experts will reach out to you.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-black text-sm outline-none focus:border-[#daaf7d] focus:bg-white transition-all"
                            />
                        </div>

                        <div>
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                .help-phone-input .react-international-phone-input {
                                    width: 100%;
                                    padding: 12px;
                                    font-size: 14px;
                                    border: none;
                                    outline: none;
                                    color: black;
                                    background-color: transparent;
                                }
                                .help-phone-input .react-international-phone-country-selector-button {
                                    padding: 0 12px;
                                    border: none;
                                    border-right: 1px solid #e5e7eb;
                                    height: 100%;
                                    background-color: transparent !important;
                                }
                            `}} />
                            <div className="bg-gray-50 border border-gray-200 focus-within:border-[#daaf7d] focus-within:bg-white transition-all help-phone-input">
                                <PhoneInput
                                    defaultCountry="ae"
                                    value={formData.phoneNumber}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="enquiry"
                                value={formData.enquiry}
                                onChange={handleChange}
                                placeholder="Your Enquiry"
                                required
                                rows="3"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-black text-sm outline-none focus:border-[#daaf7d] focus:bg-white transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="flex items-start gap-3 mt-2">
                            <input
                                type="checkbox"
                                id="helpPrivacy"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleChange}
                                required
                                className="mt-1 accent-[#daaf7d]"
                            />
                            <label htmlFor="helpPrivacy" className="text-xs text-gray-600 leading-normal cursor-pointer">
                                I've read and agreed to the <a href="#" className="underline hover:text-black transition-colors">Privacy Policy</a>*.
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#151515] text-white py-4 uppercase font-bold text-sm tracking-[0.2em] hover:bg-[#daaf7d] transition-colors duration-300 disabled:opacity-50 mt-2"
                        >
                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                        </button>

                        {submitMessage && (
                            <div className={`mt-4 p-3 text-center text-sm rounded ${submitMessage.includes("Thank you") ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HelpPopup;
