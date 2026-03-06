/**
 * Content Migration Script
 * Scrapes picassodental.vn and imports content into Strapi v5
 *
 * Usage:
 *   1. Start Strapi: cd backend && npm run develop
 *   2. Create an admin user and generate an API token
 *   3. Set STRAPI_TOKEN below
 *   4. Run: npx tsx scripts/migrate.ts
 */

const STRAPI_URL = 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || ''; // Set your API token here
const SOURCE_URL = 'https://picassodental.vn';

// ── Sitemap URLs ──────────────────────────────────────────────────────────────

const CATEGORY_URLS = [
  { url: '/category/cosmetic-dentistry/', name: 'Cosmetic Dentistry', slug: 'cosmetic-dentistry' },
  { url: '/category/dental-costs/', name: 'Dental Costs', slug: 'dental-costs' },
  { url: '/category/dental-implants/', name: 'Dental Implants', slug: 'dental-implants' },
  { url: '/category/dental-tourism/', name: 'Dental Tourism', slug: 'dental-tourism' },
  { url: '/category/dental-tourism-vietnam/', name: 'Dental Tourism Vietnam', slug: 'dental-tourism-vietnam' },
  { url: '/category/general-dentistry/', name: 'General Dentistry', slug: 'general-dentistry' },
  { url: '/category/implants/', name: 'Implants', slug: 'implants' },
  { url: '/category/invisalign/', name: 'Invisalign', slug: 'invisalign' },
  { url: '/category/oral-surgery/', name: 'Oral Surgery', slug: 'oral-surgery' },
  { url: '/category/question-answer/', name: 'Question & Answer', slug: 'question-answer' },
  { url: '/category/real-life-cases/', name: 'Real Life Cases', slug: 'real-life-cases' },
  { url: '/category/uncategorized/', name: 'Uncategorized', slug: 'uncategorized' },
  { url: '/category/vietnam-travel-guide/', name: 'Vietnam Travel Guide', slug: 'vietnam-travel-guide' },
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

// ── Helpers ───────────────────────────────────────────────────────────────────

async function strapiRequest(path: string, method: string, body?: any) {
  const res = await fetch(`${STRAPI_URL}/api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Strapi ${method} ${path} failed (${res.status}): ${text}`);
  }

  return res.json();
}

async function fetchPage(slug: string): Promise<{ title: string; content: string; excerpt: string }> {
  try {
    const res = await fetch(`${SOURCE_URL}/${slug}/`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // Extract title
    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/is);
    let title = titleMatch ? titleMatch[1].replace(/\s*[|–-]\s*Picasso Dental.*$/i, '').trim() : slug.replace(/-/g, ' ');

    // Extract main content
    const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/article|<div[^>]*class="[^"]*(?:post-|entry-|comment))/i)
      || html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
      || html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

    let content = contentMatch ? contentMatch[1].trim() : '';

    // Clean up content - remove scripts and styles
    content = content.replace(/<script[\s\S]*?<\/script>/gi, '');
    content = content.replace(/<style[\s\S]*?<\/style>/gi, '');
    content = content.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

    // Extract meta description for excerpt
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
    const excerpt = descMatch ? descMatch[1].trim() : '';

    return { title, content, excerpt };
  } catch (error) {
    console.error(`  Failed to fetch ${slug}:`, error);
    return { title: slug.replace(/-/g, ' '), content: '', excerpt: '' };
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Migration Functions ───────────────────────────────────────────────────────

async function migrateCategories() {
  console.log('\n📁 Migrating categories...');
  for (const cat of CATEGORY_URLS) {
    try {
      await strapiRequest('/categories', 'POST', {
        data: {
          name: cat.name,
          slug: cat.slug,
        },
      });
      console.log(`  ✅ ${cat.name}`);
    } catch (error: any) {
      if (error.message.includes('unique')) {
        console.log(`  ⏭️  ${cat.name} (already exists)`);
      } else {
        console.error(`  ❌ ${cat.name}:`, error.message);
      }
    }
  }
}

async function migratePages() {
  console.log('\n📄 Migrating pages...');
  let count = 0;

  for (const slug of PAGE_SLUGS) {
    try {
      const { title, content, excerpt } = await fetchPage(slug);

      await strapiRequest('/pages', 'POST', {
        data: {
          title,
          slug,
          content,
          seoDescription: excerpt,
          seoTitle: title,
        },
      });

      count++;
      console.log(`  ✅ [${count}/${PAGE_SLUGS.length}] ${title}`);
      await delay(500); // Rate limit
    } catch (error: any) {
      if (error.message.includes('unique')) {
        console.log(`  ⏭️  ${slug} (already exists)`);
      } else {
        console.error(`  ❌ ${slug}:`, error.message);
      }
    }
  }
}

async function migrateArticles() {
  console.log('\n📝 Migrating articles...');
  let count = 0;

  for (const slug of ARTICLE_SLUGS) {
    try {
      const { title, content, excerpt } = await fetchPage(slug);

      await strapiRequest('/articles', 'POST', {
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

      count++;
      console.log(`  ✅ [${count}/${ARTICLE_SLUGS.length}] ${title}`);
      await delay(500); // Rate limit
    } catch (error: any) {
      if (error.message.includes('unique')) {
        console.log(`  ⏭️  ${slug} (already exists)`);
      } else {
        console.error(`  ❌ ${slug}:`, error.message);
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 Starting content migration from picassodental.vn to Strapi');
  console.log(`   Source: ${SOURCE_URL}`);
  console.log(`   Target: ${STRAPI_URL}`);
  console.log(`   Token: ${STRAPI_TOKEN ? 'set' : '⚠️  NOT SET'}`);

  if (!STRAPI_TOKEN) {
    console.error('\n❌ STRAPI_TOKEN is required. Set it as an environment variable or in this script.');
    console.log('   1. Start Strapi: cd backend && npm run develop');
    console.log('   2. Create admin user at http://localhost:1337/admin');
    console.log('   3. Go to Settings > API Tokens > Create new API Token (full access)');
    console.log('   4. Run: STRAPI_TOKEN=your_token npx tsx scripts/migrate.ts');
    process.exit(1);
  }

  // Test connection
  try {
    await fetch(`${STRAPI_URL}/api/articles`);
    console.log('   ✅ Strapi connection OK');
  } catch {
    console.error('\n❌ Cannot connect to Strapi. Make sure it is running on', STRAPI_URL);
    process.exit(1);
  }

  await migrateCategories();
  await migratePages();
  await migrateArticles();

  console.log('\n🎉 Migration complete!');
  console.log(`   Categories: ${CATEGORY_URLS.length}`);
  console.log(`   Pages: ${PAGE_SLUGS.length}`);
  console.log(`   Articles: ${ARTICLE_SLUGS.length}`);
  console.log(`   Total: ${CATEGORY_URLS.length + PAGE_SLUGS.length + ARTICLE_SLUGS.length}`);
}

main().catch(console.error);
