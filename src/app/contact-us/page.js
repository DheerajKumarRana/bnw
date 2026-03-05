import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata = {
    title: 'Contact Us | BNW Developments',
    description: 'Get in touch with BNW Developments for premium real estate inquiries.'
};

export default function ContactUsPage() {
    return (
        <main className="bg-black min-h-screen font-lato text-white relative">
            <Navbar />

            {/* Nav Background Placeholder so the navbar doesn't cover content */}
            <div className="w-full h-24 lg:h-32 bg-black absolute top-0 left-0 z-0"></div>

            <div className="pt-24 lg:pt-32">
                <ContactSection />
            </div>

            {/* Google Maps Location */}
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.630141603362!2d77.2161742871582!3d28.565031800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35f9cfba257%3A0x313520a7ff9420e1!2sBnW%20Developments!5e0!3m2!1sen!2sin!4v1772519088210!5m2!1sen!2sin"
                    className="w-full h-full border-0 absolute inset-0 mix-blend-luminosity opacity-80"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <Footer />
        </main>
    );
}
