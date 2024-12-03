import Link from 'next/link';

const Hero = () => (
  <section
    className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
    style={{
      backgroundImage: 'url("/background-video.gif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 text-center max-w-6xl px-4">
      <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
        The Premier Artificial Turf Installer for the Lowcountry
      </h1>
      <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
        Residential turf, commercial turf, sports fields, pet turf, putting greens, playground solutions & more.
      </p>
      <Link href="/contact">
        <button className="bg-yellow-400 text-black px-8 py-4 rounded-sm text-xl tracking-tight font-bold hover:bg-yellow-400 transition-colors">
          Get a free quote!
        </button>
      </Link>
    </div>
  </section>
);

export default Hero;