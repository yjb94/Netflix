import React from 'react';
import { Alert, StyleProp, ViewStyle } from 'react-native';
import { getContentById } from 'entities/content';
import Button from 'shared/ui/Button';

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

  const saveContent = () => {
    Alert.alert(`${content.title}을 저장했습니다.`);
  };

  return (
    <Button
      color="darkGrey"
      iconProps={{ name: 'plus', size: 16 }}
      text={`${content.title} 저장`}
      style={style}
      onPress={saveContent}
    />
  );
};

export default SaveContentButton;
