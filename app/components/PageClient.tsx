"use client";

import React from 'react';
import PageWrapper from './PageWrapper';
 
export default function PageClient({ children }: { children: React.ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
} 