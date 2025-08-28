import React from 'react';
import { 
  Server, 
  Database, 
  Shield, 
  Network, 
  Code, 
  BarChart3, 
  CheckCircle, 
  Award,
  BookOpen,
  Users,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Cloud
} from 'lucide-react';

const WhatYouWillLearn = () => {
  const modules = [
    {
      icon: Cloud,
      title: "Module 1: AWS Foundations & Well-Architected Principles",
      description: "Master AWS global infrastructure, shared responsibility model, and Well-Architected Framework",
      topics: ["Overview of AWS Global Infrastructure", "Shared Responsibility Model", "The Well-Architected Framework & Pillars", "Securing the Root Account and IAM Best Practices"]
    },
    {
      icon: Shield,
      title: "Module 2: Identity & Access Management",
      description: "Comprehensive IAM implementation with security best practices",
      topics: ["IAM Users, Groups, Roles, and Policies", "MFA, IAM Access Analyzer, and Permissions Boundaries", "AWS Organizations & Service Control Policies (SCPs)", "Cross-Account Access and Federation"]
    },
    {
      icon: Network,
      title: "Module 3: Networking Fundamentals (Part 1)",
      description: "Build solid networking foundation with VPC and security",
      topics: ["VPC Basics: Subnets, CIDR, and Route Tables", "Internet Gateways, NAT Gateways, and Elastic IPs", "Security Groups vs Network ACLs", "VPC Quotas & Design Patterns"]
    },
    {
      icon: Server,
      title: "Module 4: Compute Services",
      description: "Master EC2, Lambda, and compute optimization strategies",
      topics: ["Amazon EC2: Instance Types, Pricing Models, and Use Cases", "EC2 Storage: EBS, Instance Store, and Elastic File System (EFS)", "EC2 Placement Groups & High Availability", "AWS Lambda: Event-Driven Compute"]
    },
    {
      icon: Database,
      title: "Module 5: Storage & Content Delivery",
      description: "Comprehensive storage solutions and global content delivery",
      topics: ["Amazon S3: Classes, Lifecycle Policies, and Replication", "S3 Security: Encryption, Bucket Policies, and Access Points", "AWS Backup & Elastic Disaster Recovery", "Amazon CloudFront & Global Accelerator"]
    },
    {
      icon: BarChart3,
      title: "Module 6: Databases & Data Management",
      description: "Relational, NoSQL, and analytics database solutions",
      topics: ["Amazon RDS: Multi-AZ, Read Replicas, and Backups", "Amazon DynamoDB: Features and Global Tables", "Amazon Redshift vs RDS for Analytics", "Amazon ElastiCache for Caching"]
    },
    {
      icon: Globe,
      title: "Module 7: Networking Advanced (Part 2)",
      description: "Advanced networking concepts and hybrid connectivity",
      topics: ["VPC Peering & PrivateLink", "Transit Gateway and Hybrid Connectivity", "AWS Direct Connect & Site-to-Site VPN", "Route 53: DNS Management and Failover"]
    },
    {
      icon: TrendingUp,
      title: "Module 8: High Availability & Scaling",
      description: "Design fault-tolerant and scalable architectures",
      topics: ["Elastic Load Balancing (ALB, NLB, GLB)", "Auto Scaling Groups & Scaling Policies", "Amazon Route 53 Failover Routing", "Designing Multi-Region Architectures"]
    },
    {
      icon: Zap,
      title: "Module 9: Monitoring, Logging & Observability",
      description: "Complete observability and monitoring solutions",
      topics: ["CloudWatch Metrics, Logs, Dashboards, and Alarms", "VPC Flow Logs and Traffic Analysis", "AWS CloudTrail & EventBridge", "X-Ray for Distributed Tracing"]
    },
    {
      icon: Code,
      title: "Module 10: Automation & Infrastructure as Code",
      description: "Automate infrastructure deployment and management",
      topics: ["AWS CloudFormation: Stacks, Templates, and Drift Detection", "AWS Systems Manager (SSM)", "Infrastructure Automation Best Practices"]
    },
    {
      icon: Users,
      title: "Module 11: Containers & Microservices",
      description: "Modern application architecture with containers",
      topics: ["Introduction to Microservices Architecture", "Amazon ECS, EKS, and Fargate", "CI/CD Integration with CodePipeline", "Observability with CloudWatch & X-Ray"]
    },
    {
      icon: Server,
      title: "Module 12: Serverless Architectures",
      description: "Build scalable serverless applications",
      topics: ["Amazon API Gateway & Lambda Integration", "Event-Driven Services: SQS, SNS, and EventBridge", "Amazon Kinesis for Streaming Data", "Step Functions for Orchestration"]
    },
    {
      icon: Lock,
      title: "Module 13: Security & Compliance",
      description: "Enterprise-grade security and compliance solutions",
      topics: ["Encryption: KMS, CloudHSM, and Secrets Manager", "GuardDuty, Inspector, and Security Hub", "AWS WAF & Shield for Threat Protection", "Compliance and Audit Tools"]
    },
    {
      icon: TrendingUp,
      title: "Module 14: Cost Optimization & Governance",
      description: "Optimize costs and implement governance controls",
      topics: ["AWS Pricing Models & Savings Plans", "AWS Budgets and Cost Explorer", "Resource Tagging Strategy", "Governance with AWS Control Tower"]
    },
    {
      icon: Award,
      title: "Module 15: Backup, Recovery & Exam Preparation",
      description: "Disaster recovery strategies and certification preparation",
      topics: ["Disaster Recovery Strategies: Pilot Light, Warm Standby, Multi-Site", "AWS Backup & Elastic Disaster Recovery (DRS)", "Designing for Fault Tolerance & Resilience", "Practice Scenarios & Mock Exam Questions"]
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
            Comprehensive 15-module curriculum designed by industry experts to make you job-ready 
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
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {module.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                <div className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Complete AWS Solutions Architect Journey
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            From foundational concepts to advanced architectural patterns, this comprehensive program 
            covers everything you need to become an AWS Certified Solutions Architect. Each module 
            builds upon the previous one, ensuring a solid understanding of cloud architecture principles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">15 Comprehensive Modules</h4>
              <p className="text-gray-300 text-sm">Structured learning path from basics to advanced</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Hands-On Projects</h4>
              <p className="text-gray-300 text-sm">Real-world implementation and practice</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Exam Preparation</h4>
              <p className="text-gray-300 text-sm">Mock exams and certification guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;