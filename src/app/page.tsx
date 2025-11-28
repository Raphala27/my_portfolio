import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Code, Database, ExternalLink, Github, Globe, Layout, Server } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-chic-accent selection:text-chic-brown relative overflow-hidden">
      <Navbar />
      <HeroBackground />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center relative z-10">
        <ScrollReveal delay={0.2}>
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-chic-brown/5 text-chic-brown text-sm font-medium tracking-wide animate-pulse-soft">
            Available for freelance work
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-chic-dark mb-6 tracking-tight leading-[1.1]">
            Software and AI Engineer<br />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="text-lg md:text-xl text-chic-brown/90 max-w-3xl mb-8 leading-relaxed font-medium">
            I build intelligent systems and scalable applications. From full-stack development to AI-powered solutions, I specialize in creating robust architectures that solve real-world problems.
          </p>
        </ScrollReveal>

        {/* Expertise Badges */}
        <ScrollReveal delay={0.8}>
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl">
            <span className="px-4 py-2 rounded-full bg-chic-accent/20 text-chic-dark text-sm font-bold hover:scale-105 transition-transform cursor-default">
              🤖 AI Integration
            </span>
            <span className="px-4 py-2 rounded-full bg-chic-accent/20 text-chic-dark text-sm font-bold hover:scale-105 transition-transform cursor-default">
              ⚙️ Backend Architecture
            </span>
            <span className="px-4 py-2 rounded-full bg-chic-accent/20 text-chic-dark text-sm font-bold hover:scale-105 transition-transform cursor-default">
              🚀 Full-Stack Development
            </span>
            <span className="px-4 py-2 rounded-full bg-chic-accent/20 text-chic-dark text-sm font-bold hover:scale-105 transition-transform cursor-default">
              ☁️ Cloud & DevOps
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1.0}>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#projects">
              <Button variant="primary">
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">
                Contact Me
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-square rounded-full overflow-hidden bg-chic-brown/10 relative shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image src="/portrait.png" alt="Portrait" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-chic-accent/20 rounded-full blur-3xl -z-10" />
            </div>

            <div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-chic-dark">
                  About Me
                </h2>
              </div>
              <div className="text-lg text-chic-brown/80 space-y-6 leading-relaxed text-justify">
                <p>
                  I am an engineer who values simplicity and efficiency. My approach to code is grounded in the belief that the best solutions are often the most simple ones.
                </p>
                <p>
                  With a strong background in Computer Science and Fintech, I specialize in building robust backend systems and scalable web applications.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-12 text-left">
                  <div className="space-y-2">
                    <h3 className="font-bold text-chic-dark">AI & Machine Learning</h3>
                    <p className="text-base font-semibold text-chic-brown/90">Mistral AI, AWS Bedrock, OpenAI API, RAG</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-chic-dark">Backend</h3>
                    <p className="text-base font-semibold text-chic-brown/90">Python, Scala, FastAPI, Django, Node.js</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-chic-dark">Frontend</h3>
                    <p className="text-base font-semibold text-chic-brown/90">React, TypeScript, Vite, Vue, Tailwind CSS</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-chic-dark">Database & Storage</h3>
                    <p className="text-base font-semibold text-chic-brown/90">PostgreSQL, Redis, Supabase, MongoDB</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-chic-dark">DevOps & Cloud</h3>
                    <p className="text-base font-semibold text-chic-brown/90">AWS, Docker, Kubernetes, GitLab CI/CD</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-chic-dark">APIs & Integration</h3>
                    <p className="text-base font-semibold text-chic-brown/90">REST, gRPC, Protobuf, Stripe, Cloudflare</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white/30 backdrop-blur-md border-y border-white/20 py-24">
        <div className="container mx-auto px-6">
            <ScrollReveal width="100%">
            <div className="flex items-center justify-between mb-16">
              <div className="flex-1" />
              <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-chic-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-chic-dark">Selected Works</h2>
                <div className="w-12 h-1 bg-chic-accent rounded-full"></div>
              </div>
              <p className="text-chic-brown/60 max-w-2xl mx-auto">A collection of projects I've built.</p>
                <a href="https://github.com/Raphala27" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                  <Button variant="ghost" className="flex items-center gap-2">
                  View GitHub
                  </Button>
                </a>
              </div>
              <div className="flex-1 flex justify-end">

              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                "title": "Storyteller AI",
                "description": "A full-stack AI storytelling application powered by Mistral AI. Features user authentication, story generation with customizable parameters, persistent storage with PostgreSQL, and rate limiting for API protection. Built for scalable deployment with Alembic migrations.",
                "tech": ["Mistral AI", "Python", "FastAPI", "React", "Vite", "PostgreSQL", "Redis"],
                "features": [
                  "AI-powered story generation using Mistral LLM",
                  "User authentication and authorization system",
                  "PostgreSQL database with Alembic migrations",
                  "Redis-based rate limiting for API protection",
                  "Responsive React frontend with Vite",
                  "RESTful API backend with FastAPI"
                ],
                liveUrl: "https://storyteller-mistralai.onrender.com/",
                githubUrl: "https://github.com/Raphala27/storyteller_MistralAI",
                imageUrl: "/project/storyteller.png",
                hasPreview: true
              },
              {
                "title": "Blog Peinture",
                "description": "A full-stack e-commerce art gallery website for showcasing and selling paintings. Features Stripe payment integration, order management, automated email notifications, and a comprehensive admin dashboard. Built with modern React and Supabase for scalable, real-time data management.",
                "tech": ["React", "TypeScript", "Vite", "Supabase", "Stripe", "PostgreSQL", "Tailwind CSS"],
                "features": [
                  "E-commerce functionality with Stripe checkout integration",
                  "Real-time order management and tracking system",
                  "Automated order confirmation emails via Edge Functions",
                  "Responsive gallery with artwork filtering and visibility controls",
                  "Blog system with articles and content management",
                  "Contact form and comprehensive legal pages (CGV, privacy policy)",
                  "PostgreSQL database via Supabase with migration management"
                ],
                "liveUrl": "https://blogpeinturevolny.fr",
                "githubUrl": "https://github.com/Raphala27/blog-peinture",
                "imageUrl": "/project/blogpeinture.png",
                "hasPreview": true
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                <Card className="group hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
                  {item.imageUrl && item.hasPreview ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video rounded-xl mb-6 overflow-hidden relative group/preview cursor-pointer"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={`${item.title} preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/preview:scale-105"
                      />
                      <div className="absolute inset-0 bg-chic-dark/0 group-hover/preview:bg-chic-dark/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/preview:opacity-100">
                        <div className="px-6 py-3 bg-chic-accent text-chic-dark font-bold rounded-lg flex items-center gap-2 shadow-lg transform scale-90 group-hover/preview:scale-100 transition-transform">
                          <ExternalLink className="w-5 h-5" />
                          View Live Demo
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="aspect-video bg-chic-brown/5 rounded-xl mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center text-chic-brown/20 group-hover:scale-105 transition-transform duration-500">
                        <Layout className="w-12 h-12" />
                      </div>
                    </div>
                  )}

                  {item.liveUrl ? (
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-xl font-bold text-chic-dark mb-2 hover:text-chic-accent transition-colors cursor-pointer">{item.title}</h3>
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold text-chic-dark mb-2 group-hover:text-chic-accent transition-colors">{item.title}</h3>
                  )}

                  {item.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-chic-accent/10 text-chic-brown/80">
                          ✨ {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-chic-brown/90 mb-6 line-clamp-3 font-medium flex-grow text-justify">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      {item.tech.map((t, i) => (
                        <span key={i} className="text-sm font-bold px-2 py-1 rounded-md bg-chic-brown/10 text-chic-dark">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {item.githubUrl && (
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="text-chic-brown/40 hover:text-chic-dark transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {item.liveUrl && (
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="text-chic-brown/40 hover:text-chic-dark transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-24">
        <ScrollReveal width="100%">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-1 bg-chic-accent rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-chic-dark">Experience</h2>
            <div className="w-12 h-1 bg-chic-accent rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          {[
            {
              role: "Freelance Software Engineer",
              company: "BorgPad",
              logo: "/borgpad.jpg",
              period: "Aug 2025 - Nov 2025",
              description: [
                "Architected and deployed an end-to-end blockchain automation system handling token claims, burns, swaps, and transfers with zero downtime",
                "Engineered a real-time cryptocurrency fees dashboard with live data visualization, improving financial transparency for stakeholders",
                "Developed intelligent trading bot monitoring system with automated alerts, reducing manual oversight by 70%",
                "Built an AI-powered profile scoring engine using OpenAI API and RAG architecture, enabling data-driven subject-specific evaluations"
              ],
              tech: "Typescript, JavaScript, Cloudflare, OpenAI API"
            },
            {
              role: "Software Engineer Intern",
              company: "SwissBorg",
              logo: "/swissborg.jpg",
              period: "Feb 2024 – Jul 2024",
              description: [
                "Architected and deployed a production-grade AI chatbot microservice in Scala from concept to stage environment, serving 100+ internal users",
                "Designed and implemented 5+ high-performance RESTful and gRPC APIs using Akka HTTP and Protobuf, enabling seamless microservice communication",
                "Integrated AWS Bedrock LLM with 3 custom agentic tools (price fetching, calculations), achieving 30% reduction in user support queries",
                "Led rapid prototyping of 3 POC iterations using Python (Ollama, OpenWebUI), accelerating production deployment timeline",
                "Authored comprehensive microservice architecture documentation, now adopted as standard by 15+ engineering team members"
              ],
              tech: "Scala, Python, gRPC, AWS Bedrock, Kubernetes"
            },
            {
              role: "Freelance Full-stack Developer",
              company: "Kwyk",
              logo: "/kwyk.jpg",
              period: "April 2024 – Aug 2024",
              description: [
                "Continued delivering high-impact features and optimizations as trusted freelance partner following successful internship performance"
              ],
              tech: "Python, Django, JS"
            },
            {
              role: "Full-stack Developer Intern",
              company: "Kwyk",
              logo: "/kwyk.jpg",
              period: "April 2024 – Aug 2024",
              description: [
                "Engineered and optimized 80+ interactive academic exercises in Python, enhancing learning experience for thousands of students",
                "Developed a comprehensive performance monitoring application tracking 20,000+ exercises with database logging and analytics dashboard",
                "Collaborated effectively within a 9-person engineering team using Agile methodologies and GitLab CI/CD workflows"
              ],
              tech: "Python, Django, Bootstrap, jQuery, GitLab"
            }
          ].map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-chic-brown/10 -translate-x-1/2" />

                <div className={`md:flex justify-between items-start gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover"
                      />
                      <div className={index % 2 === 0 ? '' : 'text-right'}>
                        <h3 className="text-xl font-bold text-chic-dark">{item.role}</h3>
                        <p className="text-chic-accent font-medium">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-chic-brown/60 text-sm mb-4">{item.period}</p>
                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      {item.tech.split(', ').map((t, i) => (
                        <span key={i} className="text-sm font-bold px-2 py-1 rounded-md bg-chic-brown/10 text-chic-dark">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-chic-accent border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5" />

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <ul className={`text-chic-brown/90 font-medium leading-relaxed space-y-2 list-disc list-outside ${index % 2 === 0 ? 'pr-5 text-justify' : 'pl-5 text-justify'}`} style={index % 2 === 0 ? { direction: 'rtl' } : {}}>
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-base" style={index % 2 === 0 ? { direction: 'ltr' } : {}}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white/30 backdrop-blur-md border-y border-white/20 py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal width="100%">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-12 h-1 bg-chic-accent rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-chic-dark">Education</h2>
              <div className="w-12 h-1 bg-chic-accent rounded-full"></div>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.2}>
              <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/esilv.png"
                      alt="ESILV logo"
                      width={64}
                      height={64}
                      className="rounded-lg object-contain"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-chic-dark">Engineering School De Vinci - ESILV</h3>
                      <p className="text-chic-accent font-medium text-lg">Master in Computer Science and Fintech</p>
                    </div>
                  </div>
                  <p className="text-chic-brown/60 mt-2 md:mt-0">Sept 2022 - August 2025</p>
                </div>
                <div className="space-y-4 text-chic-brown/80 text-justify">
                  <div>
                    <strong className="text-chic-dark block mb-1">Main Computer Sciences Track:</strong>
                    <p>Web development, Machine learning, Operating systems, Database, Data sciences, Cryptography, Blockchain programming, Smart contract, Crytpo-Finance</p>
                  </div>
                  <div>
                    <strong className="text-chic-dark block mb-1">Quantum Track:</strong>
                    <p>Quantum theory, Quantum computation, Advanced quantum algorithms, Post-quantum cryptography</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.3}>
                <Card className="p-6 hover:shadow-md transition-shadow h-full">
                  <h3 className="text-xl font-bold text-chic-dark mb-2">Hackathon Chainlink</h3>
                  <p className="text-chic-brown/80 text-justify">Formation about Smart contracts and using oracle Chainlink</p>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Card className="p-6 hover:shadow-md transition-shadow h-full">
                  <h3 className="text-xl font-bold text-chic-dark mb-2">Hackathon Kryptosphere</h3>
                  <p className="text-chic-brown/80 text-justify">Brainstorming and conceptualization on Health in the Web3 ecosystem</p>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-chic-dark text-chic-bg py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
              I'm currently available for freelance projects and open to full-time opportunities.
            </p>
            <a href="https://www.linkedin.com/in/raphael-issartial/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="bg-chic-accent text-chic-dark hover:bg-white hover:text-chic-white px-10 py-4 text-lg">
                Get in Touch
              </Button>
            </a>
          </ScrollReveal>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p>© 2025 Developer Portfolio.</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/raphael-issartial/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://x.com/Karmaph7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://github.com/Raphala27" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
