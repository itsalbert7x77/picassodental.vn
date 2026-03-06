import Link from 'next/link';

export const metadata = {
  title: 'Founder Story',
  description: 'The story of Dr. Emily Nguyen and the founding of Picasso Dental Clinic.',
};

export default function FounderStoryPage() {
  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Founder Story
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-[80px]">👩‍⚕️</div>
                  <p className="text-[14px] mt-2">Dr. Emily Nguyen</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 rich-text">
              <h2>Dr. Emily Nguyen</h2>
              <p>
                Dr. Emily Nguyen founded Picasso Dental Clinic in 2013 with a simple vision: to make
                world-class dental care accessible to everyone, regardless of where they come from.
              </p>
              <p>
                After years of training and practice, Dr. Nguyen recognized that many international
                patients were seeking high-quality dental treatments at more accessible prices. She
                built Picasso Dental to bridge that gap — offering the same clinical excellence found
                in top Western clinics, combined with the warmth and hospitality that Vietnam is known for.
              </p>
              <p>
                Today, Picasso Dental Clinic operates multiple locations across Vietnam and has
                served thousands of patients from over 50 countries. Our 4.9-star Google rating
                reflects the dedication and passion of every team member.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/our-team" className="btn-primary">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
