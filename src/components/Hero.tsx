import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive particle background */}
      <InteractiveBackground />

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Status badge */}
              <div className="animate-fade-up mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-available animate-pulse" />
                  Available for full-time and freelance opportunities
                </span>
              </div>

              {/* Main heading */}
              <h1 className="animate-fade-up animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient font-mono">Kiran Kidecha</span>
              </h1>

              {/* Subtitle */}
              <p className="animate-fade-up animate-delay-200 text-xl md:text-2xl text-muted-foreground mb-4 font-light">
                Software Engineer • Cloud & Distributed Systems
              </p>

              {/* Description */}
              <p className="animate-fade-up animate-delay-300 text-base text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 mb-8">
                I build scalable, cloud-native applications using AWS, microservices, and modern web technologies. Passionate about distributed systems, clean architecture, and engineering reliable solutions.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-up animate-delay-400 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg hover:opacity-90 transition-all hover:scale-105 glow-subtle"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-secondary hover:scale-105 transition-all px-8 py-6 text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social links */}
              <div className="animate-fade-up animate-delay-400 flex items-center justify-center lg:justify-start gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Kirank8502", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/kiran-kidecha/", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:kirankidecha85@gmail.com", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <a 
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all hover:scale-110 hover:glow-subtle"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Photo with 3D tilt effect */}
            <div className="animate-fade-up animate-delay-200 flex justify-center order-1 lg:order-2">
              <TiltCard className="relative">
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary rounded-2xl opacity-75 blur-sm animate-pulse" />
                
                {/* Photo container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-card border border-border">
                  {/* Placeholder avatar with initials */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                    <div className="text-center">
                      {/* <span className="text-6xl md:text-8xl font-bold text-gradient font-mono">KK</span> */}
                      {/* <p className="text-muted-foreground text-sm mt-2">Upload your photo</p> */}
                      <img 
                        src="/kiran_kidecha.webp" 
                        alt="Profile Picture" 
                        className="absolute inset-0 w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <div className="w-2 h-2 rounded-full bg-primary/30" />
                  </div>
                  
                  {/* Code snippet decoration */}
                  <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/60">
                    &lt;/&gt;
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-card border border-primary text-primary text-xs font-mono animate-float">
                  React.js
                </div>
                <div className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full bg-card border border-primary text-primary text-xs font-mono animate-float" style={{ animationDelay: '0.5s' }}>
                  TypeScript
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
