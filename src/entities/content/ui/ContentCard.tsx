import React from 'react';
import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Colors } from 'shared/ui';
import { images } from 'shared/ui/assets';
import Text from 'shared/ui/Text';
import { getIsRecentContent } from '../lib';
import { Content } from '../model';

export type ContentCardProps = Content & {
  style?: StyleProp<ViewStyle>;
};

const ContentCard: React.FC<ContentCardProps> = ({ style, ...content }) => {
  const { id, imageUrl, isNetflixOriginal, isNewEpisode } = content;
  const { styles } = useStyles(stylesheet);

  const isRecentContent = getIsRecentContent(content);

  return (
    <View
      style={[styles.container, style]}
      key={id}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.background}
      />
      {isNetflixOriginal && (
        <Image
          source={images.logo}
          style={styles.logo}
        />
      )}
      {isRecentContent && (
        <View style={styles.labelsContainer}>
          <View style={styles.label('primaryRed')}>
            <Text
              typography="caption2"
              color="primaryWhite"
              fontWeight="bold"
              style={styles.labelText}
            >
              {'최신 등록'}
            </Text>
          </View>
        </View>
      )}
      {isNewEpisode && !isRecentContent && (
        <View style={styles.labelsContainer}>
          <View style={styles.label('primaryRed')}>
            <Text
              typography="caption2"
              color="primaryWhite"
              fontWeight="bold"
              style={styles.labelText}
            >
              {'새로운 에피소드'}
            </Text>
          </View>
          <View style={styles.label('primaryWhite')}>
            <Text
              typography="caption2"
              color="primaryBlack"
              fontWeight="bold"
              style={styles.labelText}
            >
              {'지금 시청하기'}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: 109,
    height: 154,
    borderRadius: 4,
    overflow: 'hidden',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    width: 8.8,
    height: 16,
    position: 'absolute',
    left: 5,
    top: 5,
  },
  labelsContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    overflow: 'hidden',
  },
  label: (color: Colors) => ({
    padding: 2,
    minWidth: 50,
    backgroundColor: theme.colors[color],
  }),
  labelText: {
    textAlign: 'center',
  },
}));

export default ContentCard;
