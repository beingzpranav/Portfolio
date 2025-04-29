import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCodeSnippet from './components/AnimatedCodeSnippet';
import PageWrapper from './components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <AnimatedCodeSnippet />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PageWrapper>
  );
} 