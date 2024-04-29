import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Colors } from './theme';

enum Typography {
  caption2 = 'caption2',
  caption1 = 'caption1',
  body = 'body',
  headline = 'headline',
  title = 'title',
}
enum FontWeight {
  regular = 'regular',
  medium = 'medium',
  bold = 'bold',
}

export type TextProps = RNTextProps & {
  typography?: keyof typeof Typography;
  fontWeight?: keyof typeof FontWeight;
  color?: Colors;
};

const Text: React.FC<TextProps> = ({
  typography = 'body',
  color = 'primaryBlack',
  fontWeight = 'regular',
  style,
  ...otherProps
}) => {
  const { styles, theme } = useStyles(stylesheet, {
    typography: Typography[typography],
    fontWeight: FontWeight[fontWeight],
  });

  return (
    <RNText
      style={[
        styles.text,
        {
          color: theme.colors[color],
        },
        style,
      ]}
      {...otherProps}
    />
  );
};

const stylesheet = createStyleSheet(() => ({
  text: {
    variants: {
      typography: {
        caption2: {
          fontSize: 11,
        },
        caption1: {
          fontSize: 13,
        },
        body: {
          fontSize: 16,
        },
        headline: {
          fontSize: 18,
        },
        title: {
          fontSize: 27,
        },
      },
      fontWeight: {
        regular: {
          fontWeight: '400',
        },
        medium: {
          fontWeight: '500',
        },
        bold: {
          fontWeight: '600',
        },
      },
    },
  },
}));

export default Text;
