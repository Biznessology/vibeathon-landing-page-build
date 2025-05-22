
import React from 'react';

const Prizes = () => {
  return (
    <section className="section-padding bg-gray-50" id="prizes">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          Prizes & Judges
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="inline-block bg-wonderbotz-green p-4 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-wonderbotz-dark-gray mb-4">₹150,000</h3>
            <p className="text-xl text-wonderbotz-gray mb-2">Total Prize Pool</p>
            <ul className="text-left space-y-2 mt-6">
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>First Place: ₹75,000</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Second Place: ₹45,000</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Third Place: ₹30,000</span>
              </li>
            </ul>
          </div>
          
          <div className="card text-center">
            <div className="inline-block bg-wonderbotz-green p-4 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-wonderbotz-dark-gray mb-4">Expert Panel</h3>
            <p className="text-xl text-wonderbotz-gray mb-2">Judged by Senior Leadership Team</p>
            <ul className="text-left space-y-2 mt-6">
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>CTO & AI Engineering Leads</span>
              </li>
              <li className="flex items-start">
                <span className="text-wonderbotz-green font-bold mr-2">•</span>
                <span>Client Solutions Directors</span>
              </li>
              <li className="flex items-start">
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
