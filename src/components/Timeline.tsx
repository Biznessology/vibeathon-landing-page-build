
import React, { useEffect, useRef } from 'react';
import { Trophy, Star, Users, User } from 'lucide-react';

const Timeline = () => {
  const timelineSteps = [
    {
      title: "Submit One-Pager",
      description: "Teams submit a one-page overview of their solution concept",
      icon: <Users className="text-white" />
    },
    {
      title: "Proposal Evaluation",
      description: "WonderBotz team reviews and selects finalists",
      icon: <Star className="text-white" />
    },
    {
      title: "24-Hour Hackathon",
      description: "Selected teams build their prototypes during the 24-hour sprint",
      icon: <User className="text-white" />
    },
    {
      title: "Final Presentations",
      description: "Teams present their solutions to the judges",
      icon: <Trophy className="text-white" />
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (timelineRef.current) {
      const elements = timelineRef.current.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-gray-50" id="timeline">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          <span className="inline-flex items-center">
            Timeline & Process
            <Trophy className="ml-3 text-wonderbotz-green" />
          </span>
        </h2>
        
        <div className="relative" ref={timelineRef}>
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-wonderbotz-green -translate-x-1/2"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-0">
            {timelineSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal-on-scroll`}
              >
                <div className="md:w-1/2"></div>
                
                {/* Connection Point */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-wonderbotz-green text-white flex items-center justify-center overflow-hidden animate-pulse-slow">
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-1/2 md:px-8 pb-10 md:pb-24">
                  <div className="flex md:hidden mb-4">
                    <div className="h-12 w-12 rounded-full bg-wonderbotz-green text-white flex items-center justify-center overflow-hidden animate-pulse-slow mr-4">
                      {step.icon}
                    </div>
                  </div>
                  <div className="card hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-2">{step.title}</h3>
                    <p className="text-wonderbotz-gray">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
