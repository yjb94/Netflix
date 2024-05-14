import React from 'react';
import { Alert, StyleProp, ViewStyle } from 'react-native';
import { getContentById } from 'entities/content';
import IconButton from 'shared/ui/IconButton';

export type RateContentIconButtonProps = {
  contentId: string;
  style?: StyleProp<ViewStyle>;
};

const RateContentIconButton: React.FC<RateContentIconButtonProps> = ({
  contentId,
  style,
}) => {
  const content = getContentById(contentId);

  if (!content) {
    throw new Error(`Content not found: ${contentId}`);
  }

  const handleButtonPress = () => {
    Alert.alert(`${content.title}을 평가했습니다.`);
  };

  return (
    <IconButton
      style={style}
      iconProps={{ name: 'thumbsUp', size: 24 }}
      label="평가"
      onPress={handleButtonPress}
    />
  );
};

export default RateContentIconButton;
