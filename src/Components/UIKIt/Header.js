import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from './Colors';

const Header = props => {
  return (
    <Text style={[styles.titleStyle, props.textAlign, props.color]}>
      {props.title}
    </Text>
  );
};
Header.defaultProps = {
  title: 'title',
  textAlign: 'right',
  color: Colors.black,
};
export default Header;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    lineHeight: 34,
  },
});
