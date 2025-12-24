/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experiences", label: "Experiences" },
    { id: "works", label: "Works" },
    // { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <motion.div className="flex min-h-screen bg-lavender-blush-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[285px] bg-gradient-to-b from-coffee-bean-900 to-coffee-bean-800 border-r border-pearl-aqua-500/20 flex flex-col justify-between py-14 px-12 z-50">
        {/* Logo */}
        <div>
          <h1 className="font-serif font-bold text-[30px] text-amber-50">
            Sudharsan
          </h1>

          <div className="relative mb-8">
            <img src="/assets/icons/line.svg" alt="" className="w-[69px] h-1" />
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-[20px] uppercase text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? "font-bold text-amber-100"
                    : "font-normal text-white/60 hover:text-amber-100"
                }`}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Social Icons Bottom */}
        <div className="flex gap-3 items-start">
          <button className="p-2 rounded-lg hover:bg-bubblegum-pink-500/20 transition-all duration-300 group">
            <a
              href="https://x.com/sudharsanskumar"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/assets/icons/x.svg"
                alt="Twitter"
                height={12}
                width={12}
                className="w-9 h-9 group-hover:brightness-150 transition-all"
              />
            </a>
          </button>
          <button className="p-2 rounded-lg hover:bg-bubblegum-pink-500/20 transition-all duration-300 group">
            <a
              href="https://www.linkedin.com/in/sudharsans25/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                height={16}
                width={16}
                className="w-10 h-10 group-hover:brightness-150 transition-all"
              />
            </a>
          </button>
          <button className="p-2 rounded-lg hover:bg-bubblegum-pink-500/20 transition-all duration-300 group">
            <a
              href="https://github.com/Sudharsan25"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/assets/icons/github.svg"
                alt="GitHub"
                height={16}
                width={16}
                className="w-10 h-10 group-hover:brightness-150 transition-all"
              />
            </a>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[285px] flex-1 relative">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-between px-16 py-20 scroll-mt-0">
          {/* Left Content */}
          <motion.div
            className="relative z-10 max-w-[600px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}>
            {/* Gradient Blob Background */}
            <div className="absolute -left-24 -top-12">
              <img
                src="/assets/graphics/gradient-blob.svg"
                alt=""
                className="w-[246px] h-[177px]"
              />
            </div>

            {/* Hero Text */}
            <motion.div
              className="relative mb-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}>
              <h1 className="font-serif font-bold text-[64px] text-foreground leading-tight mb-24">
                Hi, I&apos;m Sudharsan
              </h1>
              <h3 className="font-sans text-[30px] text-foreground/80 leading-relaxed">
                <span className="font-bold">Full-Stack & AI Engineer</span>{" "}
                <br />
                Building scalable systems and intelligent products end to end.
              </h3>
            </motion.div>
          </motion.div>

          {/* Profile Image
          <div className="relative mr-36">
            <Image
              src="/assets/icons/ProfilePic_Comp.png"
              alt="Sudharsan"
              width={500}
              height={500}
              className="w-[400px] h-[500px] object-contain "
            />
          </div> */}
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center px-16 py-20 scroll-mt-0">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}>
            <motion.h2
              className="font-serif font-bold text-[48px] text-foreground mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}>
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}>
              <p className="font-sans text-[18px] text-foreground/80 leading-relaxed mb-6">
                I build modern, scalable software products from the ground up —
                from clean, interactive user interfaces to reliable backend
                systems and cloud infrastructure.
              </p>
              <p className="font-sans text-[18px] text-foreground/80 leading-relaxed mb-8">
                My focus is on creating end-to-end solutions: applications that
                are thoughtfully designed, engineered to scale, and ready for
                real-world use. I enjoy working across the full stack, bridging
                frontend experience with backend architecture and deployment.
              </p>
              <p className="font-sans text-[18px] text-foreground/80 leading-relaxed mb-8">
                Alongside product development, I’m deeply interested in applied
                AI. I’m currently expanding my work into Generative AI,
                cloud-native systems, and MLOps, with the goal of building
                intelligent applications where AI is not an add-on, but a core
                part of the system.
              </p>
              <p className="font-sans text-[18px] text-foreground/80 leading-relaxed mb-8">
                My long-term aim is to grow into an AI Engineer who can design
                and deliver complete full-stack products — combining robust
                software engineering with complex, production-ready AI systems.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}>
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-6 rounded-lg backdrop-blur-sm border-2 transition-all hover:shadow-lg ${
                    index === 0
                      ? "bg-gradient-to-br from-pearl-aqua-100 to-pearl-aqua-50 border-pearl-aqua-300"
                      : index === 1
                      ? "bg-gradient-to-br from-bubblegum-pink-100 to-bubblegum-pink-50 border-bubblegum-pink-300"
                      : "bg-gradient-to-br from-lavender-blush-100 to-lavender-blush-50 border-lavender-blush-300"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.05 }}>
                  <div className="font-serif font-bold text-[36px] bg-gradient-to-r from-graphite-900 to-coffee-bean-800 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="font-sans text-[14px] text-graphite-700 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Experiences Section */}
        <section
          id="experiences"
          className="min-h-screen flex items-center px-16 py-20 scroll-mt-0">
          <div className="max-w-6xl w-full">
            <motion.h2
              className="font-serif font-bold text-[48px] text-foreground mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}>
              Experience
            </motion.h2>

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20" />

              <motion.div
                className="space-y-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}>
                {[
                  {
                    role: "Full-Stack Developer",
                    company:
                      "Freelance Consultant · KERA C · Chennai, India (Hybrid)",
                    period: "Oct 2025 – Present",
                    description: [
                      "Building distributed backend services with microservice-based architecture for assessment and production workflows.",
                      "Designing scalable APIs and data models to support high-availability, cloud-hosted applications.",
                    ],
                    tech: "Nest.js, TypeScript, RabbitMQ, Docker, PostgreSQL, Drizzle ORM, AWS Aurora PostgreSQL, AWS EC2, Clean Architecture",
                    icon: "💼",
                  },
                  {
                    role: "Mobile Application Developer Intern",
                    company: "Parla Dynamics Inc. · Buffalo, New York (Remote)",
                    period: "Jun 2024 – Dec 2024",
                    description: [
                      "Implemented Android app features for a company-wide chat application using modern Android tooling.",
                      "Collaborated in an Agile environment to iterate quickly, resolve bugs, and maintain code quality.",
                    ],
                    tech: "Kotlin, Jetpack Compose, Firebase, JIRA, Agile, Code Review, Android Development",
                    icon: "📱",
                  },
                  {
                    role: "Research Assistant",
                    company:
                      "Centre for Additive Manufacturing · Chennai Institute of Technology · Chennai, India",
                    period: "Mar 2022 – Apr 2023",
                    description: [
                      "Analyzed sensor data from 3D printing machines to uncover relationships between key process parameters.",
                      "Developed predictive ML models to optimize 3D printing hyperparameters and supported publication of findings.",
                    ],
                    tech: "Machine Learning (XGBoost, AdaBoost), Data Analysis, MS Excel, MS Word, MS PowerPoint, Experimental Design",
                    icon: "🧪",
                  },
                ].map((experience, index) => (
                  <motion.div
                    key={experience.company + index}
                    className="relative flex items-start gap-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center text-2xl border-4 border-background shadow-lg z-10">
                        {experience.icon}
                      </div>
                    </div>

                    {/* Experience Card */}
                    <motion.div
                      className="flex-1 p-8 bg-white/50 backdrop-blur-sm rounded-xl border-2 border-foreground/10 hover:border-foreground/20 hover:shadow-xl transition-all"
                      whileHover={{ y: -5 }}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-sans font-bold text-[24px] text-foreground">
                            {experience.role}
                          </h3>
                          <p className="font-sans text-[18px] text-foreground/80 font-medium">
                            {experience.company}
                          </p>
                        </div>
                        <span className="font-sans text-[14px] text-foreground/60 font-medium md:text-right">
                          {experience.period}
                        </span>
                      </div>

                      {/* Summary points */}
                      <ul className="font-sans text-[16px] text-foreground/70 leading-relaxed list-disc pl-5 space-y-1 mb-4">
                        {experience.description.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      {/* Tech & Skills */}
                      <p className="font-sans text-[14px] text-foreground/80 leading-relaxed">
                        <span className="font-semibold">Tech & skills:</span>{" "}
                        {experience.tech}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section
          id="works"
          className="min-h-screen flex items-center px-16 py-20 scroll-mt-0">
          <div className="max-w-6xl w-full">
            <motion.h2
              className="font-serif font-bold text-[48px] text-foreground mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}>
              Works
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}>
              {[
                {
                  title: "News Feed Application",
                  category: "Web Application",
                  description:
                    "A comprehensive financial management app with intuitive budgeting tools and investment tracking.",
                  color: "from-bubblegum-pink-300/40 to-lavender-blush-200/40",
                  bgColor: "from-bubblegum-pink-50 to-lavender-blush-50",
                },
                {
                  title: "ATS Resume Analyzer",
                  category: "Web Application",
                  description:
                    "Patient management system with real-time analytics and appointment scheduling.",
                  color: "from-orange-300/40 to-bubblegum-pink-200/40",
                  bgColor: "from-lavender-blush-50 to-bubblegum-pink-50",
                },
                {
                  title: "Interview Agent",
                  category: "Full Stack Design",
                  description:
                    "Modern shopping experience with personalized recommendations and seamless checkout.",
                  color: "from-bubblegum-pink-300/40 to-lavender-blush-200/40",
                  bgColor: "from-bubblegum-pink-50 to-lavender-blush-50",
                },
                {
                  title: "Plant Disease Detection with SSL",
                  category: "Computer Vision",
                  description: "",
                  color: "from-orange-300/40 to-bubblegum-pink-200/40",
                  bgColor: "from-lavender-blush-50 to-bubblegum-pink-50",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.bgColor} backdrop-blur-sm border-2 border-graphite-200`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -10 }}>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  />
                  <div className="relative p-8">
                    <div className="h-48 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-6xl opacity-20">🎨</span>
                    </div>
                    <div className="font-sans text-[14px] text-foreground/60 uppercase tracking-wide mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-sans font-bold text-[24px] text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[16px] text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blogs Section
        <section
          id="blogs"
          className="min-h-screen flex items-center px-16 py-20 scroll-mt-0">
          <div className="max-w-6xl w-full">
            <motion.h2
              className="font-serif font-bold text-[48px] text-foreground mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}>
              Blogs
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}>
              {[
                {
                  title: "The Future of Design Systems",
                  date: "Dec 20, 2024",
                  readTime: "5 min read",
                  excerpt:
                    "Exploring how design systems are evolving and what it means for modern product teams.",
                  bgColor: "from-pearl-aqua-100 to-pearl-aqua-50",
                  headerColor: "from-pearl-aqua-200 to-pearl-aqua-100",
                  borderColor: "border-pearl-aqua-300",
                },
                {
                  title: "Accessibility in Digital Design",
                  date: "Dec 15, 2024",
                  readTime: "7 min read",
                  excerpt:
                    "Why accessibility should be at the core of every design decision we make.",
                  bgColor: "from-bubblegum-pink-100 to-bubblegum-pink-50",
                  headerColor: "from-bubblegum-pink-200 to-bubblegum-pink-100",
                  borderColor: "border-bubblegum-pink-300",
                },
                {
                  title: "From Wireframes to Prototypes",
                  date: "Dec 10, 2024",
                  readTime: "6 min read",
                  excerpt:
                    "A practical guide to transitioning from low-fidelity to high-fidelity designs.",
                  bgColor: "from-lavender-blush-100 to-lavender-blush-50",
                  headerColor: "from-lavender-blush-200 to-lavender-blush-100",
                  borderColor: "border-lavender-blush-300",
                },
              ].map((blog, index) => (
                <motion.div
                  key={blog.title}
                  className={`bg-gradient-to-br ${blog.bgColor} backdrop-blur-sm rounded-xl overflow-hidden border-2 ${blog.borderColor} hover:shadow-xl transition-all`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -5 }}>
                  <div
                    className={`h-40 bg-gradient-to-br ${blog.headerColor} flex items-center justify-center`}>
                    <span className="text-5xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[12px] text-foreground/50 mb-3">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-sans font-bold text-[20px] text-foreground mb-3">
                      {blog.title}
                    </h3>
                    <p className="font-sans text-[14px] text-foreground/70 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center px-16 py-20 scroll-mt-0">
          <motion.div
            className="max-w-4xl w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}>
            <motion.h2
              className="font-serif font-bold text-[48px] text-foreground mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}>
              Contact
            </motion.h2>

            <motion.p
              className="font-sans text-[18px] text-foreground/80 leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}>
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question, want to collaborate,
              or just want to say hello, feel free to reach out.
            </motion.p>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 border-2 border-foreground/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}>
                  <form className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-sans text-[14px] text-foreground/70 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 font-sans text-[16px] text-foreground bg-white rounded-lg border-2 border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-[14px] text-foreground/70 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 font-sans text-[16px] text-foreground bg-white rounded-lg border-2 border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-sans text-[14px] text-foreground/70 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 font-sans text-[16px] text-foreground bg-white rounded-lg border-2 border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-sans text-[14px] text-foreground/70 font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 font-sans text-[16px] text-foreground bg-white rounded-lg border-2 border-foreground/10 focus:border-foreground/30 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 font-sans text-[16px] font-bold text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}>
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  className="lg:col-span-1 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: false, amount: 0.3 }}>
                  <motion.div
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-foreground/10 hover:border-foreground/20 transition-all"
                    whileHover={{ scale: 1.02 }}>
                    <img
                      src="/assets/icons/mail.svg"
                      alt=""
                      className="w-8 h-8 mt-1"
                    />
                    <div>
                      <div className="font-sans text-[14px] text-foreground/60 uppercase tracking-wide mb-1">
                        Email
                      </div>
                      <div className="font-sans text-[18px] font-bold text-foreground">
                        sudharsan.0125@gmail.com
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mt-6 p-6 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl border-2 border-foreground/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: false, amount: 0.3 }}>
                    <p className="font-sans text-[14px] text-foreground/70 leading-relaxed">
                      I typically respond within 24 hours. Looking forward to
                      hearing from you! 🚀
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}
