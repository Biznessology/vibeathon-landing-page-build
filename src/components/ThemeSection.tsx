
import React, { useEffect, useRef } from 'react';
import { Star, Zap, Brain, Target, Shield, Users } from 'lucide-react';

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

  const focusAreas = [
    {
      icon: Users,
      title: "Autonomous Client Support Agents",
      description: "AI agents that can handle customer or internal support queries from start to finish—triaging, responding, escalating, and resolving without manual handoff."
    },
    {
      icon: Zap,
      title: "Self-Optimizing Business Processes",
      description: "Agents that monitor process metrics (e.g., SLAs, errors, volume), detect issues or bottlenecks, and take corrective action—such as rerouting tasks, triggering alerts, or reallocating resources."
    },
    {
      icon: Brain,
      title: "Intelligent Data Interpretation & Action",
      description: "Agents that extract and interpret unstructured data (emails, invoices, documents), decide next steps, and initiate downstream actions (updating systems, notifying teams, etc.)."
    },
    {
      icon: Shield,
      title: "Proactive Risk & Compliance Agents",
      description: "Agents that continuously scan for compliance risks or anomalies in business activities, automatically flag issues, and propose or take preventive actions."
    },
    {
      icon: Target,
      title: "Personalized Automation for Real Client Scenarios",
      description: "Design agentic automation tailored for a specific (even anonymized) client challenge—such as onboarding, procurement, audit, finance, or HR—where the agent takes full ownership of the workflow."
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-wonderbotz-dark-gray text-wonderbotz-white relative overflow-hidden" id="theme">
      <div className="container relative z-10">
        {/* Theme Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="reveal-on-scroll mb-6 inline-block">
            <div className="flex items-center justify-center">
              <Star className="text-wonderbotz-green mr-3 animate-float" />
              <h2 className="text-3xl font-bold">Theme: Agentic Automation</h2>
              <Star className="text-wonderbotz-green ml-3 animate-float" />
            </div>
          </div>
          
          <div className="reveal-on-scroll mb-8">
            <h3 className="text-xl font-semibold mb-4 text-wonderbotz-green">What is Agentic Automation?</h3>
            <p className="text-lg mb-6">
              <strong>Agentic Automation</strong> is the next evolution beyond traditional RPA and workflow automation. 
              Instead of just following pre-set rules, agentic automation leverages autonomous, intelligent AI "agents" that can:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-wonderbotz-green font-bold mr-2">•</span>
                  <span>Understand goals and context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wonderbotz-green font-bold mr-2">•</span>
                  <span>Make their own decisions</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-wonderbotz-green font-bold mr-2">•</span>
                  <span>Adapt to changing situations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wonderbotz-green font-bold mr-2">•</span>
                  <span>Take actions proactively across systems</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg mb-4">
              These agents are capable of planning, reasoning, and executing end-to-end business tasks with little or no human involvement. 
              The result: smarter, self-driving processes that continuously improve, learn, and optimize on their own.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="reveal-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-4 text-wonderbotz-green">Focus Areas for the Hackathon</h3>
          <p className="text-lg text-center mb-12 max-w-4xl mx-auto">
            For this hackathon, we want employees to <strong>dream up and build practical use cases where agentic automation can bring step-change value</strong> to WonderBotz or its clients. 
            Forget simple bots or scripts—think autonomous problem solvers.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {focusAreas.map((area, index) => (
              <div key={index} className="card bg-gray-800 border border-gray-700 hover:border-wonderbotz-green transition-all duration-300 staggered-item animate-fade-in opacity-0">
                <div className="inline-block bg-wonderbotz-green p-3 rounded-full mb-4 animate-pulse-slow">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-wonderbotz-green mb-3">{area.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-wonderbotz-green/10 rounded-lg p-8">
            <h4 className="text-xl font-bold mb-4 text-wonderbotz-green">Your Mission:</h4>
            <p className="text-lg mb-4">
              Build something that showcases true "agentic" autonomy. If you can imagine an AI system doing a job end-to-end without waiting for instructions—<strong>that's an agentic use case!</strong>
            </p>
            <p className="text-2xl font-bold text-wonderbotz-green mb-4 animate-pulse">
              Ready to hack the future of automation?
            </p>
            <p className="text-lg font-semibold text-wonderbotz-white">
              Register now and be part of the innovation!
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-wonderbotz-green opacity-20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 border-2 border-wonderbotz-red opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-wonderbotz-white opacity-5 rounded-full"></div>
    </section>
  );
};

export default ThemeSection;
