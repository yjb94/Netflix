import React from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default HomeScreen;
