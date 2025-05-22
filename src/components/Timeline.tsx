
import React from 'react';

const Timeline = () => {
  const timelineSteps = [
    {
      title: "Submit One-Pager",
      description: "Teams submit a one-page overview of their solution concept"
    },
    {
      title: "Proposal Evaluation",
      description: "WonderBotz team reviews and selects finalists"
    },
    {
      title: "24-Hour Hackathon",
      description: "Selected teams build their prototypes during the 24-hour sprint"
    },
    {
      title: "Final Presentations",
      description: "Teams present their solutions to the judges"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="timeline">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          Timeline & Process
        </h2>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-wonderbotz-green -translate-x-1/2"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-0">
            {timelineSteps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2"></div>
                
                {/* Connection Point */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-wonderbotz-green text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2 md:px-8 pb-10 md:pb-24">
                  <div className="flex md:hidden mb-4">
                    <div className="h-8 w-8 rounded-full bg-wonderbotz-green text-white flex items-center justify-center font-bold mr-4">
                      {index + 1}
                    </div>
                  </div>
                  <div className="card">
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
