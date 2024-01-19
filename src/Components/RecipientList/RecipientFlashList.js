import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useFilteredList} from '../../hooks/recipientList';
import Colors from '../UIKIt/Colors';
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong';
import Header from '../UIKIt/Header';
import * as mockContent from '../../../mockContnent.json';
import {useNavigation} from '@react-navigation/native';

const ListHeaderComponent = () => {
  return (
    <View style={styles.titleListContainer}>
      <Header title={mockContent.recipientTitleList} style={styles.titleList} />
    </View>
  );
};
const ListFooterComponent = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('CreateRecipient');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.footerContainer}>
      <Text style={styles.footerLabel}>{mockContent.addNewRecipient}</Text>
    </TouchableOpacity>
  );
};
const EmptyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <SomethingWentWrong />
    </View>
  );
};
const Item = ({name, account}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('AmountRecipient', {account});
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.account}>{account}</Text>
    </TouchableOpacity>
  );
};
const ItemSeparatorComponent = () => <View style={styles.separator} />;
const RecipientFlashList = props => {
  const [filterList, isLoading] = useFilteredList(props.value);
  console.log('🚀 ~ RecipientFlashList ~ filterList:', filterList);
  const keyExtractor = React.useCallback(
    (item, index) => `${item.acount} - ${index}`,
    [],
  );
  const renderItem = React.useCallback(
    ({item}) => <Item name={item.name} account={item.acount} />,
    [],
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.electric_violet} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlashList
        ItemSeparatorComponent={ItemSeparatorComponent}
        style={styles.container}
        data={filterList}
        keyExtractor={keyExtractor}
        EmptyComponent={EmptyComponent}
        renderItem={renderItem}
        estimatedItemSize={100}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};
RecipientFlashList.defaultProps = {
  value: '',
};
export default RecipientFlashList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'flex-end',
    paddingVertical: 24,
  },
  separator: {
    height: 2,
    flexShrink: 1,
    backgroundColor: Colors.border_gray,
  },
  userName: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
    fontWeight: '600',
  },
  account: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.gray,
  },
  titleListContainer: {
    alignItems: 'flex-end',
  },
  titleList: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 34,
  },
  footerContainer: {
    alignItems: 'center',
  },
  footerLabel: {
    textDecorationLine: 'underline',
    color: Colors.black,
    fontSize: 16,
  },
});
