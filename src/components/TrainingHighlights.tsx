import React from 'react';
import { 
  User, 
  Award, 
  Clock, 
  Users, 
  BookOpen, 
  Target, 
  Star, 
  CheckCircle 
} from 'lucide-react';

const TrainingHighlights = () => {
  const highlights = [
    {
      icon: User,
      title: "Expert Instructor",
      description: "Learn from Vimal Daga Sir, India's most trusted cloud computing mentor with 15+ years of industry experience"
    },
    {
      icon: BookOpen,
      title: "Live Interactive Sessions",
      description: "Real-time doubt clearing, live coding sessions, and interactive learning experience"
    },
    {
      icon: Target,
      title: "Project-Based Learning",
      description: "Work on 10+ real-world projects that you can showcase in your portfolio"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend batches and recorded sessions for working professionals"
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Complete exam preparation with practice tests and guaranteed certification success"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join 10,000+ alumni network for career support and job referrals"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "10,000+", label: "Students Trained" },
    { number: "500+", label: "Corporate Trainings" },
    { number: "95%", label: "Certification Success Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Learn from India's <span className="text-orange-500">Cloud Leader</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Vimal Daga Sir - The name synonymous with excellence in cloud computing education. 
            Join thousands of successful professionals who transformed their careers under his guidance.
          </p>
        </div>

        {/* Instructor Profile */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 mb-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mr-6">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Vimal Daga Sir</h3>
                  <p className="text-orange-400 text-lg">Cloud Computing Expert & Mentor</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  <span>Founder of LinuxWorld Informatics Pvt Ltd</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  <span>Red Hat Certified Architect (RHCA)</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  <span>AWS Community Builder</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  <span>Published Author & International Speaker</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {highlight.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* What Makes Training Special */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Makes Our Training <span className="text-orange-500">Special?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Industry-Relevant Curriculum</h4>
                  <p className="text-slate-600">Updated regularly to match current industry demands and AWS service updates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Hands-On Approach</h4>
                  <p className="text-slate-600">70% practical sessions with real AWS environment access for all students</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Career Guidance</h4>
                  <p className="text-slate-600">Resume building, interview preparation, and job placement assistance</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Lifetime Support</h4>
                  <p className="text-slate-600">Continuous mentorship and support even after course completion</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Corporate Partnerships</h4>
                  <p className="text-slate-600">Direct hiring partnerships with 500+ companies for job placements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Success Guarantee</h4>
                  <p className="text-slate-600">Money-back guarantee if you don't clear AWS certification in first attempt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlights;