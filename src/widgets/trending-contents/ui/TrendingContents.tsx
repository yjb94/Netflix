import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Content, ContentCard, getTrendingContents } from 'entities/content';
import Text from 'shared/ui/Text';

export type TrendingContentsProps = {};

const TrendingContents: React.FC<TrendingContentsProps> = () => {
  const { styles } = useStyles(stylesheet);

  const data = getTrendingContents();

  const renderItem: ListRenderItem<Content> = useCallback(
    ({ item }) => {
      return (
        <ContentCard
          content={item}
          style={styles.contentCard}
        >
          <ContentCard.Background />
          <ContentCard.NetflixOriginalIcon />
          <ContentCard.LabelView />
          <ContentCard.TopTenBadge />
        </ContentCard>
      );
    },
    [styles]
  );

  return (
    <View style={styles.container}>
      <Text
        typography="headline"
        color="primaryWhite"
        fontWeight="bold"
        style={styles.sectionLabel}
      >
        지금 뜨는 컨텐츠
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
  },
}));

export default TrendingContents;
