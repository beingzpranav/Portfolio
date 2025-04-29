"use client";

import React, { useEffect, useRef } from 'react';

interface AnimatedCircuitBackgroundProps {
  opacity?: number;
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

const AnimatedCircuitBackground: React.FC<AnimatedCircuitBackgroundProps> = ({
  opacity = 0.1,
  color = 'primary',
  speed = 'medium',
}) => {
  const svgRef = useRef<HTMLObjectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get animation duration multiplier based on speed
  const getSpeedMultiplier = (): number => {
    return {
      slow: 1.5,
      medium: 1,
      fast: 0.6
    }[speed];
  };
  
  useEffect(() => {
    // Simple approach that doesn't rely on Web Animation API which might be causing issues
    const checkSvgLoaded = () => {
      const svgDoc = svgRef.current?.contentDocument;
      if (!svgDoc) {
        // If SVG not loaded yet, retry after a short delay
        setTimeout(checkSvgLoaded, 100);
        return;
      }
      
      // Add CSS animations instead of using the Web Animation API
      const styleElement = document.createElement('style');
      const speedMultiplier = getSpeedMultiplier();
      
      styleElement.textContent = `
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        
        @keyframes pulsate {
          0% { opacity: 0.2; r: 2; }
          50% { opacity: 0.8; r: 4; }
          100% { opacity: 0.2; r: 2; }
        }
        
        @keyframes glowConnector {
          0% { opacity: 0.2; stroke-width: 1; }
          50% { opacity: 0.8; stroke-width: 2; }
          100% { opacity: 0.2; stroke-width: 1; }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-15px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.6; }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        path[stroke] {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine ${10 * speedMultiplier}s ease-in-out forwards;
        }
        
        circle[fill] {
          animation: pulsate ${3 * speedMultiplier}s ease-in-out infinite alternate;
        }
        
        #connectors circle {
          animation: glowConnector ${4 * speedMultiplier}s ease-in-out infinite;
        }
        
        [id^="chip-"] {
          animation: fadeInOut ${5 * speedMultiplier}s ease-in-out infinite;
        }
        
        #grid-pattern {
          animation: fadeInOut ${7 * speedMultiplier}s ease-in-out infinite alternate;
        }
        
        .node-group {
          animation: floatUp ${6 * speedMultiplier}s ease-in-out infinite;
          animation-delay: calc(var(--delay, 0) * 1s);
        }
        
        .connector-group {
          animation: rotate ${15 * speedMultiplier}s linear infinite;
          transform-origin: center;
          animation-delay: calc(var(--delay, 0) * 1s);
        }
      `;
      
      svgDoc.head.appendChild(styleElement);
      
      // Add custom attributes to enhance animations
      const nodeGroups = svgDoc.querySelectorAll('[id^="node-"]');
      nodeGroups.forEach((group, index) => {
        group.classList.add('node-group');
        group.setAttribute('style', `--delay: ${index * 0.5}`);
      });
      
      const connectorGroups = svgDoc.querySelectorAll('[id^="connector-"]');
      connectorGroups.forEach((group, index) => {
        group.classList.add('connector-group');
        group.setAttribute('style', `--delay: ${index * 0.3}`);
      });
    };
    
    // Start checking for SVG load
    checkSvgLoaded();
    
    return () => {
      // Cleanup if needed
    };
  }, [speed]);

  // Fade in animation handled with CSS
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = '0';
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = opacity.toString();
          containerRef.current.style.transition = 'opacity 1s ease';
        }
      }, 100);
    }
  }, [opacity]);
  
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <div
        ref={containerRef}
        className="absolute inset-0"
      >
        <object
          ref={svgRef}
          data="/svg/circuit-board.svg"
          type="image/svg+xml"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default AnimatedCircuitBackground; 