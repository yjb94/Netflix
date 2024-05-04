import React from 'react';
import { View } from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import { TopTenContents } from 'widgets/top-ten-contents';
import { TrendingContents } from 'widgets/trending-contents';

export type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TopTenContents />
      <TrendingContents />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    paddingTop: UnistylesRuntime.insets.top,
  },
}));

export default HomeScreen;
