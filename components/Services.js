import Image from 'next/image';
import Link from 'next/link';

const Services = () => (
  <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {[
        { title: 'Residential', description: "Create the perfect green space for your home with our residential turf installation services.", href: '/residential' },
        { title: 'Commercial', description: "Our commercial turf solutions are perfectly tailored for businesses, schools, recreational areas, and more.", href: '/commercial' },
        { title: 'Putting Greens', description: "Whether you're a professional golfer or a hobbyist, having a personal putting green can make a difference.", href: '/golf'}
      ].map((service, index) => (
        <Link href={service.href} key={index} className="w-full lg:w-auto">
          <div className="text-center bg-[#fff5e1] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center">
              <Image 
                src={`/service-${index + 1}.png`}
                alt={service.title}
                width={300}
                height={225}
                className="mb-4 rounded object-cover"
              />
            </div>
            <h3 className="font-bold text-xl">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
    <div className="text-center mt-8">
      <button className="bg-yellow-500 text-black p-2 rounded">See our past work</button>
    </div>
  </section>
);

export default Services;