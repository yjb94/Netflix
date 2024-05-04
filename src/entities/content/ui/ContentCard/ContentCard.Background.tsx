import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ContentCardContext } from '.';

export type ContentCardBackgroundProps = {};

const ContentCardBackground: React.FC<ContentCardBackgroundProps> = () => {
  const { styles } = useStyles(stylesheet);
  const content = useContext(ContentCardContext);

  return (
    <Image
      source={{ uri: content.imageUrl }}
      style={styles.background}
    />
  );
};

const stylesheet = createStyleSheet(() => ({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
}));

export default ContentCardBackground;
