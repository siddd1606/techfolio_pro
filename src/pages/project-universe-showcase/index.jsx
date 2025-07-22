import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import FeaturedProject from './components/FeaturedProject';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';

const ProjectUniverseShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    techStack: 'all',
    status: 'all'
  });

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "EcoTrack - Sustainability Dashboard",
      description: "A comprehensive environmental impact tracking platform that helps organizations monitor and reduce their carbon footprint through real-time analytics and actionable insights.",
      fullDescription: `EcoTrack revolutionizes how organizations approach sustainability by providing a comprehensive platform for monitoring environmental impact. The application combines real-time data collection, advanced analytics, and intuitive visualizations to help companies track their carbon footprint, energy consumption, and waste management across multiple facilities.\n\nThe platform features automated data integration from IoT sensors, utility providers, and manual input systems, creating a unified view of environmental performance. Machine learning algorithms identify patterns and suggest optimization strategies, while customizable dashboards provide stakeholders with relevant insights at every organizational level.`,
      category: "Web Application",
      status: "Production",
      duration: "6 months",
      teamSize: "4 developers",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "D3.js", "AWS", "Docker"],
      liveUrl: "https://ecotrack-demo.vercel.app",
      githubUrl: "https://github.com/username/ecotrack",
      features: [
        "Real-time environmental data monitoring",
        "Interactive sustainability dashboards",
        "Carbon footprint calculation engine",
        "Automated reporting and compliance tracking",
        "Multi-facility management system",
        "Mobile-responsive design"
      ],
      highlights: [
        "40% reduction in data processing time",
        "Real-time monitoring of 500+ data points",
        "Automated compliance reporting",
        "Mobile-first responsive design"
      ],
      architecture: [
        "Microservices architecture with Docker containerization",
        "RESTful API design with comprehensive documentation",
        "PostgreSQL database with optimized indexing",
        "Redis caching layer for improved performance",
        "AWS deployment with auto-scaling capabilities"
      ],
      metrics: [
        { label: "Code Coverage", value: "94%" },
        { label: "Performance", value: "98/100" },
        { label: "Accessibility", value: "AA" },
        { label: "Bundle Size", value: "245KB" }
      ],
      timeline: [
        { phase: "Research & Planning", description: "Market analysis, user research, and technical architecture design", duration: "3 weeks" },
        { phase: "MVP Development", description: "Core features implementation and basic dashboard creation", duration: "8 weeks" },
        { phase: "Advanced Features", description: "Analytics engine, reporting system, and mobile optimization", duration: "6 weeks" },
        { phase: "Testing & Deployment", description: "Comprehensive testing, performance optimization, and production deployment", duration: "4 weeks" }
      ],
      challenges: [
        {
          problem: "Processing large volumes of real-time environmental data from multiple sources while maintaining system performance.",
          solution: "Implemented a microservices architecture with Redis caching and database optimization, reducing data processing time by 40%."
        },
        {
          problem: "Creating intuitive visualizations for complex environmental data that non-technical users could understand.",
          solution: "Developed custom D3.js components with interactive tooltips and progressive disclosure patterns, improving user engagement by 60%."
        }
      ],
      impact: [
        { metric: "Data Processing", value: "40%", description: "Faster processing time" },
        { metric: "User Engagement", value: "60%", description: "Increase in dashboard usage" },
        { metric: "Carbon Tracking", value: "500+", description: "Data points monitored" }
      ],
      learnings: [
        "Importance of scalable architecture when dealing with real-time data streams",
        "User experience design principles for complex data visualization",
        "Performance optimization techniques for large-scale React applications",
        "Integration strategies for multiple third-party APIs and data sources"
      ],
      futureEnhancements: [
        "AI-powered predictive analytics for environmental trends",
        "Integration with blockchain for carbon credit trading",
        "Advanced machine learning models for optimization recommendations",
        "Mobile app development for field data collection"
      ]
    },
    {
      id: 2,
      title: "MindfulSpace - Mental Wellness Platform",
      description: "A comprehensive mental health platform offering personalized meditation sessions, mood tracking, and professional counselor connections.",
      fullDescription: `MindfulSpace addresses the growing need for accessible mental health resources by providing a comprehensive digital wellness platform. The application combines evidence-based therapeutic techniques with modern technology to deliver personalized mental health support.\n\nUsers can access guided meditation sessions, track their emotional well-being, participate in community support groups, and connect with licensed mental health professionals. The platform uses machine learning to personalize content recommendations and identify patterns in user behavior that might indicate the need for additional support.`,
      category: "Mobile Application",
      status: "MVP",
      duration: "4 months",
      teamSize: "3 developers",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
      ],
      techStack: ["React Native", "Firebase", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://mindfulspace-app.com",
      githubUrl: "https://github.com/username/mindfulspace",
      features: [
        "Personalized meditation library",
        "Mood tracking and analytics",
        "Professional counselor matching",
        "Community support groups",
        "Progress tracking and insights",
        "Offline content access"
      ],
      highlights: [
        "10,000+ active users in beta",
        "4.8/5 app store rating",
        "Integration with 50+ therapists",
        "Cross-platform compatibility"
      ],
      architecture: [
        "React Native for cross-platform mobile development",
        "Firebase for real-time data synchronization",
        "Node.js backend with Express framework",
        "MongoDB for flexible user data storage",
        "Stripe integration for secure payment processing"
      ],
      metrics: [
        { label: "User Retention", value: "78%" },
        { label: "App Rating", value: "4.8/5" },
        { label: "Load Time", value: "1.2s" },
        { label: "Crash Rate", value: "0.1%" }
      ],
      timeline: [
        { phase: "User Research", description: "Mental health professional interviews and user persona development", duration: "2 weeks" },
        { phase: "Design & Prototyping", description: "UI/UX design and interactive prototype creation", duration: "4 weeks" },
        { phase: "Core Development", description: "Authentication, meditation player, and mood tracking features", duration: "8 weeks" },
        { phase: "Beta Testing", description: "User testing, feedback integration, and app store preparation", duration: "4 weeks" }
      ],
      challenges: [
        {
          problem: "Ensuring user privacy and data security for sensitive mental health information.",
          solution: "Implemented end-to-end encryption, HIPAA compliance measures, and anonymous data aggregation techniques."
        }
      ],
      impact: [
        { metric: "Beta Users", value: "10K+", description: "Active users during beta" },
        { metric: "Session Length", value: "12min", description: "Average meditation session" },
        { metric: "User Rating", value: "4.8/5", description: "App store rating" }
      ],
      learnings: [
        "Importance of user privacy in healthcare applications",
        "Cross-platform development best practices",
        "Integration strategies for third-party wellness APIs"
      ],
      futureEnhancements: [
        "AI-powered mood prediction and intervention",
        "Wearable device integration for biometric tracking",
        "Telehealth video consultation features"
      ]
    },
    {
      id: 3,
      title: "CodeCollab - Developer Collaboration Hub",
      description: "A real-time collaborative coding platform that enables developers to work together on projects with integrated video chat and code review tools.",
      fullDescription: `CodeCollab transforms remote software development by providing a comprehensive collaboration platform specifically designed for development teams. The application combines real-time code editing, integrated communication tools, and project management features in a single, cohesive environment.\n\nThe platform supports multiple programming languages, offers intelligent code completion, and includes built-in version control integration. Teams can conduct live code reviews, share screens, and maintain project documentation all within the same interface, significantly improving development workflow efficiency.`,
      category: "Web Application",
      status: "Concept",
      duration: "8 months",
      teamSize: "5 developers",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop"
      ],
      techStack: ["Vue.js", "Socket.io", "Express", "Redis", "WebRTC", "Monaco Editor"],
      githubUrl: "https://github.com/username/codecollab",
      features: [
        "Real-time collaborative code editing",
        "Integrated video and voice chat",
        "Live code review system",
        "Project management dashboard",
        "Version control integration",
        "Multi-language syntax highlighting"
      ],
      highlights: [
        "Sub-100ms real-time synchronization",
        "Support for 20+ programming languages",
        "Integrated WebRTC communication",
        "Advanced conflict resolution"
      ],
      architecture: [
        "Vue.js frontend with Vuex state management",
        "Socket.io for real-time communication",
        "Express.js API with JWT authentication",
        "Redis for session management and caching",
        "WebRTC for peer-to-peer video communication"
      ],
      metrics: [
        { label: "Sync Latency", value: "<100ms" },
        { label: "Languages", value: "20+" },
        { label: "Concurrent Users", value: "50" },
        { label: "Uptime", value: "99.9%" }
      ],
      timeline: [
        { phase: "Architecture Design", description: "System architecture and technology stack selection", duration: "4 weeks" },
        { phase: "Core Features", description: "Real-time editing and basic collaboration features", duration: "12 weeks" },
        { phase: "Communication Layer", description: "Video chat and screen sharing implementation", duration: "8 weeks" },
        { phase: "Advanced Features", description: "Code review system and project management tools", duration: "8 weeks" }
      ],
      challenges: [
        {
          problem: "Maintaining real-time synchronization across multiple users while handling network latency and conflicts.",
          solution: "Implemented operational transformation algorithms with conflict resolution and optimistic UI updates."
        }
      ],
      impact: [
        { metric: "Sync Speed", value: "100ms", description: "Real-time synchronization" },
        { metric: "Team Efficiency", value: "35%", description: "Improvement in collaboration" },
        { metric: "Code Quality", value: "25%", description: "Fewer bugs through reviews" }
      ],
      learnings: [
        "Real-time collaboration algorithm implementation",
        "WebRTC integration for peer-to-peer communication",
        "Scalable architecture design for concurrent users"
      ],
      futureEnhancements: [
        "AI-powered code suggestions and bug detection",
        "Integration with popular IDEs and editors",
        "Advanced project analytics and insights"
      ]
    },
    {
      id: 4,
      title: "SmartFinance - Personal Budget Tracker",
      description: "An intelligent personal finance management app that uses AI to categorize expenses, predict spending patterns, and provide personalized financial advice.",
      fullDescription: `SmartFinance revolutionizes personal financial management by combining traditional budgeting tools with artificial intelligence to provide users with unprecedented insights into their spending habits. The application automatically categorizes transactions, identifies spending patterns, and offers personalized recommendations for financial improvement.\n\nThe platform integrates with multiple bank accounts and credit cards to provide a comprehensive view of financial health. Machine learning algorithms analyze spending behavior to predict future expenses and alert users to potential budget overruns before they occur.`,
      category: "Mobile Application",
      status: "Production",
      duration: "5 months",
      teamSize: "3 developers",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      techStack: ["Flutter", "Python", "TensorFlow", "PostgreSQL", "Plaid API"],
      liveUrl: "https://smartfinance-app.com",
      githubUrl: "https://github.com/username/smartfinance",
      features: [
        "Automatic expense categorization",
        "AI-powered spending predictions",
        "Multi-account bank integration",
        "Personalized budget recommendations",
        "Bill reminder system",
        "Investment tracking"
      ],
      highlights: [
        "95% accuracy in expense categorization",
        "Integration with 2,500+ banks",
        "Real-time spending alerts",
        "Secure bank-level encryption"
      ],
      architecture: [
        "Flutter for cross-platform mobile development",
        "Python backend with FastAPI framework",
        "TensorFlow for machine learning models",
        "PostgreSQL for secure financial data storage",
        "Plaid API for bank account integration"
      ],
      metrics: [
        { label: "Accuracy", value: "95%" },
        { label: "Banks Supported", value: "2,500+" },
        { label: "User Satisfaction", value: "4.8/5" },
        { label: "Data Security", value: "256-bit" }
      ],
      timeline: [
        { phase: "Financial Research", description: "Personal finance best practices and regulatory compliance research", duration: "3 weeks" },
        { phase: "ML Model Development", description: "Training expense categorization and prediction models", duration: "6 weeks" },
        { phase: "App Development", description: "Flutter app development and bank API integration", duration: "10 weeks" },
        { phase: "Security & Testing", description: "Security audits, penetration testing, and user acceptance testing", duration: "4 weeks" }
      ],
      challenges: [
        {
          problem: "Ensuring the highest level of security for sensitive financial data while maintaining app performance.",
          solution: "Implemented bank-level encryption, secure API communication, and local data processing to minimize security risks."
        }
      ],
      impact: [
        { metric: "Savings Increase", value: "23%", description: "Average user savings improvement" },
        { metric: "Budget Accuracy", value: "89%", description: "Users staying within budget" },
        { metric: "Time Saved", value: "5hrs/month", description: "Automated financial tracking" }
      ],
      learnings: [
        "Financial data security and compliance requirements",
        "Machine learning model training for financial categorization",
        "Cross-platform mobile development with Flutter"
      ],
      futureEnhancements: [
        "Investment portfolio optimization recommendations",
        "Integration with cryptocurrency exchanges",
        "Advanced financial goal planning tools"
      ]
    },
    {
      id: 5,
      title: "EduConnect - Online Learning Platform",
      description: "A comprehensive e-learning platform that connects students with instructors through interactive courses, live sessions, and collaborative projects.",
      fullDescription: `EduConnect addresses the evolving needs of online education by providing a comprehensive platform that facilitates meaningful connections between students and instructors. The platform goes beyond traditional video-based learning by incorporating interactive elements, collaborative projects, and real-time feedback mechanisms.\n\nThe application features adaptive learning paths that adjust to individual student progress, integrated assessment tools, and a robust communication system that supports both synchronous and asynchronous learning experiences.`,
      category: "Web Application",
      status: "MVP",
      duration: "7 months",
      teamSize: "6 developers",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
      ],
      techStack: ["Next.js", "TypeScript", "Prisma", "WebRTC", "Stripe", "AWS S3"],
      liveUrl: "https://educonnect-platform.com",
      githubUrl: "https://github.com/username/educonnect",
      features: [
        "Interactive course creation tools",
        "Live video streaming and recording",
        "Collaborative project workspaces",
        "Automated assessment system",
        "Progress tracking and analytics",
        "Mobile-responsive design"
      ],
      highlights: [
        "Support for 10,000+ concurrent users",
        "99.9% video streaming uptime",
        "Multi-language course support",
        "Advanced analytics dashboard"
      ],
      architecture: [
        "Next.js with TypeScript for type-safe development",
        "Prisma ORM for database management",
        "WebRTC for real-time video communication",
        "AWS S3 for video and content storage",
        "Stripe for subscription and payment processing"
      ],
      metrics: [
        { label: "Concurrent Users", value: "10K+" },
        { label: "Video Uptime", value: "99.9%" },
        { label: "Course Completion", value: "78%" },
        { label: "Student Satisfaction", value: "4.5/5" }
      ],
      timeline: [
        { phase: "Educational Research", description: "Learning management system analysis and user requirement gathering", duration: "4 weeks" },
        { phase: "Platform Development", description: "Core LMS features and user management system", duration: "12 weeks" },
        { phase: "Video Integration", description: "Live streaming, recording, and video management features", duration: "8 weeks" },
        { phase: "Advanced Features", description: "Analytics, assessments, and collaborative tools", duration: "8 weeks" }
      ],
      challenges: [
        {
          problem: "Scaling video streaming infrastructure to support thousands of concurrent users while maintaining quality.",
          solution: "Implemented CDN distribution, adaptive bitrate streaming, and load balancing to ensure consistent performance."
        }
      ],
      impact: [
        { metric: "Student Engagement", value: "45%", description: "Increase in course completion" },
        { metric: "Instructor Efficiency", value: "60%", description: "Time saved on administration" },
        { metric: "Platform Growth", value: "200%", description: "User base expansion" }
      ],
      learnings: [
        "Scalable video streaming architecture design",
        "Educational technology best practices",
        "Real-time collaboration system implementation"
      ],
      futureEnhancements: [
        "AI-powered personalized learning recommendations",
        "Virtual reality classroom experiences",
        "Advanced proctoring and assessment tools"
      ]
    },
    {
      id: 6,
      title: "HealthSync - Medical Records Platform",
      description: "A secure healthcare platform that enables patients to manage their medical records and connect with healthcare providers seamlessly.",
      fullDescription: `HealthSync transforms healthcare data management by providing patients with complete control over their medical information while facilitating seamless communication with healthcare providers. The platform ensures HIPAA compliance while offering intuitive interfaces for both patients and medical professionals.\n\nThe system integrates with existing hospital management systems, supports telemedicine consultations, and provides comprehensive health analytics to help users understand their health trends over time.`,
      category: "Web Application",
      status: "Production",
      duration: "9 months",
      teamSize: "8 developers",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
      ],
      techStack: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "FHIR"],
      liveUrl: "https://healthsync-platform.com",
      githubUrl: "https://github.com/username/healthsync",
      features: [
        "Secure medical record storage",
        "Provider-patient communication",
        "Appointment scheduling system",
        "Telemedicine integration",
        "Health analytics dashboard",
        "HIPAA-compliant data handling"
      ],
      highlights: [
        "HIPAA compliant architecture",
        "Integration with 100+ hospitals",
        "99.99% uptime guarantee",
        "End-to-end encryption"
      ],
      architecture: [
        "Angular frontend with Material Design",
        "Spring Boot microservices architecture",
        "PostgreSQL with encrypted data storage",
        "Docker containerization with Kubernetes orchestration",
        "FHIR standard compliance for interoperability"
      ],
      metrics: [
        { label: "Security Rating", value: "A+" },
        { label: "Hospital Partners", value: "100+" },
        { label: "Uptime", value: "99.99%" },
        { label: "Data Encryption", value: "AES-256" }
      ],
      timeline: [
        { phase: "Compliance Research", description: "HIPAA requirements analysis and security framework design", duration: "6 weeks" },
        { phase: "Core Platform", description: "Patient portal and basic record management features", duration: "16 weeks" },
        { phase: "Provider Integration", description: "Healthcare provider tools and hospital system integration", duration: "12 weeks" },
        { phase: "Advanced Features", description: "Telemedicine, analytics, and mobile app development", duration: "10 weeks" }
      ],
      challenges: [
        {
          problem: "Ensuring HIPAA compliance while maintaining user-friendly interfaces and system performance.",
          solution: "Implemented comprehensive security measures including end-to-end encryption, audit logging, and role-based access controls."
        }
      ],
      impact: [
        { metric: "Patient Satisfaction", value: "92%", description: "Improved healthcare experience" },
        { metric: "Data Access Time", value: "75%", description: "Faster medical record retrieval" },
        { metric: "Provider Efficiency", value: "40%", description: "Reduced administrative time" }
      ],
      learnings: [
        "Healthcare compliance and security requirements",
        "Microservices architecture for enterprise applications",
        "Integration with legacy healthcare systems"
      ],
      futureEnhancements: [
        "AI-powered health risk assessment",
        "Wearable device integration for continuous monitoring",
        "Blockchain-based medical record verification"
      ]
    }
  ];

  // Get unique values for filters
  const categories = useMemo(() => {
    return [...new Set(projects.map(project => project.category))];
  }, [projects]);

  const techStacks = useMemo(() => {
    const allTech = projects.flatMap(project => project.techStack);
    return [...new Set(allTech)];
  }, [projects]);

  const statuses = useMemo(() => {
    return [...new Set(projects.map(project => project.status))];
  }, [projects]);

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = filters.category === 'all' || project.category === filters.category;
      const techMatch = filters.techStack === 'all' || project.techStack.includes(filters.techStack);
      const statusMatch = filters.status === 'all' || project.status === filters.status;
      
      return categoryMatch && techMatch && statusMatch;
    });
  }, [projects, filters]);

  // Get featured project (first production project or first project)
  const featuredProject = useMemo(() => {
    return projects.find(project => project.status === 'Production') || projects[0];
  }, [projects]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      techStack: 'all',
      status: 'all'
    });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-cosmic-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric-cyan rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-purple rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-2xl">
                <Icon name="Folder" size={32} className="text-cosmic-primary" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Project
              <span className="bg-gradient-to-r from-electric-cyan to-electric-purple bg-clip-text text-transparent"> Universe</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore a curated collection of innovative projects that showcase technical expertise, 
              creative problem-solving, and real-world impact. Each project tells a story of 
              challenges overcome and solutions delivered.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan">{projects.length}</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan">{techStacks.length}+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan">2+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan">4.7</div>
                <div className="text-sm text-text-secondary">Avg Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Featured Project */}
          <FeaturedProject 
            project={featuredProject} 
            onProjectClick={handleProjectClick}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              All Projects
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Dive deeper into the complete portfolio of projects, each demonstrating 
              different aspects of modern software development.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <FilterBar
            categories={categories}
            techStacks={techStacks}
            statuses={statuses}
            activeFilters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects.length}
          />

          {/* Project Grid */}
          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-cosmic-surface to-cosmic-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              These projects represent just the beginning. Let's work together to create 
              something extraordinary that makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-connection-hub"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-cyan text-cosmic-primary font-semibold rounded-xl hover:bg-electric-purple transition-colors duration-300"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Start a Conversation
              </motion.a>
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-text-primary font-semibold rounded-xl hover:border-electric-cyan/30 hover:text-electric-cyan transition-all duration-300"
              >
                <Icon name="Github" size={20} className="mr-2" />
                View All Code
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectUniverseShowcase;