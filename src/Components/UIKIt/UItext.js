import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Colors from './Colors';

const UIText = props => {
  return (
    <Text style={[styles.text, props.textAlign, props.color]}>
      {props.children}
    </Text>
  );
};

UIText.defaultProps = {
  title: 'title',
  textAlign: 'right',
  color: Colors.black,
};
export default UIText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
