import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MarketGrowth from './components/MarketGrowth';
import JobOpportunities from './components/JobOpportunities';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import TrainingHighlights from './components/TrainingHighlights';
import CallToAction from './components/CallToAction';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for navigation links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const targetSection = document.querySelector(target.hash);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add click event listener to navigation
    document.addEventListener('click', handleNavClick);

    // Smooth scroll behavior
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        if (speed) {
          const speedValue = parseFloat(speed);
          const yPos = -(scrolled * speedValue);
          if (element instanceof HTMLElement) {
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
          }
        }
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
      document.removeEventListener('click', handleNavClick);
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
              <img 
                src="/images/LW@4x1.png" 
                alt="LinuxWorld Logo" 
                className="w-12 h-8 mr-3 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">AWS</span>
              </div>
              <span className="text-xl font-bold text-slate-900">CSA Training</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Home</a>
              <a href="#market-growth" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Market Growth</a>
              <a href="#job-opportunities" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Career</a>
              <a href="#curriculum" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Curriculum</a>
              <a href="#instructor" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Mentor</a>
              <a href="#cta" className="text-slate-600 hover:text-orange-500 transition-colors duration-300">Enroll</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="market-growth">
          <MarketGrowth />
        </section>
        <section id="job-opportunities">
          <JobOpportunities />
        </section>
        <section id="curriculum">
          <WhatYouWillLearn />
        </section>
        <section id="instructor">
          <TrainingHighlights />
        </section>
        <section id="cta">
          <CallToAction />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Branding Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/LW@4x1.png" 
                  alt="LinuxWorld Logo" 
                  className="w-16 h-12 mr-4 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">AWS</span>
                </div>
                <span className="text-xl font-bold">CSA Training</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Master AWS with India's most trusted cloud computing mentor. Transform your career with world-class training from Vimal Daga Sir.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-colors">
                  <span className="text-orange-400 font-bold">A</span>
                </div>
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                  <span className="text-blue-400 font-bold">W</span>
                </div>
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors">
                  <span className="text-green-400 font-bold">S</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <a href="#hero" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <a href="#curriculum" className="text-gray-300 hover:text-orange-400 transition-colors">Course Curriculum</a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <a href="#instructor" className="text-gray-300 hover:text-orange-400 transition-colors">Meet Your Mentor</a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <a href="#cta" className="text-gray-300 hover:text-orange-400 transition-colors">Enroll Now</a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-orange-400">support@lwindia.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-400 text-sm">💬</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">WhatsApp</p>
                    <p className="text-green-400">+91 9772201449</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Address</p>
                    <p className="text-gray-400 text-sm leading-relaxed">Krishna Tower, Plot No. 5, Gopalpura Bypass Rd, Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">&copy; 2025 AWS CSA Training with Vimal Daga Sir. All rights reserved.</p>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Powered by LinuxWorld India</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 text-sm font-medium">Live Training Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;