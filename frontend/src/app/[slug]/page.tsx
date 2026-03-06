import { notFound } from 'next/navigation';
import { getArticleBySlug, getPageBySlug, getServiceBySlug, getStrapiMediaUrl } from '@/lib/strapi';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // Try to find content in order: service -> page -> article
  let content: any = null;
  let type = '';

  try {
    content = await getServiceBySlug(slug);
    if (content) type = 'service';
  } catch {}

  if (!content) {
    try {
      content = await getPageBySlug(slug);
      if (content) type = 'page';
    } catch {}
  }

  if (!content) {
    try {
      content = await getArticleBySlug(slug);
      if (content) type = 'article';
    } catch {}
  }

  // If nothing found from Strapi, show a placeholder page
  if (!content) {
    return (
      <>
        <section className="bg-accent py-16">
          <div className="container-custom">
            <h1 className="text-[42px] text-white capitalize" style={{ fontFamily: 'var(--font-heading)' }}>
              {slug.replace(/-/g, ' ')}
            </h1>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-custom max-w-[900px]">
            <p className="text-text text-[17px] text-center py-10">
              This page will be populated once content is migrated from WordPress to Strapi.
            </p>
            <div className="text-center">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const title = content.title || content.name || slug.replace(/-/g, ' ');
  const featuredImage = content.featuredImage || content.icon;

  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-accent py-16 bg-cover bg-center relative"
        style={
          featuredImage
            ? { backgroundImage: `url(${getStrapiMediaUrl(featuredImage.url)})` }
            : {}
        }
      >
        {featuredImage && <div className="absolute inset-0 bg-accent/80" />}
        <div className="container-custom relative z-10">
          {type === 'article' && content.category && (
            <Link
              href={`/category/${content.category.slug}`}
              className="text-primary text-[14px] font-semibold uppercase mb-2 inline-block"
            >
              {content.category.name}
            </Link>
          )}
          <h1 className="text-[38px] lg:text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </h1>
          {content.excerpt && (
            <p className="text-white/80 text-[18px] mt-3 max-w-[700px]">{content.excerpt}</p>
          )}
          {type === 'article' && content.publishDate && (
            <p className="text-white/60 text-[14px] mt-2">
              {new Date(content.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-[900px]">
          {/* Price info for services */}
          {type === 'service' && (content.price || content.priceRange) && (
            <div className="bg-beige/30 p-6 mb-8 flex items-center justify-between">
              <div>
                <p className="text-[14px] text-text">Starting from</p>
                <p className="text-[28px] font-bold text-primary">
                  {content.price || content.priceRange}
                </p>
              </div>
              <Link href="/book-appointment" className="btn-primary">
                Book Now
              </Link>
            </div>
          )}

          {/* Rich text content */}
          {content.content && (
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          )}

          {/* FAQs for services */}
          {type === 'service' && content.faqs && content.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="section-title text-[32px]">Frequently Asked Questions</h2>
              <div className="space-y-4 mt-6">
                {content.faqs.map((faq: any) => (
                  <details key={faq.id} className="border border-gray-200 p-5 group">
                    <summary className="font-bold text-black text-[17px] cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-primary text-[20px] group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div
                      className="mt-3 text-text text-[15px] rich-text"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/book-appointment" className="btn-primary">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
