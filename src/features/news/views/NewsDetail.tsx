import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Text} from '../../../common/components';

export const NewsDetails = ({route}: any) => {
  const {name, category, largeImage, quantity} = route.params;

  return (
    <ScrollView>
      <FastImage
        resizeMode="cover"
        testID="card-source-image"
        source={{
          uri: largeImage,
        }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text bold>Name: {name}</Text>
        <Text bold>Category: {category}</Text>
        <Text bold>Quantity: {quantity}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 16,
    marginTop: 15,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 10,
  },
  categoriesContainer: {flexDirection: 'row'},
  screenContainer: {paddingHorizontal: 16},
  divider: {marginVertical: 12},
  seeAll: {color: '#585858'},
  sectionHeader: {marginTop: 5},
  image: {width: '100%', height: 300, borderRadius: 8},
});
