import React, { useCallback } from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import { Content, ContentCard, getRecommendedContents } from 'entities/content';

export type RecommendedContentsProps = Partial<FlatListProps<Content>> & {};

const RecommendedContents: React.FC<RecommendedContentsProps> = ({
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet);

  const data = getRecommendedContents();

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
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      {...otherProps}
    />
  );
};

const stylesheet = createStyleSheet(() => ({
  contentCard: {
    marginHorizontal: 8,
    marginVertical: 8,
    width: UnistylesRuntime.screen.width / 3 - 16,
  },
}));

export default RecommendedContents;
