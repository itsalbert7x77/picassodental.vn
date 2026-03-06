import { getServices } from '@/lib/strapi';
import ServicesSection from '@/components/sections/ServicesSection';

export const metadata = {
  title: 'Dental Services',
  description: 'Explore our comprehensive range of dental services at Picasso Dental Clinic.',
};

export default async function DentalServicesPage() {
  let services: any[] = [];

  try {
    const data = await getServices();
    services = data.data || [];
  } catch {
    // Strapi not running
  }

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Dental Services
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            Comprehensive dental care with international standards
          </p>
        </div>
      </section>
      <ServicesSection
        services={services.length > 0 ? services : undefined}
        title="All Services"
        subtitle="From routine checkups to complex implant procedures, we offer the full range of dental treatments."
      />
    </>
  );
}
