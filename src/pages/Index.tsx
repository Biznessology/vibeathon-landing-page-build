
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyVibeAThon from '@/components/WhyVibeAThon';
import ThemeSection from '@/components/ThemeSection';
import Timeline from '@/components/Timeline';
import Agenda from '@/components/Agenda';
import Prizes from '@/components/Prizes';
import Rules from '@/components/Rules';
import RegistrationForm from '@/components/RegistrationForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

// This component handles intersection observer functionality
const ScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <WhyVibeAThon />
        <ThemeSection />
        <Timeline />
        <Agenda />
        <Prizes />
        <Rules />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
