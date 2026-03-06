'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to confirm your appointment.');
  };

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Book an Appointment
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            Schedule your visit to Picasso Dental Clinic
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-[28px] font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Request an Appointment
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[15px] font-medium text-black mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 p-3 text-[15px] focus:border-primary focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[15px] font-medium text-black mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 p-3 text-[15px] focus:border-primary focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] font-medium text-black mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 p-3 text-[15px] focus:border-primary focus:outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-black mb-1">Preferred Location</label>
                  <select
                    className="w-full border border-gray-300 p-3 text-[15px] focus:border-primary focus:outline-none bg-white"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="">Select a location</option>
                    <option value="hanoi">Hanoi</option>
                    <option value="danang">Da Nang</option>
                    <option value="hcmc">Ho Chi Minh City</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-black mb-1">Service Interested In</label>
                  <select
                    className="w-full border border-gray-300 p-3 text-[15px] focus:border-primary focus:outline-none bg-white"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="crowns">Porcelain Crowns</option>
                    <option value="veneers">Porcelain Veneers</option>
                    <option value="implants">Dental Implants</option>
                    <option value="all-on-4">All-on-4 Implants</option>
                    <option value="invisalign">Invisalign</option>
                    <option value="braces">Braces</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="checkup">Routine Checkup</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-black mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 p-3 text-[15px] focus:border-primary focus:outline-none"
                    placeholder="Tell us about your dental needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-[28px] font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact Us Directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-beige/30">
                  <FaEnvelope className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-bold text-black">Email</p>
                    <a href="mailto:cs@picassodental.vn" className="text-text hover:text-primary">
                      cs@picassodental.vn
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-beige/30">
                  <FaWhatsapp className="text-[#25D366] text-xl mt-1" />
                  <div>
                    <p className="font-bold text-black">WhatsApp</p>
                    <p className="text-text">Contact us via WhatsApp for quick responses</p>
                  </div>
                </div>

                <h3 className="text-[20px] font-bold text-black mt-8">Our Locations</h3>
                {[
                  { name: 'Hanoi', address: '16 Chau Long Street, Ba Dinh, Hanoi' },
                  { name: 'Da Nang', address: 'Da Nang, Vietnam' },
                  { name: 'Ho Chi Minh City', address: 'Ho Chi Minh City, Vietnam' },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-start gap-4 p-5 border border-gray-100">
                    <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                    <div>
                      <p className="font-bold text-black">{loc.name}</p>
                      <p className="text-text text-[14px]">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
