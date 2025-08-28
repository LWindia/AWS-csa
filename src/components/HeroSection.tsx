import React from 'react';
import { ChevronRight, Star, Users, Award, ArrowRight } from 'lucide-react';

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

      <div className="relative z-10 container mx-auto px-6 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          
          {/* Left Content Column */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Live Training Available
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block">AWS Certified</span>
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  Solutions Architect
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Training with Vimal Daga Sir
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Build skills for the future. Master AWS. Accelerate your career with 
              India's most trusted cloud computing mentor.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center sm:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Register Now
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">10,000+ Students</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600 dark:text-gray-400">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Video Column */}
          <div className="order-1 lg:order-2 relative">
            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl shadow-gray-900/50 overflow-hidden">

              {/* Video Player */}
              <div className="relative w-full aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                {/* Video Player */}
                <video 
                  className="w-full h-full object-contain rounded-2xl"
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/asset1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* World Record Achievement */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                  🏆 World Record Holder
                </div>
                
                <h3 className="text-2xl font-bold text-white">
                  Vimal Daga's World Record
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  <span className="text-yellow-400 font-semibold">11 Global Certifications in 11 Days!</span><br/>
                  Experience training from the world's fastest cloud certification achiever
                </p>
                
                <button className="group w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center">
                  <span>Learn from the Best</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-gray-700/20 dark:to-gray-800/20 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="absolute -z-20 inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 dark:from-blue-800/10 dark:to-purple-800/10 rounded-3xl transform -rotate-3 scale-110"></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  10,000+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Students Trained</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Companies Hiring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;