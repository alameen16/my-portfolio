import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized, and responsive applications',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Passionate About Creating
            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Amazing Web Experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a frontend developer with 4+ years of experience building modern web applications.
            I specialize in React, TypeScript, and creating delightful user experiences that combine
            beautiful design with solid functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-card border border-border rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-border rounded-3xl p-8 md:p-12"
        >
          <div className="flex justify-center items-center gap-12 text-center">
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
