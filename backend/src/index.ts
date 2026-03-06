const SOURCE_URL = 'https://picassodental.vn';

const CATEGORY_DATA = [
  { name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry' },
  { name: 'Dental Costs', slug: 'dental-costs' },
  { name: 'Dental Implants', slug: 'dental-implants' },
  { name: 'Dental Tourism', slug: 'dental-tourism' },
  { name: 'Dental Tourism Vietnam', slug: 'dental-tourism-vietnam' },
  { name: 'General Dentistry', slug: 'general-dentistry' },
  { name: 'Implants', slug: 'implants' },
  { name: 'Invisalign', slug: 'invisalign' },
  { name: 'Oral Surgery', slug: 'oral-surgery' },
  { name: 'Question & Answer', slug: 'question-answer' },
  { name: 'Real Life Cases', slug: 'real-life-cases' },
  { name: 'Uncategorized', slug: 'uncategorized' },
  { name: 'Vietnam Travel Guide', slug: 'vietnam-travel-guide' },
];

const PAGE_SLUGS = [
  'privacy-policy', 'itero-oral-health-scanner', 'wisdom-tooth-extraction',
  'about-picasso-dental-clinic', 'our-team', 'our-story', 'book-appointment',
  'dental-costs', 'dental-services', 'blog', 'reviews', 'smile-gallery',
  'founder-story', 'root-canal-treatment', 'gummy-smile-surgery',
  'porcelain-crowns', 'dental-bridges', 'dental-implants',
  'all-on-4-dental-implants', 'periodontal-treatment', 'infection-control-protocol',
  'porcelain-veneers', 'metal-braces', 'ceramic-braces',
  'routine-checkup-and-cleaning', 'composite-filling',
  'zoom-laser-teeth-whitening', 'hcmc', 'worn-teeth', 'discolored-teeth',
  'composite-bonding', 'smile-makeover', 'danang', 'hanoi', 'invisalign',
  'our-patients',
];

const ARTICLE_SLUGS = [
  '5-signs-you-might-need-a-root-canal-treatment',
  'is-it-safe-to-get-implant-done-in-vietnam',
  'are-porcelain-veneers-permanent',
  'the-ultimate-guide-to-dental-implants-in-vietnam',
  'root-canal-treatment-side-effects',
  'dental-implant-failure-common-causes-and-how-to-prevent-implants-from-failing',
  'fully-recover-from-a-root-canal-procedure',
  'dental-implants-vs-bridges',
  'dental-implant-procedure-what-to-expect-and-how-to-prepare',
  'a-beautiful-smile-restored-dental-implants-for-a-36-year-old-female-patient',
  'porcealin-veneers-mr-obrien',
  'smile-reborn-dental-implant-lava-ceramic-crown',
  'why-should-the-patient-have-a-crown-done-after-a-root-canal-treatment',
  'immediate-loading-on-implants-ms-maries-smile-transformation-in-hanoi',
  'all-on-4-dental-implant-solution-from-painful-bites-to-beaming-smiles',
  'what-causes-tooth-neck-wear',
  'veneers-vs-invisalign',
  'porcelain-veneers-in-vietnam-eyssautiers-real-life-case',
  'how-long-do-dental-implants-last',
  'all-on-4-dental-implants-cost-in-vietnam',
  'cost-of-root-canal-treatment-in-vietnam',
  'alternatives-to-root-canal-treatment',
  'how-does-invisalign-work',
  'zoom-laser-teeth-whitening-cost',
  'zoom-laser-teeth-whitening-side-effects',
  'does-teeth-whitening-damage-teeth-enamel',
  'interproximal-reduction-invisalign',
  'invisalign-vs-braces',
  'alternatives-to-invisalign',
  'hairline-crack-in-porcelain-crown',
  'porcelain-vs-ceramic-crowns',
  'how-much-does-a-porcelain-crown-cost',
  'porcelain-crown-anterior-teeth',
  'porcelain-crown-allergy-symptoms',
  'black-spot-on-my-porcelain-crown',
  'dental-crown-healing-time',
  'why-no-dairy-after-dental-implant',
  'dental-implant-bone-loss',
  'smile-makeover-without-braces',
  'smile-makeover-with-direct-composite-veneers',
  'disadvantages-of-teeth-cleaning',
  'gum-bleeding-during-pregnancy',
  'gum-bleeding-after-deep-cleaning',
  'emergency-wisdom-tooth-removal',
  'abscess-after-wisdom-tooth-removal',
  'best-da-nang-dentist',
  'impacted-wisdom-tooth-removal',
  'wisdom-tooth-removal-after-care',
  'wisdom-tooth-removal-after-age-50',
  'wisdom-tooth-removal-bleeding',
  'what-can-you-eat-after-wisdom-teeth-removal',
  'can-you-smoke-before-wisdom-tooth-removal',
  'is-root-canal-treatment-painful',
  'long-term-side-effects-of-root-canal-treatment',
  'calcified-root-canal-treatment',
  'severe-toothache-while-traveling-in-vietnam',
  'best-toothpaste-for-periodontal-disease',
  'treat-periodontal-disease-at-home',
  'periodontal-disease-bad-breath',
  'main-causes-of-bad-breath',
  'crooked-teeth',
  'single-tooth-implants-vs-bridges-making-the-right-choice-for-long-term-oral-health',
  'professional-teeth-whitening-in-vietnam',
  'same-day-dental-implants-in-vietnam',
  'best-countries-affordable-dental-implants-value',
  'guide-to-dental-implant-systems',
  'dental-implants-in-vietnam-what-patients-should-know',
  'how-dental-implants-work',
  'the-benefits-of-dental-implants',
  'can-children-get-dental-implants',
  'how-dental-implants-different-from-dentures-bridges',
  'why-does-my-tooth-hurt-when-i-bite-down',
  'how-often-should-you-brush-your-teeth',
  'can-you-have-cavities-between-teeth',
  'is-root-canal-treatment-dangerous',
  'does-plaque-and-tartar-cause-bad-breath',
  'how-long-should-i-stop-vaping-before-wisdom-teeth-removal',
  'dental-crown-allergy-symptoms',
  'how-long-do-gums-bleed-after-deep-cleaning',
  'porcelain-vs-composite-veneers',
  'cost-of-teeth-whitening-in-vietnam',
  'excessive-bleeding-after-deep-cleaning',
  'how-long-does-crown-replacement-take',
  'are-porcelain-veneers-reversible',
  'average-cost-of-porcelain-veneers-in-vietnam',
  'advantages-and-disadvantages-of-porcelain-veneers',
  'porcelain-veneers-try-in',
  'can-you-floss-between-porcelain-veneers',
  'clip-on-veneers-vs-permanent-porcelain-veneers',
  'why-are-my-teeth-sensitive-to-cold',
  'is-porcelain-veneer-bad-in-the-long-run',
  'how-to-fix-space-shadowing-between-veneers',
  'do-porcelain-veneers-look-natural',
  'chipped-tooth-an-implant-a-crown-or-a-porcelain-veneer',
  'am-i-a-good-candidate-for-porcelain-veneers',
  'who-should-not-get-porcelain-veneers',
  'what-dental-issues-can-porcelain-veneers-fix',
  'do-i-need-to-whiten-my-teeth-before-getting-veneers',
  'how-many-veneers-do-i-need',
  'can-veneers-be-placed-on-lower-teeth',
  '6-common-myths-of-getting-dental-work-in-vietnam',
  'how-to-handle-dental-emergency-while-traveling-in-vietnam',
  'how-to-fix-a-dark-tooth-after-a-root-canal',
  'what-procedures-should-i-go-for-to-fix-my-misaligned-smile',
  'are-porcelain-veneers-suitable-for-people-with-bruxism',
  'how-much-do-porcelain-veneers-cost-per-tooth',
  'what-is-the-cost-for-a-full-set-of-veneers',
  'does-dental-insurance-cover-porcelain-veneers',
  'what-factors-affect-the-cost-of-veneers',
  'porcelain-veneers-more-expensive-than-composite-veneers',
  'do-i-need-healthy-teeth-and-gums-for-veneers',
  'can-veneers-fix-severely-discolored-teeth',
  'veneers-compare-to-bonding',
  'what-is-an-apicoectomy',
  'what-should-i-expect-after-a-root-canal',
  'should-i-have-all-four-wisdom-teeth-removed-at-once',
  'does-laser-teeth-whitening-cause-tooth-sensitivity',
  'does-laser-whitening-work-on-crowns-veneers-or-fillings',
  'can-i-whiten-my-teeth-too-often-with-laser-treatment',
  'will-laser-whitening-make-my-teeth-look-unnatural',
  'what-foods-should-i-avoid-with-veneers',
  'how-do-i-care-for-my-porcelain-veneers',
  'can-i-drink-coffee-tea-and-wine-with-veneers',
  'can-veneers-close-gaps-between-teeth',
  'can-i-get-veneers-on-just-my-front-teeth',
  'do-i-need-a-nightguard-with-veneers',
  'will-the-tooth-be-dead-after-a-root-canal',
  'will-i-need-antibiotics-before-or-after-the-root-canal-treatment',
  'does-laser-whitening-work-on-all-types-of-tooth-stains',
  'zoom-teeth-whitening-in-da-nang',
  'good-english-speaking-dentists-in-ho-chi-minh-city',
  'can-dental-implants-be-used-with-porcelain-bridges',
  'can-i-delay-getting-a-root-canal-treatment',
  'can-children-get-root-canals',
  'is-wisdom-tooth-extraction-safer-when-younger',
  'how-does-the-whitening-process-work',
  'how-to-prepare-for-laser-teeth-whitening-in-ho-chi-minh-city',
  'how-much-cheaper-are-dental-implants-in-vietnam',
  'vietnam-dental-clinics-charge-more-for-foreigners-compared-to-locals',
  'all-on-6-dental-implants-cost-vietnam-vs-new-zealand',
  'should-i-get-standard-teeth-whitening-or-laser-teeth-whitening-and-why',
  'does-a-wisdom-tooth-extraction-hurt-a-lot',
  'what-are-the-benefits-of-dental-bridges',
  'what-is-porcelain-crowns',
  'how-do-i-know-if-i-need-periodontal-treatment',
  'are-porcelain-veneers-worth-the-money',
  'does-zoom-whitening-damage-your-teeth',
  'what-are-porcelain-crowns-and-when-do-i-need-one',
  'what-is-periodontal-disease-and-how-do-you-treat-it',
  'do-dental-implants-hurt-and-how-long-do-they-last',
  'can-all-on-4-implants-really-replace-all-my-teeth-in-one-day',
  'when-do-wisdom-teeth-need-to-be-removed-and-what-is-recovery-like',
  'how-long-do-porcelain-veneers-last-and-are-they-worth-the-investment',
  'is-zoom-laser-teeth-whitening-safe-and-how-white-will-my-teeth-get',
  'what-can-porcelain-veneers-fix-and-am-i-a-good-candidate',
  'how-does-zoom-whitening-compare-to-whitening-strips-from-the-store',
  'can-i-eat-normally-with-a-dental-bridge',
  'can-gum-disease-be-reversed-or-is-the-damage-permanent',
  'what-is-the-success-rate-of-dental-implants-and-what-makes-them-fail',
  'how-much-does-all-on-4-cost-and-is-it-more-affordable-than-individual-implants',
  'why-do-teeth-sometimes-need-root-canals-and-how-can-i-prevent-it',
  'why-do-some-people-keep-their-wisdom-teeth-while-others-need-them-removed',
  'what-are-porcelain-veneers-and-how-do-they-transform-your-smile',
  'what-is-a-root-canal-and-why-is-it-not-as-scary-as-people-think',
  'when-do-wisdom-teeth-need-to-come-out-and-what-should-you-expect',
  'is-professional-teeth-whitening-safe-and-will-it-damage-my-enamel',
  'how-to-find-a-trustworthy-dental-clinic-in-vietnam',
  'can-foreigners-access-dental-care-in-vietnam',
  'top-10-dental-clinics-for-dental-implants-hanoi',
  'vietnam-just-had-its-biggest-tourism-month-ever-heres-what-that-means-for-you',
  'vietnams-free-healthcare-push-what-international-patients-should-know-about-the-countrys-health-system',
  'glowcation-is-the-hottest-travel-trend-of-2026-and-vietnam-is-made-for-it',
  'how-long-do-porcelain-veneers-last-and-are-they-worth-it',
  'root-canal-treatment-is-it-really-as-scary-as-everyone-says',
];

async function fetchPageContent(slug: string) {
  try {
    const res = await fetch(`${SOURCE_URL}/${slug}/`);
    if (!res.ok) return { title: slug.replace(/-/g, ' '), content: '', excerpt: '' };
    const html = await res.text();

    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/is);
    const title = titleMatch
      ? titleMatch[1].replace(/\s*[|–-]\s*Picasso Dental.*$/i, '').trim()
      : slug.replace(/-/g, ' ');

    const contentMatch =
      html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/article|<div[^>]*class="[^"]*(?:post-|entry-|comment))/i) ||
      html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);

    let content = contentMatch ? contentMatch[1].trim() : '';
    content = content.replace(/<script[\s\S]*?<\/script>/gi, '');
    content = content.replace(/<style[\s\S]*?<\/style>/gi, '');
    content = content.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
    const excerpt = descMatch ? descMatch[1].trim() : '';

    return { title, content, excerpt };
  } catch {
    return { title: slug.replace(/-/g, ' '), content: '', excerpt: '' };
  }
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    // Check if migration already done
    const existingCategories = await strapi.db.query('api::category.category').findMany({});
    if (existingCategories.length > 0) {
      console.log('⏭️  Migration already done, skipping bootstrap seed.');
      return;
    }

    console.log('🚀 Starting content migration from picassodental.vn...');

    // 1. Categories
    console.log('\n📁 Creating categories...');
    for (const cat of CATEGORY_DATA) {
      try {
        await strapi.db.query('api::category.category').create({ data: cat });
        console.log(`  ✅ ${cat.name}`);
      } catch (e: any) {
        console.log(`  ⏭️  ${cat.name}: ${e.message}`);
      }
    }

    // 2. Pages
    console.log('\n📄 Migrating pages...');
    let pageCount = 0;
    for (const slug of PAGE_SLUGS) {
      try {
        const { title, content, excerpt } = await fetchPageContent(slug);
        await strapi.db.query('api::page.page').create({
          data: { title, slug, content, seoDescription: excerpt, seoTitle: title },
        });
        pageCount++;
        console.log(`  ✅ [${pageCount}/${PAGE_SLUGS.length}] ${title}`);
        await delay(300);
      } catch (e: any) {
        console.log(`  ❌ ${slug}: ${e.message}`);
      }
    }

    // 3. Articles
    console.log('\n📝 Migrating articles...');
    let articleCount = 0;
    for (const slug of ARTICLE_SLUGS) {
      try {
        const { title, content, excerpt } = await fetchPageContent(slug);
        await strapi.db.query('api::article.article').create({
          data: {
            title,
            slug,
            content,
            excerpt,
            seoTitle: title,
            seoDescription: excerpt,
            publishDate: new Date().toISOString(),
          },
        });
        articleCount++;
        console.log(`  ✅ [${articleCount}/${ARTICLE_SLUGS.length}] ${title}`);
        await delay(300);
      } catch (e: any) {
        console.log(`  ❌ ${slug}: ${e.message}`);
      }
    }

    console.log('\n🎉 Migration complete!');
    console.log(`   Categories: ${CATEGORY_DATA.length}`);
    console.log(`   Pages: ${pageCount}`);
    console.log(`   Articles: ${articleCount}`);
  },

  destroy(/* { strapi } */) {},
};
