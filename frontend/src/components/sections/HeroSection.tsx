import Link from 'next/link';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title = 'Painting Smiles, Crafting Happiness Since 2013',
  subtitle = 'Premium dental care in Vietnam with international standards. Our experienced team of dentists is dedicated to giving you the smile you deserve.',
  ctaText = 'Book an Appointment',
  ctaLink = '/book-appointment',
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center bg-accent bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="absolute inset-0 bg-accent/70" />
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-[650px]">
          <h1
            className="text-[48px] lg:text-[58px] leading-[1.15] text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h1>
          <p className="text-[18px] text-white/90 mb-8 leading-relaxed">{subtitle}</p>
          <Link href={ctaLink} className="btn-primary bg-primary border-primary text-[17px]">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
