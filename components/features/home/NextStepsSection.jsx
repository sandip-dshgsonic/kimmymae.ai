import React from 'react';

const NextStepsSection = () => {
    const steps = [
        {
            icon: "/images/play.svg",
            title: "Build agents fast.",
            description: "Take a closer look at how agent building works in our library.",
            link: "Watch demos",
            href: "#"
        },
        {
            icon: "/images/groups.svg",
            title: "Get expert support.",
            description: "Work with Professional Services experts to quickly build agents and see value.",
            link: "Explore Professional Services",
            href: "#"
        },
        {
            icon: "/images/edit_form.svg",
            title: "Talk to a rep.",
            description: "Tell us about your business needs and we'll help you to find answers.",
            link: "Contact us",
            href: "#"
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-white to-[#F8F8FF] overflow-hidden">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 pt-26 pb-32">
                {/* Header */}
                <h1 className="text-center text-[#0A2756] text-4xl font-bold mb-16">
                    Ready to take the next step with<br />Agentforce?
                </h1>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                            {/* Icon */}
                            <div className="w-12 h-12 mb-6 inline-block bg-[#E8F3FF] text-[#0A2756] text-sm px-3 py-1 rounded-full mb-4">
                                <img src={step.icon} alt="" className="w-full h-full object-contain" />
                            </div>

                            {/* <span className="inline-block bg-[#E8F3FF] text-[#0A2756] text-sm px-3 py-1 rounded-full mb-4"></span> */}

                            {/* Title */}
                            <h3 className="text-[#0A2756] text-xl font-bold mb-4">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">
                                {step.description}
                            </p>

                            {/* Link */}
                            <a 
                                href={step.href}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                {step.link}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wave Background */}
            <div className="absolute bottom-0 left-0 right-0 h-72 bg-[#F0E7FF]" style={{
                clipPath: 'url(#wave-clip)'
            }}>
                <svg className="hidden">
                    <defs>
                        <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
                            <path d="M0,0.2 C0.3,0.1 0.7,0.3 1,0.2 L1,1 L0,1 Z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

           

            {/* Stars/Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
                <img 
                    src="/images/contact-us-agentforce-background (1).webp" 
                    alt="" 
                    className="w-full h-full object-cover opacity-100 mt-13 mr-18 ml-18 mb-10"
                />
            </div>
        </div>
    );
};

export default NextStepsSection;