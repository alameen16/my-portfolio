import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart, checkout, and payment integration. Built with modern best practices and optimized for performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      liveUrl: 'https://your-live-site.com',    
      githubUrl: 'https://github.com/alameen16/repo', 
    },
    {
      title: 'IOT Sensor Monitoring System',
      description: 'A real-time IoT sensor monitoring dashboard that visualizes live data streams from connected sensors. Features interactive charts, threshold alerts, and device status tracking — built for seamless monitoring and analysis of sensor metrics.',
      image: '/sensor-dashboard.png',
      tags: ['React', 'Recharts', 'Css'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      liveUrl: 'https://sensor-monitoring-dashboard-hel2yl4l1.vercel.app/',    
      githubUrl: 'https://github.com/alameen16/sensor-monitoring-dashboard.git', 
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with real-time data, forecasts, and interactive maps. Features location-based weather and historical data.',
      image: '/weather-app-ui.jpg',
      tags: ['React', 'REST API', 'Tailwind'],
      gradient: 'from-orange-500/20 to-yellow-500/20',
      liveUrl: 'https://weatherapp-kappa-bay.vercel.app/', 
      githubUrl: 'https://github.com/alameen16/weatherapp.git', 
    },
    {
      title: 'Mortgage Calculator UI',
      description: 'An interactive mortgage calculator that computes monthly repayments and total repayment amount based on loan amount, term, and interest rate. Supports both Repayment and Interest Only mortgage types, with instant results displayed in a clean two-panel layout.',
      image: '/mortgage-calculator.jpg',
      tags: ['Html', 'Css', 'JavaScript'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      liveUrl: 'https://sbsctask3.vercel.app/',    
      githubUrl: 'https://github.com/alameen16/sbsctask3.git', 
    },
    {
      title: 'HMI Control Panel',
      description: 'A browser-based HMI (Human-Machine Interface) control panel that simulates a 415V low-voltage electrical distribution board. Features an interactive single-line circuit diagram, real-time circuit breaker controls, fault injection simulation, live system metrics, and an automated event log — built during an internship at SBSC to demonstrate industrial-grade UI for electrical systems monitoring and control.',
      image: '/hmi-design.png',
      tags: ['React', 'Tailwind'],
      gradient: 'from-red-500/20 to-rose-500/20',
      liveUrl: 'https://hmi-system.vercel.app/',      
      githubUrl: 'https://github.com/alameen16/hmi-system.git', 
    },
    {
      title: 'Multi-Form Validation UI',
      description: 'A multi-step form UI with real-time validation, progress tracking, and smooth animations — built with React and Tailwind CSS. Features include field-level validation, step-by-step progress indicator, and responsive design for seamless user experience.',
      image: '/multi-form-validation.jpg',
      tags: ['React', 'Tailwind'],
      gradient: 'from-indigo-500/20 to-violet-500/20',
      liveUrl: 'https://multi-form-validation-seven.vercel.app/',     
      githubUrl: 'https://github.com/alameen16/multi-form-validation.git', 
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work. Each project showcases different skills and technologies,
            from simple landing pages to complex web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                 </a>
                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-background text-foreground rounded-full hover:bg-background/90 transition-colors">
                    <Github className="w-5 h-5" />
                 </a>
                </div>  
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
