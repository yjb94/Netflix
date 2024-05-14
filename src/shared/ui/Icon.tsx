import React, { useMemo } from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { icons } from './assets';
import { Colors } from './theme';

export type IconProps = Omit<ImageProps, 'source'> & {
  name: keyof typeof icons;
  size?: number;
  color?: Colors;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color = 'primaryWhite',
  style,
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet);

  const iconStyle: StyleProp<ImageStyle> = useMemo(() => {
    return StyleSheet.compose(styles.icon({ color, size }), style);
  }, [color, size, style, styles]);

  return (
    <Image
      resizeMode="contain"
      style={iconStyle}
      {...otherProps}
      source={icons[name]}
    />
  );
};
const stylesheet = createStyleSheet(theme => ({
  icon: ({ color, size }: Required<Pick<IconProps, 'color' | 'size'>>) => ({
    width: size,
    height: size,
    tintColor: theme.colors[color],
  }),
}));

export default Icon;
