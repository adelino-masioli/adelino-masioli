"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MonitorDown,
  Phone,
  Rss,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const education = [
    {
      degree: "Master's in Engineering of Web Technologies and Systems",
      school: "ISLA – Instituto Politécnico de Gestão e Tecnologia (ISLA-IPGT)",
      location: "Vila Nova de Gaia - PT",
      period: "September 2024",
      link: "https://www.islagaia.pt/pt/",
      link_text: "Visit ISLA Gaia website",
    },
    {
      degree: "Master's in Software Engineering",
      school: "UNA",
      location: "Belo Horizonte - BR",
      period: "February 2012 to March 2013",
      link: "https://www.una.br/",
      link_text: "Visit UNA website",
    },
    {
      degree: "Bachelor's in Systems Analysis and Development",
      school: "UNATEC",
      location: "Belo Horizonte - BR",
      period: "February 2008 to December 2011",
      link: "https://www.una.br/",
      link_text: "Visit UNATEC website",
    },
  ];

  const experience = [
    {
      company: "Evous | Jornadas de Conteúdos com IA",
      role: "Tech Lead | Software Engineer",
      period: "October 2024 to Present",
      location: "Remote",
      description:
        "Leading a Multidisciplinary Team in AI-Powered Content Automation At <a href='https://evous.com' target='_blank' rel='noopener noreferrer'><strong>Evous</strong></a>, I lead the development of AI-driven solutions for automating content creation. I design scalable architectures with FlutterFlow, Dart, Supabase, PostgreSQL, Python, and FastAPI, transforming various media into dynamic learning materials. My role also includes guiding the team in best engineering practices and delivering scalable, multilingual content solutions to optimize production efficiency.",
      stack: [
        "Python",
        "FastAPI",
        "NodeJS",
        "NestJS",
        "PostgreSQL",
        "Flutter",
        "FlutterFlow",
        "Dart",
        "NextJS",
        "OpenAI",
        "Docker",
      ],
    },
    {
      company: "Solution 17",
      role: "Software Engineer",
      period: "September 2021 to October 2024",
      location: "Brighton, UK - Remote",
      description:
        "Software Engineer at <strong><a href='https://www.solution17.co.uk/'>Solution17</a></strong>  I specialized in frontend development and third-party integrations, delivering scalable, high-performance platforms focused on user experience.  Key Skills and Projects: E-commerce Development: Built custom e-commerce solutions using Ruby on Rails and Shopify, integrating payment gateways and shipping services. Drupal Solutions: Developed and maintained scalable Drupal platforms, implementing custom features and third-party integrations. Frontend Development: Created dynamic, responsive user interfaces with JavaScript, ReactJS, and NodeJS. Agile Management: Led projects using Scrum and Kanban, ensuring efficient task management and team collaboration.",
      stack: [
        "PHP",
        "Laravel",
        "Ruby on Rails",
        "Symfony",
        "Drupal",
        "NodeJS",
        "ReactJS",
        "NextJS",
        "Tailwind CSS",
        "Docker",
        "MySQL",
        "PayPal API",
        "Stripe API",
      ],
    },
    {
      company: "DEPT | Web Development Specialist Focused on Drupal",
      role: "Frontend Web Full-Stack",
      period: "June 2022 to July 2023",
      location: "Dublin, Ireland - Remote",
      description:
        "As a frontend web developer at <a href='https://www.deptagency.com/' target='_blank' rel='noopener noreferrer'><strong>DEPT</strong></a>, I delivered high-performance web solutions with a strong focus on code quality. I collaborated with prestigious clients such as Blackrock, Hermitage Clinic, GlenDimplex, SEAI, Andy Cave, HSE Health Service, and Icon PLC, specialising in Drupal projects. I was responsible for developing and maintaining scalable web applications, creating custom solutions tailored to client needs, and collaborating within multidisciplinary teams to ensure project success. My experience includes optimising Drupal systems, restructuring platforms, and implementing improvements while using agile methodologies like Scrum and Kanban to manage and track progress efficiently.",
      stack: [
        "Drupal",
        "PHP",
        "HTML5",
        "Figma",
        "Docker",
        "Drush",
        "Preact",
        "styled-components",
        "CSS",
        "Twig",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Jira",
        "DDEV",
        "React.js",
        "SASS",
        "Vue.js",
      ],
    },
    {
      company: "Genesis",
      role: "Full-Stack Engineer",
      period: "April 2020 to September 2021",
      location: "Lisbon, Portugal - Remote",
      description:
        "Full-Stack Development at <strong><a href='https://genesisdigitalsolutions.pt/'>Genesis</a></strong>: Specialized in building and maintaining dynamic, high-performance applications using Drupal, NodeJS, and ReactJS. Expertise in designing and implementing robust APIs, integrating frontend and backend components to create seamless user experiences. Skilled in developing scalable and modular systems, ensuring efficient data flow between client-side and server-side, while adhering to best practices in performance optimization, security, and maintainability.",
      stack: [
        "NodeJS",
        "Express",
        "Drupal",
        "PostgreSQL",
        "ReactJS",
        "NextJS",
        "Gatsby",
        "React Native",
      ],
    },
    {
      company: "Loggia | Software Engineering",
      role: "Software Engineer",
      period: "Sep 2011 to Apr 2020",
      location: "Belo Horizonte e Região, Brasil · Remote",
      description:
        "During my time at <a href='https://loggia.com.br/' target='_blank' rel='noopener noreferrer'><strong>Loggia</strong></a>, I worked with a wide array of technologies, largely driven by our key client, Banco Sicoob. This involved projects ranging from simple websites to complex Facebook apps, online stores, JavaScript animations, and portals. Key projects included building web applications for Sicoob and its partners, developing CRM systems in Drupal, and creating custom solutions using PHP, Laravel, Java, Python, JavaScript, and more. I also developed applications like 'Meu Lanche' and managed card production systems, focusing on scalability and performance.",
      stack: [
        "PHP",
        "Laravel",
        "Python",
        "Java",
        "JavaScript",
        "AngularJS",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "WordPress",
        "Drupal",
        "Joomla",
        "Ruby on Rails",
        "MySQL",
        "React.js",
        "Vue.js",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Header Card */}
        <Card className="p-6 md:p-8 mb-6">
          {/* Existing header content */}
          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <div>
              <h1 className="text-4xl font-bold mb-2">Adelino Masioli</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span>
                  <Link
                    href="https://www.google.com/maps?q=41.1244,-8.6110"
                    target="_blank"
                    title="Vila Nova de Gaia, Portugal"
                  >
                    {" "}
                    Vila Nova de Gaia, Portugal
                  </Link>
                </span>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                  <p className="text-muted-foreground">
                    Senior Software Engineer with 13+ years of experience in
                    development, specializing in frontend technologies. Masters
                    in Engineering of Web Technologies and Systems with
                    expertise in Python, Ruby on Rails, Flutter, NodeJS, React,
                    and modern web technologies.
                  </p>
                </section>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:adelinomasioli@gmail.com"
                    className="text-primary hover:underline"
                  >
                    adelinomasioli@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+351932992170"
                    className="text-primary hover:underline"
                  >
                    +351 932 992 170
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Connect</h2>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/adelino-masioli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/adelino-masioli/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://medium.com/@adelino-masioli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Rss className="w-4 h-4" />
                      <span className="sr-only">Medium</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="/Adelino_Lazaro_Ferreira_Masioli_CV.pdf"
                      rel="noopener noreferrer"
                      download
                    >
                      <MonitorDown className="w-4 h-4" />
                      <span className="sr-only">CV</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Languages</h2>
                <ul className="space-y-2">
                  <li>Portuguese (Native)</li>
                  <li>English (B2)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Education Card */}
        <Card className="p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-b last:border-0 pb-6 last:pb-0"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    </div>
                    <div className="text-muted-foreground space-y-1">
                      <p>{edu.school}</p>
                      <p>{edu.location}</p>
                      <p>
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:underline"
                        >
                          {edu.link_text}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Professional Experience Card */}
        <Card className="p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-6">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-b last:border-0 pb-8 last:pb-0"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="font-medium">{exp.company}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p
                  className="text-muted-foreground mb-4"
                  dangerouslySetInnerHTML={{ __html: exp.description }}
                />
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Card */}
        <Card className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              {
                skill: "JavaScript",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              { skill: "React", url: "https://reactjs.org/" },
              { skill: "Node.js", url: "https://nodejs.org/" },
              { skill: "TypeScript", url: "https://www.typescriptlang.org/" },
              { skill: "Next.js", url: "https://nextjs.org/" },
              { skill: "AWS", url: "https://aws.amazon.com/" },
              { skill: "Docker", url: "https://www.docker.com/" },
              { skill: "PHP", url: "https://www.php.net/" },
              { skill: "Laravel", url: "https://laravel.com/" },
              { skill: "Symfony", url: "https://symfony.com/" },
              { skill: "Python", url: "https://www.python.org/" },
              { skill: "PostgreSQL", url: "https://www.postgresql.org/" },
              { skill: "MySQL", url: "https://www.mysql.com/" },
              { skill: "GraphQL", url: "https://graphql.org/" },
              { skill: "React Native", url: "https://reactnative.dev/" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {item.skill}
                </span>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
