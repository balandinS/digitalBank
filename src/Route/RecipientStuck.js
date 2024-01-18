import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecipientList from '../Screens/RecipientScreen/RecipientList';
import CreateRecipient from '../Screens/RecipientScreen/CreateRecipient';
import AmountRecipient from '../Screens/RecipientScreen/AmountRecipient';
const Stack = createStackNavigator();

const RecipientStuck = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipientList" component={RecipientList} />
      <Stack.Screen name="CreateRecipient" component={CreateRecipient} />
      <Stack.Screen name="AmountRecipient" component={AmountRecipient} />
    </Stack.Navigator>
  );
};

export default RecipientStuck;
