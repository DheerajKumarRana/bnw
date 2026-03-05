"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/submit-interest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    message: `Contact Us Page Form - Message: ${formData.message}`
                })
            });
            const data = await response.json();
            if (response.ok) {
                setSubmitMessage('Thank you! We will get in touch soon.');
                setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
            } else {
                setSubmitMessage(`Failed: ${data.message || 'Unknown error'}`);
            }
        } catch (error) {
            setSubmitMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-5 relative z-10 bg-black">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center mb-16">
                    Talk to an expert today
                </h1>

                <div className="border border-[#daaf7d]/30 rounded-sm overflow-hidden flex flex-col lg:flex-row bg-[#151515]">

                    {/* LEFT SIDE - Contact Info */}
                    <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#daaf7d]/20 bg-[#1a1a1a]/50">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#daaf7d] p-3 rounded-sm flex-shrink-0 text-black">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col pt-1 cursor-pointer hover:text-[#daaf7d] transition-colors text-gray-300">
                                    <a href="tel:+919899458541" className="mb-1">+91 98994 58541</a>
                                    <a href="tel:+918766290930">+91 8766290930</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#daaf7d] p-3 rounded-sm flex-shrink-0 text-black">
                                    <Mail size={20} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <a href="mailto:info@bnw.ae" className="hover:text-[#daaf7d] transition-colors text-gray-300">info@bnw.ae</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#daaf7d] p-3 rounded-sm flex-shrink-0 text-black">
                                    <MapPin size={20} />
                                </div>
                                <div className="flex flex-col pt-1 max-w-[280px] text-sm leading-relaxed text-gray-300">
                                    <p className="font-bold text-white mb-2 text-base">Office</p>
                                    Ground Floor, A7, Ring Rd, Vikram Vihar, Part 4, Lajpat Nagar, New Delhi, Delhi 110024
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <span className="text-sm font-bold text-white mb-4 block">Follow us</span>
                            <div className="flex gap-4">
                                <Instagram size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                                <Facebook size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                                <Linkedin size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                                <Youtube size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                                <Twitter size={18} className="text-white hover:text-[#daaf7d] cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Form */}
                    <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 bg-[#111111]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="w-full bg-transparent border border-white/10 p-4 text-white outline-none focus:border-[#daaf7d] transition-colors text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-transparent border border-white/10 p-4 text-white outline-none focus:border-[#daaf7d] transition-colors text-sm"
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
                            <div className="bg-transparent border border-white/10 focus-within:border-[#daaf7d] transition-colors dark-phone-input">
                                <PhoneInput
                                    defaultCountry="ae"
                                    value={formData.phoneNumber}
                                    onChange={(phone) => setFormData(prev => ({ ...prev, phoneNumber: phone }))}
                                    required
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-transparent border border-white/10 p-4 text-white outline-none focus:border-[#daaf7d] transition-colors text-sm resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-gradient-to-r from-[#e8c69f] to-[#daaf7d] text-black font-bold uppercase tracking-widest text-xs py-4 px-10 mt-4 self-start hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                            </button>
                            {submitMessage && (
                                <div className="mt-4 text-sm text-[#daaf7d]">
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
