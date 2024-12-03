import React from 'react'
import CloudinaryImage from './CloudinaryImage';

const gallery = [
  { title: "image 1", href: "", alt: "turf project", image: "v1733247775/IMG_146_wnl0p3.jpg"},
  { title: "image 2", href: "", alt: "turf project", image: "v1733247771/IMG_066_zsech3.jpg"},
  { title: "image 3", href: "", alt: "turf project", image: "v1733247775/IMG_186_zgzueg.jpg"},
];

const PastWork = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Past Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gallery.map((item, index) => (
          <div 
            key={index} 
            className="transform transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <CloudinaryImage
                src={item.image}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PastWork