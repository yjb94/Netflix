import dayjs from 'dayjs';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Text from 'shared/ui/Text';

export type ContentInformationProps = {
  style?: StyleProp<ViewStyle>;

  title: string;
  releaseDate: string;
  rating: string;
  quality: string;
};

const ContentInformation: React.FC<ContentInformationProps> = ({
  title,
  releaseDate,
  rating,
  quality,
  ...otherProps
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View {...otherProps}>
      <Text
        typography="headline"
        color="primaryWhite"
        fontWeight="bold"
      >
        {title}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          typography="caption1"
          color="primaryWhite"
        >
          {dayjs(releaseDate).format('YYYY')}
        </Text>
        <View style={styles.ratingContainer}>
          <Text
            typography="caption2"
            color="greyGrey10"
          >
            {rating}
          </Text>
        </View>
        <View style={styles.qualityContainer}>
          <Text
            typography="caption2"
            color="greyGrey10"
          >
            {quality}
          </Text>
        </View>
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    marginLeft: 4,
    padding: 4,
    backgroundColor: theme.colors.greyGrey550,
    borderRadius: 4,
  },
  qualityContainer: {
    marginLeft: 4,
    paddingVertical: 1,
    paddingHorizontal: 3,
    borderRadius: 2,
    borderColor: theme.colors.greyGrey10,
    borderWidth: 1,
  },
}));

export default ContentInformation;
