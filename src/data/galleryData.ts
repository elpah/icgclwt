import { MINISTRIES_DATA } from './MinistriesData';
import { getGeneralGallerySources } from './ministryAssets';

export const GALLERY_CATEGORIES = [
  'Church Life',
  'Ministries',
  'Outreach',
  'Events',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category: GalleryCategory | GalleryCategory[];
  ministry?: string;
  date?: string;
}

export const GALLERY_FILTERS = ['All', ...GALLERY_CATEGORIES] as const;
export type GalleryFilter = (typeof GALLERY_FILTERS)[number];

const MINISTRY_CATEGORY: Record<string, GalleryCategory> = {
  outreach: 'Outreach',
};

export function imageMatchesFilter(image: GalleryImage, filter: GalleryFilter) {
  if (filter === 'All') return true;
  return Array.isArray(image.category)
    ? image.category.includes(filter)
    : image.category === filter;
}

export function toGalleryImages(
  sources: string[],
  options: {
    idPrefix: string;
    alt: string;
    title?: string;
    category: GalleryCategory | GalleryCategory[];
    ministry?: string;
  }
): GalleryImage[] {
  return sources.map((src, index) => ({
    id: `${options.idPrefix}-${index + 1}`,
    src,
    alt: `${options.alt} ${index + 1}`,
    title: options.title,
    category: options.category,
    ministry: options.ministry,
  }));
}

const CHURCH_IMAGES: GalleryImage[] = [
  {
    id: 'church-sanctuary',
    src: '/images/church_cover_image.webp',
    alt: 'ICGC Living Word Temple sanctuary',
    title: 'Living Word Temple',
    category: 'Church Life',
  },
  {
    id: 'church-worship',
    src: '/images/cover_images_smaller/cover_image_5.webp',
    alt: 'Congregation gathered in worship',
    title: 'Sunday Worship',
    category: 'Church Life',
  },
  {
    id: 'church-family',
    src: 'https://res.cloudinary.com/dvwpuenzk/image/upload/v1781938363/icgc_banner_kfyfxr.avif',
    alt: 'ICGC Living Word Temple church family',
    title: 'Church Family',
    category: 'Church Life',
  },
  {
    id: 'church-pastor',
    src: '/images/rev_obeng.webp',
    alt: 'Rev. Reuben K Obeng, Head Pastor',
    title: 'Rev. Reuben K Obeng',
    category: 'Church Life',
  },
  {
    id: 'sunday-service',
    src: 'https://res.cloudinary.com/dvwpuenzk/image/upload/v1787967714/sunday_service_lwt_ld62po.jpg',
    alt: 'Sunday service at Living Word Temple',
    title: 'Sunday Service',
    category: ['Church Life', 'Events'],
    date: 'Every Sunday',
  },
];

const GENERAL_IMAGES: GalleryImage[] = toGalleryImages(getGeneralGallerySources(), {
  idPrefix: 'general',
  alt: 'Life at ICGC Living Word Temple',
  title: 'Church Life',
  category: 'Church Life',
});

const MINISTRY_IMAGES: GalleryImage[] = MINISTRIES_DATA.flatMap(ministry =>
  toGalleryImages(ministry.gallery, {
    idPrefix: ministry.id,
    alt: ministry.name,
    title: ministry.name,
    category: MINISTRY_CATEGORY[ministry.id] ?? 'Ministries',
    ministry: ministry.id,
  })
);

export const GALLERY_IMAGES: GalleryImage[] = [
  ...CHURCH_IMAGES,
  ...GENERAL_IMAGES,
  ...MINISTRY_IMAGES,
];
