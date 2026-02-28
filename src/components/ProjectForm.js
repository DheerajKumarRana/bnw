"use client";

import { useState } from "react";

export default function ProjectForm() {
    const [agreed, setAgreed] = useState(true);
    const [phone, setPhone] = useState("");

    return (
        <div id="ProjectForm" className="py-16 px-6 md:py-28 bg-black flex items-center justify-center p-4">
            {/* Desktop Layout */ }
            <div
                className="w-full max-w-6xl hidden md:flex items-center rounded-sm overflow-hidden"
                style={ { backgroundColor: "#f5ede4" } }
            >
                {/* Left: Magazine Image */ }
                <div className="w-[380px] flex-shrink-0 flex items-center justify-center p-8">
                    <img
                        src="/form-left.webp"
                        alt="Acacia by FashionTV brochure"
                        className="w-full max-w-xs object-contain"
                        style={ { filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))" } }
                    />
                    {/* Fallback placeholder if image not found */ }
                </div>

                {/* Middle: Text */ }
                <div className="flex-1 px-10 py-12">
                    <h2
                        className="text-5xl font-serif leading-none mb-6"
                        style={ { color: "#8b6f3e", fontFamily: "Georgia, serif", letterSpacing: "0.02em" } }
                    >
                        REGISTER
                        <br />
                        YOUR
                        <br />
                        INTEREST
                    </h2>
                    <p className="text-sm leading-relaxed" style={ { color: "#4a4a4a", maxWidth: "340px" } }>
                        From IHCL Taj to FashionTV and more, explore the most exclusive branded developments
                        across the UAE. Connect with us for personalised assistance and reserve a coveted
                        address in the fast-growing UAE real estate landscape. Get in touch!
                    </p>
                </div>

                {/* Right: Form */ }
                <div className="w-[340px] flex-shrink-0 px-8 py-12">
                    <form className="flex flex-col gap-3" onSubmit={ (e) => e.preventDefault() }>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 text-sm outline-none bg-white border-0"
                            style={ { color: "#333", placeholder: "#999" } }
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full  text-black px-4 py-3 text-sm outline-none bg-white border-0"
                        />
                        <div className="flex items-center bg-white px-4 py-3 gap-2">
                            <div><img alt="UAE Flag" className="min-w-5 w-5" src="https://flagcdn.com/w20/ae.png" /></div>
                            <span className="text-sm text-gray-400">▼</span>
                            <span className="text-sm text-black  ml-1">+971</span>
                            <input
                                type="tel"
                                value={ phone }
                                onChange={ (e) => setPhone(e.target.value) }
                                className="flex-1 text-black outline-none text-sm ml-2 bg-transparent"
                                placeholder="Phone"
                            />
                        </div>

                        <label className="flex items-start gap-2 mt-1 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={ agreed }
                                onChange={ (e) => setAgreed(e.target.checked) }
                                className="mt-0.5 accent-amber-600 w-4 h-4 flex-shrink-0"
                            />
                            <span className="text-xs" style={ { color: "#444" } }>
                                I've read and agreed to the{ " " }
                                <a href="#" className="underline" style={ { color: "#444" } }>
                                    Privacy Policy
                                </a>
                                *.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="w-full py-3 text-sm font-semibold tracking-widest text-white mt-2"
                            style={ { backgroundColor: "#c9a84c", letterSpacing: "0.15em" } }
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>

            {/* Mobile Layout */ }
            <div
                className="w-full max-w-sm md:hidden rounded-sm px-4 py-10"
                style={ { backgroundColor: "#f5ede4" } }
            >
                <h2
                    className="text-2xl font-serif text-center leading-tight mb-5"
                    style={ { color: "#8b6f3e", fontFamily: "Georgia, serif" } }
                >
                    REGISTER YOUR
                    <br />
                    INTEREST
                </h2>
                <p className="text-sm leading-relaxed mb-6 text-center" style={ { color: "#4a4a4a" } }>
                    From IHCL Taj to FashionTV and more, explore the most exclusive branded developments
                    across the UAE. Connect with us for personalised assistance and reserve a coveted address
                    in the fast-growing UAE real estate landscape. Get in touch!
                </p>

                <form className="flex flex-col gap-3" onSubmit={ (e) => e.preventDefault() }>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-sm outline-none bg-white border-0"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full text-black px-4 py-3 text-sm outline-none bg-white border-0"
                    />
                    <div className="flex items-center bg-white px-4 py-3 gap-2">
                        <div><img alt="UAE Flag" className="w-10" src="https://flagcdn.com/w20/ae.png" /></div>
                        <span className="min-w-5 text-sm text-gray-400">▼</span>
                        <span className="text-sm text-black ml-1">+971</span>
                        <input
                            type="tel"
                            className="flex-1 outline-none text-black text-sm ml-2 bg-transparent"
                            placeholder="Phone"
                        />
                    </div>

                    <label className="flex items-start gap-2 mt-1 cursor-pointer">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="mt-0.5 accent-amber-600 w-4 h-4 flex-shrink-0"
                        />
                        <span className="text-xs" style={ { color: "#444" } }>
                            I've read and agreed to the{ " " }
                            <a href="#" className="underline" style={ { color: "#444" } }>
                                Privacy Policy
                            </a>
                            *.
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="w-full py-3 text-sm font-semibold text-white mt-2"
                        style={ { backgroundColor: "#c9a84c", letterSpacing: "0.15em" } }
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}