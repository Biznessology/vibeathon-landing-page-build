
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    <nav className={`mega-head ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-wonderbotz-white">WonderBotz</span>
        </a>
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

export default Navbar;
