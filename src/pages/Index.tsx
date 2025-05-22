
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyVibeAThon from '@/components/WhyVibeAThon';
import ThemeSection from '@/components/ThemeSection';
import ChallengeStructure from '@/components/ChallengeStructure';
import Timeline from '@/components/Timeline';
import Agenda from '@/components/Agenda';
import Prizes from '@/components/Prizes';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyVibeAThon />
        <ThemeSection />
        <ChallengeStructure />
        <Timeline />
        <Agenda />
        <Prizes />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
