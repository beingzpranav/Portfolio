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
      <main className="relative">
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