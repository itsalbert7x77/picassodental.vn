import { getReviews } from '@/lib/strapi';
import ReviewsSection from '@/components/sections/ReviewsSection';

export const metadata = {
  title: 'Patient Reviews',
  description: 'Read reviews from our patients about their experience at Picasso Dental Clinic.',
};

export default async function ReviewsPage() {
  let reviews: any[] = [];

  try {
    const data = await getReviews({ pagination: { pageSize: 100 } });
    reviews = data.data || [];
  } catch {
    // Strapi not running
  }

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Patient Reviews
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            What our patients say about Picasso Dental Clinic
          </p>
        </div>
      </section>
      <ReviewsSection reviews={reviews.length > 0 ? reviews : undefined} />
    </>
  );
}
