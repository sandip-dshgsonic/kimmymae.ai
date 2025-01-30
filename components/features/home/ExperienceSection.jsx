// "use client";

// import React from "react";
// import Image from "next/image";

// const ExperienceSection = () => {
//   const events = [
//     {
//       location: "Atlanta, GA",
//       title: "Agentforce World Tour Atlanta",
//       date: "18 December 2024",
//       image: "/images/eo-card-afwt-atlanta.webp",
//       registerLink: "Register for free",
//     },
//     {
//       location: "Chicago, IL",
//       title: "Agentforce World Tour Chicago",
//       date: "19 December 2024",
//       image: "/images/eo-card-afwt-chicago.webp",
//       registerLink: "Register for free",
//     },
//     {
//       location: "San Francisco & Salesforce+",
//       title: "TDX",
//       date: "5-6 March, 2025",
//       description:
//         "The must-attend conference for developers, admins, architects and partners.",
//       image: "/images/eo-card-tdx25.webp",
//       registerLink: "Register now",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       {/* Experience Header */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0A2756] mb-12">
//         Experience Agentforce
//       </h1>

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-7 ">
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
//           >
//             {/* Image Container */}
//             <div className="relative h-64 w-full">
//               <Image
//                 src={event.image}
//                 alt={event.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Content Container */}
//             <div className="p-8 flex flex-col space-y-4">
//               {/* Location */}
//               <span className="text-sm text-blue-600 font-medium">
//                 {event.location}
//               </span>

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-[#0A2756]">
//                 {event.title}
//               </h3>

//               {/* Date */}
//               <p className="text-gray-700">{event.date}</p>

//               {/* Description (if exists) */}
//               {event.description && (
//                 <p className="text-gray-700 leading-relaxed">
//                   {event.description}
//                 </p>
//               )}

//               {/* Register Link */}
//               <a
//                 href="#"
//                 className="text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-2 inline-block"
//               >
//                 {event.registerLink}
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Community Section */}
//       <div className="bg-white rounded-xl shadow-lg p-10 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
//         <div className="relative h-72 md:h-full">
//           <Image
//             src="/images/promotion-agentforce-agentblazer-2.webp"
//             alt="Agentblazer Community"
//             fill
//             className="object-contain"
//           />
//         </div>
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
//             Join the Agentblazer community.
//           </h2>
//           <p className="text-md text-gray-900">
//             Connect with Agentblazers from around the world to skill up on AI,
//             discover use cases, hear from product experts and more. Grow your AI
//             expertise — and your career.
//           </p>
//           <div className="flex gap-6">
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
//               Join today
//             </button>
//             <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md">
//               Learn more
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ROI Calculator Section */}
//       <div className="bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
//             Calculate your ROI with Agentforce.
//           </h2>
//           <p className="text-md text-gray-900">
//             Find out how much time and money you can save with a team of
//             AI-powered agents working side by side with your employees and
//             workforce. Just answer four simple questions to see what's possible
//             with Agentforce.
//           </p>
//           <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
//             Calculate your ROI
//           </button>
//         </div>
//         <div className="relative h-72 md:h-full">
//           <Image
//             src="/images/promotion-roi-calculator-einstein.webp"
//             alt="ROI Calculator"
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceSection;


"use client";

import React from "react";
import Image from "next/image";

const ExperienceSection = () => {
  const events = [
    {
      location: "Atlanta, GA",
      title: "Agentforce World Tour Atlanta",
      date: "18 December 2024",
      image: "/images/eo-card-afwt-atlanta.webp",
      registerLink: "Register for free",
    },
    {
      location: "Chicago, IL",
      title: "Agentforce World Tour Chicago",
      date: "19 December 2024",
      image: "/images/eo-card-afwt-chicago.webp",
      registerLink: "Register for free",
    },
    {
      location: "San Francisco & Salesforce+",
      title: "TDX",
      date: "5-6 March, 2025",
      description:
        "The must-attend conference for developers, admins, architects and partners.",
      image: "/images/eo-card-tdx25.webp",
      registerLink: "Register now",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen px-4 py-16">
      {/* Experience Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0A2756] mb-12">
        Experience Agentforce
      </h1>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative h-64 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 flex flex-col space-y-4">
            <span className="inline-block bg-[#E8F3FF] text-[#0A2756] text-sm px-3 py-1 rounded-full mb-4">
                {event.location}
              </span>
              <h3 className="text-2xl font-bold text-[#0A2756]">
                {event.title}
              </h3>
              <p className="text-gray-700">{event.date}</p>
              {event.description && (
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              )}
              <a
                href="#"
                className="text-[#0A2756] font-semibold hover:text-blue-800 transition-colors mt-2 inline-block"
              >
                {event.registerLink}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Community Section */}
      <div className="bg-white w-full max-w-7xl mx-auto rounded-xl shadow-xl p-10 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
        <div className="relative h-72 md:h-full">
          <Image
            src="/images/promotion-agentforce-agentblazer-2.webp"
            alt="Agentblazer Community"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
            Join the Agentblazer community.
          </h2>
          <p className="text-md text-gray-900">
            Connect with Agentblazers from around the world to skill up on AI,
            discover use cases, hear from product experts and more. Grow your AI
            expertise — and your career.
          </p>
          <div className="flex gap-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Join today
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="bg-white w-full max-w-7xl mx-auto rounded-xl shadow-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
            Calculate your ROI with Agentforce.
          </h2>
          <p className="text-md text-gray-900">
            Find out how much time and money you can save with a team of
            AI-powered agents working side by side with your employees and
            workforce. Just answer four simple questions to see what's possible
            with Agentforce.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Calculate your ROI
          </button>
        </div>
        <div className="relative h-72 md:h-full">
          <Image
            src="/images/promotion-roi-calculator-einstein.webp"
            alt="ROI Calculator"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;