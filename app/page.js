import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Contact from '../components/Contact';
import PastWork from '@/components/PastWork';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <PastWork />
      <FAQ />
      <About />
      <Contact />
    </div>
  );
}