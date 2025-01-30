import React from 'react';

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Reeves Mathews",
            image: "/images/Group-2055249663.webp",
            companyLogo: "/images/Group-2055249663 (1).webp",
            position: "VP - Global Customer Success & Professional Services",
            quote: "Agentforce takes care of customer queries so our service reps can focus on customer relationships."
        },
        {
            name: "Bhuwan Lodha",
            image: "/images/Group-2055249661.webp",
            companyLogo: "/images/Group-2055249661 (1).webp",
            position: "CEO - AI Division",
            quote: "Agentforce has the potential to transform how companies connect with customers."
        },
        {
            name: "Vidhi Jogeshwar",
            image: "/images/Frame-7.webp",
            companyLogo: "/images/Frame-7 (1).webp",
            position: "General Manager - IT",
            quote: "By minimising time spent on order fulfilment, Agentforce will help us improve distributor satisfaction."
        }
    ];

    return (
        <div className="min-h-screen bg-white p-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-center text-[#0A2756] text-4xl font-bold mb-16">
                    Here's what Indian companies have to say<br />about Agentforce.
                </h1>

                {/* Testimonials Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Quote Mark */}
                            {/* <div className="text-[#A855F7] text-7xl font-serif mb-4">
                                "
                            </div> */}

                            {/* Profile Image with Company Logo */}
                            <div className="relative mb-6">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-47 h-58 "
                                />
                                {/* <div className="absolute -bottom-2 right-0">
                                    <img 
                                        src={testimonial.companyLogo} 
                                        alt="Company Logo"
                                        className="w-12 h-12 rounded-full bg-white p-1 shadow-lg"
                                    />
                                </div> */}
                            </div>

                            {/* Name */}
                            <h3 className="text-[#0A2756] text-xl font-bold mb-2">
                                {testimonial.name}
                            </h3>

                            {/* Position */}
                            <p className="text-black text-xl mb-4 italic">
                                {testimonial.position}
                            </p>

                            {/* Quote */}
                            <p className="text-gray-900 text-xl">
                                {testimonial.quote}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Decorative Images */}
                {/* <div className="absolute bottom-0 left-0 -mb-16 -ml-16">
                    <img 
                        src="/images/trailhead-background.webp" 
                        alt="" 
                        className="w-64 h-64 object-contain" 
                    />
                </div>
                <div className="absolute bottom-0 right-0 -mb-16 -mr-16">
                    <img 
                        src="/images/trailhead-background-2.webp" 
                        alt="" 
                        className="w-64 h-64 object-contain" 
                    />
                </div> */}
            </div>
        </div>
    );
};

export default TestimonialSection;