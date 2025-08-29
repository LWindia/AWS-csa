import React, { useState } from 'react';
import { 
  User, 
  Award, 
  Clock, 
  Users, 
  BookOpen, 
  Target, 
  Star, 
  CheckCircle,
  Globe,
  Heart,
  X
} from 'lucide-react';

const TrainingHighlights = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{ name: string; image: string } | null>(null);

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
      title: "Fixed Schedule",
      description: "Structured weekend batches with live interactive sessions for focused learning"
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
    { icon: Award, title: 'World Record Holder', desc: '' },
    { icon: Users, title: '10 Lakh + Students', desc: 'Mentored Globally' },
    { icon: Globe, title: '2X TEDx Speaker', desc: 'International Recognition' },
    { icon: Heart, title: 'Senior Principal IT Consultant', desc: '' }
  ];

  const awsCertificates = [
    // Advanced/Specialty Certificates (Most Advanced - Show First)
    { name: 'AWS Certified Advanced Networking - Specialty', image: '/certificates/AWS-10.jpg' },
    { name: 'AWS Certified Security - Specialty', image: '/certificates/AWS-9.jpg' },
    { name: 'AWS Certified Machine Learning - Specialty', image: '/certificates/AWS-11.jpg' },
    { name: 'AWS Certified Data Analytics - Specialty', image: '/certificates/AWS-7.jpg' },
    { name: 'AWS Certified Database - Specialty', image: '/certificates/AWS-8.jpg' },
    { name: 'AWS Certified Big Data - Specialty', image: '/certificates/AWS-1.jpg' },
    { name: 'AWS Certified Alexa Skill Builder - Specialty', image: '/certificates/AWS-3.jpg' },
    
    // Professional Certificates
    { name: 'AWS Certified DevOps Engineer - Professional', image: '/certificates/AWS-5.jpg' },
    
    // Associate Certificates
    { name: 'AWS Certified Solutions Architect - Associate', image: '/certificates/AWS-2.jpg' },
    { name: 'AWS Certified Solutions Architect - Associate', image: '/certificates/AWS-13.jpg' },
    { name: 'AWS Certified Developer - Associate', image: '/certificates/AWS-4.jpg' },
    { name: 'AWS Certified SysOps Administrator - Associate', image: '/certificates/AWS-6.jpg' },
  ];

  const openCertificateModal = (cert: { name: string; image: string }) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="pt-8 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Training Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Meet Your Visionary Mentor Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Your <span className="text-orange-500">Visionary Mentor</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Learn from India's most celebrated cloud architect and philanthropic tech educator
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <div className="text-center lg:text-left space-y-6">
            <div className="relative inline-block">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-orange-400">
                <img src="/certificates/Vimal Sir's .jpg" alt="Vimal Daga" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-2 sm:p-3 animate-pulse">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Vimal Daga</h3>
              <p className="text-lg sm:text-xl text-orange-600 font-semibold mb-4"> Cloud Architect | TEDx Speaker | World Record Holder </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-4 lg:px-0">
                With over 23 years of experience in technology and education, Vimal Daga has dedicated his life to democratizing technology education. His philanthropic approach has made quality tech education accessible to millions worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="bg-blue-100 text-blue-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                23+ Years Experience
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Senior Principal IT Consultant
              </div>
              <div className="bg-purple-100 text-purple-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Global Impact
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="group bg-white rounded-xl sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {achievement.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100">
          <div className="flex items-center mb-6 sm:mb-8">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Vimal Daga's AWS Certification Mastery</h3>
          </div>
          
          {/* Certificate Collage */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {awsCertificates.map((cert, idx) => (
              <div key={idx} className="group relative">
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => openCertificateModal(cert)}>
                  <img src={cert.image} alt={cert.name} className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300" title={`Click to view ${cert.name}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs sm:text-sm font-medium">Click to view</p>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Our Training Special Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Makes Our <span className="text-orange-500">Training Special?</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Hands-On Approach</h4>
              <p className="text-sm sm:text-base text-slate-600">100% practical sessions with real AWS environment access for all students</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Career Guidance</h4>
              <p className="text-sm sm:text-base text-slate-600">Interview preparation, and job placement assistance</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Corporate Partnerships</h4>
              <p className="text-sm sm:text-base text-slate-600">Direct hiring partnerships with 100+ companies for job placements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeCertificateModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeCertificateModal} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110">
              <X className="h-6 w-6 text-gray-700" />
            </button>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">{selectedCertificate.name}</h3>
              <div className="flex justify-center">
                <img src={selectedCertificate.image} alt={selectedCertificate.name} className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingHighlights;