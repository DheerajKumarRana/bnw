'use client';

import { useState } from 'react';

export default function FAQSection({ faqs }) {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="w-full px-6 font-lato">
      <div className="max-w-7xl mx-auto">

        {/* Accordion */ }
        <div className="divide-y divide-gray-200 border-b border-gray-200">
          { faqs.map((faq, i) => {
            const isOpen = openId === `faq-${i}`;
            return (
              <div key={ `faq-${i}` }>
                <button
                  onClick={ () => toggle(`faq-${i}`) }
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={ isOpen }
                >
                  <span
                    className="text-base md:text-lg text-gray-900 pr-8 leading-snug"
                    style={ {
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontWeight: 400,
                    } }
                  >
                    { faq.question }
                  </span>
                  <span
                    className="flex-shrink-0 text-gray-400 text-xl leading-none transition-transform duration-300"
                    style={ { transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' } }
                  >
                    +
                  </span>
                </button>

                {/* Answer */ }
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={ { maxHeight: isOpen ? '400px' : '0px' } }
                >
                  <p
                    className="pb-6 text-sm md:text-base text-gray-600 leading-relaxed text-justify"
                    style={ {
                      fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                      fontWeight: 400,
                    } }
                  >
                    { faq.answer }
                  </p>
                </div>
              </div>
            );
          }) }
        </div>
      </div>
    </section>
  );
}