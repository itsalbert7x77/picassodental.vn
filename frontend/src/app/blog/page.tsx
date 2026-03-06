import Link from 'next/link';
import { getArticles } from '@/lib/strapi';
import { getStrapiMediaUrl } from '@/lib/strapi';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest dental insights, tips, and news from Picasso Dental Clinic.',
};

export default async function BlogPage() {
  let articles: any[] = [];

  try {
    const data = await getArticles({ pagination: { pageSize: 50 } });
    articles = data.data || [];
  } catch {
    // Strapi not running - show defaults
  }

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Blog
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            Dental insights, tips, and news from our team
          </p>
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
                    {article.category && (
                      <span className="text-[12px] text-primary font-semibold uppercase">
                        {article.category.name}
                      </span>
                    )}
                    <h2 className="text-[17px] font-bold text-black mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-[14px] text-text line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-text py-20 text-[18px]">
              No articles yet. Start Strapi and migrate content to see articles here.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
