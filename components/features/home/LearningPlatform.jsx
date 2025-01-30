// import React from 'react';
// import { Card, CardContent, CardHeader } from "@/components/ui/card";

// const LearningPlatform = () => {
//   const courses = [
//     {
//       icon: "/images/4cf356491cf8efec76413b315449019f_badge.webp", // Replace with your icon path
//       label: "Module",
//       title: "Agentforce Agents: Quick Look",
//       description: "Learn how these autonomous apps use LLMs and context to assist customers and human agents.",
//       link: "#"
//     },
//     {
//       icon: "/images/1acac0668f3be3d32ce5d86d9fe5097b_badge.webp", // Replace with your icon path
//       label: "Module",
//       title: "Agentforce Service Agent: Quick Look",
//       description: "Help customers with next-gen AI bots that offer autonomous, natural responses.",
//       link: "#"
//     },
//     {
//       icon: "/images/100c2126db674133719cdc5c705459c1_badge.webp", // Replace with your icon path
//       label: "Module",
//       title: "Agentforce for Developers",
//       description: "Use generative AI features like Dev Assistant to improve developer productivity.",
//       link: "#"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h1 className="text-center text-[#0A2756] text-4xl font-bold mb-12">
//           Learn new skills with free, guided learning<br />on Trailhead.
//         </h1>

//         {/* Cards Container */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           {courses.map((course, index) => (
//             <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-6">
//                 {/* Icon */}
//                 <div className="w-20 h-20 mb-4">
//                   <img src={course.icon} alt="" className="w-full h-full object-contain" />
//                 </div>

//                 {/* Label */}
//                 <span className="inline-block bg-[#E8F3FF] text-[#0A2756] text-sm px-3 py-1 rounded-full mb-4">
//                   {course.label}
//                 </span>

//                 {/* Title */}
//                 <h3 className="text-[#0A2756] text-xl font-bold mb-3">
//                   {course.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 mb-4">
//                   {course.description}
//                 </p>

//                 {/* Start Learning Link */}
//                 <a
//                   href={course.link}
//                   className="text-blue-600 hover:underline font-medium"
//                 >
//                   Start learning
//                 </a>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Build Agent Button */}
//         <div className="text-center mb-8">
//           <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
//             Build your first agent
//           </button>
//         </div>

//         {/* Contact Button - Bottom Right */}
//         <div className="fixed bottom-4 right-4">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
//             Contact Us
//           </button>
//         </div>

//         {/* Decorative Images */}
//         <div className="fixed bottom-0 left-0">
//   <img src="/images/trailhead-background.webp" alt="" className="w-32 h-32 object-contain" />
// </div>
// <div className="fixed bottom-0 right-0">
//   <img src="/images/trailhead-background (1).webp" alt="" className="w-32 h-32 object-contain" />
// </div>
//       </div>
//     </div>
//   );
// };

// export default LearningPlatform;

import React from "react";

const LearningPlatform = () => {
  const courses = [
    {
      icon: "/images/4cf356491cf8efec76413b315449019f_badge.webp",
      label: "Module",
      title: "Agentforce Agents: Quick Look",
      description:
        "Learn how these autonomous apps use LLMs and context to assist customers and human agents.",
      link: "#",
    },
    {
      icon: "/images/1acac0668f3be3d32ce5d86d9fe5097b_badge.webp",
      label: "Module",
      title: "Agentforce Service Agent: Quick Look",
      description:
        "Help customers with next-gen AI bots that offer autonomous, natural responses.",
      link: "#",
    },
    {
      icon: "/images/100c2126db674133719cdc5c705459c1_badge.webp",
      label: "Module",
      title: "Agentforce for Developers",
      description:
        "Use generative AI features like Dev Assistant to improve developer productivity.",
      link: "#",
    },
  ];

  return (
    <div className="relative bg-white px-6 md:px-12 pt-16 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-center text-[#0A2756] text-3xl md:text-4xl font-bold mb-12">
          Learn new skills with free, guided learning
          <br />
          on Trailhead.
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              {/* Icon */}
              <div className="w-20 h-20 mb-4 flex justify-center items-center">
                <img
                  src={course.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Label */}
              <span className="inline-block bg-[#E8F3FF] text-[#0A2756] text-sm px-3 py-1 rounded-full mb-4">
                {course.label}
              </span>

              {/* Title */}
              <h3 className="text-[#0A2756] text-xl font-bold mb-3">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{course.description}</p>

              {/* Start Learning Link */}
              <a
                href={course.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Start learning
              </a>
            </div>
          ))}
        </div>

        {/* Build Agent Button */}
        <div className="text-center mb-8">
          <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Build your first agent
          </button>
        </div>
      </div>

      {/* Contact Button - Fixed Position */}
      {/* <div className="fixed bottom-4 right-4 z-20">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div> */}

      {/* Full-width Decorative Image at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/images/trailhead-background.webp"
          alt="Decorative Background"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LearningPlatform;
