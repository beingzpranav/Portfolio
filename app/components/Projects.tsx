"use client";

import React, { useEffect, useState } from 'react';

// Project data with embedded base64 placeholders
interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Modern, responsive portfolio website built with Next.js and TailwindCSS showcasing my projects and skills.",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    demoLink: "https://pranavk.tech",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Silver Jubilee",
    description: "A beautiful celebration website for a 25th wedding anniversary, featuring event details and photo gallery.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://beingzpranav.github.io/Silver-Jubilee/",
    codeLink: "https://github.com/beingzpranav/Silver-Jubilee",
  }
];

// Tag component with TypeScript types
const Tag = ({ label }: { label: string }) => (
  <span
    style={{
      padding: "0.25rem 0.75rem",
      fontSize: "0.75rem",
      fontWeight: 500,
      borderRadius: "9999px",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      color: "rgb(96, 165, 250)",
      border: "1px solid rgba(59, 130, 246, 0.2)",
      margin: "0.25rem",
      display: "inline-block",
      transition: "all 0.2s ease"
    }}
  >
    {label}
  </span>
);

// Link component with TypeScript types
const ProjectLink = ({ 
  href, 
  label, 
  icon 
}: { 
  href: string; 
  label: string; 
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      color: "rgb(96, 165, 250)",
      fontSize: "0.875rem",
      transition: "color 0.2s ease",
      marginLeft: "1rem",
      textDecoration: "none"
    }}
  >
    <span style={{ marginRight: "0.25rem" }}>{label}</span>
    {icon}
  </a>
);

// Placeholder gradient background for projects
const getGradientBackground = (index: number): string => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)'
  ];
  return gradients[index % gradients.length];
};

// Main Projects component
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation styles
  const containerStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  };

  return (
    <section id="projects" style={{ 
      backgroundColor: "#020817", 
      padding: "4rem 0", 
      position: "relative"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 1.5rem"
      }}>
        <div style={{ 
          textAlign: "center", 
          marginBottom: "3rem"
        }}>
          <h2 style={{ 
            fontSize: "2rem", 
            fontWeight: "700", 
            color: "white", 
            marginBottom: "0.75rem"
          }}>
            Featured Projects
          </h2>
          <div style={{ 
            width: "6rem", 
            height: "0.25rem", 
            backgroundColor: "#3B82F6", 
            margin: "0 auto",
            borderRadius: "9999px"
          }}></div>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
          ...containerStyle
        }}>
          {PROJECTS.map((project, idx) => (
            <div key={project.id} style={{
              backgroundColor: "#0f172a",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(30, 41, 59, 0.5)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.borderColor = "rgba(30, 41, 59, 0.5)";
            }}
            >
              {/* Project Header/Image Section */}
              <div style={{ 
                height: "180px", 
                width: "100%",
                background: getGradientBackground(idx),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Project Title Overlay */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2
                }}>
                  <h3 style={{
                    color: "white",
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                    padding: "0 1rem",
                    textAlign: "center"
                  }}>
                    {project.title}
                  </h3>
                </div>

                {/* Visual Elements */}
                <div style={{
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  top: "-100px",
                  left: "-100px",
                  zIndex: 1
                }}></div>
                <div style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  bottom: "-100px",
                  right: "-50px",
                  zIndex: 1
                }}></div>
              </div>
              
              {/* Project Content */}
              <div style={{ 
                padding: "1.5rem", 
                display: "flex", 
                flexDirection: "column", 
                flexGrow: 1 
              }}>
                <p style={{ 
                  color: "#94a3b8", 
                  fontSize: "0.875rem", 
                  marginBottom: "1.5rem", 
                  lineHeight: "1.5" 
                }}>
                  {project.description}
                </p>
                
                {/* Tags */}
                <div style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  margin: "0 -0.25rem 1.5rem", 
                  marginTop: "auto" 
                }}>
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                
                {/* Links */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "flex-end",
                  marginTop: "auto" 
                }}>
                  <ProjectLink 
                    href={project.demoLink} 
                    label="Live Demo" 
                    icon={
                      <svg style={{ width: "1rem", height: "1rem" }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    } 
                  />
                  
                  <ProjectLink 
                    href={project.codeLink} 
                    label="Source" 
                    icon={
                      <svg style={{ width: "1rem", height: "1rem" }} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    } 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 