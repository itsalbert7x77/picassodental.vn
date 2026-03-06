import Link from 'next/link';
import { getCategoryBySlug, getStrapiMediaUrl } from '@/lib/strapi';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  let category: any = null;

  try {
    category = await getCategoryBySlug(slug);
  } catch {}

  const displayName = category?.name || slug.replace(/-/g, ' ');
  const articles = category?.articles || [];

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white capitalize" style={{ fontFamily: 'var(--font-heading)' }}>
            {displayName}
          </h1>
          {category?.description && (
            <p className="text-white/80 text-[18px] mt-2">{category.description}</p>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <Link
                  key={article.id}
                  href={`/${article.slug}`}
                  className="group border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="h-[200px] bg-gray-200 overflow-hidden">
                    {article.featuredImage ? (
                      <img
                        src={getStrapiMediaUrl(article.featuredImage?.url)}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[40px] text-gray-300">
                        📝
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="text-[17px] font-bold text-black group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-[14px] text-text mt-2 line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-text py-20 text-[18px]">
              No articles in this category yet. Content will appear after migration.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
