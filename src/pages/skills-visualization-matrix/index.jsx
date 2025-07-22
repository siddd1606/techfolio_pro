import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import SkillCategory from './components/SkillCategory';
import TechRelationshipDiagram from './components/TechRelationshipDiagram';
import LiveCodeDemo from './components/LiveCodeDemo';
import SkillsCarousel from './components/SkillsCarousel';
import PerformanceMetrics from './components/PerformanceMetrics';
import Icon from '../../components/AppIcon';

const SkillsVisualizationMatrix = () => {
  useEffect(() => {
    document.title = 'Skills Matrix - TechFolio Pro';
  }, []);

  const skillsData = {
    'Frontend': [
      {
        id: 1,
        name: 'React',
        icon: 'Atom',
        proficiency: 'Expert',
        experience: '3+ years building scalable web applications with React 18, hooks, and context API',
        projects: ['E-commerce Platform', 'Social Media Dashboard', 'Portfolio Website'],
        timeline: 'Started learning in 2021, mastered advanced patterns by 2023'
      },
      {
        id: 2,
        name: 'JavaScript',
        icon: 'Code',
        proficiency: 'Expert',
        experience: '4+ years of modern ES6+ JavaScript, async programming, and DOM manipulation',
        projects: ['Interactive Games', 'API Integrations', 'Dynamic Web Apps'],
        timeline: 'Foundation language since 2020, continuously expanding knowledge'
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: 'FileCode',
        proficiency: 'Advanced',
        experience: '2+ years implementing type-safe applications with interfaces and generics',
        projects: ['Enterprise Dashboard', 'Type-safe API Client', 'Component Library'],
        timeline: 'Adopted in 2022 for better code quality and maintainability'
      },
      {
        id: 4,
        name: 'Tailwind CSS',
        icon: 'Palette',
        proficiency: 'Expert',
        experience: '2+ years creating responsive, utility-first designs with custom configurations',
        projects: ['Design System', 'Responsive Layouts', 'Component Styling'],
        timeline: 'Switched from traditional CSS in 2022, now preferred framework'
      },
      {
        id: 5,
        name: 'HTML5',
        icon: 'FileText',
        proficiency: 'Expert',
        experience: '5+ years of semantic HTML, accessibility best practices, and modern standards',
        projects: ['SEO-optimized Sites', 'Accessible Forms', 'Progressive Web Apps'],
        timeline: 'Core foundation since beginning of web development journey'
      },
      {
        id: 6,
        name: 'CSS3',
        icon: 'Paintbrush',
        proficiency: 'Advanced',
        experience: '4+ years with animations, grid, flexbox, and responsive design principles',
        projects: ['Animation Libraries', 'Responsive Frameworks', 'Custom Themes'],
        timeline: 'Evolved from basic styling to advanced animations and layouts'
      }
    ],
    'Backend': [
      {
        id: 7,
        name: 'Node.js',
        icon: 'Server',
        proficiency: 'Advanced',
        experience: '2+ years building RESTful APIs, middleware, and server-side applications',
        projects: ['REST API Server', 'Authentication System', 'Real-time Chat App'],
        timeline: 'Started backend development in 2022, focusing on JavaScript ecosystem'
      },
      {
        id: 8,
        name: 'Express.js',
        icon: 'Zap',
        proficiency: 'Advanced',
        experience: '2+ years creating robust web servers with routing, middleware, and error handling',
        projects: ['API Gateway', 'Microservices', 'Authentication Middleware'],
        timeline: 'Primary backend framework since learning Node.js'
      },
      {
        id: 9,
        name: 'MongoDB',
        icon: 'Database',
        proficiency: 'Intermediate',
        experience: '1+ year with document-based databases, aggregation pipelines, and indexing',
        projects: ['User Management System', 'Content Management', 'Analytics Dashboard'],
        timeline: 'Adopted NoSQL approach in 2023 for flexible data modeling'
      },
      {
        id: 10,
        name: 'PostgreSQL',
        icon: 'HardDrive',
        proficiency: 'Intermediate',
        experience: '1+ year with relational databases, complex queries, and data relationships',
        projects: ['E-commerce Backend', 'Reporting System', 'Data Analytics'],
        timeline: 'Learning SQL databases for structured data requirements'
      }
    ],
    'Tools': [
      {
        id: 11,
        name: 'Git',
        icon: 'GitBranch',
        proficiency: 'Expert',
        experience: '3+ years with version control, branching strategies, and collaborative workflows',
        projects: ['All Projects', 'Open Source Contributions', 'Team Collaborations'],
        timeline: 'Essential tool since start of programming journey'
      },
      {
        id: 12,
        name: 'VS Code',
        icon: 'Code2',
        proficiency: 'Expert',
        experience: '4+ years with extensions, debugging, and productivity optimizations',
        projects: ['Development Environment', 'Custom Configurations', 'Extension Development'],
        timeline: 'Primary IDE with extensive customization and workflow optimization'
      },
      {
        id: 13,
        name: 'Figma',
        icon: 'Figma',
        proficiency: 'Advanced',
        experience: '2+ years designing interfaces, prototypes, and design systems',
        projects: ['UI/UX Designs', 'Prototyping', 'Design System Creation'],
        timeline: 'Adopted for design-to-code workflow improvement'
      },
      {
        id: 14,
        name: 'Docker',
        icon: 'Package',
        proficiency: 'Intermediate',
        experience: '1+ year with containerization, deployment, and development environments',
        projects: ['Application Deployment', 'Development Setup', 'CI/CD Pipeline'],
        timeline: 'Learning containerization for scalable deployments'
      }
    ],
    'Soft Skills': [
      {
        id: 15,
        name: 'Problem Solving',
        icon: 'Lightbulb',
        proficiency: 'Expert',
        experience: 'Analytical thinking, debugging complex issues, and finding efficient solutions',
        projects: ['Algorithm Challenges', 'Bug Fixes', 'Performance Optimization'],
        timeline: 'Continuously developed through coding challenges and real projects'
      },
      {
        id: 16,
        name: 'Communication',
        icon: 'MessageSquare',
        proficiency: 'Advanced',
        experience: 'Technical writing, code documentation, and team collaboration',
        projects: ['Technical Documentation', 'Code Reviews', 'Team Presentations'],
        timeline: 'Improved through team projects and technical presentations'
      },
      {
        id: 17,
        name: 'Learning Agility',
        icon: 'BookOpen',
        proficiency: 'Expert',
        experience: 'Quickly adapting to new technologies, frameworks, and methodologies',
        projects: ['Technology Adoption', 'Skill Development', 'Continuous Learning'],
        timeline: 'Core strength enabling rapid technology stack expansion'
      },
      {
        id: 18,
        name: 'Time Management',
        icon: 'Clock',
        proficiency: 'Advanced',
        experience: 'Project planning, deadline management, and efficient workflow organization',
        projects: ['Project Delivery', 'Sprint Planning', 'Task Prioritization'],
        timeline: 'Developed through academic projects and internship experiences'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-electric-cyan to-electric-purple rounded-xl">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary font-inter">
                Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-electric-purple">Matrix</span>
              </h1>
            </div>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Interactive visualization of technical expertise, real-world applications, and continuous learning journey through immersive 3D demonstrations.
            </p>
            
            {/* Floating Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-success font-mono">18+</div>
                <div className="text-sm text-text-secondary">Core Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan font-mono">4</div>
                <div className="text-sm text-text-secondary">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-purple font-mono">3+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning font-mono">50+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Technology Relationship Diagram */}
          <TechRelationshipDiagram />

          {/* Skills Categories */}
          <div className="space-y-16">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                index={index}
              />
            ))}
          </div>

          {/* Live Code Demonstrations */}
          <LiveCodeDemo />

          {/* Skills in Action Carousel */}
          <SkillsCarousel />

          {/* Performance Metrics Dashboard */}
          <PerformanceMetrics />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-electric-cyan/10 to-electric-purple/10 border border-electric-cyan/20 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              These skills come together to create exceptional digital experiences. Let's collaborate on your next project and bring innovative ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/project-universe-showcase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-electric-cyan text-cosmic-primary rounded-lg font-semibold hover:bg-electric-cyan/90 transition-colors duration-300 flex items-center space-x-2"
              >
                <Icon name="Folder" size={20} />
                <span>View Projects</span>
              </motion.a>
              <motion.a
                href="/contact-connection-hub"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-electric-cyan text-electric-cyan rounded-lg font-semibold hover:bg-electric-cyan hover:text-cosmic-primary transition-all duration-300 flex items-center space-x-2"
              >
                <Icon name="Mail" size={20} />
                <span>Get In Touch</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Performance Indicator */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-cosmic-surface/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg"
        >
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-text-secondary font-mono">Skills Active</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-1">
              <Icon name="Zap" size={14} className="text-electric-cyan" />
              <span className="text-text-secondary font-mono">60 FPS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsVisualizationMatrix;