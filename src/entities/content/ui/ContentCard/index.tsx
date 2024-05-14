import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { PropsWithChildren, createContext } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { RootStackParamList } from 'shared/model/navigation';
import { Content } from '../../model';
import ContentCardBackground from './ContentCard.Background';
import ContentCardLabelView from './ContentCard.LabelView';
import ContentCardNetflixOriginalIcon from './ContentCard.NetflixOriginalIcon';
import ContentCardTopTenBadge from './ContentCard.TopTenBadge';

export type ContentCardProps = PropsWithChildren & {
  content: Content;
  style?: StyleProp<ViewStyle>;
};

interface ContentCardInterface extends React.FC<ContentCardProps> {
  Background: typeof ContentCardBackground;
  LabelView: typeof ContentCardLabelView;
  NetflixOriginalIcon: typeof ContentCardNetflixOriginalIcon;
  TopTenBadge: typeof ContentCardTopTenBadge;
}

export const ContentCardContext = createContext<Content>(undefined!);

const ContentCard: ContentCardInterface = ({ content, style, children }) => {
  const { id } = content;
  const { styles } = useStyles(stylesheet);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleItemPress = () => {
    navigation.navigate('ContentDetail', { contentId: id });
  };

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={handleItemPress}
    >
      <ContentCardContext.Provider value={content}>
        {children}
      </ContentCardContext.Provider>
    </Pressable>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    width: 109,
    height: 154,
    borderRadius: 4,
    overflow: 'hidden',
  },
}));

ContentCard.Background = ContentCardBackground;
ContentCard.LabelView = ContentCardLabelView;
ContentCard.NetflixOriginalIcon = ContentCardNetflixOriginalIcon;
ContentCard.TopTenBadge = ContentCardTopTenBadge;

export default ContentCard;
