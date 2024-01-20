import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Colors';
const ErrorMessage = ({error}) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  error: {
    color: Colors.error,
    fontSize: 14,
    padding: 4,
  },
});
