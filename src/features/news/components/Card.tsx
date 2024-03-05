import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlexBetween, FlexColumn, Text} from '../../../common/components';
import FastImage from 'react-native-fast-image';
import {IArticle} from '../types';

interface ICardProps {
  article: IArticle;
}

export const Card = ({article}: ICardProps) => {
  return (
    <FlexBetween style={styles.card}>
      <FlexColumn style={styles.introduction}>
        <Text
          testID="card-title"
          numberOfLines={3}
          type="SUBTITLE1"
          bold
          style={styles.title}>
          {article.title}
        </Text>
        <Text testID="card-price">{article.price}</Text>
      </FlexColumn>
      <View style={styles.imageContainer}>
        <FastImage
          testID="card-source-image"
          source={{
            uri: article.images[0].thumbnail,
          }}
          style={styles.image}
        />
      </View>
    </FlexBetween>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 12,
  },
  introduction: {
    flex: 1,
  },
  title: {lineHeight: 23, color: '#494949'},
  imageContainer: {flex: 0.8},
  image: {width: '100%', height: 110, borderRadius: 8},
  authorImage: {width: 40, height: 40, borderRadius: 8},
  authorInfoContainer: {gap: 4},
  date: {color: '#929292'},
});
