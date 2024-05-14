import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RootStackParamList } from 'shared/model/navigation';
import Button from 'shared/ui/Button';

export type PlayContentButtonProps = {
  contentId: string;
  style?: StyleProp<ViewStyle>;
};

const PlayContentButton: React.FC<PlayContentButtonProps> = ({
  contentId,
  style,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const playContent = () => {
    navigation.navigate('ContentPlay', { contentId });
  };

  return (
    <Button
      color="white"
      iconProps={{ name: 'play', size: 16 }}
      text="재생"
      style={style}
      onPress={playContent}
    />
  );
};

export default PlayContentButton;
