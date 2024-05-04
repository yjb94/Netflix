import React, { useContext } from 'react';
import { Image } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { images } from 'shared/ui/assets';
import { ContentCardContext } from '.';

export type ContentCardNetflixOriginalIconProps = {};

const ContentCardNetflixOriginalIcon: React.FC<
  ContentCardNetflixOriginalIconProps
> = ({}) => {
  const { styles } = useStyles(stylesheet);
  const content = useContext(ContentCardContext);

  if (!content.isNetflixOriginal) {
    return null;
  }

  return (
    <Image
      source={images.logo}
      style={styles.logo}
    />
  );
};

const stylesheet = createStyleSheet(() => ({
  logo: {
    width: 8.8,
    height: 16,
    position: 'absolute',
    left: 5,
    top: 5,
  },
}));

export default ContentCardNetflixOriginalIcon;
