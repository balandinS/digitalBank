import {StyleSheet, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import SomethingWentWrong from '../../Components/SomethingWentWrong/SomethingWentWrong';
import * as mockContent from '../../../mockContnent.json';
import {clearReducer} from '../../Store/Transactions/actions';
const ErrorRecipient = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOnPress = () => {
    dispatch(clearReducer());
    navigation.reset({
      index: 0, // Index of the screen to navigate to (in this case, the first screen)
      routes: [{name: 'HomeScreen'}], // Screen to navigate to
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <SomethingWentWrong
          title={mockContent.transactionsProcessError}
          subtitle={mockContent.transactionsProcessErrorLabel}
        />
      </View>
      <Button
        onPress={handleOnPress}
        title={mockContent.transactionsProcessErrorBtn}
      />
    </View>
  );
};

export default ErrorRecipient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingBottom: 24,
  },
  flex1: {
    flex: 1,
  },
});
