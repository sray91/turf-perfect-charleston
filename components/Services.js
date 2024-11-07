import Image from 'next/image';

const Services = () => (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <div className="flex justify-around">
        {[
          { title: 'Residential', description: 'Create the perfect green space for your home with our residential turf installation services.' },
          { title: 'Commercial', description: 'Our commercial turf solutions are perfectly tailored for businesses, schools, recreational areas, and more.' },
          { title: 'Putting Greens', description: 'Whether you’re a professional golfer or a hobbyist, having a personal putting green can make a difference.' }
        ].map((service, index) => (
          <div key={index} className="text-center">
            <Image 
              src={`/service-${index + 1}.jpg`}
              alt={service.title}
              width={400}
              height={300}
              className="mb-4 rounded shadow-lg"
            />
            <h3 className="font-bold text-xl">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-black p-2 rounded">See our past work</button>
      </div>
    </section>
  );
  
  export default Services;