import Image from 'next/image';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCodeSnippet from './components/AnimatedCodeSnippet';
import PageWrapper from './components/PageWrapper';
import AnimatedCircuitBackground from './components/AnimatedCircuitBackground';

export default function Home() {
  return (
    <PageWrapper>
      <AnimatedCircuitBackground opacity={0.05} color="primary" speed="medium" />
      <AnimatedCodeSnippet />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PageWrapper>
  );
} 