import React from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TopTenContents } from 'widgets/top-ten-contents';

export type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TopTenContents />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default HomeScreen;
