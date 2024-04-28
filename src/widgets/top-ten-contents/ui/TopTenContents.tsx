import React from 'react';
import { FlatList, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ContentCard } from 'entities/content';

export type TopTenContentsProps = {};

const TopTenContents: React.FC<TopTenContentsProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            id: '1',
            title: 'Stranger Things',
            imageUrl:
              'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
            isNewEpisode: true,
            isNetflixOriginal: true,
            releaseDate: '2016-07-15',
          },
          {
            id: '2',
            title: 'The Witcher',
            imageUrl:
              'https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg',
            isNewEpisode: false,
            isNetflixOriginal: true,
            releaseDate: '2019-12-20',
          },
          {
            id: '3',
            title: 'The Mandalorian',
            imageUrl:
              'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
            isNewEpisode: false,
            isNetflixOriginal: false,
            releaseDate: '2019-11-12',
          },
        ]}
        renderItem={({ item }) => (
          <ContentCard
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            isNewEpisode={item.isNewEpisode}
            isNetflixOriginal={item.isNetflixOriginal}
            releaseDate={item.releaseDate}
          />
        )}
        horizontal
      />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default TopTenContents;
