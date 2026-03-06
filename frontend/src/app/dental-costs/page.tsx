import Link from 'next/link';

export const metadata = {
  title: 'Dental Costs',
  description: 'Transparent pricing for dental treatments at Picasso Dental Clinic Vietnam.',
};

const pricingData = [
  { service: 'Routine Checkup & Cleaning', price: 'From $30' },
  { service: 'Composite Filling', price: 'From $25' },
  { service: 'Root Canal Treatment', price: 'From $80' },
  { service: 'Wisdom Tooth Extraction', price: 'From $50' },
  { service: 'Porcelain Crown (Zirconia)', price: 'From $150' },
  { service: 'Porcelain Crown (E.max)', price: 'From $200' },
  { service: 'Dental Bridge (per unit)', price: 'From $150' },
  { service: 'Porcelain Veneers', price: 'From $200' },
  { service: 'Dental Implant (Korean)', price: 'From $600' },
  { service: 'Dental Implant (Straumann)', price: 'From $1,000' },
  { service: 'All-on-4 Dental Implants', price: 'From $4,500' },
  { service: 'All-on-6 Dental Implants', price: 'From $6,000' },
  { service: 'Invisalign', price: 'From $2,500' },
  { service: 'Metal Braces', price: 'From $800' },
  { service: 'Ceramic Braces', price: 'From $1,200' },
  { service: 'Zoom Laser Teeth Whitening', price: 'From $150' },
  { service: 'Composite Bonding', price: 'From $50' },
  { service: 'Gummy Smile Surgery', price: 'From $200' },
  { service: 'Periodontal Treatment', price: 'From $80' },
  { service: 'Smile Makeover', price: 'Custom Quote' },
];

export default function DentalCostsPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Dental Costs
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            Transparent, affordable pricing for international patients
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-[900px]">
          <p className="text-[17px] text-text mb-8 text-center">
            At Picasso Dental Clinic, we believe in transparent pricing. Below are our standard rates
            for dental treatments. Final pricing depends on individual cases and may vary.
          </p>

          <div className="border border-gray-200">
            <div className="grid grid-cols-2 bg-accent text-white font-bold text-[16px]">
              <div className="p-4 border-r border-accent/50">Treatment</div>
              <div className="p-4">Price (USD)</div>
            </div>
            {pricingData.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 text-[15px] ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <div className="p-4 border-r border-gray-100 text-black font-medium">
                  {item.service}
                </div>
                <div className="p-4 text-primary font-semibold">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-text text-[15px] mb-4">
              Want a personalized quote? Contact us for a free consultation.
            </p>
            <Link href="/book-appointment" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
