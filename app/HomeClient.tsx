"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedShinyText } from "@/components/shared/animated-shiny-text";
import { useNavigation } from "@/hooks/use-navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 1.11, 0.81, 0.99],
    },
  },
};

export default function HomeClient() {
  const { navigate } = useNavigation();
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      navigate(href);
    },
    [navigate]
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SectionWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center pt-10 md:pt-16 lg:pt-20"
          >
       <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              <span className="gradient-text">
                Parth Dhameliya - Frontend Developer
              </span>
            </motion.h1>
            <motion.div variants={itemVariants} className="mb-8 sm:mb-10 mt-6 sm:mt-10">
              <AnimatedShinyText className="text-base font-medium text-foreground border border-border/40 rounded-full px-6 py-3 bg-muted/40 shadow-sm">
                <span role="text" aria-label="Welcome message">
                  ✨ Crafting Exceptional Digital Experiences with React and Next.js
                </span>
              </AnimatedShinyText>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-10 sm:mb-12 mt-8 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-primary mb-4 sm:mb-6">
                Innovative Frontend Developer with React & Next.js Expertise in Ahmedabad, Gujarat
              </h2>
              <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
                  Specialized in performance optimization, state management with Zustand and Redux, and automated testing with Cypress.<br />
                  Achieved a <span className="font-bold text-primary">40% reduction</span> in page load times and a <span className="font-bold text-primary">25% increase</span> in user engagement.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-20"
            >
              <Button size="lg" className="group" asChild>
                <a
                  href="/projects"
                  onClick={(e) => handleClick(e, "/projects")}
                  className="inline-flex items-center"
                  aria-label="View my portfolio projects"
                >
                  View My Work
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-3 text-base font-semibold border-primary text-primary hover:bg-primary/10 hover:text-primary" asChild>
                <a
                  href="/contact"
                  onClick={(e) => handleClick(e, "/contact")}
                  aria-label="Contact me for work opportunities"
                >
                  Get In Touch
                </a>
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mt-8"
              role="navigation"
              aria-label="Social links"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border  hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.section
              variants={itemVariants}
              className="mt-16 text-left bg-muted/30 rounded-lg p-6"
              aria-label="Key achievements"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
                Recent Achievements
              </h3>
              <ul className="space-y-3">
                <li>🚀 Reduced load times by 40% through performance optimization</li>
                <li>💼 Developed enterprise solutions for Dubai Pulse project, enhancing platform functionality by 30%</li>
                <li>📈 Built high-frequency trading platform features, boosting user retention by 25%</li>
              </ul>
            </motion.section>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}
