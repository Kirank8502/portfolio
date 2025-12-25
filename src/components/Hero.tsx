import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TiltCard from "./TiltCard";
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive particle background */}
      <InteractiveBackground />

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-screen-xl px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ========= RIGHT IMAGE (Moves Up on Mobile) ========= */}
          <div className="animate-fade-up animate-delay-200 flex justify-center order-1 lg:order-2">
            <TiltCard className="relative">

              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary rounded-2xl opacity-75 blur-sm animate-pulse" />

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-card border border-border">
                <img
                  src="/kiran_kidecha.webp"
                  alt="Profile Picture"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse" />

                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <div className="w-2 h-2 rounded-full bg-primary/30" />
                </div>

                <div className="absolute bottom-4 right-4 font-mono text-xs text-primary/60">
                  &lt;/&gt;
                </div>
              </div>

              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-card border border-primary text-primary text-xs font-mono animate-float">
                React.js
              </div>

              <div
                className="absolute -bottom-3 -left-3 px-3 py-1 rounded-full bg-card border border-primary text-primary text-xs font-mono animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                TypeScript
              </div>
            </TiltCard>
          </div>

          {/* ========= LEFT TEXT ========= */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <div className="animate-fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-available animate-pulse" />
                Available for full-time and freelance opportunities
              </span>
            </div>

            <h1 className="animate-fade-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient font-mono">Kiran Kidecha</span>
            </h1>

            <p className="animate-fade-up animate-delay-200 text-lg sm:text-xl text-muted-foreground mb-4 font-light">
              Software Engineer • Cloud & Distributed Systems
            </p>

            <p className="animate-fade-up animate-delay-300 text-base text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 mb-8">
              I build scalable, cloud-native applications using AWS, microservices, and modern web technologies. Passionate about distributed systems, clean architecture, and engineering reliable solutions.
            </p>

            <div className="animate-fade-up animate-delay-400 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg hover:opacity-90 transition-all hover:scale-105 glow-subtle"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary hover:scale-105 transition-all px-8 py-6 text-lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>

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
