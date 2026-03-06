import Link from 'next/link';

interface AboutSectionProps {
  title?: string;
  content?: string;
  image?: string;
}

export default function AboutSection({
  title = 'About Picasso Dental Clinic',
  content = 'Founded in 2013 by Dr. Emily Nguyen, Picasso Dental Clinic has grown into one of Vietnam\'s most trusted dental practices for international patients. With locations in Hanoi, Da Nang, and Ho Chi Minh City, we combine world-class dental expertise with Vietnamese hospitality.',
  image,
}: AboutSectionProps) {
  return (
    <section className="section-padding bg-beige/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{title}</h2>
            <p className="text-[17px] text-text leading-relaxed mb-6">{content}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about-picasso-dental-clinic" className="btn-primary">
                Learn More
              </Link>
              <Link href="/founder-story" className="btn-outline">
                Our Story
              </Link>
            </div>
          </div>
          <div className="bg-gray-200 h-[400px] flex items-center justify-center">
            {image ? (
              <img src={image} alt="About Picasso Dental" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-gray-400">
                <div className="text-[80px]">🏥</div>
                <p className="text-[14px] mt-2">Clinic Image</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
