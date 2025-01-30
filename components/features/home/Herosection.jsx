// "use client";

// import Link from "next/link";
// import { Play } from "lucide-react";

// export default function HeroSection() {
//   const previewCards = [
//     {
//       id: 1,
//       title: "What is Agentforce?",
//       image: "/images/img-hero-1b.webp",
//       hasPlayButton: true,
//     },
//     {
//       id: 2,
//       title: "Preview: How Does Agentforce Work?",
//       image: "/images/img-hero-2a.webp",
//       hasPlayButton: true,
//     },
//     {
//       id: 3,
//       title: "Preview: How to Create a Customised Agent",
//       image: "/images/how-to-create-custom-agent-thumbnail.webp",
//       hasPlayButton: true,
//     },
//   ];

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D0A4D] via-[#461B6E] to-[#190657]">
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/AF2-0_Website_Header_DigitalLabor_3.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10"></div>

//       {/* Curved bottom border effect */}
//       <div className="absolute bottom-0 w-full h-[30%] bg-[#00D4FF]/20 blur-[100px] z-20" />

//       {/* Main content */}
//       <div className="relative z-30 max-w-[1600px] mx-auto px-6 pt-32 pb-16">
//         {/* Hero text and CTA */}
//         <div className="text-center mb-16">
//   <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
//     kimmymae.ai <span className="text-[#7BB8F8]"></span>
//   </h1>
//   <div className="inline-flex items-center bg-gradient-to-r from-[#2B7FFF] to-[#AA2BFF] rounded-full px-11 py-12 mb-10 max-w-6xl mx-auto">
//     <h2 className="text-white text-3xl md:text-8xl font-semibold mr-6 p-5">
//       The AI Platform
//     </h2>
//     <div className="ml-6 bg-white rounded-full p-12">
//       <img
//         src="/images/120.png"
//         alt="Agent Icon"
//         className="w-12 h-12"
//       />
//     </div>
//   </div>


//           {/* CTA Buttons */}
//           <div className="flex justify-center gap-4 mb-16">
//             <Link
//               href="/watch"
//               className="px-6 py-3 bg-[#2B1957] text-white rounded-lg hover:bg-[#382468] transition-colors"
//             >
//               Watch now
//             </Link>
//             <Link
//               href="/talk"
//               className="px-6 py-3 bg-white text-[#2B1957] rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               Talk to an expert
//             </Link>
//           </div>

//           {/* Preview Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {previewCards.map((card) => (
//               <div
//                 key={card.id}
//                 className="relative group rounded-2xl overflow-hidden bg-[#1A1A1A]/20 backdrop-blur-sm border border-white/10 transition-transform hover:-translate-y-2"
//               >
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-auto"
//                 />
//                 {card.hasPlayButton && (
//                   <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
//                     <Play className="w-6 h-6 text-white ml-1" />
//                   </button>
//                 )}
//                 <div className="p-4">
//                   <h3 className="text-white text-lg font-semibold text-left">
//                     {card.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chat Widget */}
//         <button className="fixed bottom-8 right-8 bg-[#2B1957] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#382468] transition-colors">
//           <img src="/chat-icon.svg" alt="Chat" className="w-6 h-6" />
//           Let's Chat!
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { Play } from "lucide-react";

export default function HeroSection() {
  const previewCards = [
    {
      id: 1,
      title: "What is Agentforce?",
      image: "/images/img-hero-1b.webp",
      hasPlayButton: true,
    },
    {
      id: 2,
      title: "Preview: How Does Agentforce Work?",
      image: "/images/img-hero-2a.webp",
      hasPlayButton: true,
    },
    {
      id: 3,
      title: "Preview: How to Create a Customised Agent",
      image: "/images/how-to-create-custom-agent-thumbnail.webp",
      hasPlayButton: true,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D0A4D] via-[#461B6E] to-[#190657]">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/AF2-0_Website_Header_DigitalLabor_3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10"></div>

      {/* Curved bottom border effect */}
      <div className="absolute bottom-0 w-full h-[30%] bg-[#00D4FF]/20 blur-[100px] z-20" />

      {/* Main content */}
      <div className="relative z-30 max-w-[1600px] mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-8 md:pb-16">
        {/* Hero text and CTA */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 max-w-4xl mx-auto leading-tight">
            kimmymae.ai <span className="text-[#7BB8F8]"></span>
          </h1>
          <div className="inline-flex flex-col sm:flex-row items-center bg-gradient-to-r from-[#2B7FFF] to-[#AA2BFF] rounded-full px-4 sm:px-8 md:px-11 py-6 sm:py-8 md:py-12 mb-6 md:mb-10 max-w-6xl mx-auto">
            <h2 className="text-white text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-semibold mb-4 sm:mb-0 sm:mr-6 p-2 sm:p-5">
              The AI Platform
            </h2>
            <div className="sm:ml-6 bg-white rounded-full p-6 sm:p-8 md:p-12">
              <img
                src="/images/120.png"
                alt="Agent Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-16">
            <Link
              href="/watch"
              className="px-6 py-3 bg-[#2B1957] text-white rounded-lg hover:bg-[#382468] transition-colors w-full sm:w-auto"
            >
              Watch now
            </Link>
            <Link
              href="/talk"
              className="px-6 py-3 bg-white text-[#2B1957] rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Talk to an expert
            </Link>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {previewCards.map((card) => (
              <div
                key={card.id}
                className="relative group rounded-2xl overflow-hidden bg-[#1A1A1A]/20 backdrop-blur-sm border border-white/10 transition-transform hover:-translate-y-2"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto"
                />
                {card.hasPlayButton && (
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                  </button>
                )}
                <div className="p-3 sm:p-4">
                  <h3 className="text-white text-base sm:text-lg font-semibold text-left">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Widget */}
        <button className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[#2B1957] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-[#382468] transition-colors text-sm sm:text-base">
          <img src="/images/contact-us-agentforce-background.webp" alt="Chat" className="w-5 h-5 sm:w-6 sm:h-6" />
          Let's Chat!
        </button>
      </div>
    </div>
  );
}