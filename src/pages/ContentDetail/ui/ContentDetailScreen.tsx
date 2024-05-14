import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import { PlayContentButton } from 'features/play-content';
import { RateContentIconButton } from 'features/rate-content';
import {
  SaveContentButton,
  SaveContentIconButton,
} from 'features/save-content';
import { ShareContentIconButton } from 'features/share-content';
import {
  ContentInformation,
  ContentSummary,
  getContentById,
} from 'entities/content';
import { RootStackParamList } from 'shared/model/navigation';
import Icon from 'shared/ui/Icon';

export type ContentDetailScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ContentDetail'
>;
type ContentDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ContentDetail'
>;

const ContentDetailScreen: React.FC<ContentDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { contentId } = route.params;
  const content = getContentById(contentId);

  if (!content) {
    throw new Error(`Content not found: ${contentId}`);
  }

  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeButton}
        onPress={navigation.goBack}
      >
        <Icon
          name="cross"
          size={16}
        />
      </Pressable>
      <Image
        source={{ uri: content.imageUrl }}
        style={styles.preview}
      />
      <ContentInformation
        style={styles.centerContainer}
        title={content.title}
        releaseDate={content.releaseDate}
        rating={content.rating}
        quality={content.quality}
      />
      <PlayContentButton
        contentId={contentId}
        style={styles.button}
      />
      <SaveContentButton
        contentId={contentId}
        style={styles.button}
      />
      <ContentSummary
        style={styles.summary}
        summary={content.summary}
        casts={content.casts}
      />
      <View style={styles.engageContainer}>
        <SaveContentIconButton
          contentId={content.id}
          style={styles.engageIconButton}
        />
        <RateContentIconButton
          contentId={content.id}
          style={styles.engageIconButton}
        />
        <ShareContentIconButton
          contentId={content.id}
          style={styles.engageIconButton}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    paddingTop: UnistylesRuntime.insets.top,
  },
  closeButton: {
    position: 'absolute',
    top: UnistylesRuntime.insets.top + 8,
    backgroundColor: theme.colors.greyGrey550,
    right: 8,
    padding: 6,
    borderRadius: 24,
    zIndex: 1,
  },
  preview: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  centerContainer: {
    padding: 8,
  },
  button: {
    marginTop: 8,
  },
  summary: {
    marginTop: 16,
  },
  engageContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  engageIconButton: {
    minWidth: 48,
    marginRight: 8,
  },
}));

export default ContentDetailScreen;
