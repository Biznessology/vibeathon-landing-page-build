
import React from 'react';

const WhyVibeAThon = () => {
  return (
    <section className="section-padding bg-gray-50" id="why">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          Why Vibe-A-Thon?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4">Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Foster innovation in AI and automation technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Solve real-world business challenges using agentic process automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Collaborate across multidisciplinary teams to create impactful solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Accelerate the development of practical AI applications</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4">Outcomes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Working prototypes that address client-relevant challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>New insights into AI-driven process automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Networking opportunities with industry professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Recognition and rewards for innovative solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVibeAThon;
