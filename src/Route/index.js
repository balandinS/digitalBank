import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import RecipientStuck from './RecipientStuck';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="RecipientStuck"
        component={RecipientStuck}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
