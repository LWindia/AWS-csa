import React from 'react';
import { 
  Server, 
  Database, 
  Shield, 
  Network, 
  Code, 
  BarChart3, 
  CheckCircle, 
  Award 
} from 'lucide-react';

const WhatYouWillLearn = () => {
  const modules = [
    {
      icon: Server,
      title: "AWS Core Services",
      description: "Master EC2, S3, VPC, IAM, RDS, Lambda and more",
      topics: ["Compute Services", "Storage Solutions", "Database Services", "Serverless Computing"]
    },
    {
      icon: Network,
      title: "Scalable Architectures",
      description: "Design fault-tolerant and highly available systems",
      topics: ["Load Balancing", "Auto Scaling", "Multi-AZ Deployments", "Disaster Recovery"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and best practices",
      topics: ["IAM Policies", "Encryption", "Security Groups", "Compliance Frameworks"]
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      description: "Strategies to minimize costs while maximizing performance",
      topics: ["Cost Analysis", "Reserved Instances", "Spot Instances", "Resource Tagging"]
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Real-world scenarios and practical implementations",
      topics: ["3-Tier Architecture", "Microservices", "CI/CD Pipelines", "Monitoring Setup"]
    },
    {
      icon: Award,
      title: "Exam Preparation",
      description: "Complete preparation for AWS CSA certification",
      topics: ["Practice Tests", "Exam Strategies", "Mock Interviews", "Certification Guidance"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What You Will <span className="text-orange-500">Learn</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed by industry experts to make you job-ready 
            and certification-ready in AWS Solutions Architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 hover:border-orange-200"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {module.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                <div className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <span className="text-sm text-orange-600 font-semibold">
                    Module {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Path Visualization */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Learning Journey
            </h3>
            <p className="text-xl text-gray-300">
              From fundamentals to expert-level implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Foundation</h4>
              <p className="text-gray-300 text-sm">AWS basics and core services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Architecture</h4>
              <p className="text-gray-300 text-sm">Design patterns and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Implementation</h4>
              <p className="text-gray-300 text-sm">Hands-on projects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Certification</h4>
              <p className="text-gray-300 text-sm">Exam preparation and success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;