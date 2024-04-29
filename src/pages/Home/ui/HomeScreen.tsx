import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TopTenContents } from 'widgets/top-ten-contents';

export type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TopTenContents />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.primaryBlack,
    flex: 1,
  },
}));

export default HomeScreen;
