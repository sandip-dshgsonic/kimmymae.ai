
// import React from "react";

// const ServiceCards = () => {
//   return (
//     <div className="min-h-screen bg-purple-900">
//       <div className="snap-y snap-mandatory h-screen overflow-y-auto">
//         {/* Customer Service Card */}
//         <div className="snap-start min-h-screen p-4 flex items-center justify-center">
//           <div className="w-full max-w-7xl bg-pink-300 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8">
//             {/* Title at the top-center inside the card */}
//             <h1 className="text-3xl font-bold text-black text-center w-full">
//               Customer Service
//             </h1>

//             <div className="w-full flex flex-col md:flex-row items-center gap-8">
//               {/* Left content section */}
//               <div className="w-full md:w-1/2 space-y-6">
//                 <h1 className="text-4xl md:text-2xl font-bold text-purple-900">
//                   Resolve customer enquiries 24/7
//                 </h1>

//                 <p className="text-gray-800 text-lg leading-relaxed">
//                   Agentforce engages customers autonomously across channels 24/7
//                   in natural language. It can resolve cases swiftly and
//                   accurately because every answer is grounded in trusted data.
//                   Set up a set of prebuilt skills to empower Agentforce to
//                   support customers in minutes or customise fast with low-code.
//                   Define clear security guardrails and when to seamlessly
//                   escalate to human employees.
//                 </p>
//               </div>

//               {/* Right image section */}
//               <div className="w-full md:w-1/2">
//                 <div className="relative aspect-video bg-pink-200 rounded-xl overflow-hidden">
//                   <img
//                     src="/images/img-tiles-2.webp"
//                     alt="Customer Service Dashboard"
//                     className="w-full h-full object-cover rounded-xl"
//                   />

//                   {/* Play button overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                       <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Campaign Card */}
//         <div className="snap-start min-h-screen p-4 flex items-center justify-center">
//           <div className="w-full max-w-7xl bg-orange-300 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8">
//             {/* Title at the top-center inside the card */}
//             <h1 className="text-3xl font-bold text-black text-center w-full">
//               Campaign
//             </h1>

//             {/* Content wrapper */}
//             <div className="w-full flex flex-col md:flex-row items-center gap-8">
//               {/* Left content section */}
//               <div className="w-full md:w-1/2 space-y-6">
//                 <h1 className="text-4xl md:text-2xl font-bold text-purple-900">
//                   Create and optimise campaigns end-to-end
//                 </h1>

//                 <p className="text-gray-800 text-lg leading-relaxed">
//                   Agentforce can help you to build better campaigns faster.
//                   Marketers can save time on generating a campaign briefs,
//                   targeting audience segments, creating content and even
//                   building customer journeys in Flow. And because Agentforce
//                   never sleeps, it will continually analyse performance against
//                   KPIs and proactively recommend improvements.
//                 </p>
//               </div>

//               {/* Right image section */}
//               <div className="w-full md:w-1/2">
//                 <div className="relative aspect-video bg-orange-200 rounded-xl overflow-hidden">
//                   <img
//                     src="/images/img-tiles-5.webp"
//                     alt="Campaign Dashboard"
//                     className="w-full h-full object-cover rounded-xl"
//                   />

//                   {/* Play button overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                       <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Self development card */}

//         <div className="snap-start min-h-screen p-4 flex items-center justify-center">
//           <div
//             className="w-full max-w-7xl rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8"
//             style={{ backgroundColor: "rgb(1, 195, 179)" }} // Applying Tiffany Blue to card background
//           >
//             {/* Title at the top-center inside the card */}
//             <h1 className="text-3xl font-bold text-black text-center w-full">
//               Sales Development Representative (SDR)
//             </h1>

//             {/* Content wrapper */}
//             <div className="w-full flex flex-col md:flex-row items-center gap-8">
//               {/* Left content section */}
//               <div className="w-full md:w-1/2 space-y-6">
//                 <h1 className="text-4xl md:text-2xl font-bold text-purple-900">
//                   Engage with prospects 24/7
//                 </h1>

//                 <p className="text-gray-800 text-lg leading-relaxed">
//                   Agentforce autonomously answers product questions, handles
//                   objections, and books meetings for sales reps. It can act and
//                   respond accurately, with responses grounded in your business
//                   data. You decide how often, which channels, and when
//                   Agentforce will engage before briefing sellers for handoff. It
//                   can meet leads on their preferred channels, like SMS or
//                   WhatsApp, in any language.
//                 </p>
//               </div>

