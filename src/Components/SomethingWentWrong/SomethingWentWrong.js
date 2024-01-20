import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../UIKIt/Header';
import UIText from '../UIKIt/UItext';
import Colors from '../UIKIt/Colors';

const SomethingWentWrong = props => {
  return (
    <View style={styles.container}>
      <Header title={props.title} />
      <UIText color={Colors.gray}>{props.subtitle}</UIText>
    </View>
  );
};
SomethingWentWrong.defaultProps = {
  title: 'משהו השתבש אנו נסו מאוחר יותר',
  subtitle: 'מקלה זמנית',
};
export default SomethingWentWrong;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
  },
});
