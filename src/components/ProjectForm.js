"use client";

import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function ProjectForm({ projectName = "" }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
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
        if (!formData.agreedToTerms) {
            setSubmitMessage("Please agree to the privacy policy.");
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage("");

        const payload = {
            ...formData,
            apartmentType: "",
            message: projectName ? `Submitted from Project Form on Project: ${projectName}` : "Submitted from Project Form",
            projectName: projectName
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
                    agreedToTerms: true,
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
        <div id="ProjectForm" className="py-16 px-6 md:py-28 bg-black flex items-center justify-center p-4">
            {/* Desktop Layout */}
            <div
                className="w-full max-w-6xl hidden md:flex items-center rounded-sm overflow-hidden"
                style={{ backgroundColor: "#f5ede4" }}
            >
                {/* Left: Magazine Image */}
                <div className="w-[380px] flex-shrink-0 flex items-center justify-center p-8">
                    <img
                        src="/form-left.webp"
                        alt="Acacia by FashionTV brochure"
                        className="w-full max-w-xs object-contain"
                        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))" }}
                    />
                    {/* Fallback placeholder if image not found */}
                </div>

                {/* Middle: Text */}
                <div className="flex-1 px-10 py-12">
                    <h2
                        className="text-5xl font-serif leading-none mb-6"
                        style={{ color: "#8b6f3e", fontFamily: "Georgia, serif", letterSpacing: "0.02em" }}
                    >
                        REGISTER
                        <br />
                        YOUR
                        <br />
                        INTEREST
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", maxWidth: "340px" }}>
                        From IHCL Taj to FashionTV and more, explore the most exclusive branded developments
                        across the UAE. Connect with us for personalised assistance and reserve a coveted
                        address in the fast-growing UAE real estate landscape. Get in touch!
                    </p>
                </div>

                {/* Right: Form */}
                <div className="w-[340px] flex-shrink-0 px-8 py-12">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Full Name"
                            className="w-full px-4 py-3 text-black text-sm outline-none bg-white border-0"
                            style={{ placeholder: "#999" }}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                            className="w-full text-black px-4 py-3 text-sm outline-none bg-white border-0"
                        />
                        <div className="bg-white">
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
                                    border: 'none',
                                    outline: 'none',
                                    color: 'black',
                                    backgroundColor: 'white'
                                }}
                                countrySelectorStyleProps={{
                                    buttonStyle: {
                                        padding: '0 12px',
                                        border: 'none',
                                        height: '100%',
                                        backgroundColor: '#fff'
                                    }
                                }}
                            />
                        </div>

                        <label className="flex items-start gap-2 mt-1 cursor-pointer">
                            <input
                                type="checkbox"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleChange}
                                required
                                className="mt-0.5 accent-amber-600 w-4 h-4 flex-shrink-0"
                            />
                            <span className="text-xs" style={{ color: "#444" }}>
                                I've read and agreed to the{" "}
                                <a href="#" className="underline" style={{ color: "#444" }}>
                                    Privacy Policy
                                </a>
                                *.
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 text-sm font-semibold tracking-widest text-white mt-2 disabled:opacity-50"
                            style={{ backgroundColor: "#c9a84c", letterSpacing: "0.15em" }}
                        >
                            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                        </button>
                        {submitMessage && (
                            <div className={`mt-2 p-2 text-center text-xs rounded ${submitMessage.includes("Thank you") ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Mobile Layout */}
            <div
                className="w-full max-w-sm md:hidden rounded-sm px-4 py-10"
                style={{ backgroundColor: "#f5ede4" }}
            >
                <h2
                    className="text-2xl font-serif text-center leading-tight mb-5"
                    style={{ color: "#8b6f3e", fontFamily: "Georgia, serif" }}
                >
                    REGISTER YOUR
                    <br />
                    INTEREST
                </h2>
                <p className="text-sm leading-relaxed mb-6 text-center" style={{ color: "#4a4a4a" }}>
                    From IHCL Taj to FashionTV and more, explore the most exclusive branded developments
                    across the UAE. Connect with us for personalised assistance and reserve a coveted address
                    in the fast-growing UAE real estate landscape. Get in touch!
                </p>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-black text-sm outline-none bg-white border-0"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full text-black px-4 py-3 text-sm outline-none bg-white border-0"
                    />
                    <div className="bg-white">
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
                                border: 'none',
                                outline: 'none',
                                color: 'black',
                                backgroundColor: 'white'
                            }}
                            countrySelectorStyleProps={{
                                buttonStyle: {
                                    padding: '0 12px',
                                    border: 'none',
                                    height: '100%',
                                    backgroundColor: '#fff'
                                }
                            }}
                        />
                    </div>

                    <label className="flex items-start gap-2 mt-1 cursor-pointer">
                        <input
                            type="checkbox"
                            name="agreedToTerms"
                            checked={formData.agreedToTerms}
                            onChange={handleChange}
                            required
                            className="mt-0.5 accent-amber-600 w-4 h-4 flex-shrink-0"
                        />
                        <span className="text-xs" style={{ color: "#444" }}>
                            I've read and agreed to the{" "}
                            <a href="#" className="underline" style={{ color: "#444" }}>
                                Privacy Policy
                            </a>
                            *.
                        </span>
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 text-sm font-semibold text-white mt-2 disabled:opacity-50"
                        style={{ backgroundColor: "#c9a84c", letterSpacing: "0.15em" }}
                    >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                    {submitMessage && (
                        <div className={`mt-2 p-2 text-center text-xs rounded ${submitMessage.includes("Thank you") ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {submitMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}