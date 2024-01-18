import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../UIKIt/Header';
import UIText from '../UIKIt/UItext';
import * as mockContnent from '../../../mockContnent.json';
const GreetingComponent = ({userName = '', balance = ''}) => {
  console.log('🚀 ~ GreetingComponent ~ userName:', userName);
  if (!userName) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header title={mockContnent.greeting.replace('{userName}', userName)} />

      {balance && (
        <View style={styles.balanceContainer}>
          <UIText>{mockContnent.balance.replace('{balance}', balance)}</UIText>
        </View>
      )}
    </View>
  );
};

export default GreetingComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 24,
    shadowRadius: 10,
    shadowOffset: {height: 0, width: 4},
    shadowOpacity: 0.3,
    elevation: 4,
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  balanceContainer: {
    paddingVertical: 8,
  },
});
