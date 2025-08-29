import React, { useState } from 'react';
import { Server, Shield, Database, Code, TrendingUp, Users } from 'lucide-react';

const JobOpportunities = () => {
  const [activeCard, setActiveCard] = useState(0);

  const opportunities = [
    {
      icon: Server,
      title: "AWS Solutions Architect",
      salary: "₹12-25 LPA",
      demand: "Very High",
      description: "Design scalable, secure, and cost-effective cloud solutions",
      skills: ["EC2", "VPC", "S3", "Lambda", "RDS"],
      growth: "+45%"
    },
    {
      icon: Code,
      title: "DevOps Engineer",
      salary: "₹10-22 LPA",
      demand: "High",
      description: "Automate deployment pipelines and manage cloud infrastructure",
      skills: ["CodePipeline", "CodeBuild", "ECS", "EKS", "CloudFormation"],
      growth: "+38%"
    },
    {
      icon: Shield,
      title: "Cloud Security Specialist",
      salary: "₹15-30 LPA",
      demand: "Very High",
      description: "Secure cloud environments and ensure compliance",
      skills: ["IAM", "GuardDuty", "Security Groups", "KMS", "WAF"],
      growth: "+52%"
    },
    {
      icon: Database,
      title: "Data Engineer",
      salary: "₹14-28 LPA",
      demand: "High",
      description: "Build and maintain data pipelines in the cloud",
      skills: ["Redshift", "EMR", "Glue", "Kinesis", "Athena"],
      growth: "+41%"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Unlock Your <span className="text-orange-500">Career Potential</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AWS certification opens doors to high-paying, in-demand roles across all industries. 
            Choose your path to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((job, index) => {
            const Icon = job.icon;
            return (
              <div
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  activeCard === index
                    ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl scale-105'
                    : 'bg-white text-slate-900 shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  activeCard === index ? 'bg-white/20' : 'bg-orange-500/10'
                }`}>
                  <Icon className={`w-7 h-7 ${
                    activeCard === index ? 'text-white' : 'text-orange-500'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${
                      activeCard === index ? 'text-white/80' : 'text-slate-500'
                    }`}>Salary Range</span>
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${
                      activeCard === index ? 'text-white/80' : 'text-slate-500'
                    }`}>Demand</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activeCard === index 
                        ? 'bg-white/20 text-white' 
                        : job.demand === 'Very High' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.demand}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${
                      activeCard === index ? 'text-white/80' : 'text-slate-500'
                    }`}>Growth</span>
                    <span className="font-semibold flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {job.growth}
                    </span>
                  </div>
                </div>
                
                <p className={`text-sm mb-4 ${
                  activeCard === index ? 'text-white/90' : 'text-slate-600'
                }`}>
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activeCard === index
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activeCard === index
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      +{job.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-2xl font-bold">200,000+</span>
          </div>
          <p className="text-lg mb-6">
            AWS professionals needed in India by 2025. Will you be one of them?
          </p>
          <button 
            onClick={() => window.open('https://rzp.io/rzp/tqFusAP', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;