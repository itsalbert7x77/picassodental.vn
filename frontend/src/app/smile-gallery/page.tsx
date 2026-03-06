import { getGalleryItems, getStrapiMediaUrl } from '@/lib/strapi';

export const metadata = {
  title: 'Smile Gallery',
  description: 'See before and after dental transformations at Picasso Dental Clinic.',
};

export default async function SmileGalleryPage() {
  let items: any[] = [];

  try {
    const data = await getGalleryItems();
    items = data.data || [];
  } catch {}

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Smile Gallery
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            Before &amp; After transformations by our dental team
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <div key={item.id} className="border border-gray-100 p-4">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-[12px] text-text mb-1 text-center">Before</p>
                      <div className="h-[150px] bg-gray-200">
                        {item.beforeImage && (
                          <img
                            src={getStrapiMediaUrl(item.beforeImage.url)}
                            alt="Before"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-[12px] text-text mb-1 text-center">After</p>
                      <div className="h-[150px] bg-gray-200">
                        {item.afterImage && (
                          <img
                            src={getStrapiMediaUrl(item.afterImage.url)}
                            alt="After"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {item.title && <p className="font-bold text-black text-[15px]">{item.title}</p>}
                  {item.treatmentType && (
                    <p className="text-primary text-[13px]">{item.treatmentType}</p>
                  )}
                  {item.description && (
                    <p className="text-text text-[13px] mt-1">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-text py-20 text-[18px]">
              Gallery items will appear here once content is migrated.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
