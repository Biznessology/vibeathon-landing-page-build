
import React, { useEffect, useRef } from 'react';
import { BadgeIndianRupee, Users } from 'lucide-react';

const Prizes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('opacity-100', 'translate-y-0');
            }, 200 * index);
          });
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50" id="prizes">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12 flex items-center justify-center">
          Prizes & Judges <BadgeIndianRupee className="ml-3 text-wonderbotz-green animate-float" />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="card text-center animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-500 hover:border-wonderbotz-green hover:border">
            <div className="inline-block bg-wonderbotz-green p-4 rounded-full mb-6 animate-float">
              <BadgeIndianRupee className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-wonderbotz-dark-gray mb-4">₹150,000</h3>
            <p className="text-xl text-wonderbotz-gray mb-2">Total Prize Pool</p>
            <ul className="text-left space-y-2 mt-6">
              <li className="flex items-start staggered-item animate-slide-in opacity-0">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>First Place: ₹75,000</span>
              </li>
              <li className="flex items-start staggered-item animate-slide-in opacity-0">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Second Place: ₹45,000</span>
              </li>
              <li className="flex items-start staggered-item animate-slide-in opacity-0">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Third Place: ₹30,000</span>
              </li>
            </ul>
          </div>
          
          <div className="card text-center animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-500 hover:border-wonderbotz-green hover:border">
            <div className="inline-block bg-wonderbotz-green p-4 rounded-full mb-6 animate-float">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-wonderbotz-dark-gray mb-4">Expert Panel</h3>
            <p className="text-xl text-wonderbotz-gray mb-2">Judged by Senior Leadership Team</p>
            <ul className="text-left space-y-2 mt-6">
              <li className="flex items-start staggered-item animate-slide-in opacity-0">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>CTO & AI Engineering Leads</span>
              </li>
              <li className="flex items-start staggered-item animate-slide-in opacity-0">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Client Solutions Directors</span>
              </li>
              <li className="flex items-start staggered-item animate-slide-in opacity-0">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Innovation Team Leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
