import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { RootStackParamList } from 'app/Navigation';
import { Content, ContentCard, getTopTenContents } from 'entities/content';
import Text from 'shared/ui/Text';

export type TopTenContentsProps = {};

const TopTenContents: React.FC<TopTenContentsProps> = () => {
  const { styles } = useStyles(stylesheet);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const data = getTopTenContents();

  const renderItem: ListRenderItem<Content> = useCallback(
    ({ item, index }) => {
      const handleItemPress = () => {
        navigation.navigate('ContentDetail', { contentId: item.id });
      };

      return (
        <Pressable onPress={handleItemPress}>
          <Text
            color="greyGrey250"
            style={styles.rankingText}
          >
            {index + 1}
          </Text>
          <ContentCard
            content={item}
            style={styles.contentCard}
          >
            <ContentCard.Background />
            <ContentCard.NetflixOriginalIcon />
            <ContentCard.LabelView />
          </ContentCard>
        </Pressable>
      );
    },
    [styles, navigation]
  );

  return (
    <View style={styles.container}>
      <Text
        typography="headline"
        color="primaryWhite"
        fontWeight="bold"
        style={styles.sectionLabel}
      >
        오늘 대한민국의 TOP 10 시리즈
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    paddingVertical: 8,
  },
  sectionLabel: {
    marginBottom: 4,
  },
  contentCard: {
    margin: 4,
    marginLeft: 48,
  },
  rankingText: {
    position: 'absolute',
    fontSize: 154,
  },
}));

export default TopTenContents;
