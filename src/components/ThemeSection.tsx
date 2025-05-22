
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const ThemeSection = () => {
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

  return (
    <section ref={sectionRef} className="section-padding bg-wonderbotz-dark-gray text-wonderbotz-white relative overflow-hidden" id="theme">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal-on-scroll mb-6 inline-block">
            <div className="flex items-center justify-center">
              <Star className="text-wonderbotz-green mr-3" />
              <h2 className="text-3xl font-bold">Theme: Agentic Process Automation (APA)</h2>
              <Star className="text-wonderbotz-green ml-3" />
            </div>
          </div>
          <p className="text-lg mb-4 reveal-on-scroll">
            Agentic Process Automation combines autonomous AI agents with traditional automation to create 
            systems that can understand, decide, and act with minimal human intervention.
          </p>
          <p className="text-lg reveal-on-scroll">
            This new frontier merges the precision of RPA with the cognitive capabilities of AI to solve 
            complex business challenges and transform how organizations operate.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-wonderbotz-green opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 border-2 border-wonderbotz-red opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-wonderbotz-white opacity-5 rounded-full"></div>
    </section>
  );
};

export default ThemeSection;
