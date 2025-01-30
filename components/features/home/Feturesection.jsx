"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "For every team and workflow",
      description:
        "Teams can now create their own customised Agentforce fast for any department with a new library of pre-built skills. These skills span CRM, Slack, Tableau and partner use cases, as well as your own customised skills. Agentforce can also take action in any system or workflow by connecting to existing APIs or with MuleSoft's pre-built connectors to over 40 systems.",
      image: "/images/how-to-create-custom-agent-thumbnail.webp",
    },
    {
      id: 2,
      title: "Collaborate in Slack",
      description:
        "Agentforce is now available in Slack bringing customisable digital labour to where work happens. All of your employees can now collaborate with Agentforce directly in Slack to handle busy work, answer questions and deliver instant expertise, so your team can stay focused on high-impact work. And Agentforce can now draw from conversational data to make every action and answer more relevant.",
      image: "/images/Slack-for-Employees-1.webp",
    },
    {
      id: 3,
      title: "More trusted than ever",
      description:
        "The Atlas Reasoning Engine is now smarter with enhanced reasoning and data retrieval techniques. This enables Agentforce to think deeply when presented with complex, multi-step questions - reasoning across data sources that have been enriched with additional customer-specific metadata, so that Agentforce can take the best action and deliver accurate, well-researched responses with inline citations.",
      image: "/images/Enhanced-Atlas-Reasoning-1.webp",
    },
  ];

  const companies = [
    {
      id: 1,
      name: "Wiley",
      logo: "/images/wiely.webp",
      title: "Wiley sees 41% return on investment with Agentforce",
      description:
        "Learn how the publisher implemented Agentforce to drive operational productivity.",
      link: "Learn more",
      bgColor: "bg-amber-400",
    },
    {
      id: 2,
      name: "OpenTable",
      logo: "/images/opentable.webp",
      title: "OpenTable boosts customer service with Agentforce",
      description:
        "See how the company boosts productivity for service reps with Agentforce in Service Cloud.",
      link: "Learn more",
      bgColor: "bg-pink-400",
    },
    {
      id: 3,
      name: "Saks",
      logo: "/images/saks.webp",
      title: "Saks elevates luxury shopping with unified data",
      description:
        "See how Agentforce will boost online and in-store results to deliver luxury shopping experiences.",
      link: "Learn more",
      bgColor: "bg-purple-400",
    },
    {
      id: 4,
      name: "EZcater",
      logo: "/images/ezcater.webp",
      title: "Agentforce will transform ezCater's customer experience",
      description:
        "Discover how Agentforce will transform customer service to simplify ordering food for the workplace.",
      link: "Learn more",
      bgColor: "bg-emerald-600",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#2c0392] to-[#a333f3]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Features Section */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 px-4">
          Discover what's new with Agentforce 2.0
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-20">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-transform hover:-translate-y-2 shadow-lg"
            >
              <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-[#2B7FFF] to-[#AA2BFF]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-[#2D0A4D] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Watch Keynote Button */}
        <div className="text-center mb-12 sm:mb-20">
          <Link
            href="/watch-keynote"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#0176D3] text-white rounded-lg hover:bg-[#0B5CAB] transition-colors font-semibold text-sm sm:text-base"
          >
            Watch Keynote
          </Link>
        </div>

        {/* Companies Section */}
        <div className="mb-12 sm:mb-20">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
            These companies are unleashing digital labour with Agentforce
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className={`${company.bgColor} p-6 sm:p-8 relative h-40 sm:h-48 flex items-center justify-center`}>
                  <div className="bg-white rounded-full p-4 w-36 sm:w-48 h-20 sm:h-24 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-[#0B2963] text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
                    {company.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                    {company.description}
                  </p>
                  <Link
                    href="#"
                    className="text-[#0176D3] text-sm sm:text-base font-semibold hover:underline inline-block"
                  >
                    {company.link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is Agentforce Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-16 mb-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What is Agentforce?
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-5xl mx-auto px-4">
              Agentforce is a proactive, autonomous AI application that provides
              specialised, always-on support to employees or customers. You can
              equip Agentforce with any necessary business knowledge to execute
              tasks according to its specific role.
            </p>
          </div>

          <div className="bg-white bg-opacity-20 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
              {/* Features list */}
              <div className="space-y-4 sm:space-y-6">
                {/* Feature items */}
                {[
                  {
                    icon: "/images/ico-agent-1.svg",
                    title: "Role",
                    description: "An agent's purpose on your team",
                    isPrimary: true,
                  },
                  {
                    icon: "/images/ico-agent-2.svg",
                    title: "Trusted Data",
                    description: "The context an agent needs to work",
                  },
                  {
                    icon: "/images/ico-agent-3.svg",
                    title: "Actions",
                    description: "The goals an agent can fulfill",
                  },
                  {
                    icon: "/images/ico-agent-4.svg",
                    title: "Guardrails",
                    description: "The guidelines an agent can operate under",
                  },
                  {
                    icon: "/images/ico-agent-5.svg",
                    title: "Channels",
                    description: "Web, mobile, WhatsApp, Slack",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-center gap-3 sm:gap-5 shadow-md cursor-pointer transition-colors
                      ${
                        item.isPrimary
                          ? "bg-purple-900 hover:bg-purple-800"
                          : "bg-white hover:bg-purple-700"
                      }`}
                  >
                    <div className={`rounded-full p-3 sm:p-4 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center
                      ${item.isPrimary ? "bg-purple-600" : "bg-purple-300 bg-opacity-20"}`}>
                      <Image
                        src={item.icon}
                        alt={`${item.title} Icon`}
                        width={28}
                        height={28}
                        className="w-6 sm:w-7 h-6 sm:h-7"
                      />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg sm:text-xl
                        ${item.isPrimary ? "text-white" : "text-black group-hover:text-purple-600"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm sm:text-base
                        ${item.isPrimary ? "text-white" : "text-gray-600 group-hover:text-purple-500"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat interface */}
              <div className="bg-purple-200 bg-opacity-20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative mt-12 mb-16 lg:mt-0">
                <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <Image
                    src="/images/img-agent-user-1.webp"
                    alt="User Avatar"
                    width={200}
                    height={200}
                    className="rounded-full w-16 sm:w-20 h-16 sm:h-20"
                  />
                  <div className="bg-purple-100 bg-opacity-20 rounded-xl sm:rounded-2xl px-6 sm:px-10 py-4 sm:py-6">
                    <p className="text-white text-base sm:text-lg">What is an agent's role?</p>
                  </div>
                </div>

                <div className="bg-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8">
                  <p className="text-white text-base sm:text-lg">
                    The role is the agent's purpose. It defines the job to be
                    done and the broader goals the agent should achieve on your
                    team.
                  </p>
                </div>

                <div className="relative h-48 sm:h-64">
                  <Image
                    src="/images/img-agent-1.webp"
                    alt="Agent Mascot"
                    layout="fill"
                    objectFit="contain"
                    className="absolute bottom-0 right-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Link from 'next/link';
// import Image from 'next/image';

// export default function FeaturesSection() {
//   const features = [
//     {
//       id: 1,
//       title: "For every team and workflow",
//       description: "Teams can now create their own customised Agentforce fast for any department with a new library of pre-built skills. These skills span CRM, Slack, Tableau and partner use cases, as well as your own customised skills. Agentforce can also take action in any system or workflow by connecting to existing APIs or with MuleSoft's pre-built connectors to over 40 systems.",
//       image: "/images/how-to-create-custom-agent-thumbnail.webp",
//     },
//     {
//       id: 2,
//       title: "Collaborate in Slack",
//       description: "Agentforce is now available in Slack bringing customisable digital labour to where work happens. All of your employees can now collaborate with Agentforce directly in Slack to handle busy work, answer questions and deliver instant expertise, so your team can stay focused on high-impact work. And Agentforce can now draw from conversational data to make every action and answer more relevant.",
//       image: "/images/Slack-for-Employees-1.webp",
//     },
//     {
//       id: 3,
//       title: "More trusted than ever",
//       description: "The Atlas Reasoning Engine is now smarter with enhanced reasoning and data retrieval techniques. This enables Agentforce to think deeply when presented with complex, multi-step questions - reasoning across data sources that have been enriched with additional customer-specific metadata, so that Agentforce can take the best action and deliver accurate, well-researched responses with inline citations.",
//       image: "/images/Enhanced-Atlas-Reasoning-1.webp",
//     },
//   ];

//   const companies = [    {
//     id: 1,
//     name: "Wiley",
//     logo: "/images/wiely.webp",
//     title: "Wiley sees 41% return on investment with Agentforce",
//     description: "Learn how the publisher implemented Agentforce to drive operational productivity.",
//     link: "Learn more",
//   },
//   {
//     id: 2,
//     name: "OpenTable",
//     logo: "/images/opentable.webp",
//     title: "OpenTable boosts customer service with Agentforce",
//     description: "See how the company boosts productivity for service reps with Agentforce in Service Cloud.",
//     link: "Learn more",
//   },
//   {
//     id: 3,
//     name: "Saks",
//     logo: "/images/saks.webp",
//     title: "Saks elevates luxury shopping with unified data",
//     description: "See how Agentforce will boost online and in-store results to deliver luxury shopping experiences.",
//     link: "Learn more",
//   },
//   {
//     id: 4,
//     name: "EZcater",
//     logo: "/images/ezcater.webp",
//     title: "Agentforce will transform ezCater's customer experience",
//     description: "Discover how Agentforce will transform customer service to simplify ordering food for the workplace.",
//     link: "Learn more",
//   },];

//   return (
//     <div className="bg-gradient-to-b from-[#2c0392] to-[#a333f3]">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
//         {/* Features Section */}
//         <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 px-4">
//           Discover what's new with Agentforce 2.0
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
//           {features.map((feature) => (
//             <div
//               key={feature.id}
//               className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-transform hover:-translate-y-2"
//             >
//               <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-[#2B7FFF] to-[#AA2BFF]">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6 sm:p-8">
//                 <h3 className="text-[#2D0A4D] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Watch Keynote Button */}
//         <div className="text-center mb-12 sm:mb-20">
//           <Link
//             href="/watch-keynote"
//             className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#0176D3] text-white rounded-lg hover:bg-[#0B5CAB] transition-colors font-semibold text-sm sm:text-base"
//           >
//             Watch Keynote
//           </Link>
//         </div>

//         {/* Companies Section */}
//         <div className="mb-12 sm:mb-20">
//           <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-4">
//             These companies are unleashing digital labour with Agentforce
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {companies.map((company) => (
//               <div
//                 key={company.id}
//                 className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
//               >
//                 <div className={`${getBgColor(company.name)} p-6 sm:p-8 relative h-36 sm:h-48 flex items-center justify-center`}>
//                   <div className="bg-white rounded-full p-3 sm:p-4 w-36 sm:w-48 h-20 sm:h-24 flex items-center justify-center">
//                     <Image
//                       src={company.logo}
//                       alt={company.name}
//                       width={100}
//                       height={32}
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="p-6 sm:p-8">
//                   <h3 className="text-[#0B2963] text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
//                     {company.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
//                     {company.description}
//                   </p>
//                   <Link
//                     href="#"
//                     className="text-[#0176D3] text-sm sm:text-base font-semibold hover:underline inline-block"
//                   >
//                     {company.link}
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* What is Agentforce Section */}
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="text-center mb-8 sm:mb-12">
//             <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
//               What is Agentforce?
//             </h2>
//             <p className="text-white text-base sm:text-lg max-w-4xl mx-auto">
//               Agentforce is a proactive, autonomous AI application that provides specialised, always-on support to employees or customers. You can equip Agentforce with any necessary business knowledge to execute tasks according to its specific role.
//             </p>
//           </div>

//           <div className="bg-white bg-opacity-20 rounded-2xl sm:rounded-3xl p-6 sm:p-12 backdrop-blur-sm">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Features list */}
//               <div className="space-y-4">
//                 {/* Feature items with responsive spacing */}
//                 <div className="bg-white rounded-xl sm:rounded-2xl p-4 flex items-center gap-3 sm:gap-4 shadow-md hover:bg-purple-700 focus:bg-purple-200 cursor-pointer">
//                   <div className="bg-purple-600 rounded-full p-2 sm:p-3 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
//                     <Image
//                       src="/images/ico-agent-1.svg"
//                       alt="Role Icon"
//                       width={20}
//                       height={20}
//                       className="w-5 sm:w-6 h-5 sm:h-6"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-black font-semibold text-base sm:text-lg">Role</h3>
//                     <p className="text-gray-600 text-xs sm:text-sm">An agent's purpose on your team</p>
//                   </div>
//                 </div>
//                 {/* Repeat similar responsive adjustments for other feature items */}
//               </div>

//               {/* Chat interface */}
//               <div className="bg-purple-200 bg-opacity-20 rounded-xl sm:rounded-3xl p-6 sm:p-8 relative mt-8 lg:mt-0">
//                 <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
//                   <Image
//                     src="/images/img-agent-user-1.webp"
//                     alt="User Avatar"
//                     width={64}
//                     height={64}
//                     className="rounded-full w-14 sm:w-20 h-14 sm:h-20"
//                   />
//                   <div className="bg-purple-100 bg-opacity-20 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4">
//                     <p className="text-white text-sm sm:text-base">What is an agent's role?</p>
//                   </div>
//                 </div>

//                 <div className="bg-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4">
//                   <p className="text-white text-sm sm:text-base">
//                     The role is the agent's purpose. It defines the job to be done and the broader goals the agent should achieve on your team.
//                   </p>
//                 </div>

//                 <Image
//                   src="/images/img-agent-1.webp"
//                   alt="Agent Mascot"
//                   width={120}
//                   height={120}
//                   className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 w-32 sm:w-40"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
