
import React, { useEffect, useRef } from 'react';
import { Users, Code, Laptop, Package } from 'lucide-react';

const Rules = () => {
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

  const rules = [
    {
      icon: Users,
      title: "Assemble a team of 2-4 exceptional individuals!",
      description: "Form your dream team with diverse skills and expertise to tackle the challenge effectively."
    },
    {
      icon: Code,
      title: "Ensure excellence by adhering to best practices and coding standards.",
      description: "Maintain high code quality, follow industry standards, and implement clean, maintainable solutions."
    },
    {
      icon: Laptop,
      title: "Technical requirements: Your solution must perform seamlessly on the WBZ Laptop.",
      description: "Ensure compatibility and optimal performance on the designated hardware environment."
    },
    {
      icon: Package,
      title: "Deliver a comprehensive package upon completion",
      description: "Include presentation slides, video walkthrough showcasing before-and-after workflow transformation, and complete source code with implementation details."
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-wonderbotz-white" id="rules">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="reveal-on-scroll mb-6">
            <h2 className="text-3xl font-bold text-wonderbotz-dark-gray mb-4">Rules & Requirements</h2>
            <p className="text-lg text-wonderbotz-gray">
              Follow these essential guidelines to ensure your submission meets all requirements
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <div key={index} className="reveal-on-scroll card bg-white border border-gray-200 hover:border-wonderbotz-green transition-all duration-300 staggered-item animate-fade-in opacity-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-block bg-wonderbotz-green p-3 rounded-full">
                    <rule.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-wonderbotz-dark-gray mb-3">
                    {index + 1}. {rule.title}
                  </h3>
                  <p className="text-wonderbotz-gray leading-relaxed">{rule.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
