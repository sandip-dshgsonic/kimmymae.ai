"use client";

import React from "react";
import Image from "next/image";

const PartnerNetwork = () => {
  const partners = [
    { name: "AWS", logo: "/images/01-aws.webp" },
    { name: "Workday", logo: "/images/03-workday.webp" },
    { name: "Google", logo: "/images/google.webp" },
    { name: "Certinia", logo: "/images/certinia_48f76f.webp" },
    { name: "Honeywell", logo: "/images/customer-logo-Honeywell.webp" },
    { name: "DocuSign", logo: "/images/New_Docusign_Logo_Logo-1.webp" },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-6xl sm:text-3xl md:text-4xl font-bold text-[#0A2756] mb-3 sm:mb-4">
          Extend Agentforce with the Agentforce <br className="hidden sm:block" />
          Partner Network.
        </h2>

        {/* Subheading */}
        <p className="text-gray-900 mb-6 sm:mb-8 max-w-9xl mx-auto text-5px sm:text-base">
          Bring pre-built and customizable agents and actions built by our
          partners into your everyday work.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2 mb-8 sm:mb-10">
          See how
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="transform rotate-45"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Responsive Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto mb-6">
          {partners.map((partner, index) => (
            <div key={index} className="w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 relative">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerNetwork;
