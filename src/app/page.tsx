import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Code, Database, ExternalLink, Github, Globe, Layout, Server } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-chic-accent selection:text-chic-brown">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-chic-brown/5 text-chic-brown text-sm font-medium tracking-wide">
          Available for freelance work
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-chic-dark mb-8 tracking-tight leading-[1.1]">
          Crafting Digital <br />
          <span className="text-chic-brown italic">Experiences</span>
        </h1>
        <p className="text-lg md:text-xl text-chic-brown/70 max-w-2xl mb-12 leading-relaxed">
          Backend specialist & Full-stack developer. I build robust, scalable systems with a focus on clean architecture and seamless user experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary">
            View Projects
          </Button>
          <Button variant="outline">
            Contact Me
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-chic-brown/10 relative">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center text-chic-brown/20">
                <span className="text-lg">Portrait Image</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-chic-accent/20 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-chic-dark mb-8">
              About Me
            </h2>
            <div className="text-lg text-chic-brown/80 space-y-6 leading-relaxed">
              <p>
                I am a developer who values simplicity and efficiency. My approach to code is grounded in the belief that the best solutions are often the most elegant ones.
              </p>
              <p>
                With 5 years of experience in the industry, I've honed my skills in backend architecture, database optimization, and modern frontend frameworks.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">Backend</h3>
                  <p className="text-sm text-chic-brown/60">Node.js, Python, Go</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">Frontend</h3>
                  <p className="text-sm text-chic-brown/60">React, Next.js, Vue</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">Database</h3>
                  <p className="text-sm text-chic-brown/60">PostgreSQL, Redis, Mongo</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">DevOps</h3>
                  <p className="text-sm text-chic-brown/60">Docker, AWS, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white/30 py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-chic-dark mb-4">Selected Works</h2>
              <p className="text-chic-brown/60">A collection of projects I've built.</p>
            </div>
            <Button variant="ghost" className="hidden md:block">View Github</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group hover:bg-white transition-colors">
                <div className="aspect-video bg-chic-brown/5 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-chic-brown/20 group-hover:scale-105 transition-transform duration-500">
                    <Layout className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-chic-dark mb-2 group-hover:text-chic-accent transition-colors">Project Name {item}</h3>
                <p className="text-chic-brown/70 mb-6 line-clamp-2">
                  A brief description of the project goes here. It explains the problem solved and the technologies used.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-md bg-chic-brown/5 text-chic-brown/70">Next.js</span>
                    <span className="text-xs px-2 py-1 rounded-md bg-chic-brown/5 text-chic-brown/70">TS</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-chic-brown/40 hover:text-chic-dark transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="text-chic-brown/40 hover:text-chic-dark transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-chic-dark mb-16 text-center">Experience</h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-chic-brown/10 -translate-x-1/2" />

              <div className={`md:flex justify-between items-start gap-12 ${item % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/2 ${item % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                  <h3 className="text-xl font-bold text-chic-dark">Senior Developer</h3>
                  <p className="text-chic-accent font-medium mb-2">Tech Company Inc.</p>
                  <p className="text-chic-brown/60 text-sm mb-4">2021 - Present</p>
                </div>

                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-chic-accent border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5" />

                <div className={`md:w-1/2 ${item % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  <p className="text-chic-brown/80 leading-relaxed">
                    Led the development of core microservices. Improved system reliability by 99.9%. Mentored junior developers.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-chic-dark text-chic-bg py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
            I'm currently available for freelance projects and open to full-time opportunities.
          </p>
          <Button variant="primary" className="bg-chic-accent text-chic-dark hover:bg-white hover:text-chic-dark px-10 py-4 text-lg">
            Get in Touch
          </Button>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p>© 2025 Developer Portfolio.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
