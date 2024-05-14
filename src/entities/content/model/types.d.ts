export type Content = {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  viewCount: number;
  isNewEpisode?: boolean;
  isNetflixOriginal?: boolean;
  releaseDate: string;
  rating: '19+' | '15+' | '12+' | 'ALL';
  quality: 'HD' | '4K';
  summary: string;
  casts: string[];
};
