import React, { useRef } from 'react'
import Home from "./Home.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Form from "./Form.jsx";

const Front = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const formRef = useRef(null);

  // Array of refs and components for easy navigation
  const sections = [
    { ref: homeRef, Component: Home },
    { ref: aboutRef, Component: About },
    { ref: projectRef, Component: Project },
    { ref: formRef, Component: Form }
  ];

  // Navigation handlers
  const scrollToSection = (index) => {
    if (sections[index] && sections[index].ref.current) {
      sections[index].ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='front-container'>
      {sections.map((section, idx) => {
        const { Component, ref } = section;
        {
          if (Component === Home) {
            return (
            <div ref={ref} key={idx}>
              <Component
                onNext={idx < sections.length - 1 ? () => scrollToSection(idx + 1) : undefined}
                onPrev={idx > 0 ? () => scrollToSection(idx - 1) : undefined}
                onProject={()=>scrollToSection(2)}
                onAbout={()=>scrollToSection(1)}
                onContact={()=>scrollToSection(3)}
              />
            </div>
            );
          }
          else {
            return (
              <div ref={ref} key={idx}>
                <Component
                  onNext={idx < sections.length - 1 ? () => scrollToSection(idx + 1) : undefined}
                  onPrev={idx > 0 ? () => scrollToSection(idx - 1) : undefined}
                />
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default Front