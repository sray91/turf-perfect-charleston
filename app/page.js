import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Contact from '../components/Contact';
import PastWorkHero from '@/components/PastWorkHero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="services">
        <Services />
      </section>
      <PastWorkHero />
      <section id="about">
        <About />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Contact />
    </div>
  );
}