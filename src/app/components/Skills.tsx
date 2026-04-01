import { motion } from 'motion/react';
import { Code2, Palette, Database, GitBranch, Layers, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      icon: Layers,
      title: 'Frameworks',
      skills: [
        { name: 'React', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Styling',
      skills: [
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Sass/SCSS', level: 80 },
        { name: 'Styled Components', level: 85 },
        { name: 'CSS Modules', level: 88 },
      ],
    },
   
    {
      icon: GitBranch,
      title: 'Tools',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Webpack', level: 82 },
        { name: 'Vite', level: 88 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Other',
      skills: [
        { name: 'Responsive Design', level: 85 },
        { name: 'REST APIs', level: 65 },
        { name: 'UI/UX Design', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
            Constantly learning and staying up-to-date with the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 bg-card border border-border rounded-2xl p-6">
            {[
              'Figma',
              'Formspree',
              'Bootstrap',
              'Github',
              'Slack',
              'VS Code',
              'Postman',
              'Firebase',
              'Supabase',
              'Vercel',
              'Netlify',
              'Git',
              'Antigravity',
              'Claude',
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
