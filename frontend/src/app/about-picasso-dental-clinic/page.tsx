import Link from 'next/link';
import TeamSection from '@/components/sections/TeamSection';

export const metadata = {
  title: 'About Picasso Dental Clinic',
  description: 'Learn about Picasso Dental Clinic, our mission, values, and commitment to dental excellence in Vietnam.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            About Picasso Dental Clinic
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="rich-text">
            <h2>Our Mission</h2>
            <p>
              At Picasso Dental Clinic, our mission is to provide world-class dental care that
              combines clinical excellence with genuine compassion. Since 2013, we have been
              transforming smiles and building lasting relationships with patients from around the
              world.
            </p>

            <h2>Why Choose Picasso?</h2>
            <ul>
              <li>International standard of care with Vietnamese hospitality</li>
              <li>State-of-the-art facilities and equipment</li>
              <li>Experienced team of specialists trained internationally</li>
              <li>Transparent pricing — up to 70% less than Western countries</li>
              <li>Multilingual staff (English, Korean, Japanese, French)</li>
              <li>Convenient locations in Hanoi, Da Nang, and Ho Chi Minh City</li>
            </ul>

            <h2>Our Locations</h2>
            <p>
              We operate multiple clinics across Vietnam&apos;s major cities, making it convenient
              for both local and international patients to access quality dental care.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Link href="/founder-story" className="btn-primary">
              Read Our Founder&apos;s Story
            </Link>
            <Link href="/our-team" className="btn-outline">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
}
