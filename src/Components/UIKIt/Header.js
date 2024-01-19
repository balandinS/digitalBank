import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from './Colors';

const Header = props => {
  return <Text style={[styles.titleStyle, props.style]}>{props.title}</Text>;
};
Header.defaultProps = {
  title: 'title',
  styles: {},
};
export default Header;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 'normal',
    textAlign: 'right',
    color: Colors.black,
  },
});
