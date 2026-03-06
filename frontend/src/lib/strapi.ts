import qs from 'qs';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || '';

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

async function fetchAPI<T>(
  path: string,
  urlParamsObject: Record<string, unknown> = {},
  options: RequestInit = {}
): Promise<T> {
  const mergedOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    next: { revalidate: 60 },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true });
  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Articles
export async function getArticles(params: Record<string, unknown> = {}) {
  return fetchAPI<StrapiResponse<any[]>>('/articles', {
    populate: ['featuredImage', 'category'],
    sort: ['publishDate:desc'],
    ...params,
  });
}

export async function getArticleBySlug(slug: string) {
  const data = await fetchAPI<StrapiResponse<any[]>>('/articles', {
    filters: { slug: { $eq: slug } },
    populate: ['featuredImage', 'category'],
  });
  return data.data?.[0] || null;
}

// Pages
export async function getPages() {
  return fetchAPI<StrapiResponse<any[]>>('/pages', {
    populate: ['featuredImage'],
  });
}

export async function getPageBySlug(slug: string) {
  const data = await fetchAPI<StrapiResponse<any[]>>('/pages', {
    filters: { slug: { $eq: slug } },
    populate: ['featuredImage'],
  });
  return data.data?.[0] || null;
}

// Services
export async function getServices() {
  return fetchAPI<StrapiResponse<any[]>>('/services', {
    populate: ['icon', 'featuredImage', 'faqs'],
    sort: ['order:asc'],
  });
}

export async function getServiceBySlug(slug: string) {
  const data = await fetchAPI<StrapiResponse<any[]>>('/services', {
    filters: { slug: { $eq: slug } },
    populate: ['icon', 'featuredImage', 'gallery', 'faqs'],
  });
  return data.data?.[0] || null;
}

// Categories
export async function getCategories() {
  return fetchAPI<StrapiResponse<any[]>>('/categories', {
    populate: ['articles'],
  });
}

export async function getCategoryBySlug(slug: string) {
  const data = await fetchAPI<StrapiResponse<any[]>>('/categories', {
    filters: { slug: { $eq: slug } },
    populate: { articles: { populate: ['featuredImage'] } },
  });
  return data.data?.[0] || null;
}

// Team Members
export async function getTeamMembers() {
  return fetchAPI<StrapiResponse<any[]>>('/team-members', {
    populate: ['photo'],
    sort: ['order:asc'],
  });
}

// Locations
export async function getLocations() {
  return fetchAPI<StrapiResponse<any[]>>('/locations', {
    populate: ['photo', 'gallery'],
    sort: ['order:asc'],
  });
}

export async function getLocationBySlug(slug: string) {
  const data = await fetchAPI<StrapiResponse<any[]>>('/locations', {
    filters: { slug: { $eq: slug } },
    populate: ['photo', 'gallery'],
  });
  return data.data?.[0] || null;
}

// Reviews
export async function getReviews(params: Record<string, unknown> = {}) {
  return fetchAPI<StrapiResponse<any[]>>('/reviews', {
    populate: ['photo'],
    sort: ['date:desc'],
    ...params,
  });
}

// Homepage
export async function getHomepage() {
  return fetchAPI<StrapiResponse<any>>('/homepage', {
    populate: ['heroImage', 'aboutImage'],
  });
}

// Gallery
export async function getGalleryItems() {
  return fetchAPI<StrapiResponse<any[]>>('/gallery-items', {
    populate: ['beforeImage', 'afterImage'],
    sort: ['order:asc'],
  });
}

// Helper to get Strapi media URL
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
