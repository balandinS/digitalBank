import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/Store';
import Route from './src/Route';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Route />
          </NavigationContainer>
        </Provider>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
