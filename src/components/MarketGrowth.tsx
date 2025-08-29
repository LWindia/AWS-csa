import React from 'react';
import { TrendingUp, Globe, Users, DollarSign } from 'lucide-react';

const MarketGrowth = () => {
  const stats = [
    {
      icon: Globe,
      value: "32%",
      label: "AWS Global Market Share",
      description: "Leading cloud provider worldwide"
    },
    {
      icon: Users,
      value: "300K+",
      label: "AWS Jobs Available",
      description: "Open positions globally"
    },
    {
      icon: TrendingUp,
      value: "30%",
      label: "YoY Growth in India",
      description: "Cloud adoption rate"
    },
    {
      icon: DollarSign,
      value: "$15B",
      label: "Market Opportunity",
      description: "Cloud services in India by 2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why AWS? Why <span className="text-orange-500">Now?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The cloud computing revolution is here, and AWS is leading the charge. 
            Don't miss your opportunity to be part of this transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</div>
                <div className="text-slate-500">{stat.description}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Future is in the Cloud
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            By 2025, 85% of enterprises will have a cloud-first principle. 
            AWS professionals are in unprecedented demand across all industries.
          </p>
          <button 
            onClick={() => window.open('https://rzp.io/rzp/tqFusAP', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 cursor-pointer"
          >
            Join the Revolution
            <TrendingUp className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketGrowth;