'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const services = [
  { name: 'Porcelain Crowns', href: '/porcelain-crowns' },
  { name: 'Dental Bridges', href: '/dental-bridges' },
  { name: 'Porcelain Veneers', href: '/porcelain-veneers' },
  { name: 'Dental Implants', href: '/dental-implants' },
  { name: 'All-on-4 Dental Implants', href: '/all-on-4-dental-implants' },
  { name: 'Invisalign', href: '/invisalign' },
  { name: 'Metal Braces', href: '/metal-braces' },
  { name: 'Ceramic Braces', href: '/ceramic-braces' },
  { name: 'Root Canal Treatment', href: '/root-canal-treatment' },
  { name: 'Wisdom Tooth Extraction', href: '/wisdom-tooth-extraction' },
  { name: 'Zoom Laser Teeth Whitening', href: '/zoom-laser-teeth-whitening' },
  { name: 'Periodontal Treatment', href: '/periodontal-treatment' },
  { name: 'Composite Bonding', href: '/composite-bonding' },
  { name: 'Composite Filling', href: '/composite-filling' },
  { name: 'Smile Makeover', href: '/smile-makeover' },
  { name: 'Gummy Smile Surgery', href: '/gummy-smile-surgery' },
  { name: 'Routine Checkup and Cleaning', href: '/routine-checkup-and-cleaning' },
];

const aboutLinks = [
  { name: 'About Us', href: '/about-picasso-dental-clinic' },
  { name: 'Founder Story', href: '/founder-story' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Our Patients', href: '/our-patients' },
  { name: 'Hanoi', href: '/hanoi' },
  { name: 'Da Nang', href: '/danang' },
  { name: 'Ho Chi Minh City', href: '/hcmc' },
];

const navItems = [
  { name: 'About Us', href: '/about-picasso-dental-clinic', submenu: aboutLinks },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Dental Costs', href: '/dental-costs' },
  { name: 'Dental Services', href: '/dental-services', submenu: services },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-[22px] font-bold text-accent tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
              PICASSO DENTAL CLINIC
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[16px] text-[#333] hover:text-primary transition-colors py-6"
                >
                  {item.name}
                  {item.submenu && <FaChevronDown className="text-[10px]" />}
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg min-w-[280px] py-2 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-2 text-[15px] text-[#333] hover:bg-beige-light hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/book-appointment" className="hidden lg:inline-block btn-primary text-[15px]">
            Book an Appointment
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-accent text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="py-4 px-5">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block py-3 text-[16px] text-[#333]"
                    onClick={() => !item.submenu && setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() =>
                        setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                      }
                      className="p-3"
                    >
                      <FaChevronDown
                        className={`text-[10px] transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && activeSubmenu === item.name && (
                  <div className="pl-4 pb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block py-2 text-[14px] text-text"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/book-appointment"
              className="btn-primary block text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
