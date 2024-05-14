import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Icon, { IconProps } from './Icon';
import Text from './Text';

export type IconButtonProps = PressableProps & {
  style?: StyleProp<ViewStyle>;

  iconProps: IconProps;
  label?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  style,
  iconProps,
  label,
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable
      style={[style, styles.container]}
      {...otherProps}
    >
      <Icon {...iconProps} />
      {label && (
        <Text
          style={styles.label}
          typography="caption2"
          color="greyGrey200"
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
  },
}));

export default IconButton;
