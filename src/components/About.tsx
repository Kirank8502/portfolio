import { Code2, Palette, Zap, Database } from "lucide-react";

const skills = [
  { name: "AWS / Serverless", level: 90 },
  { name: "Python", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "React / JavaScript", level: 80 },
  { name: "Docker & Kubernetes", level: 80 },
  { name: "PostgreSQL / DynamoDB", level: 75 },
];

const highlights = [
  {
    icon: Zap,
    title: "Cloud & Scalability",
    description: "Designed AWS serverless microservices handling 50K+ daily requests with reliability and performance."
  },
  {
    icon: Database,
    title: "Distributed Systems",
    description: "Built resilient, fault-tolerant backend architectures with replication, caching & optimized APIs."
  },
  {
    icon: Code2,
    title: "Clean Engineering",
    description: "Strong focus on code quality, testing, DevOps automation, and collaborative agile development."
  },
  {
    icon: Palette,
    title: "Innovation & AI",
    description: "Leveraging AI and automation to enhance productivity and engineering efficiency."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              With over 2 years of experience in web development, I specialize in building modern applications that are both beautiful and functional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left column - Bio */}
            <div className="space-y-8">
              <div className="prose prose-invert">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a Software Engineer specializing in scalable cloud-native and distributed systems, with expertise in AWS, microservices, DevOps automation, and full-stack development.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Previously, I engineered reliable high-performance applications at Soulible and Aquanoir, focusing on system scalability, performance optimization, and modern cloud solutions.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <div 
                    key={item.title}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <span className="font-mono text-primary">&lt;</span>
                Technical Skills
                <span className="font-mono text-primary">/&gt;</span>
              </h3>
              
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Tech stack tags */}
              <div className="pt-8">
                <h4 className="text-sm text-muted-foreground mb-4">Also experienced with:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Microservices", "CI/CD", "Linux", "gRPC", "Flask", "DevOps", "System Design"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary border border-transparent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
