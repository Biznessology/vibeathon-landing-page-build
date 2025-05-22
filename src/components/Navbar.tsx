
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`mega-head transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <Award className="w-6 h-6 text-wonderbotz-red mr-2 transition-transform group-hover:rotate-12" />
          <span className="text-xl font-bold text-wonderbotz-white">WonderBotz</span>
        </a>
        
        <div className="hidden md:flex space-x-6">
          <NavLink href="#why">Why</NavLink>
          <NavLink href="#theme">Theme</NavLink>
          <NavLink href="#challenge">Challenge</NavLink>
          <NavLink href="#timeline">Timeline</NavLink>
          <NavLink href="#agenda">Agenda</NavLink>
          <NavLink href="#prizes">Prizes</NavLink>
        </div>
        
        <Button 
          onClick={scrollToRegistration}
          className="button-orange"
        >
          Register Now
        </Button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-wonderbotz-white text-sm uppercase tracking-wider font-medium relative overflow-hidden group"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-wonderbotz-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </a>
  );
};

export default Navbar;
