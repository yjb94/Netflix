import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Text from 'shared/ui/Text';

export type ContentSummaryProps = {
  style?: StyleProp<ViewStyle>;

  summary: string;
  casts: string[];
};

const ContentSummary: React.FC<ContentSummaryProps> = ({
  summary,
  casts,
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View {...otherProps}>
      <Text
        typography="caption1"
        color="primaryWhite"
      >
        {summary}
      </Text>
      <Text
        style={styles.casts}
        typography="caption1"
        color="greyGrey200"
      >
        {casts.join(', ')}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  casts: {
    marginTop: 4,
  },
}));

export default ContentSummary;
