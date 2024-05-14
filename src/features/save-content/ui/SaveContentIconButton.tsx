import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { getContentById } from 'entities/content';
import IconButton from 'shared/ui/IconButton';
import { saveContent } from '../lib';

export type SaveContentIconButtonProps = {
  contentId: string;
  style?: StyleProp<ViewStyle>;
};

const SaveContentIconButton: React.FC<SaveContentIconButtonProps> = ({
  contentId,
  style,
}) => {
  const content = getContentById(contentId);

  if (!content) {
    throw new Error(`Content not found: ${contentId}`);
  }

  const handleButtonPress = () => {
    saveContent(content);
  };

  return (
    <IconButton
      style={style}
      iconProps={{ name: 'plus', size: 24 }}
      label="내가 찜한 리스트"
      onPress={handleButtonPress}
    />
  );
};

export default SaveContentIconButton;
