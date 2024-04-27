import React from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ContentPlayScreenProps = {};

const ContentPlayScreen: React.FC<ContentPlayScreenProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Content Play</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default ContentPlayScreen;
