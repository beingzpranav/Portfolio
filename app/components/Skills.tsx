"use client";

import React from 'react';

// Component for tech icons with inline SVGs
const TechCard = ({ name, color, icon }: { name: string; color: string; icon: React.ReactNode }) => {
  return (
    <div className="text-center group">
      <div 
        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 bg-dark/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700 transition-all duration-300 hover:border-primary"
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
          e.currentTarget.style.boxShadow = `0 0 15px rgba(${color.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ') || '255, 255, 255'}, 0.3)`;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10">
          {icon}
        </div>
      </div>
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
};

// Code elements for animation
const codeElements = [
  { icon: '<>', position: { top: '15%', left: '8%' }, color: '#0ea5e9', delay: 0 },
  { icon: '{}', position: { top: '65%', right: '12%' }, color: '#22d3ee', delay: 1.5 },
  { icon: '()', position: { bottom: '10%', left: '20%' }, color: '#0ea5e9', delay: 0.7 },
  { icon: '//', position: { top: '25%', right: '15%' }, color: '#22d3ee', delay: 2.2 },
  { icon: '[]', position: { top: '45%', left: '15%' }, color: '#0ea5e9', delay: 3 },
  { icon: ';', position: { bottom: '30%', right: '25%' }, color: '#0ea5e9', delay: 1 },
  { icon: '/*', position: { top: '75%', left: '30%' }, color: '#22d3ee', delay: 2.5 }
];

const Skills = () => {
  return (
    <section id="skills" className="section relative overflow-hidden py-16 md:py-24">
      {/* Dynamic floating code elements with direct styling */}
      {codeElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-4xl md:text-6xl pointer-events-none font-mono"
          style={{
            ...element.position,
            zIndex: 0,
            color: `${element.color}10`,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.icon}
        </div>
      ))}
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-shadow">I got the experience.</h2>
          <h3 className="text-2xl md:text-3xl mb-6">Here is my toolbelt for success.</h3>
          <div className="w-24 h-1 bg-primary mx-auto" style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {/* HTML */}
          <TechCard 
            name="HTML" 
            color="#E34F26"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E34F26" className="w-full h-full">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.232-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
              </svg>
            }
          />

          {/* CSS */}
          <TechCard 
            name="CSS" 
            color="#1572B6"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1572B6" className="w-full h-full">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/>
              </svg>
            }
          />

          {/* JavaScript */}
          <TechCard 
            name="JavaScript" 
            color="#F7DF1E"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
            }
          />

          {/* TypeScript */}
          <TechCard 
            name="TypeScript" 
            color="#3178C6"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#3178C6" d="M0 12v12h24V0H0v12zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/>
              </svg>
            }
          />

          {/* React */}
          <TechCard 
            name="React" 
            color="#61DAFB"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
                <circle r="2.05" fill="#61DAFB"/>
                <g stroke="#61DAFB" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            }
          />

          {/* Next.js */}
          <TechCard 
            name="Next.js" 
            color="#000000"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                <path fill="white" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
              </svg>
            }
          />

          {/* TailwindCSS */}
          <TechCard 
            name="TailwindCSS" 
            color="#06B6D4"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#06B6D4" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
              </svg>
            }
          />

          {/* Additional technologies... */}
          <TechCard 
            name="Github" 
            color="#CC6699"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#CC6699" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            }
          />

          <TechCard 
            name="Node.js" 
            color="#339933"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
              </svg>
            }
          />
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-6 bg-secondary/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-primary/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Modern & responsive designs</li>
                <li>• Component-based architecture</li>
                <li>• Performance optimization</li>
                <li>• Accessibility compliance</li>
                <li>• Cross-browser compatibility</li>
              </ul>
            </div>
            
            <div 
              className="p-6 bg-secondary/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Design & UX</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Intuitive user interfaces</li>
                <li>• Mobile-first approach</li>
                <li>• UI/UX best practices</li>
                <li>• Wireframing & prototyping</li>
                <li>• Animation & micro-interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
            opacity: 0.2;
          }
        }
        
        .text-shadow {
          text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Skills; 