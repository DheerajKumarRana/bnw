"use client";
import React, { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function RegisterInterestPopup({ onClose, projectName = "" }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        apartmentType: "",
        message: "",
        agreedToTerms: true,
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
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const payload = {
                ...formData,
                message: projectName ? `Submitted from Popup on Project: ${projectName} \n\n${formData.message}` : formData.message,
                projectName: projectName // Optional: passing as dedicated field
            };

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
                setTimeout(() => {
                    onClose(); // Auto close after success
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:py-10 overflow-y-auto">
            <div className="relative w-full max-w-[700px] bg-white rounded-md shadow-2xl p-6 md:p-10 animate-fade-in-up my-auto">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#d6b08a] text-white hover:bg-[#c49a6c] transition-colors z-10"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Header content */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-[32px] font-serif leading-tight mb-4" style={{ color: "#000", fontFamily: "Georgia, serif" }}>
                        Get Expert Advice On Radisson BLU <br />
                        Residences & Hotel
                    </h2>
                    <p className="text-sm text-gray-700 max-w-sm mx-auto">
                        Whether you're exploring investment opportunities or searching for your dream home, our Radisson BLU Residences & Hotel specialists are here to guide you every step of the way.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-1">Full Name*</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="Full Name"
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded outline-none focus:border-[#d6b08a] transition-colors text-black placeholder:text-gray-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-black mb-1">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded outline-none focus:border-[#d6b08a] transition-colors text-black placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-bold text-black mb-1">Phone Number*</label>
                        <div className="phone-input-container">
                            <PhoneInput
                                defaultCountry="ae"
                                value={formData.phoneNumber}
                                onChange={(phone) => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                required
                                inputStyle={{
                                    width: '100%',
                                    padding: '12px 12px',
                                    paddingLeft: '12px',
                                    fontSize: '14px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '0 4px 4px 0',
                                    outline: 'none',
                                    color: 'black'
                                }}
                                countrySelectorStyleProps={{
                                    buttonStyle: {
                                        padding: '0 12px',
                                        border: '1px solid #e5e7eb',
                                        borderRight: 'none',
                                        borderRadius: '4px 0 0 4px',
                                        height: '100%',
                                        backgroundColor: '#fff'
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Apartment Type */}
                    <div>
                        <label className="block text-sm font-bold text-black mb-1">Apartment Type</label>
                        <div className="relative">
                            <select
                                name="apartmentType"
                                value={formData.apartmentType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded outline-none focus:border-[#d6b08a] transition-colors text-black appearance-none bg-white cursor-pointer"
                            >
                                <option value="" disabled>Select Apartment Type</option>
                                <option value="Studio">Studio</option>
                                <option value="1 Bedroom">1 Bedroom</option>
                                <option value="2 Bedroom">2 Bedroom</option>
                                <option value="3 Bedroom">3 Bedroom</option>
                                <option value="Penthouse">Penthouse</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <span className="text-black text-xs">▼</span>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-bold text-black mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="3"
                            placeholder="Please specify if you want to add something for us to understand better."
                            className="w-full px-4 py-3 text-sm border border-gray-200 rounded outline-none focus:border-[#d6b08a] transition-colors text-black placeholder:text-gray-400 resize-none"
                        ></textarea>
                    </div>

                    {/* Terms checkbox */}
                    <label className="flex items-start gap-2 cursor-pointer pt-2 group">
                        <input
                            type="checkbox"
                            name="agreedToTerms"
                            checked={formData.agreedToTerms}
                            onChange={handleChange}
                            required
                            className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer"
                            style={{ accentColor: '#8a7751' }}
                        />
                        <span className="text-xs text-black font-medium group-hover:text-gray-700 transition-colors">
                            You agree to our <a href="#" className="underline">terms and condition</a> by filling this form.
                        </span>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 text-sm font-bold text-white uppercase tracking-widest mt-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                        style={{ backgroundColor: "#d7b47b" }}
                    >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                    </button>

                    <div className="text-center mt-2">
                        <span className="text-xs text-black">*Direct Developer Offer. No Commission.</span>
                    </div>

                    {submitMessage && (
                        <div className={`mt-4 p-3 text-center text-sm rounded ${submitMessage.includes("Thank you") ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {submitMessage}
                        </div>
                    )}

                </form>
            </div>

            <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
        </div>
    );
}
