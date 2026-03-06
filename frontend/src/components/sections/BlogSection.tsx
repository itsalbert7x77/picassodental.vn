import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/strapi';

const defaultArticles = [
  {
    title: 'The Ultimate Guide to Dental Implants in Vietnam',
    slug: 'the-ultimate-guide-to-dental-implants-in-vietnam',
    excerpt: 'Everything you need to know about getting dental implants in Vietnam, from costs to recovery.',
    category: 'Dental Implants',
  },
  {
    title: 'Is It Safe to Get Implants Done in Vietnam?',
    slug: 'is-it-safe-to-get-implant-done-in-vietnam',
    excerpt: 'Learn about safety standards, clinic certifications, and what to look for in a Vietnamese dental clinic.',
    category: 'Dental Tourism',
  },
  {
    title: 'How to Find a Trustworthy Dental Clinic in Vietnam',
    slug: 'how-to-find-a-trustworthy-dental-clinic-in-vietnam',
    excerpt: 'Tips for international patients on choosing the right dental clinic for their needs.',
    category: 'Dental Tourism Vietnam',
  },
];

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  articles?: any[];
}

export default function BlogSection({
  title = 'Latest Articles',
  subtitle = 'Stay informed with our latest dental insights and tips.',
  articles,
}: BlogSectionProps) {
  const displayArticles = articles || defaultArticles;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayArticles.slice(0, 3).map((article: any, i: number) => (
            <Link
              key={i}
              href={`/${article.slug}`}
              className="group border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="h-[220px] bg-gray-200 overflow-hidden">
                {article.featuredImage ? (
                  <img
                    src={getStrapiMediaUrl(article.featuredImage?.url)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[50px] text-gray-300">
                    📝
                  </div>
                )}
              </div>
              <div className="p-6">
                {article.category && (
                  <span className="text-[12px] text-primary font-semibold uppercase tracking-wider">
                    {typeof article.category === 'string' ? article.category : article.category?.name}
                  </span>
                )}
                <h3 className="text-[18px] font-bold text-black mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[14px] text-text line-clamp-3">
                  {article.excerpt || ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog" className="btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
