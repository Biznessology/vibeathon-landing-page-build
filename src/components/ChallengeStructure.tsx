
import React from 'react';

const ChallengeStructure = () => {
  const challenges = [
    {
      title: "Agentic AI for Client Operations",
      description: "AI agents making autonomous decisions in typical client workflows"
    },
    {
      title: "Client Process Automation",
      description: "Use AI + RPA to solve a known bottleneck or inefficiency"
    },
    {
      title: "AI-Augmented Decisioning",
      description: "Build tools that enhance accuracy, insight, or speed in client decision-making"
    },
    {
      title: "Client-Specific Innovation",
      description: "Build something tailored to a real WonderBotz client scenario (can be anonymized)"
    }
  ];

  return (
    <section className="section-padding" id="challenge">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          Challenge Structure
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4">Focus</h3>
            <p className="mb-4">
              The hackathon will center around solution-driven innovation specifically aligned to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>AI and Agentic AI use cases</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Business problems relevant to WonderBotz clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Practical, value-creating applications in automation and intelligence</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4">Tracks / Focus Areas</h3>
            <p className="mb-4">
              Participants must choose a challenge area directly tied to real-world business needs. Sample tracks include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="card">
                  <div className="h-12 w-12 rounded-full bg-wonderbotz-green text-wonderbotz-white flex items-center justify-center mb-4">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-wonderbotz-dark-gray mb-2">{challenge.title}</h4>
                  <p className="text-wonderbotz-gray">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-wonderbotz-dark-gray mb-4">Format</h3>
            <p>
              Each team will select one focus area and define a clear problem statement (client-relevant or AI/Agentic-based). 
              The final output should be a working prototype that addresses the chosen problem with a practical solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeStructure;
