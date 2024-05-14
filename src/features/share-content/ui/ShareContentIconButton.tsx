import React from 'react';
import { Alert, StyleProp, ViewStyle } from 'react-native';
import { getContentById } from 'entities/content';
import IconButton from 'shared/ui/IconButton';

export type ShareContentIconButtonProps = {
  contentId: string;
  style?: StyleProp<ViewStyle>;
};

const ShareContentIconButton: React.FC<ShareContentIconButtonProps> = ({
  contentId,
  style,
}) => {
  const content = getContentById(contentId);

  if (!content) {
    throw new Error(`Content not found: ${contentId}`);
  }

  const handleButtonPress = () => {
    Alert.alert(`${content.title}을 공유했습니다.`);
  };

  return (
    <IconButton
      style={style}
      iconProps={{ name: 'flag', size: 24 }}
      label="공유"
      onPress={handleButtonPress}
    />
  );
};

export default ShareContentIconButton;
