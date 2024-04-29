import React, { useContext } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { getIsRecentContent } from 'entities/content';
import Label from 'shared/ui/Label';
import { ContentCardContext } from './ContentCard';

export type ContentCardLabelViewProps = {};

const ContentCardLabelView: React.FC<ContentCardLabelViewProps> = ({}) => {
  const { styles } = useStyles(stylesheet);
  const content = useContext(ContentCardContext);

  if (!content.isNewEpisode) {
    return null;
  }

  const isRecentContent = getIsRecentContent(content);
  if (isRecentContent) {
    return (
      <View style={styles.container}>
        <Label label={'최신 등록'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Label label={'새로운 에피소드'} />
      <Label
        label={'지금 시청하기'}
        backgroundColor="primaryWhite"
        labelColor="primaryBlack"
      />
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    overflow: 'hidden',
  },
}));

export default ContentCardLabelView;
