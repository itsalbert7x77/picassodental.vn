import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/strapi';

const defaultServices = [
  { title: 'Porcelain Crowns', slug: 'porcelain-crowns', icon: '👑' },
  { title: 'Dental Bridges', slug: 'dental-bridges', icon: '🦷' },
  { title: 'Porcelain Veneers', slug: 'porcelain-veneers', icon: '✨' },
  { title: 'Dental Implants', slug: 'dental-implants', icon: '🔩' },
  { title: 'All-on-4 Implants', slug: 'all-on-4-dental-implants', icon: '💎' },
  { title: 'Invisalign', slug: 'invisalign', icon: '😁' },
  { title: 'Root Canal Treatment', slug: 'root-canal-treatment', icon: '🏥' },
  { title: 'Teeth Whitening', slug: 'zoom-laser-teeth-whitening', icon: '⚡' },
  { title: 'Smile Makeover', slug: 'smile-makeover', icon: '🌟' },
];

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: any[];
}

export default function ServicesSection({
  title = 'Our Services',
  subtitle = 'We offer a comprehensive range of dental treatments using the latest technology and highest quality materials.',
  services,
}: ServicesSectionProps) {
  const displayServices = services || defaultServices;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service: any) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group p-8 border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[40px] mb-4">
                {service.icon || '🦷'}
              </div>
              <h3 className="text-[20px] font-bold text-black mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-[15px] text-text">
                {service.shortDescription || 'Learn more about our professional dental services.'}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/dental-services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
