import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Content } from 'shared/model';

export type ContentCardProps = Content & {};

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  imageUrl,
  isNewEpisode,
  isNetflixOriginal,
  releaseDate,
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View
      style={styles.container}
      key={id}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Text>{title}</Text>
      <Text>{isNewEpisode ? 'New episode' : ''}</Text>
      <Text>{isNetflixOriginal ? 'Netflix original' : ''}</Text>
      <Text>{releaseDate}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    width: 200,
    height: 200,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
}));

export default ContentCard;
