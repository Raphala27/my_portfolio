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
                With a strong background in Computer Science and Fintech, I specialize in building robust backend systems and scalable web applications.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">Backend</h3>
                  <p className="text-base font-semibold text-chic-brown/90">Python, Scala, Node.js, C#</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">Frontend</h3>
                  <p className="text-base font-semibold text-chic-brown/90">React, Vue, TypeScript, JS</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">Database</h3>
                  <p className="text-base font-semibold text-chic-brown/90">SQL, NoSQL, MySQL, MongoDB</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-chic-dark">DevOps & Tools</h3>
                  <p className="text-base font-semibold text-chic-brown/90">AWS, K8s, Docker, gRPC</p>
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
            <a href="https://github.com/Raphala27" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hidden md:block">View Github</Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Storyteller — MistralAI",
                description: "Interactive web app for generating and editing narrative content using Mistral AI models. Provides multi-turn prompting, adjustable model parameters, project save/load, and export options for generated stories. Designed for local development and containerized deployment.",
                tech: ["React", "TypeScript", "Node.js", "Express", "Python", "Mistral AI", "Docker"],
                features: [
                  "Multi-turn conversational story generation",
                  "Prompt templates and adjustable parameters",
                  "Save/load projects and version history",
                  "Export stories as .txt or .pdf"
                ],
                liveUrl: "https://storyteller-mistralai.onrender.com/",
                githubUrl: "https://github.com/Raphala27/storyteller_MistralAI",
                imageUrl: "/project/storyteller.png",
                hasPreview: true
              },
              {
                title: "AI Chatbot Microservice",
                description: "Engineered an AI chatbot microservice from scratch, integrating AWS Bedrock LLM with agentic tools to reduce support queries by 30%.",
                tech: ["Scala", "AWS Bedrock", "gRPC"],
                features: [],
                liveUrl: "",
                githubUrl: "",
                hasPreview: false
              },
              {
                title: "Crypto Fees Dashboard",
                description: "Built a live fees dashboard for cryptocurrencies pool and onchain automation scripts for token management.",
                tech: ["TypeScript", "React", "Cloudflare"],
                features: [],
                liveUrl: "",
                githubUrl: "",
                hasPreview: false
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:bg-white transition-colors">
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
                      className="object-cover"
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

                <p className="text-chic-brown/90 mb-6 line-clamp-3 font-medium">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-chic-dark mb-16 text-center">Experience</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {[
            {
              role: "Freelance Software Engineer",
              company: "BorgPad",
              logo: "/borgpad.jpg",
              period: "Aug 2025 – Nov 2025",
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
            <div key={index} className="relative pl-8 md:pl-0">
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

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  <ul className={`text-chic-brown/90 font-medium leading-relaxed space-y-2 list-disc ${index % 2 === 0 ? 'list-inside' : 'list-inside'}`}>
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-base">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white/30 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-chic-dark mb-16 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-chic-dark">Engineering School De Vinci - ESILV</h3>
                  <p className="text-chic-accent font-medium text-lg">Master in Computer Science and Fintech</p>
                </div>
                <p className="text-chic-brown/60 mt-2 md:mt-0">Sept 2022 – August 2025</p>
              </div>
              <div className="space-y-4 text-chic-brown/80">
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

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-chic-dark mb-2">Hackathon Chainlink</h3>
                <p className="text-chic-brown/80">Formation about Smart contracts and using oracle Chainlink</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-chic-dark mb-2">Hackathon Kryptosphere</h3>
                <p className="text-chic-brown/80">Brainstorming and conceptualization on Health in the Web3 ecosystem</p>
              </Card>
            </div>
          </div>
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
