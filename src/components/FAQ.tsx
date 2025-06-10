
import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is Vibe-A-Thon and what makes it special?",
      answer: "Vibe-A-Thon is WonderBotz's internal hackathon focused on Agentic Automation - the next evolution of AI-driven automation where intelligent agents can understand goals, make decisions, and take autonomous actions across business processes."
    },
    {
      question: "What is the theme of this hackathon?",
      answer: "The theme is 'Agentic Automation' - building autonomous AI agents that can handle end-to-end business tasks with minimal human intervention, going beyond traditional RPA to create self-directed problem solvers."
    },
    {
      question: "Who can participate in Vibe-A-Thon?",
      answer: "This is an internal WonderBotz hackathon open to all employees. Whether you're a developer, designer, business analyst, or from any other department - if you have innovative ideas for agentic automation, you're welcome to participate!"
    },
    {
      question: "What is the team size requirement?",
      answer: "Teams must consist of 2-4 exceptional individuals. This size ensures diverse skill sets while maintaining effective collaboration and communication throughout the hackathon."
    },
    {
      question: "How long is the hackathon?",
      answer: "The duration and specific timeline will be announced during registration. Check the Timeline section for detailed schedule information including key milestones and submission deadlines."
    },
    {
      question: "What technical requirements must our solution meet?",
      answer: "Your solution must perform seamlessly on the WBZ Laptop. Ensure compatibility with the designated hardware environment and test thoroughly before submission."
    },
    {
      question: "What deliverables are required for submission?",
      answer: "You must deliver a comprehensive package including: presentation slides, a video walkthrough showcasing the before-and-after workflow transformation, and complete source code with implementation details."
    },
    {
      question: "What focus areas should we consider for our project?",
      answer: "We have 5 key focus areas: Autonomous Client Support Agents, Self-Optimizing Business Processes, Intelligent Data Interpretation & Action, Proactive Risk & Compliance Agents, and Personalized Automation for Real Client Scenarios."
    },
    {
      question: "What prizes can we win?",
      answer: "Exciting prizes await the winning teams! Check the Prizes section for detailed information about rewards for different categories and achievements."
    },
    {
      question: "How will solutions be evaluated?",
      answer: "Solutions will be evaluated based on innovation, technical excellence, practical applicability to real business scenarios, adherence to the agentic automation theme, and overall impact potential."
    },
    {
      question: "Can we use external libraries and frameworks?",
      answer: "Yes, you can use external libraries and frameworks as long as they support your solution's functionality and ensure compatibility with the WBZ Laptop environment."
    },
    {
      question: "How do I register for the hackathon?",
      answer: "Fill out the registration form on this page with your team details and project concept. Registration is required to secure your spot in this exciting innovation challenge."
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50" id="faq">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="reveal-on-scroll text-center mb-16">
            <h2 className="text-3xl font-bold text-wonderbotz-dark-gray mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-wonderbotz-gray">
              Get answers to common questions about the Vibe-A-Thon
            </p>
          </div>

          <div className="reveal-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-wonderbotz-dark-gray hover:text-wonderbotz-green font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-wonderbotz-gray leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
