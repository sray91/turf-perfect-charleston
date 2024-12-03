import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-100 py-8 text-center">
    <div className="mb-6">
      <h2 className="font-bold text-lg">Get In Touch</h2>
      <p>Email: <a href="mailto:turfperfectcharleston@gmail.com" className="text-green-800">turfperfectcharleston@gmail.com</a></p>
      <p>Phone: (843) 994-6030</p>
      <p>Address: 4900 O&apos;Hear Avenue</p>
      <p>Mon – Sat 9:00am – 8:00pm</p>
      <p>Sunday – CLOSED</p>
    </div>
    <div className="mb-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-800">
        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M...Z" /> {/* Facebook icon SVG path */}
        </svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-800">
        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M...Z" /> {/* Instagram icon SVG path */}
        </svg>
      </a>
    </div>
    <div className="text-sm text-gray-600">
      © {new Date().getFullYear()} Turf Perfect Charleston. All rights reserved.
    </div>
  </footer>
);

export default Footer;
