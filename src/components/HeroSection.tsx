import React from 'react';
import { ChevronRight, Star, Users, Award, ArrowRight, Calendar, Clock, Timer } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 dark:opacity-10"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center min-h-[calc(100vh-2rem)] relative">
          
          {/* Left Content Column - Course Information */}
          <div className="space-y-3 lg:space-y-6 order-1 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-orange-600 dark:text-orange-400 text-xs lg:text-sm font-medium">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Live Training Available
            </div>

            {/* Main Headline */}
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight px-2 sm:px-0">
                <span className="block">AWS Certified</span>
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Solutions Architect
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-medium px-2 sm:px-0">
                Training with Vimal Daga Sir
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0">
              Build skills for the future. Master AWS. Accelerate your career with 
              India's most trusted cloud computing mentor.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-1 lg:pt-3">
              <button 
                onClick={() => window.open('https://rzp.io/rzp/tqFusAP', '_blank')}
                className="group relative px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center text-sm lg:text-base cursor-pointer w-full sm:w-auto justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Register Now
                  <ChevronRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </div>

            {/* Course Details */}
            <div className="mt-2 lg:mt-4 space-y-1 lg:space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" />
                <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-500">
                  <span className="font-medium">Starting from:</span> 9th Sept 2025
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" />
                <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-500">
                  <span className="font-medium">Time:</span> 9pm Tue to Friday
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                <Timer className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" />
                <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-500">
                  <span className="font-medium">Duration:</span> 40hrs
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 pt-2 lg:pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <Users className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">10,000+ Students</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 fill-current" />
                <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Video Column - World Record Section */}
          <div className="order-2 lg:order-2 relative">
            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Video Player */}
              <div className="relative w-full aspect-video bg-gray-800 rounded-xl sm:rounded-2xl lg:rounded-t-2xl overflow-hidden">
                {/* Video Player */}
                <video 
                  className="w-full h-full object-contain"
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="true"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                  }}
                >
                  <source src="/videos/asset1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Mobile Play Button Overlay */}
                <div className="md:hidden absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button 
                    onClick={(e) => {
                      const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        video.play().catch(() => {
                          // Fallback: show poster image if video can't play
                          video.style.display = 'none';
                        });
                      }
                      e.currentTarget.style.display = 'none';
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 lg:p-4 transition-colors duration-300 shadow-lg"
                  >
                    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* World Record Achievement */}
              <div className="text-center space-y-2 lg:space-y-3 p-3 lg:p-4">
                <div className="inline-flex items-center px-2 py-1 lg:px-3 lg:py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs lg:text-sm font-medium">
                  <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                  🏆 World Record Holder
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white px-2">
                  Vimal Daga's World Record
                </h3>
                <p className="text-xs sm:text-sm lg:text-sm text-gray-300 leading-relaxed px-2 sm:px-2 lg:px-0">
                  <span className="text-yellow-400 font-semibold">11 Global Certifications in 11 Days!</span><br/>
                  Experience training from the world's fastest cloud certification achiever
                </p>
                
                <button 
                  onClick={() => window.open('https://rzp.io/rzp/tqFusAP', '_blank')}
                  className="group w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-1.5 lg:py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center text-xs lg:text-sm cursor-pointer"
                >
                  <span>Learn from the Best</span>
                  <ArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Cloud Image - Enhanced Glowing Effects - Hidden on Mobile */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="relative">
              <img 
                src="/images/cloud-1.png" 
                alt="Cloud" 
                className="w-28 h-28 xl:w-32 xl:h-32 opacity-80 animate-float drop-shadow-2xl filter brightness-110 contrast-125"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 w-full h-full bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
              {/* Additional Glow Layers for Better Effect */}
              <div className="absolute inset-0 w-full h-full bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute inset-0 w-full h-full bg-yellow-300/25 rounded-full blur-xl animate-pulse delay-500"></div>
              {/* Sparkle Effects */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-500"></div>
              <div className="absolute -top-3 right-1/2 w-2 h-2 bg-orange-300 rounded-full animate-ping delay-1500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10,000+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Students Trained</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Companies Partnered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;