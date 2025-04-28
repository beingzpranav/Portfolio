"use client";

import React, { useState, useEffect } from 'react';
import '../../styles/pageWrapper.css';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      {loading && (
        <div className="loader-container fade-out" />
      )}
      <div className={`content ${loading ? 'hidden' : 'visible'}`}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper; 