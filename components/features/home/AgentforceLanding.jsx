// "use client";

// import React from 'react';
// import Image from 'next/image';

// const AgentforceLanding = () => {
//   return (
//     <div className="w-full bg-white">
//       {/* First Section */}
//       <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#0A2756]">
//             Bring your Agentforce into the flow of work
//           </h1>
//           <p className="text-gray-600">
//             Surface any information facing agent in Flow and unlock agents productivity
//           </p>
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
//             Learn More
//           </button>

//           <div className="mt-12 space-y-4">
//             <h3 className="text-xl font-semibold">Agentforce in Slack</h3>
//             <p className="text-gray-600">
//               Your Agentforce agents can surface in any existing application you are using to communicate in. Slack users will be notified when Agentforce agents autonomously solve a new case. The agent will share what they did directly in the Flow of work. Just with basic Slack's @mentions - no need fresh environments and no adapting to new interfaces (or vice versa). Your Agentforce agent will seamlessly adapt to your different UI's Stack.
//             </p>
//             <p className="text-blue-500 font-medium cursor-pointer">View Skills</p>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-xl font-semibold">Agentforce Hub</h3>
//           </div>
//         </div>

//         <div className="relative">
//           <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-6">
//             <Image
//                            src="/images/product-features-agent-builder-with-slack-actions.webp"

//               alt="Product Specialist Interface"
//               width={600}
//               height={400}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Second Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="rounded-3xl overflow-hidden bg-white p-6 shadow-lg">
//             <Image
//               src="/images/img-agent-trailblazer-1c.webp"
//               alt="Agent Profile"
//               width={500}
//               height={500}
//               className="rounded-xl"
//             />
//           </div>

//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
//               Customise your Agentforce on the Salesforce Platform
//             </h2>
//             <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
//               Learn more
//             </button>

//             <div className="space-y-6 mt-8">
//               <div>
//                 <h3 className="text-xl font-semibold">Agent Builder</h3>
//                 <p className="text-gray-600 mt-2">
//                   Agent Builder is the easy-to-use tool for Agentforce. Users can tap into existing tasks like Flow, connect to systems, jump and respond to events in real-time. With the Agent Builder you can move from no-to-low code to full-code as skills mature. Agents can be configured to define actions to take based on pattern recognition from Sales records as input and next to thousands right in Agent Builder.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold">AI/ML Processing Engine</h3>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold">Trust & Constraints</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Third Section */}
//       <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
//             Only Agentforce brings together Humans + AI + Data + Actions
//           </h2>

//           <div>
//             <h3 className="text-xl font-semibold">Humans + AI</h3>
//             <p className="text-gray-600 mt-2">
//               The most effective use of AI agents is in addition to humans in the enterprise context. Our industry-leading agents use their intelligence to handle routine work while seamlessly collaborating with human experts. This allows your team to be their best productive self and leverage expert domain across the organization. Agents handle the overall doing that allows your people to focus on higher order thinking and guide agents to their best on the job.
//             </p>
//           </div>

//           <div className="space-y-2">
//             <h3 className="text-xl font-semibold">Data</h3>
//             <h3 className="text-xl font-semibold">Actions</h3>
//           </div>
//         </div>

//         <div className="relative">
//           <Image
//             src="/images/horizontal-container-one-up-humansplusaI.webp"
//             alt="AI Interface"
//             width={600}
//             height={400}
//             className="rounded-3xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Fourth Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row gap-8 items-center">
//             <div className="w-full md:w-1/2">
//               <div className="relative rounded-3xl overflow-hidden">
//                 <Image
//                   src="/images/BRWOVUapdf6kEjkYJHPa1Q (1).png"
//                   alt="Testing Centre Interface"
//                   width={600}
//                   height={400}
//                   className="shadow-lg"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
//                     <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-800 border-b-8 border-b-transparent ml-1"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full md:w-1/2 space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
//                 Agentforce Testing Centre
//               </h2>
//               <p className="text-gray-600">
//                 Testing autonomous AI agents requires an approach that spans normal unit test to generative QA testing. Our testing harness can scale to generate hundreds of synthetic interactions, then run those tests automatically in parallel to improve test coverage, detect regressions, and more. Our testing harness can operate by executing instructions as needed - saving time that would have been lost on manually testing and debugging, while also improving quality and reliability.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AgentforceLanding;

