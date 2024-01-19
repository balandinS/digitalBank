import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import UITextInput from '../../Components/UIKIt/UITextInput';
import * as mockContent from '../../../mockContnent.json';
import {
  useFetchRecipientList,
  useOnChangeValue,
} from '../../hooks/recipientList';
import {ErrorRecipientSelectors} from '../../Store/RecipientList/selectors';
import SomethingWentWrong from '../../Components/SomethingWentWrong/SomethingWentWrong';
import RecipientFlashList from '../../Components/RecipientList/RecipientFlashList';
const RecipientList = () => {
  const [value, onChangeText] = useOnChangeValue();
  useFetchRecipientList();
  const isError = useSelector(ErrorRecipientSelectors);

  if (isError) {
    return <SomethingWentWrong />;
  }
  return (
    <View style={styles.container}>
      <UITextInput
        placeHolder={mockContent.recipientPlaceHolder}
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.listContainer}>
        <RecipientFlashList value={value} />
      </View>
    </View>
  );
};

export default RecipientList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  listContainer: {
    flex: 1,
  },
});