//               {/* Right image section */}
//               <div className="w-full md:w-1/2">
//                 <div className="relative aspect-video bg-orange-200 rounded-xl overflow-hidden">
//                   <img
//                     src="/images/img-tiles-1.webp"
//                     alt="Campaign Dashboard"
//                     className="w-full h-full object-cover rounded-xl"
//                   />

//                   {/* Play button overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                       <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="snap-start min-h-screen p-4 flex items-center justify-center">
//           <div
//             className="w-full max-w-7xl rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8"
//             style={{ backgroundColor: "rgb(26, 185, 255)" }} // Applying Blue color to card background
//           >
//             {/* Title at the top-center inside the card */}
//             <h1 className="text-3xl font-bold text-black text-center w-full">
//               Sales Coach
//             </h1>

//             {/* Content wrapper */}
//             <div className="w-full flex flex-col md:flex-row items-center gap-8">
//               {/* Left content section */}
//               <div className="w-full md:w-1/2 space-y-6">
//                 <h1 className="text-4xl md:text-2xl font-bold text-purple-900">
//                   Provide personalised sales role-plays
//                 </h1>

//                 <p className="text-gray-800 text-lg leading-relaxed">
//                   Agentforce can practise pitching, handling objections and
//                   negotiation with realistic role-plays tailored to each deal
//                   for every seller. Get consistent feedback on seller strengths,
//                   areas for improvement and actionable steps to advance deals,
//                   all grounded in CRM data. Then, easily assess ROI by analysing
//                   win/loss rates of deals, with or without coaching.
//                 </p>
//               </div>

//               {/* Right image section */}
//               <div className="w-full md:w-1/2">
//                 <div className="relative aspect-video bg-orange-200 rounded-xl overflow-hidden">
//                   <img
//                     src="/images/img-tiles-3.webp"
//                     alt="Campaign Dashboard"
//                     className="w-full h-full object-cover rounded-xl"
//                   />

//                   {/* Play button overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                       <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="snap-start min-h-screen p-4 flex items-center justify-center">
//           <div
//             className="w-full max-w-7xl rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8"
//             style={{ backgroundColor: "rgb(69, 198, 90)" }} // Applying Green color to card background
//           >
//             {/* Title at the top-center inside the card */}
//             <h1 className="text-3xl font-bold text-black text-center w-full">
//               Personal Shopper
//             </h1>

//             {/* Content wrapper */}
//             <div className="w-full flex flex-col md:flex-row items-center gap-8">
//               {/* Left content section */}
//               <div className="w-full md:w-1/2 space-y-6">
//                 <h1 className="text-4xl md:text-2xl font-bold text-purple-900">
//                   Offer personalised product recommendations
//                 </h1>

//                 <p className="text-gray-800 text-lg leading-relaxed">
//                   Agentforce can engage shoppers as their personal stylist.
//                   Power personalised conversations directly on your commerce
//                   site or in a preferred messaging app, like WhatsApp. Help
//                   shoppers find products and make purchases faster by guiding
//                   search queries and personalising product recommendations.
//                 </p>
//               </div>

//               {/* Right image section */}
//               <div className="w-full md:w-1/2">
//                 <div className="relative aspect-video bg-orange-200 rounded-xl overflow-hidden">
//                   <img
//                     src="/images/img-tiles-4.webp"
//                     alt="Campaign Dashboard"
//                     className="w-full h-full object-cover rounded-xl"
//                   />

//                   {/* Play button overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                       <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCards;



"use client";

import React, { useState, useEffect, useRef } from 'react';

const ServiceCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const TITLE_HEIGHT = 80;

  const playButtonImage = "images/Agentforce_ Create Powerful AI Agents _ Salesforce India_files/ico-play-video-thumbnail.svg"; // Replace with actual image path

  const cards = [
    {
      title: "Customer Service",
      subtitle: "Resolve customer enquiries 24/7",
      description: "Agentforce engages customers autonomously across channels 24/7 in natural language. It can resolve cases swiftly and accurately because every answer is grounded in trusted data.",
      bgColor: "bg-pink-500",
      image: "/images/img-tiles-2.webp"
    },
    {
      title: "Sales Development Representative (SDR)",
      subtitle: "Engage with prospects 24/7",
      description: "Agentforce autonomously answers product questions, handles objections, and books meetings for sales reps. It can act and respond accurately, with responses grounded in your business data.",
      bgColor: "bg-blue-300 bg-[rgb(1,195,179)]",
      image: "/images/img-tiles-1.webp",
    },
    {
      title: "Sales Coach",
      subtitle: "Provide personalised sales role-plays",
      description: "Agentforce can practise pitching, handling objections and negotiation with realistic role-plays tailored to each deal for every seller. Get consistent feedback on seller strengths.",
      bgColor: "bg-blue-300 bg-[rgb(26 185 255 / var(--tw-bg-opacity))]",
      image: "/images/img-tiles-3.webp"
    },
    {
      title: "Personal Shopper",
      subtitle: "Offer personalised product recommendations",
      description: "Agentforce can engage shoppers as their personal stylist. Power personalised conversations directly on your commerce site or in a preferred messaging app, like WhatsApp.",
      bgColor: "bg-green-300 bg-[rgb(69 198 90 / var(--tw-bg-opacity))]",
      image: "/images/img-tiles-4.webp"
    },
    {
      title: "Campaign",
      subtitle: "Create and optimise campaigns end-to-end",
      description: "Agentforce can help you to build better campaigns faster. Marketers can save time on generating campaign briefs, targeting audience segments, creating content and even building customer journeys in Flow.",
      bgColor: "bg-orange-400 bg-[rgb(252 152 30 / var(--tw-bg-opacity))]",
      image: "/images/img-tiles-5.webp"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!componentRef.current || !isVisible) return;
      const rect = componentRef.current.getBoundingClientRect();
      const scrollPosition = -rect.top;
      const componentHeight = rect.height;
      const cardHeight = componentHeight / cards.length;
      const newIndex = Math.floor(scrollPosition / cardHeight);
      setActiveCardIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length, isVisible]);

  return (
    <div className="relative bg-purple-900 pt-16 rounded-t-[2rem]" ref={componentRef}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative min-h-screen ${index <= activeCardIndex ? 'sticky' : ''}`}
          style={{
            top: `${index * TITLE_HEIGHT}px`,
            zIndex: cards.length + index
          }}
        >
          <div
            className={`w-full min-h-screen transition-all duration-500 ${index < activeCardIndex ? 'h-24 transform scale-95 opacity-90' : 'transform scale-100 opacity-100'}`}
          >
            <div
              className={`w-full max-w-7xl mx-auto rounded-3xl p-8 md:p-12 ${card.bgColor} ${index < activeCardIndex ? 'h-24 flex items-center justify-center shadow-lg' : 'min-h-[80vh]'}`}
              style={{ borderRadius: '16px' }}
            >
              {index < activeCardIndex ? (
                <h2 className="text-2xl font-bold text-purple-900">{card.title}</h2>
              ) : (
                <div className="h-full flex flex-col gap-8">
                  <h3 className="text-xl font-bold text-black text-center w-full">{card.title}</h3>
                  <div className="w-full flex flex-col md:flex-row items-center gap-8 h-full">
                    <div className="w-full md:w-1/2 space-y-6 px-4">
                      <h1 className="text-2xl md:text-3xl font-bold text-purple-900">{card.subtitle}</h1>
                      <p className="text-gray-800 text-md leading-relaxed">{card.description}</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center px-4">
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Updated Play Button with Image */}
                          <div className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                            <img 
                              src={playButtonImage} 
                              alt="Play" 
                              className="w-14 h-14 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;


// "use client";

// import React, { useState, useEffect, useRef } from 'react';

// const ServiceCards = () => {
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const componentRef = useRef(null);
//   const TITLE_HEIGHT = 80;
  
//   const cards = [
//     {
//       title: "Customer Service",
//       subtitle: "Resolve customer enquiries 24/7",
//       description: "Agentforce engages customers autonomously across channels 24/7 in natural language. It can resolve cases swiftly and accurately because every answer is grounded in trusted data.",
//       bgColor: "bg-pink-500",
//       image: "/images/img-tiles-2.webp"
//     },
//     {
//       title: "Sales Development Representative (SDR)",
//       subtitle: "Engage with prospects 24/7",
//       description: "Agentforce autonomously answers product questions, handles objections, and books meetings for sales reps. It can act and respond accurately, with responses grounded in your business data.",
//       bgColor: "bg-blue-300 bg-[rgb(1,195,179)]",
//       image: "/images/img-tiles-1.webp",
//     },
//     {
//       title: "Sales Coach",
//       subtitle: "Provide personalised sales role-plays",
//       description: "Agentforce can practise pitching, handling objections and negotiation with realistic role-plays tailored to each deal for every seller. Get consistent feedback on seller strengths.",
//       bgColor: "bg-blue-300 bg-[rgb(26 185 255 / var(--tw-bg-opacity))]",
//       image: "/images/img-tiles-3.webp"
//     },
//     {
//       title: "Personal Shopper",
//       subtitle: "Offer personalised product recommendations",
//       description: "Agentforce can engage shoppers as their personal stylist. Power personalised conversations directly on your commerce site or in a preferred messaging app, like WhatsApp.",
//       bgColor: "bg-green-300 bg-[rgb(69 198 90 / var(--tw-bg-opacity))]",
//       image: "/images/img-tiles-4.webp"
//     },
//     {
//       title: "Campaign",
//       subtitle: "Create and optimise campaigns end-to-end",
//       description: "Agentforce can help you to build better campaigns faster. Marketers can save time on generating campaign briefs, targeting audience segments, creating content and even building customer journeys in Flow.",
//       bgColor: "bg-orange-400 bg-[rgb(252 152 30 / var(--tw-bg-opacity))]",
//       image: "/images/img-tiles-5.webp"
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1
//       }
//     );
//     if (componentRef.current) {
//       observer.observe(componentRef.current);
//     }
//     return () => {
//       if (componentRef.current) {
//         observer.unobserve(componentRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!componentRef.current || !isVisible) return;
//       const rect = componentRef.current.getBoundingClientRect();
//       const scrollPosition = -rect.top;
//       const componentHeight = rect.height;
//       const cardHeight = componentHeight / cards.length;
//       const newIndex = Math.floor(scrollPosition / cardHeight);
//       setActiveCardIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [cards.length, isVisible]);

//   return (
//     <div className="relative bg-purple-900 pt-16 rounded-t-[2rem]" ref={componentRef}>
//      {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`relative min-h-screen ${
//             index <= activeCardIndex ? 'sticky' : ''
//           }`}
//           style={{
//             top: `${index * TITLE_HEIGHT}px`,
//             zIndex: cards.length + index
//           }}
//         >
//           <div
//             className={`w-full min-h-screen transition-all duration-500 ${
//               index < activeCardIndex
//                 ? 'h-24 transform scale-95 opacity-90'
//                 : 'transform scale-100 opacity-100'
//             }`}
//           >
//             <div
//               className={`w-full max-w-7xl mx-auto rounded-3xl p-8 md:p-12 ${
//                 card.bgColor
//               } ${
//                 index < activeCardIndex
//                   ? 'h-24 flex items-center justify-center shadow-lg'
//                   : 'min-h-[80vh]'
//               }`}
//               style={{ borderRadius: '16px' }} // Border radius applied to all 4 corners
//             >
//               {index < activeCardIndex ? (
//                 <h2 className="text-2xl font-bold text-purple-900">{card.title}</h2>
//               ) : (
//                 <div className="h-full flex flex-col gap-8">
//                   <h3 className="text-1xl font-bold text-black text-center w-full">
//                     {card.title}
//                   </h3>
//                   <div className="w-full flex flex-col md:flex-row items-center gap-8 h-full">
//                     <div className="w-full md:w-1/2 space-y-6">
//                       <h1 className="text-9xl md:text-4xl font-bold text-right-purple-900 text-left-cyan-500">
//                         {card.subtitle}
//                       </h1>
//                       <p className="text-gray-800 text-md leading-relaxed">
//                         {card.description}
//                       </p>
//                     </div>
//                     <div className="w-full md:w-1/2">
//                       <div className="relative aspect-video rounded-xl overflow-hidden">
//                         <img
//                           src={card.image}
//                           alt={card.title}
//                           className="w-full h-full object-cover rounded-xl"
//                         />
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
//                             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServiceCards;