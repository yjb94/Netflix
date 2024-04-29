import React from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Colors } from 'shared/ui';
import Text from 'shared/ui/Text';

export type LabelProps = {
  label: string;
  backgroundColor?: Colors;
  labelColor?: Colors;
};

const Label: React.FC<LabelProps> = ({
  label,
  backgroundColor = 'primaryRed',
  labelColor = 'primaryWhite',
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.label(backgroundColor)}>
      <Text
        typography="caption2"
        color={labelColor}
        fontWeight="bold"
        style={styles.labelText}
      >
        {label}
      </Text>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  label: (color: Colors) => ({
    padding: 2,
    backgroundColor: theme.colors[color],
  }),
  labelText: {
    textAlign: 'center',
  },
}));

export default Label;
