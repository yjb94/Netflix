import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { getIsTopTenContent } from 'entities/content';
import { images } from 'shared/ui/assets';
import { ContentCardContext } from '.';

export type ContentCardTopTenBadgeProps = {};

const ContentCardTopTenBadge: React.FC<ContentCardTopTenBadgeProps> = () => {
  const { styles } = useStyles(stylesheet);
  const content = useContext(ContentCardContext);

  const isTopTenContent = getIsTopTenContent(content);

  if (!isTopTenContent) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={images.topTenBadge}
        style={styles.topTenBadge}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    shadowColor: theme.colors.greyGrey600,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  topTenBadge: {
    width: 20,
    height: 29,
  },
}));

export default ContentCardTopTenBadge;
