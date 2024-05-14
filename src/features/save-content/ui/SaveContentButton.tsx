import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { getContentById } from 'entities/content';
import Button from 'shared/ui/Button';
import { saveContent } from '../lib';

export type SaveContentButtonProps = {
  contentId: string;
  style?: StyleProp<ViewStyle>;
};

const SaveContentButton: React.FC<SaveContentButtonProps> = ({
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
    <Button
      color="darkGrey"
      iconProps={{ name: 'plus', size: 16 }}
      text={`${content.title} 저장`}
      style={style}
      onPress={handleButtonPress}
    />
  );
};

export default SaveContentButton;
