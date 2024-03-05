import {
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Card} from '../components/Card';
import {
  Divider,
  FlexBetween,
  Loading,
  ShowError,
  Text,
} from '../../../common/components';
import {newsApi, useGetNewsQuery} from '../store/dashboard.api';
import {useAppDispatch} from '../../../app/storeUtilities';
import {IArticle} from '../types';
import {useNavigation} from '@react-navigation/native';
import {
  probabilityToBeatBoss,
  validateEmail,
} from '../../../Algorithms/Problems';

export const Main = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [offset, setOffset] = useState(0);
  const {data, error, isLoading, isFetching} = useGetNewsQuery(offset);

  const onRefresh = React.useCallback(() => {
    dispatch(newsApi.util.invalidateTags(['News']));
  }, [dispatch, navigation]);

  const renderItem = useCallback((item: IArticle) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NewsDetail', {
            name: item.title,
            largeImage: item.images[0].large,
            category: item.categories[0].title,
            quantity: item.quantity,
          })
        }>
        <View style={styles.screenContainer}>
          <Card article={item} />
        </View>
        <Divider style={styles.divider} />
      </TouchableOpacity>
    );
  }, []);

  const onPressNext = () => {
    setOffset(offset + 10);
  };

  const onPressPrev = () => {
    setOffset(offset - 10);
  };

  if (isLoading || isFetching) {
    return <Loading fullScreen />;
  }

  if (error || !data) {
    return <ShowError title="Something went wrong, please try again later" />;
  }

  return (
    <View>
      <FlexBetween>
        <Button disabled={offset === 0} title="Prev" onPress={onPressPrev} />

        <View>
          <Text>Total Pages: {data.total}</Text>
          <Text>Current Page: {Math.ceil((offset - 1) / 10) + 1}</Text>
        </View>
        <Button
          disabled={offset + 10 > data.total}
          title="Next"
          onPress={onPressNext}
        />
      </FlexBetween>
      <FlatList
        refreshControl={
          <RefreshControl
            progressBackgroundColor={'#079E01'}
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        }
        data={data.items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 10,
  },
  screenContainer: {paddingHorizontal: 16},
  divider: {marginVertical: 12},
  sectionHeader: {marginTop: 5},
});
