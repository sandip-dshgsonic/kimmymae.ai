"use client";
import React, { useState } from "react";
import Image from "next/image";

const TeamsSection = () => {
  const teams = [
    {
      title: "Healthcare",
      icon: "/images/ico-agent-grid-1.svg",
      hoverText: "Autonomously engages with patients, providers and payers to resolve enquiries, provide summaries, and take action across multiple channels.",
    },
    {
      title: "Banking",
      icon: "/images/ico-agent-grid-12.svg",
      hoverText: "Autonomously analyses data, proactively manages client requests and provides personalised service across retail, commercial and investment banking.",
    },
    {
      title: "Retail",
      icon: "/images/ico-agent-grid-3.svg",
      hoverText: "Autonomously share campaign insights, proactively manage customer outreach and resolve cases for fashion, grocery and convenience retailers.",
    },
    {
      title: "Operations",
      icon: "/images/ico-agent-grid-4.svg",
      hoverText: "Autonomously helps Operations teams manage plan creation, resourcing needs and track progress across teams.",
    },
    {
      title: "CX",
      icon: "/images/ico-agent-grid-13.svg",
      hoverText: "Autonomously analyse customer surveys and reviews, proactively suggest customer retention improvements and manage omni-channel experiences.",
    },
    {
      title: "Analytics",
      icon: "/images/ico-agent-grid-7.svg",
      hoverText: "Autonomously share data insights, conduct visualisations and suggest data-driven actions to take.",
    },
    {
      title: "IT",
      icon: "/images/ico-agent-grid-8.svg",
      hoverText: "Autonomously monitor security threat detection, share network insights and resolve customer and employee help desk support cases.",
    },
    {
      title: "Finance",
      icon: "/images/ico-agent-grid-9.svg",
      hoverText: "Autonomously share insights on financial reporting and risk assessments, act on fraud detection, and resolve compliance-related queries.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="min-h-screen px-4 py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/09/bg-agent-gradient-2.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            Agentforce for every team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto px-4">
            Handle any business use case. With Agentforce, you can quickly
            configure any agent from scratch with existing Salesforce tools like
            prompts, flows, Apex and APIs.
          </p>
        </div>

        {/* Teams Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-6 aspect-square transition-all duration-300 
                hover:-translate-y-1 cursor-pointer hover:shadow-lg
                ${hoveredIndex === index ? "bg-purple-900 text-white" : "bg-white"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-full flex flex-col items-center justify-center transition-opacity duration-300
                  ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <div className="relative w-5 h-5 md:w-10 md:h-10">
                    <Image
                      src={team.icon}
                      alt={`${team.title} icon`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-center">
                  {team.title}
                </h3>
              </div>

              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="text-sm md:text-base text-center">
                    {team.hoverText}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsSection;


// "use client";
// import React, { useState } from "react";

// const TeamsSection = () => {
//   const teams = [
//     {
//       title: "Healthcare",
//       icon: "/images/ico-agent-grid-1.svg",
//       hoverText:
//         "Autonomously engages with patients, providers and payers to resolve enquiries, provide summaries, and take action across multiple channels.",
//     },
//     {
//       title: "Banking",
//       icon: "/images/ico-agent-grid-12.svg",
//       hoverText:
//         "Autonomously analyses data, proactively manages client requests and provides personalised service across retail, commercial and investment banking.",
//     },
//     {
//       title: "Retail",
//       icon: "/images/ico-agent-grid-3.svg",
//       hoverText:
//         "Autonomously share campaign insights, proactively manage customer outreach and resolve cases for fashion, grocery and convenience retailers.",
//     },
//     {
//       title: "Operations",
//       icon: "/images/ico-agent-grid-4.svg",
//       hoverText:
//         "Autonomously helps Operations teams manage plan creation, resourcing needs and track progress across teams.",
//     },
//     {
//       title: "CX",
//       icon: "/images/ico-agent-grid-13.svg",
//       hoverText:
//         "Autonomously analyse customer surveys and reviews, proactively suggest customer retention improvements and manage omni-channel experiences.",
//     },
//     {
//       title: "Analytics",
//       icon: "/images/ico-agent-grid-7.svg",
//       hoverText:
//         "Autonomously share data insights, conduct visualisations and suggest data-driven actions to take.",
//     },
//     {
//       title: "IT",
//       icon: "/images/ico-agent-grid-8.svg",
//       hoverText:
//         "Autonomously monitor security threat detection, share network insights and resolve customer and employee help desk support cases.",
//     },
//     {
//       title: "Finance",
//       icon: "/images/ico-agent-grid-9.svg",
//       hoverText:
//         "Autonomously share insights on financial reporting and risk assessments, act on fraud detection, and resolve compliance-related queries.",
//     },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div
//       className="min-h-screen px-4 py-16 md:py-24 agentforce-main-wrapper agent-grid "
      
//       style={{
//         backgroundImage:
//           "url('https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/09/bg-agent-gradient-2.webp')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12 md:mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Agentforce for every team
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto px-4">
//             Handle any business use case. With Agentforce, you can quickly
//             configure any agent from scratch with existing Salesforce tools like
//             prompts, flows, Apex and APIs.
//           </p>
//         </div>

//         {/* Teams Grid Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
//           {teams.map((team, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-48 md:w-48 md:h-48 rounded-3xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-lg ${
//                 hoveredIndex === index ? "bg-purple-900 text-white" : "bg-white"
//               }`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div
//                 className={`transition-opacity duration-300 ${
//                   hoveredIndex === index ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 <div className="bg-purple-100 rounded-full p-4 mb-4">
//                   <img
//                     src={team.icon}
//                     alt={`${team.title} icon`}
//                     className="w-8 h-8"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold">{team.title}</h3>
//               </div>

//               {hoveredIndex === index && team.hoverText && (
//                 <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
//                   <p className="text-sm">{team.hoverText}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamsSection;
