import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const locations = [
  {
    name: 'Hanoi Branch 1',
    address: '16 Chau Long Street, Ba Dinh, Hanoi',
    rating: '4.9',
  },
  {
    name: 'Hanoi Branch 2',
    address: 'Hanoi, Vietnam',
    rating: '4.9',
  },
  {
    name: 'Da Nang Branch',
    address: 'Da Nang, Vietnam',
    rating: '4.9',
  },
  {
    name: 'Ho Chi Minh City',
    address: 'Ho Chi Minh City, Vietnam',
    rating: '4.9',
  },
];

const serviceLinks = [
  { name: 'Porcelain Crowns', href: '/porcelain-crowns' },
  { name: 'Dental Bridges', href: '/dental-bridges' },
  { name: 'Porcelain Veneers', href: '/porcelain-veneers' },
  { name: 'Dental Implants', href: '/dental-implants' },
  { name: 'All-on-4 Implants', href: '/all-on-4-dental-implants' },
  { name: 'Invisalign', href: '/invisalign' },
  { name: 'Root Canal', href: '/root-canal-treatment' },
  { name: 'Teeth Whitening', href: '/zoom-laser-teeth-whitening' },
];

const quickLinks = [
  { name: 'About Us', href: '/about-picasso-dental-clinic' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'Dental Costs', href: '/dental-costs' },
  { name: 'Book Appointment', href: '/book-appointment' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-[#F0E5DF] bg-opacity-30">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <h3
              className="text-[22px] text-accent mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              PICASSO DENTAL CLINIC
            </h3>
            <p className="text-[15px] text-text mb-6">
              Painting Smiles, Crafting Happiness Since 2013.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-white flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-[18px] font-bold text-black mb-4">Our Locations</h4>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="text-[14px]">
                  <p className="font-semibold text-black">{loc.name}</p>
                  <p className="text-text flex items-start gap-1 mt-1">
                    <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                    {loc.address}
                  </p>
                  <p className="text-primary flex items-center gap-1 mt-1">
                    <FaStar /> {loc.rating}/5 Google Reviews
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[18px] font-bold text-black mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] text-text hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="text-[18px] font-bold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] text-text hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-[14px]">
              <p className="flex items-center gap-2 text-text">
                <FaEnvelope className="text-primary" /> cs@picassodental.vn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container-custom py-5">
          <p className="text-center text-[14px] text-text">
            Picasso Dental Clinic | All rights reserved &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
