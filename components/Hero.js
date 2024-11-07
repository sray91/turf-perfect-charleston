const Hero = () => (
  <section
    className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
    style={{
      backgroundImage: 'url("/background-video.gif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Optional overlay for text readability */}
    <div className="relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        The Premier Artificial Turf Installer for the Lowcountry
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Residential turf, commercial turf, sports fields, pet turf, putting greens, playground solutions & more.
      </p>
      <button className="mt-4 bg-yellow-500 text-black py-2 px-6 rounded font-bold">
        Get a free quote!
      </button>
    </div>
  </section>
);

export default Hero;