"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const AgentforceLanding = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="w-full bg-white">
      {/* First Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2756]">
            Bring your Agentforce into the flow of work
          </h1>
          <p className="text-gray-600 text-1.5xl">
            Surface any information facing agent in Flow and unlock agents
            productivity
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Learn More
          </button>

          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">
              Agentforce in Slack
            </h3>
            <p className="text-gray-600">
              Your Agentforce agents can surface in any existing application you
              are using to communicate in. Slack users will be notified when
              Agentforce agents autonomously solve a new case. The agent will
              share what they did directly in the Flow of work.
            </p>
            <p className="text-[#0A2756] text-lg font-bold font-medium cursor-pointer mb-5">
              Slacks Skills
            </p>

            <p className="text-[#0A2756] text-lg font-bold font-medium cursor-pointer">
              Agentforce Hub
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <Image
              src="/images/product-features-agent-builder-with-slack-actions.webp"
              alt="Product Specialist Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden bg-white p-6 shadow-lg">
            <Image
              src="/images/img-agent-trailblazer-1c.webp"
              alt="Agent Profile"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
              Customise your Agentforce on the Salesforce Platform
            </h2>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Learn more
            </button>

            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold text-blue-500">
                Agent Builder
              </h3>
              <p className="text-gray-600">
                Agent Builder is the low-code builder for Agentforce. Users can
                tap into existing tools like Flows, prompt templates, Apex and
                APIs to configure their agent. Set-up is simple: Create a job to
                be done by the agent by defining topics, giving natural language
                instructions for that topic and creating a library of actions
                for it to choose from. Easily monitor an agent’s plan of action
                and test its responses right in Agent Builder.
              </p>
              <p className="text-[#0A2756] text-lg font-bold font-medium cursor-pointer mb-5">
                Atlas Reasoning Engine
              </p>

              <p className="text-[#0A2756] text-lg font-bold font-medium cursor-pointer">
                Trust & Guardrails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
            Only Agentforce brings together Humans + AI + Data + Actions
          </h2>

          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold text-blue-500">Humans + AI</h3>
            <p className="text-gray-600">
              The most effective use of AI agents is as partners to humans in
              the customer experience. Assistive agents can help employees in
              the flow of work by taking on time-consuming jobs so people can
              focus on high value tasks. Autonomous agents perform certain tasks
              proactively and escalate to humans when necessary. For example:
              Agents can provide every new AE their own, personal sales coach
              that gives them feedback, offers guidance and helps them be their
              best on the job.
            </p>
            <p className="text-[#0A2756] text-lg font-bold font-medium cursor-pointer mb-5">
              Data
            </p>

            <p className="text-[#0A2756] text-lg font-bold font-medium cursor-pointer">
              Actions
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/horizontal-container-one-up-humansplusaI.webp"
            alt="AI Interface"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Fourth Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/BRWOVUapdf6kEjkYJHPa1Q (1).png"
                  alt="Testing Centre Interface"
                  width={600}
                  height={400}
                  className="rounded-3xl"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2756]">
                Agentforce Testing Centre
              </h2>
              <p className="text-gray-600">
                Testing autonomous AI agents requires an approach that spans normal unit test to generative QA testing. Our testing harness can scale to generate hundreds of synthetic interactions, improving test coverage and reliability.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                {!isPlaying ? (
                  <div className="relative">
                    <Image
                      src="/images/BRWOVUapdf6kEjkYJHPa1Q (1).png"
                      alt="Testing Centre Interface"
                      width={600}
                      height={400}
                      className="rounded-3xl"
                    />
                    {/* Play Button Overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Image
                        src="/images/ico-play-video-thumbnail.svg" // Replace with the actual path of your play button image
                        alt="Play Video"
                        width={80}
                        height={80}
                        className="transition-transform transform hover:scale-110"
                      />
                    </div>
                  </div>
                ) : (
                  <video
                    src="/videos/your-video.mp4" // Replace with the actual path of your video
                    controls
                    autoPlay
                    className="w-full h-auto rounded-3xl"
                  />
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A2756]">
                Agentforce Testing Centre
              </h2>
              <p className="text-gray-600 md:text-2xl">
                Testing autonomous AI agents requires an approach that spans
                normal unit test to generative QA testing. Our testing harness
                can scale to generate hundreds of synthetic interactions,
                improving test coverage and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentforceLanding;
