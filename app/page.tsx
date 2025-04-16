"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { link } from "fs"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["hero", "projects", "experience", "skills", "education", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-zinc-100">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-emerald-400"
          >
            AM
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["hero", "projects", "experience", "skills", "education", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                      activeSection === section ? "text-emerald-400" : "text-zinc-400"
                    }`}
                  >
                    {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
                <li>
                  <button className={`text-sm  transition-colors hover:text-emerald-400 text-zinc-400`} >
                  <a href="https://medium.com/@adelino-masioli" target="_blank">Blog</a>
                  </button>
                </li>
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-emerald-400"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
          >
            <a href="/Adelino_Lazaro_Ferreira_Masioli_CV.pdf" download className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {["hero", "projects", "experience", "skills", "education", "contact"].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        scrollToSection(section)
                        setMobileMenuOpen(false)
                      }}
                      className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                        activeSection === section ? "text-emerald-400" : "text-zinc-400"
                      }`}
                    >
                      {section === "hero" ? "Home" : section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
                <li className="pt-2 border-t border-zinc-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                  >
                   <a href="/Adelino_Lazaro_Ferreira_Masioli_CV.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download CV
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center py-12 md:py-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 animated-gradient-text">Adelino Masioli</h1>
              <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-6 text-zinc-300">Senior Software Engineer</h2>
              <p className="text-base md:text-xl text-zinc-400 mb-6 md:mb-8 max-w-2xl">
                Vila Nova de Gaia, Portugal. Over 13 years crafting innovative digital solutions across Brazil and
                Europe. Specializing in full-stack development, AI-driven data solutions, healthcare technology, and
                scalable web architectures.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <a href="tel:+351913430080" className="flex items-center justify-center gap-2">
                  Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                <a href="/Adelino_Lazaro_Ferreira_Masioli_CV.pdf" download className="flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="flex flex-col items-center text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <ChevronDown className="animate-bounce" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Featured Projects
              </span>
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-emerald-500"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Content Data Platform",
                description: "Evous: AI-enhanced content extraction platform for intelligent data management.",
                tech: ["Python", "FastAPI", "React", "GraphQL", "+2"],
                link: "https://evous.ai",
              },
              {
                title: "Intelligent Document Processing System",
                description: "Blackrock Health: Website with AI-driven document processing.",
                tech: ["Drupal", "Bootstrap", "JavaScript", "AWS", "FHIR"],
                link: "https://www.blackrockhealth.com/",
              },
              {
                title: "Headless Website",
                description: "Ashford: Interactive website with headless WordPress CMS and NextJS.",
                tech: ["Next.js", "Tailwind CSS", "WordPress", "MySQL"],
                link: "https://www.ashfordkitchensandinteriors.co.uk/",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-zinc-100">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-zinc-800/50 text-zinc-300 border-zinc-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 p-0 px-2"
                    >
                      <a
                        href={typeof project.link === 'string' ? project.link : '#'}  // Verifica se é uma string válida
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" strokeWidth={1.5} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Professional Experience
              </span>
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-emerald-500"></span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                role: "Tech Lead | Software Engineer",
                company: "Evous | Jornadas de Conteúdos com IA",
                location: "Remote",
                period: "October 2024 to Present",
                description:
                  "Led a multidisciplinary team as Tech Lead, architecting and delivering an AI-powered data extraction platform tailored for product and training content generation. The platform leverages advanced Retrieval-Augmented Generation (RAG) models to intelligently extract data from diverse sources, transforming raw information into valuable, actionable insights for product development and training materials.",
              },
              {
                role: "Software Engineer",
                company: "Solution 17",
                location: "Brighton, UK - Remote",
                period: "September 2021 to October 2024",
                description:
                  "Led the development and maintenance of advanced AI-driven data extraction platforms focused on healthcare data, including medical records and patient health information, for leading companies such as AVT, Johnson & Johnson, Pfizer, and Roche. I architected scalable, high-performance solutions using Python (FastAPI), Node.js (NestJS), AWS, PostgreSQL, and GraphQL, ensuring robust and efficient data processing tailored to the needs of the healthcare industry.",
              },
              {
                role: "Frontend Web Full-Stack",
                company: "DEPT | Web Development Specialist Focused on Drupal",
                location: "Dublin, Ireland - Remote",
                period: "June 2022 to July 2023",
                description:
                  "As a frontend web developer at DEPT, I delivered high-performance web solutions with a strong focus on code quality. I collaborated with prestigious clients such as Blackrock, Hermitage Clinic, GlenDimplex, SEAI, Andy Cave, HSE Health Service, and Icon PLC, specialising in Drupal projects.",
              },
              {
                role: "Full-Stack Engineer",
                company: "Genesis",
                location: "Lisbon, Portugal - Remote",
                period: "April 2020 to September 2021",
                description:
                  "Specialized in building and maintaining dynamic, high-performance applications using Drupal, NodeJS, and ReactJS. Expertise in designing and implementing robust APIs, integrating frontend and backend components to create seamless user experiences.",
              },
              {
                role: "Software Engineer",
                company: "Loggia | Software Engineering",
                location: "Belo Horizonte e Região, Brasil · Remote",
                period: "Sep 2011 to Apr 2020",
                description:
                  "During my time at Loggia, I worked with a wide array of technologies, largely driven by our key client, Banco Sicoob. This involved projects ranging from simple websites to complex Facebook apps, online stores, JavaScript animations, and portals.",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-zinc-800"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-500"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100">{job.role}</h3>
                  <p className="text-emerald-400">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-x-4 text-sm text-zinc-400 mt-1">
                    <span>{job.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="text-zinc-400 mt-3">{job.description}</p>
                <Button variant="link" className="text-emerald-400 hover:text-emerald-300 p-0 mt-2" onClick={() => scrollToSection("skills")}>
                  View Tech Stack <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="skills" className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Skills & Technologies
              </span>
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-emerald-500"></span>
            </h2>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8 bg-zinc-900/50 overflow-x-auto">
              {["frontend", "backend", "database", "devops", "ai", "mobile"].map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="frontend" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <p className="text-zinc-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Node.js", "Python", "FastAPI", "NestJS", "PHP", "Laravel"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <p className="text-zinc-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="database" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["PostgreSQL", "MySQL", "Vector DB", "Graph DB"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <p className="text-zinc-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devops" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["AWS", "Docker", "Kubernetes"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <p className="text-zinc-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["OpenAI", "RAG", "Vector DBs", "Graph DBs", "Dify", "N8N", "Make"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <p className="text-zinc-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["GraphQL", "React Native", "Flutter"].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <p className="text-zinc-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Education */}
        <section id="education" className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Education
              </span>
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-emerald-500"></span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                degree: "Master's in Engineering of Web Technologies and Systems", // Usando aspas duplas
                institution: "ISLA – Instituto Politécnico de Gestão e Tecnologia (ISLA-IPGT)",
                location: "Vila Nova de Gaia - PT",
                year: "September 2024",
                link: "https://www.islagaia.pt/pt/",
              },
              {
                degree: "Postgraduate Degree in Software Engineering",
                institution: "UNA",
                location: "Belo Horizonte - BR",
                year: "February 2012 to March 2013",
                link: "https://una.br/",
              },
              {
                degree: "Bachelor's in Systems Analysis and Development", // Usando aspas duplas
                institution: "UNATEC",
                location: "Belo Horizonte - BR",
                year: "February 2008 to December 2011",
                link: "https://una.br/",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-zinc-800"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-emerald-500"></div>
                <div>
                  {/* Renderizando diretamente o grau de educação (degree) */}
                  <h3 className="text-xl font-semibold text-zinc-100">{edu.degree}</h3>
                  <p className="text-emerald-400">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-x-4 text-sm text-zinc-400 mt-1">
                    <span>{edu.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    <span>{edu.year}</span>
                  </div>
                </div>
                <Button variant="link" className="text-emerald-400 hover:text-emerald-300 p-0 mt-2">
                  <a href={edu.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Visit {edu.institution.split(" ")[0]} website <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
                Let&apos;s Connect
              </span>
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-emerald-500"></span>
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            <p className="text-zinc-400 mb-8">Open to new opportunities and collaborations. Feel free to reach out!</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <Mail className="h-8 w-8 text-emerald-400 mb-3" strokeWidth={1}/>
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Email Me</h3>
                <Button variant="link" className="text-zinc-400 hover:text-emerald-400 p-0">
                <a href="mailto:adelinomasioli@gmail.com" className="flex items-center justify-center gap-2">
                  adelinomasioli@gmail.com
                 </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <Linkedin className="h-8 w-8 text-emerald-400 mb-3" strokeWidth={1}/>
                <h3 className="text-lg font-medium text-zinc-200 mb-1">LinkedIn</h3>
                <Button variant="link" className="text-zinc-400 hover:text-emerald-400 p-0">
                  <a href="https://www.linkedin.com/in/adelino-masioli/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  /in/adelino-masioli
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <Github className="h-8 w-8 text-emerald-400 mb-3" strokeWidth={1}/>
                <h3 className="text-lg font-medium text-zinc-200 mb-1">GitHub</h3>
                <Button variant="link" className="text-zinc-400 hover:text-emerald-400 p-0">
                  <a href="https://www.github.com/adelino-masioli/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  /adelino-masioli
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <Phone className="h-8 w-8 text-emerald-400 mb-3"  strokeWidth={1}/>
                <h3 className="text-lg font-medium text-zinc-200 mb-1">Call Me</h3>
                <Button variant="link" className="text-zinc-400 hover:text-emerald-400 p-0">
                  <a href="tel:+351913430080" className="flex items-center justify-center gap-2">
                  +351 932 922 170
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to Top Button - Mobile Only */}
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 md:hidden bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>© 2025 Adelino Masioli. Located in Vila Nova de Gaia, Portugal.</p>
        </div>
      </footer>
    </div>
  )
}
