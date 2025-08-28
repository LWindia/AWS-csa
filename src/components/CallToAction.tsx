import React from 'react';
import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Social Proof Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 mb-6 backdrop-blur-sm">
            <Star className="w-5 h-5 mr-2" />
            <span className="font-medium">Trusted by 10,000+ professionals</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Take the First Step to Your
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              AWS Career Today!
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers. 
            Limited seats available for the next batch.
          </p>
        </div>

        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Start Your Transformation
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span>Live interactive training sessions</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span>Hands-on AWS environment access</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span>Certification success guarantee</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span>Lifetime career support</span>
                  </div>
                </div>

                <div className="flex items-center text-orange-400 mb-6">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">Only 50 seats remaining</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl mb-6">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-2">₹49,999</div>
                    <div className="text-orange-100 text-lg line-through mb-2">₹79,999</div>
                    <div className="text-sm bg-white/20 rounded-full px-4 py-2 inline-block">
                      Early Bird Offer - 37% OFF
                    </div>
                  </div>
                </div>

                <button className="group w-full bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 flex items-center justify-center mb-4">
                  Join the Training
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <div className="flex items-center justify-center text-gray-300 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Quality training guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency & Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">⏰</div>
              <div className="text-white font-semibold mb-1">Limited Time</div>
              <div className="text-gray-300 text-sm">Offer ends in 7 days</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">🎯</div>
              <div className="text-white font-semibold mb-1">Job Assistance</div>
              <div className="text-gray-300 text-sm">Career placement support</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">🏆</div>
              <div className="text-white font-semibold mb-1">95% Success Rate</div>
              <div className="text-gray-300 text-sm">Students pass on first try</div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">
            Join the ranks of certified AWS professionals
          </p>
          <div className="flex items-center justify-center text-orange-400">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            <span className="font-medium">Your AWS journey starts here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;