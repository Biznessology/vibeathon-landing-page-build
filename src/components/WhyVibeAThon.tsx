
import React, { useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';

const WhyVibeAThon = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden" id="why">
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12 flex items-center justify-center">
          Why Vibe-A-Thon? <Trophy className="ml-3 text-wonderbotz-green animate-float" />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4 flex items-center">
              <div className="icon-circle mr-3">
                <span className="font-bold">O</span>
              </div>
              Objectives
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Foster innovation in AI and automation technologies</span>
              </li>
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Solve real-world business challenges using agentic process automation</span>
              </li>
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Collaborate across multidisciplinary teams to create impactful solutions</span>
              </li>
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Accelerate the development of practical AI applications</span>
              </li>
            </ul>
          </div>
          
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4 flex items-center">
              <div className="icon-circle mr-3">
                <span className="font-bold">O</span>
              </div>
              Outcomes
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Working prototypes that address client-relevant challenges</span>
              </li>
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>New insights into AI-driven process automation</span>
              </li>
              <li className="flex items-start reveal-on-scroll">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Recognition and rewards for innovative solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 h-20 w-20 bg-wonderbotz-green rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-wonderbotz-red rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default WhyVibeAThon;
