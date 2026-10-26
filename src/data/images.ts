// Pre-optimized WebP files in /public/images, generated from the original Wix uploads
// (EXIF/GPS metadata stripped). `width`/`height` give the intrinsic aspect ratio.
export const IMAGES = {
  hero: { widths: [960, 1600, 2400], width: 4032, height: 3024 },
  mission: { widths: [600, 1000], width: 4032, height: 3024 },
  drive: { widths: [800, 1400], width: 3993, height: 2594 },
  'students-cards-1': { widths: [500, 900], width: 1169, height: 1570 },
  'students-cards-2': { widths: [500, 900], width: 1170, height: 1564 },
  'leaf-home': { widths: [360, 640], width: 1290, height: 2796 },
  'leaf-deck': { widths: [360, 640], width: 1290, height: 2796 },
  'leaf-card-es': { widths: [360, 640], width: 1290, height: 2796 },
  'leaf-card-en': { widths: [360, 640], width: 1290, height: 2796 },
  'ways-swing': { widths: [960, 1600, 2400], width: 6000, height: 4000 },
  road: { widths: [600, 1100], width: 3378, height: 4504 },
  'ktnv-logo': { widths: [400], width: 400, height: 121 },
  'univision-logo': { widths: [400], width: 400, height: 331 },
} as const;

export type ImageName = keyof typeof IMAGES;
