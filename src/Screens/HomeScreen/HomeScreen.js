import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import GreetingComponent from '../../Components/HomeScreen/GreetingComponent';
import * as mockContent from '../../../mockContnent.json';
import ActionsList from '../../Components/HomeScreen/ActionsList';
import {useFetchUserData} from '../../hooks/homeScreen';
import SomethingWentWrong from '../../Components/SomethingWentWrong/SomethingWentWrong';
import Colors from '../../Components/UIKIt/Colors';
const HomeScreen = () => {
  const {user, error} = useFetchUserData();
  if (error) {
    return <SomethingWentWrong />;
  }

  if (!user) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.electric_violet} />
      </View>
    );
  }
  const {balance = '', username = ''} = user;
  return (
    <View style={styles.container}>
      <GreetingComponent userName={username} balance={balance} />
      <ActionsList
        actionList={mockContent.actionList}
        actionTitle={mockContent.actionTitle}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
