import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FAQ />
      <About />
      <Contact />
    </div>
  );
}