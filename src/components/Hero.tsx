
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2940&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 dark-blue-60"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-wonderbotz-white mb-4">
            Vibe-A-Thon
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-wonderbotz-red mb-6">
            Vibe. Build. Automate.
          </h2>
          <p className="text-lg text-wonderbotz-white mb-8">
            Vibe-A-Thon celebrates the pulse of teamwork in AI coding while invoking the momentum of a marathon-style build.
          </p>
          <Button 
            onClick={scrollToRegistration}
            className="button-orange"
          >
            Join the Challenge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
