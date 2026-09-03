const FOLDER_TO_MINISTRY: Record<string, string> = {
  musicmedia: 'music-media',
  children: 'children',
  men: 'men',
  pvv: 'women',
  newbreed: 'youth',
  outreach: 'outreach',
  intercessory: 'intercessory',
  ushering: 'ushering',
  welfare: 'welfare',
  family: 'family-life',
  eventpublicity: 'events',
  projects: 'projects',
  administration: 'administration',
};

const assetModules = import.meta.glob<string>(
  '../assets/images/*/*.{webp,jpg,jpeg,png,avif}',
  { eager: true, query: '?url', import: 'default' }
);

type FolderImages = {
  cover?: string;
  gallery: string[];
};

function isCoverFile(fileName: string) {
  const base = fileName.replace(/\.[^.]+$/, '').toLowerCase();
  return (
    base === 'cover' ||
    base === 'cover_image' ||
    base.startsWith('cover_image') ||
    base.endsWith('_cover')
  );
}

function collectByFolder() {
  const folders: Record<string, FolderImages> = {};

  Object.entries(assetModules)
    .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
    .forEach(([path, src]) => {
      const match = path.match(/images\/([^/]+)\/([^/]+)$/);
      if (!match) return;

      const [, folder, fileName] = match;
      if (!folders[folder]) folders[folder] = { gallery: [] };

      if (isCoverFile(fileName) && !folders[folder].cover) {
        folders[folder].cover = src;
        return;
      }

      if (!isCoverFile(fileName)) {
        folders[folder].gallery.push(src);
      }
    });

  return folders;
}

const FOLDERS = collectByFolder();

export function getLocalMinistryImages(ministryId: string) {
  const folderNames = Object.entries(FOLDER_TO_MINISTRY)
    .filter(([, id]) => id === ministryId)
    .map(([folder]) => folder);

  const headerImage = folderNames.map(name => FOLDERS[name]?.cover).find(Boolean);
  const gallery = folderNames.flatMap(name => {
    const folder = FOLDERS[name];
    if (!folder) return [];
    const extraCover = folder.cover && folder.cover !== headerImage ? [folder.cover] : [];
    return [...extraCover, ...folder.gallery];
  });

  if (!headerImage && gallery.length === 0) return null;

  return {
    headerImage,
    gallery,
  };
}

export function getGeneralGallerySources() {
  const general = FOLDERS.general;
  if (!general) return [];
  return [general.cover, ...general.gallery].filter((src): src is string => Boolean(src));
}
