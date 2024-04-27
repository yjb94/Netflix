import React from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ContentDetailScreenProps = {};

const ContentDetailScreen: React.FC<ContentDetailScreenProps> = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Content Detail</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {},
}));

export default ContentDetailScreen;
