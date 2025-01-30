"use client";

import React, { useState } from "react";

const FAQSection = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState("what-is-agent");

  const faqs = [
    {
      id: "what-is-agent",
      question: "What is an AI agent?",
      answer: (
        <>
          <a href="#" className="text-blue-600 hover:underline">
            AI Agents
          </a>{" "}
          are autonomous, proactive applications designed to execute specialised
          tasks to help employees and customers. Agents use large language
          models (
          <a href="#" className="text-blue-600 hover:underline">
            LLMs
          </a>
          ) to analyse and understand the full context of customer interactions
          or an automated trigger, then reason through decisions on the next
          steps autonomously.
          <br />
          <br />
          These agents generate responses that are consistent with your
          company's brand voice and guidelines using trusted business data,
          including{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Salesforce CRM
          </a>{" "}
          data, external data from{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Data Cloud
          </a>{" "}
          and more. These agents are capable of operating 24/7 across various
          platforms like self-service portals and messaging channels, handling
          tasks proactively within set guardrails. When faced with complex
          issues beyond their scope, they can escalate the matter to human
          agents, ensuring that queries are resolved efficiently and accurately.
        </>
      ),
    },
    {
      id: "how-build",
      question: "How do you build AI agents?",
      answer:
        "Build AI agents using our intuitive interface and pre-built templates...",
    },
    {
      id: "agent-types",
      question: "What types of AI agents are there?",
      answer: "We offer various types of AI agents for different use cases...",
    },
    {
      id: "einstein",
      question: "How does Einstein work?",
      answer: "Einstein uses advanced AI algorithms to analyze your data...",
    },
    {
      id: "agent-builder",
      question: "What is an AI agent builder?",
      answer:
        "The AI agent builder is our platform for creating custom agents...",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-center text-[#0A2756] text-4xl font-bold mb-12">
          Agentforce Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <h3 className="text-[#0A2756] text-xl font-bold">
                  {faq.question}
                </h3>
                {/* <span className="text-[#0A2756] text-10xl inline-block bg-[#E8F3FF] text-[#0A2756] text-sm px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                  {openFAQ === faq.id ? "−" : "+"}
                </span> */}

<span className="text-[#0A2756] inline-block bg-[#E8F3FF] text-[#0A2756] text-md px-2.5 py-1 rounded-full font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
  {openFAQ === faq.id ? "−" : <span className="text-2xl">+</span>}
</span>

              </button>

              {openFAQ === faq.id && (
                <div className="pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
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
  );
};

export default FAQSection;
