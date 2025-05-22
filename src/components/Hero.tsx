
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Award, Star } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, textRef.current, buttonRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
        }, 300 * index);
      }
    });
  }, []);

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2940&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 dark-blue-60"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-5xl font-bold text-wonderbotz-white mb-4 opacity-0 transform translate-y-10 transition-all duration-700"
          >
            <span className="flex items-center">
              Vibe-A-Thon <Award className="ml-2 text-wonderbotz-red animate-float" />
            </span>
          </h1>
          <h2 
            ref={subtitleRef} 
            className="text-2xl md:text-3xl font-semibold text-wonderbotz-red mb-6 opacity-0 transform translate-y-10 transition-all duration-700 delay-300"
          >
            <span className="flex items-center">
              Vibe. Build. Automate. <Star className="ml-2 text-wonderbotz-white animate-pulse-slow" />
            </span>
          </h2>
          <p 
            ref={textRef} 
            className="text-lg text-wonderbotz-white mb-8 opacity-0 transform translate-y-10 transition-all duration-700 delay-600"
          >
            Vibe-A-Thon celebrates the pulse of teamwork in AI coding while invoking the momentum of a marathon-style build.
          </p>
          <Button 
            ref={buttonRef}
            onClick={scrollToRegistration}
            className="button-orange opacity-0 transform translate-y-10 transition-all duration-700 delay-900"
          >
            Join the Challenge
          </Button>
          
          {/* Decorative Elements */}
          <div className="absolute right-10 top-10 hidden md:block">
            <div className="w-10 h-10 bg-wonderbotz-red rounded-full opacity-30 animate-float"></div>
          </div>
          <div className="absolute right-20 bottom-10 hidden md:block">
            <div className="w-6 h-6 bg-wonderbotz-green rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
