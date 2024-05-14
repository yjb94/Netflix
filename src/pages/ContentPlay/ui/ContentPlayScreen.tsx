import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import Video from 'react-native-video';
import { getContentById } from 'entities/content';
import { RootStackParamList } from 'shared/model/navigation';
import Icon from 'shared/ui/Icon';

export type ContentPlayScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ContentPlay'
>;
type ContentPlayScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ContentPlay'
>;
const ContentPlayScreen: React.FC<ContentPlayScreenProps> = ({
  navigation,
  route,
}) => {
  const { contentId } = route.params;
  const content = getContentById(contentId);

  if (!content) {
    throw new Error(`Content not found: ${contentId}`);
  }

  const { styles } = useStyles(stylesheet);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

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
      {isLoading && <ActivityIndicator />}
      <Video
        source={{
          uri: content.videoUrl,
        }}
        style={styles.video}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  video: {
    ...StyleSheet.absoluteFillObject,
  },
}));

export default ContentPlayScreen;
