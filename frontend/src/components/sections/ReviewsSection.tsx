'use client';

import { FaStar, FaGoogle } from 'react-icons/fa';

const defaultReviews = [
  {
    patientName: 'John D.',
    country: 'Australia',
    rating: 5,
    content: 'Absolutely amazing experience at Picasso Dental. The team was professional, the facility was spotless, and the results exceeded my expectations. Highly recommend!',
    treatmentType: 'Porcelain Veneers',
  },
  {
    patientName: 'Marie L.',
    country: 'France',
    rating: 5,
    content: 'I came to Picasso for All-on-4 implants and the entire process was seamless. Dr. Emily and her team are world-class professionals.',
    treatmentType: 'All-on-4 Implants',
  },
  {
    patientName: 'Robert K.',
    country: 'USA',
    rating: 5,
    content: 'Best dental experience I have ever had. The clinic is modern, the staff speaks excellent English, and the prices are very reasonable.',
    treatmentType: 'Dental Implants',
  },
  {
    patientName: 'Sarah M.',
    country: 'UK',
    rating: 5,
    content: 'I traveled to Vietnam specifically for dental work and chose Picasso. The quality of care is on par with the best clinics in London.',
    treatmentType: 'Porcelain Crowns',
  },
];

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews?: any[];
}

export default function ReviewsSection({
  title = 'Patient Reviews',
  subtitle = 'See what our patients say about their experience at Picasso Dental Clinic.',
  reviews,
}: ReviewsSectionProps) {
  const displayReviews = reviews || defaultReviews;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-4">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4 mb-8">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-[18px] font-bold text-black">4.9/5</span>
            <span className="text-text text-[15px]">based on Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayReviews.map((review: any, i: number) => (
            <div key={i} className="p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-bold text-black text-[16px]">{review.patientName}</p>
                  <p className="text-[13px] text-text">{review.country}</p>
                </div>
                <FaGoogle className="text-[#4285F4] text-xl" />
              </div>
              <div className="flex text-primary mb-3">
                {[...Array(review.rating || 5)].map((_, j) => (
                  <FaStar key={j} className="text-[14px]" />
                ))}
              </div>
              <p className="text-[15px] text-text leading-relaxed">{review.content}</p>
              {review.treatmentType && (
                <p className="mt-3 text-[13px] text-primary font-medium">
                  Treatment: {review.treatmentType}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/reviews" className="btn-outline">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
