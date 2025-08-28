import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MarketGrowth from './components/MarketGrowth';
import JobOpportunities from './components/JobOpportunities';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import TrainingHighlights from './components/TrainingHighlights';
import CallToAction from './components/CallToAction';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8');
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">AWS</span>
              </div>
              <span className="text-xl font-bold text-slate-900">CSA Training</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">About</a>
              <a href="#curriculum" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Curriculum</a>
              <a href="#instructor" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Instructor</a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <main>
        <HeroSection />
        <MarketGrowth />
        <JobOpportunities />
        <WhatYouWillLearn />
        <TrainingHighlights />
        <CallToAction />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">AWS</span>
                </div>
                <span className="text-xl font-bold">CSA Training</span>
              </div>
              <p className="text-gray-400">
                Master AWS with India's most trusted cloud computing mentor.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Training</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">AWS Solutions Architect</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">DevOps Engineering</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Cloud Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@awscsa-training.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AWS CSA Training with Vimal Daga Sir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;