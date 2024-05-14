import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Icon, { IconProps } from 'shared/ui/Icon';
import Text, { TextProps } from 'shared/ui/Text';

enum ColorVariant {
  white = 'white',
  darkGrey = 'darkGrey',
}

export type ButtonProps = PressableProps & {
  color: keyof typeof ColorVariant;
  text: string;
  textProps?: Pick<TextProps, 'typography' | 'fontWeight'>;
  iconProps: Pick<IconProps, 'name' | 'size'>;
  style?: StyleProp<ViewStyle>;
};

const Button: React.FC<ButtonProps> = ({
  color,
  textProps,
  text,
  iconProps,
  style,
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet, {
    color: ColorVariant[color],
  });

  return (
    <Pressable
      {...otherProps}
      style={[styles.container, style]}
    >
      <Icon
        {...iconProps}
        style={styles.icon}
      />
      <Text
        {...textProps}
        style={styles.text}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    height: 40,
    width: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      color: {
        white: {
          backgroundColor: theme.colors.primaryWhite,
        },
        darkGrey: {
          backgroundColor: theme.colors.greyGrey800,
        },
      },
    },
  },
  icon: {
    variants: {
      color: {
        white: {
          tintColor: theme.colors.primaryBlack,
        },
        darkGrey: {
          tintColor: theme.colors.primaryWhite,
        },
      },
    },
  },
  text: {
    marginLeft: 2,
    variants: {
      color: {
        white: {
          color: theme.colors.primaryBlack,
        },
        darkGrey: {
          color: theme.colors.primaryWhite,
        },
      },
    },
  },
}));

export default Button;
