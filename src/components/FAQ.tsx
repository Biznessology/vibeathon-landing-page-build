
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
      question: "What is the team size requirement?",
      answer: "Teams must consist of 2-4 exceptional individuals. This size ensures diverse skill sets while maintaining effective collaboration and communication."
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
      question: "What coding standards should we follow?",
      answer: "Adhere to industry best practices and coding standards. Focus on clean, maintainable code, proper documentation, and robust implementation that demonstrates excellence in software development."
    },
    {
      question: "How will solutions be evaluated?",
      answer: "Solutions will be evaluated based on innovation, technical excellence, practical applicability to real business scenarios, and adherence to the agentic automation theme."
    },
    {
      question: "Can we use external libraries and frameworks?",
      answer: "Yes, you can use external libraries and frameworks as long as they support your solution's functionality and ensure compatibility with the WBZ Laptop environment."
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
