import { Content } from './types';

const contents: Content[] = [
  {
    id: '1',
    title: 'Stranger Things',
    imageUrl: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 100,
    isNewEpisode: true,
    isNetflixOriginal: true,
    releaseDate: '2016-07-15',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Millie Bobby Brown', 'Finn Wolfhard', 'Winona Ryder'],
  },
  {
    id: '2',
    title: 'The Witcher',
    imageUrl: 'https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 200,
    isNewEpisode: false,
    isNetflixOriginal: true,
    releaseDate: '2019-12-20',
    rating: '19+',
    quality: '4K',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Henry Cavill', 'Anya Chalotra', 'Freya Allan'],
  },
  {
    id: '3',
    title: 'The Mandalorian',
    imageUrl: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 300,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2019-11-12',
    rating: '12+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Pedro Pascal', 'Gina Carano', 'Giancarlo Esposito'],
  },
  {
    id: '4',
    title: "The Queen's Gambit",
    imageUrl: 'https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 400,
    isNewEpisode: false,
    isNetflixOriginal: true,
    releaseDate: '2020-10-23',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Anya Taylor-Joy', 'Bill Camp', 'Marielle Heller'],
  },
  {
    id: '5',
    title: 'The Crown',
    imageUrl: 'https://image.tmdb.org/t/p/w500/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 500,
    isNewEpisode: false,
    isNetflixOriginal: true,
    releaseDate: '2016-11-04',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Olivia Colman', 'Imelda Staunton', 'Lesley Manville'],
  },
  {
    id: '6',
    title: 'The Umbrella Academy',
    imageUrl: 'https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 270,
    isNewEpisode: true,
    isNetflixOriginal: true,
    releaseDate: '2019-02-15',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Ellen Page', 'Tom Hopper', 'David Castañeda'],
  },
  {
    id: '7',
    title: 'Money Heist',
    imageUrl: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 320,
    isNewEpisode: false,
    isNetflixOriginal: true,
    releaseDate: '2017-05-02',
    rating: '19+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Úrsula Corberó', 'Álvaro Morte', 'Itziar Ituño'],
  },
  {
    id: '8',
    title: 'The Office',
    imageUrl: 'https://image.tmdb.org/t/p/w500/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 400,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2005-03-24',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Steve Carell', 'Rainn Wilson', 'John Krasinski'],
  },
  {
    id: '9',
    title: 'Breaking Bad',
    imageUrl: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 450,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2008-01-20',
    rating: '19+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
  },
  {
    id: '10',
    title: 'Friends',
    imageUrl: 'https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 500,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '1994-09-22',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Jennifer Aniston', 'Courteney Cox', 'Lisa Kudrow'],
  },
  {
    id: '11',
    title: 'The Simpsons',
    imageUrl: 'https://image.tmdb.org/t/p/w500/3u9z0eKY4Zmc9DQATfKcSuMTpzi.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 600,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '1989-12-17',
    rating: 'ALL',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Dan Castellaneta', 'Julie Kavner', 'Nancy Cartwright'],
  },
  {
    id: '12',
    title: 'The Good Place',
    imageUrl: 'https://image.tmdb.org/t/p/w500/qIhsuhoIYR5yTnDta0IL4senbeN.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 700,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2016-09-19',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Kristen Bell', 'William Jackson Harper', 'Jameela Jamil'],
  },
  {
    id: '13',
    title: 'The Big Bang Theory',
    imageUrl: 'https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 800,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2007-09-24',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Johnny Galecki', 'Jim Parsons', 'Kaley Cuoco'],
  },
  {
    id: '14',
    title: 'Modern Family',
    imageUrl: 'https://image.tmdb.org/t/p/w500/klL4yhwiU8aF4AuF5dCfJA9sRnS.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 900,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2009-09-23',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Ed O’Neill', 'Sofía Vergara', 'Julie Bowen'],
  },
  {
    id: '15',
    title: 'Brooklyn Nine-Nine',
    imageUrl: 'https://image.tmdb.org/t/p/w500/hgRMSOt7a1b8qyQR68vUixJPang.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 1000,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2013-09-17',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Andy Samberg', 'Terry Crews', 'Stephanie Beatriz'],
  },
  {
    id: '16',
    title: 'The Blacklist',
    imageUrl: 'https://image.tmdb.org/t/p/w500/bgbQCW4fE9b6wSOSC6Fb4FfVzsW.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 300,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2013-09-23',
    rating: '19+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['James Spader', 'Megan Boone', 'Diego Klattenhoff'],
  },
  {
    id: '17',
    title: 'The Walking Dead',
    imageUrl: 'https://image.tmdb.org/t/p/w500/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 400,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2010-10-31',
    rating: '19+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Andrew Lincoln', 'Norman Reedus', 'Lauren Cohan'],
  },
  {
    id: '18',
    title: 'The Flash',
    imageUrl: 'https://image.tmdb.org/t/p/w500/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 500,
    isNewEpisode: false,
    isNetflixOriginal: false,
    releaseDate: '2014-10-07',
    rating: '15+',
    quality: 'HD',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Grant Gustin', 'Candice Patton', 'Danielle Panabaker'],
  },
  {
    id: '19',
    title: 'Squid Game',
    imageUrl: 'https://image.tmdb.org/t/p/w500/yACIAqAkSLkX4coHafpyLWAtQjw.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 2000,
    isNewEpisode: true,
    isNetflixOriginal: true,
    releaseDate: '2021-09-17',
    rating: '19+',
    quality: '4K',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Lee Jung-jae', 'Park Hae-soo', 'Wi Ha-joon'],
  },
  {
    id: '20',
    title: 'Parasite',
    imageUrl: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 1500,
    isNewEpisode: true,
    isNetflixOriginal: false,
    releaseDate: '2019-05-30',
    rating: '19+',
    quality: '4K',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
  },
  {
    id: '21',
    title: '개쩌는 신작',
    imageUrl:
      'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg',
    videoUrl:
      'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_30mb.mp4',
    viewCount: 10000,
    isNewEpisode: true,
    isNetflixOriginal: true,
    releaseDate: '2024-04-30',
    rating: '19+',
    quality: '4K',
    summary:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    casts: ['배우1', '배우2', '배우3'],
  },
];

export const getContentById = (id: string) => {
  return contents.find(content => content.id === id);
};

export const getTopTenContents = () => {
  return contents.sort((a, b) => b.viewCount - a.viewCount).slice(0, 10);
};

export const getTrendingContents = () => {
  return contents.sort(() => 0.5 - Math.random()).slice(0, 10);
};

export const getIsTopTenContent = (content: Content) => {
  return getTopTenContents().some(
    topTenContent => topTenContent.id === content.id
  );
};

export const getRecommendedContents = () => {
  return contents.sort(() => 0.5 - Math.random()).slice(0, 12);
};
