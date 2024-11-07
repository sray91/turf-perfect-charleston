import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="bg-[#fff5e1] text-black p-4 flex justify-between items-center">
    <Image src={"/logo.png"} alt="logo" width="200" height="20"/>
    <ul className="flex space-x-4">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/services">SERVICES</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
        <li><Link href="/blog">BLOG</Link></li>
    </ul>
    <button className="bg-yellow-500 text-black p-2 rounded">Get a free quote!</button>
  </nav>
);

export default Navbar;