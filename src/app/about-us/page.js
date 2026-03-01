import React from 'react';
import Link from 'next/link';
import ProjectForm from "@/components/ProjectForm";
import OurVerticals from "@/components/OurVerticals";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'About Us | BNW Developments, Luxury Real Estate Developer',
    description: 'We are a luxury real estate development company in UAE. Our properties are built to give you an elevated lifestyle marked by elegance and exclusivity.'
};

export default function AboutUsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="aboutNew bg-black text-white min-h-screen">
                {/* Nav Background Placeholder */}
                <div className="navBg ... absolute top-0 left-0 w-full h-24 z-10 pointer-events-none hidden"></div>

                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/about-us/aboutBg.69c79dab.png"
                            alt="Background Image of people"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    <div className="absolute top-28 lg:top-40 left-0 w-full z-20">
                        <div className="container mx-auto px-5">
                            <div className="flex gap-4 text-sm uppercase tracking-widest text-[#daaf7d]">
                                <Link href="/" className="hover:text-white transition-colors opacity-70">Home</Link>
                                <span className="opacity-70">/</span>
                                <span className="text-white">About Us</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 container mx-auto px-5 text-center mt-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif leading-tight max-w-4xl mx-auto">
                            At BNW Developments, luxury is not just a <br className="hidden lg:block" /> promise; it is a hallmark.
                        </h1>
                    </div>

                    <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
                        <a href="#aboutSection" className="animate-bounce p-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#fff" fillRule="evenodd" stroke="#fff" d="M12 18.5a.6.6 0 0 0 .42-.17l8-8a.6.6 0 1 0-.84-.86L12 16.63l-7.58-7.16a.6.6 0 1 0-.84.86l8 8a.6.6 0 0 0 .42.17z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </section>

                {/* About text section */}
                <div id="aboutSection" className="py-20 lg:py-32 bg-black">
                    <div className="container mx-auto px-5 max-w-5xl">
                        <h2 className="text-3xl md:text-4xl text-[#daaf7d] font-serif mb-12 leading-relaxed text-center">
                            Our approach is bespoke, reflecting a commitment <br className="hidden lg:block" />to creating spaces that are not just residences, <br className="hidden lg:block" />but sanctuaries of luxury and sophistication.
                        </h2>
                        <div className="text-center text-gray-300 space-y-6 text-lg tracking-wide font-light max-w-4xl mx-auto">
                            <p>From the majestic skylines of Dubai to serene suburban enclaves, our developments epitomize elegance and exclusivity, tailored to meet the discerning tastes of our distinguished clientele.</p>
                            <p>Like a bespoke suit, we tailor our services to fit your investment parameters perfectly, ensuring your real estate journey reflects your individuality. With this pioneering approach, we're able to introduce innovative strategies like Collaborative Investment Partnerships, Multi-Unit Investments, and other exclusive investment opportunities to the forefront.</p>
                            <p>From awe-inspiring skyscrapers to elegant Seaview penthouses, our developments embody an elevated lifestyle marked by elegance and exclusivity.</p>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <section className="py-16 my-10 relative">
                    <div className="container mx-auto px-5 max-w-5xl">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20 border border-white/20 py-10 rounded-sm bg-white/5 backdrop-blur-md">
                            <div className="py-5">
                                <h3 className="text-5xl md:text-6xl text-[#daaf7d] font-serif mb-4 drop-shadow-lg">02</h3>
                                <p className="text-xl font-light text-gray-300 uppercase tracking-widest text-sm">Communities in UAE</p>
                            </div>
                            <div className="py-5">
                                <h3 className="text-5xl md:text-6xl text-[#daaf7d] font-serif mb-4 drop-shadow-lg">06</h3>
                                <p className="text-xl font-light text-gray-300 uppercase tracking-widest text-sm">New Residential Projects</p>
                            </div>
                            <div className="py-5">
                                <h3 className="text-4xl md:text-5xl text-[#daaf7d] font-serif mb-4 mt-2 drop-shadow-lg">32 Bn. AED</h3>
                                <p className="text-xl font-light text-gray-300 uppercase tracking-widest text-sm">Gross Development Value</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Delivering luxury section */}
                <section className="relative my-20">
                    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
                        <img src="/about-us/deliveringLuxuryBg.6bf306e4.png" alt="Delivering Luxury" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-x-0 bottom-10 md:bottom-20 z-10 flex justify-center">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white uppercase text-center tracking-[0.2em] leading-relaxed px-5 max-w-5xl drop-shadow-2xl">
                                Delivering Luxury beyond measure
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Info section white bg */}
                <section className="py-24 bg-white text-black text-center">
                    <div className="container mx-auto px-5 max-w-4xl">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#b89569] mb-10 leading-snug">
                            At BNW Developments, we are not just building homes; we are creating legacies.
                        </h3>
                        <div className="space-y-6 text-xl text-gray-700 font-light leading-relaxed">
                            <p>We offer innovative and leading-edge solutions, specializing in 'exclusive luxury residences' for the property development and investment sector.</p>
                            <p>Our focus is on minimizing risk, enhancing efficiency, and maximizing profitability, ensuring that our clients receive unparalleled value and a seamless experience.</p>
                        </div>
                    </div>
                </section>

                {/* Values Cards */}
                <section className="py-20 bg-[#f9f9f9]">
                    <div className="container mx-auto px-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full rounded-sm">
                                <div className="relative overflow-hidden">
                                    <img src="/about-us/1.e6f15730.png" alt="OUR VISION" className="w-full h-72 object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col bg-white">
                                    <h4 className="text-[#b89569] text-xl font-serif uppercase mb-4 tracking-widest text-center">Our Vision</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-center text-sm">To revolutionize the real estate industry by redefining the transaction process and apsire to rank among the top five real estate brands in UAE.</p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full rounded-sm">
                                <div className="relative overflow-hidden">
                                    <img src="/about-us/2.7122f95c.png" alt="OUR MISSION" className="w-full h-72 object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col bg-white">
                                    <h4 className="text-[#b89569] text-xl font-serif uppercase mb-4 tracking-widest text-center">Our Mission</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-center text-sm">Through innovation, dedication, and exceptional service, we aim to set new standards and exceed the expectations of our clients and stakeholders, shaping the future of real estate.</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full rounded-sm">
                                <div className="relative overflow-hidden">
                                    <img src="/about-us/3.855f4be2.png" alt="INTEGRITY" className="w-full h-72 object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col bg-white">
                                    <h4 className="text-[#b89569] text-xl font-serif uppercase mb-4 tracking-widest text-center">Integrity</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-center text-sm">Integrity is at the heart of our mission as we endeavor to shape futures with steadfast dedication, transcending mere transactions.</p>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full rounded-sm">
                                <div className="relative overflow-hidden">
                                    <img src="/about-us/4.40812383.png" alt="CORE VALUE" className="w-full h-72 object-cover object-bottom transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col bg-white">
                                    <h4 className="text-[#b89569] text-xl font-serif uppercase mb-4 tracking-widest text-center">Core Value</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-center text-sm">Our core value is to build community, deliver outstanding support, forge collaborative partnerships, consistently surpass expectations, innovate with enjoyment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ankur Section */}
                <section className="relative my-0 bg-black text-white overflow-hidden min-h-[600px] flex items-center">
                    <img src="/about-us/ankur-sir-chairman2.e182f787.jpg" alt="Chairman" className="w-full h-full object-cover absolute inset-0 hidden lg:block opacity-70 object-right" />
                    <img src="/about-us/ankur-sir-chairmanmob.43050f5c.jpg" alt="Chairman Mobile" className="w-full h-full object-cover absolute inset-0 lg:hidden opacity-60 object-top" />

                    <div className="relative z-10 w-full container mx-auto px-5 py-24 lg:py-40 flex lg:justify-end">
                        <div className="max-w-xl text-left lg:mr-20 bg-black/40 lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 31" className="h-16 mb-8 text-[#daaf7d] opacity-80"><path fill="currentColor" d="M19.38 8.438V.039h14.3v18.212h-3.54q.48 3.33 3.54 5.178v6.81q-4.38-1.088-7.96-4.003-3.38-2.916-4.88-7.05-1.46-4.264-1.46-10.748m-19.06 0V.039h14.3v18.212H11.1q.38 3.33 3.52 5.178v6.81q-4.36-1.088-7.94-4.003-3.54-2.916-4.9-7.05Q.32 14.922.32 8.438"></path></svg>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#daaf7d] leading-snug mb-8 drop-shadow-md">
                                The function of leadership is to produce more leaders, not more followers.
                            </h3>
                            <p className="text-gray-200 font-light leading-relaxed mb-10 text-lg drop-shadow">
                                At BNW, our mission is clear: bridge the gap between investors and the most lucrative opportunities in the real estate landscape. We're dedicated to maximizing returns on investment (ROI) by providing tailored guidance and in-depth market insights. With our personalized approach, we empower clients to navigate the dynamic real estate market effectively, ensuring they capitalize on the best investments available.
                            </p>
                            <div className="mt-8 border-l-2 border-[#daaf7d]/50 pl-6">
                                <p className="text-xl font-serif tracking-widest text-white uppercase drop-shadow-md">Ankur Aggarwal</p>
                                <p className="text-[#daaf7d] text-xs tracking-[0.2em] uppercase font-bold mt-2">CHAIRMAN & FOUNDER</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Verticals Section */}
                <OurVerticals showCTA={false} />

                {/* Menu Links Cards */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="#" className="border border-white/10 hover:border-[#daaf7d] bg-[#0a0a0a] transition-colors p-10 flex items-center justify-center group h-40">
                                <h4 className="text-2xl font-serif text-white group-hover:text-[#daaf7d] transition-colors text-center tracking-widest">Our<br />team</h4>
                            </Link>
                            <Link href="#" className="border border-white/10 hover:border-[#daaf7d] bg-[#0a0a0a] transition-colors p-10 flex items-center justify-center group h-40">
                                <h4 className="text-2xl font-serif text-white group-hover:text-[#daaf7d] transition-colors text-center tracking-widest">Our<br />leadership</h4>
                            </Link>
                            <Link href="#" className="border border-white/10 hover:border-[#daaf7d] bg-[#0a0a0a] transition-colors p-10 flex items-center justify-center group h-40">
                                <h4 className="text-2xl font-serif text-white group-hover:text-[#daaf7d] transition-colors text-center tracking-widest">News &<br />media</h4>
                            </Link>
                            <Link href="#" className="border border-white/10 hover:border-[#daaf7d] bg-[#0a0a0a] transition-colors p-10 flex items-center justify-center group h-40">
                                <h4 className="text-2xl font-serif text-white group-hover:text-[#daaf7d] transition-colors text-center tracking-widest">Career<br />at BNW</h4>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Project Form for Register Your Interest */}
                <ProjectForm />

            </div>
            <Footer />
        </main>
    );
}
