import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Resume Optimizer",
    description:
      "AI-powered resume analyzer that evaluates resumes for cloud, distributed systems, and microservices skills. Built with FastAPI + React and designed to be fully free using a rule based scoring engine, with optional AI integration later.",
    tags: ["Python", "Flask", "React", "TypeScript", "FastAPI"],
    github: "https://github.com/Kirank8502/AI-Resume-Optimizer.git",
    live: "",
    featured: true,
  },
  {
    title: "Distributed File Storage System",
    description:
      "A distributed file storage system implemented using Python and gRPC. Supports upload/download operations, replication across multiple storage nodes, and basic fault tolerance with a coordinator node architecture.",
    tags: ["Python", "gRPC", "Distributed Systems"],
    github: "https://github.com/Kirank8502/Distributed-File-Storage.git",
    live: "",
    featured: true,
  },
  {
    title: "Cloud Native Microservices",
    description:
      "Cloud native serverless User Service API built using Cloudflare Workers and D1 database. Fully free, globally distributed, and production ready with REST endpoints for user management.",
    tags: ["TypeScript", "CloudFlare Workers", "CloudFlare D1", "Serverless"],
    github: "https://github.com/Kirank8502/Cloud-Native-Microservices",
    live: "",
    featured: true,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects I've worked on, from full-stack applications 
              to developer tools and everything in between.
            </p>
          </div>

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Folder className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:scale-125 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:scale-125 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Other projects */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center">
              <span className="font-mono text-primary">+</span> Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <div 
                  key={project.title}
                  className="group p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-muted-foreground">
                        {tag}{project.tags.indexOf(tag) < project.tags.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="font-mono"
              onClick={() => window.open('https://github.com/Kirank8502', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
