import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageClient from './components/PageClient';

export default function Home() {
  return (
    <PageClient>
      <main className="relative min-h-screen w-screen max-w-[100%] flex flex-col bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </PageClient>
  );
} 