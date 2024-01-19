import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import RecipientList from '../Screens/RecipientScreen/RecipientList';
import CreateRecipient from '../Screens/RecipientScreen/CreateRecipient';
import AmountRecipient from '../Screens/RecipientScreen/AmountRecipient';
import {userAccountNumberSelector} from '../Store/HomeScreen/selectors';

const Stack = createStackNavigator();

const RecipientStuck = () => {
  const accountNumber = useSelector(userAccountNumberSelector);
  const listRoute = [
    {
      name: 'RecipientList',
      component: RecipientList,
      options: {
        title: accountNumber,
      },
    },
    {
      name: 'CreateRecipient',
      component: CreateRecipient,
      options: {
        title: accountNumber,
      },
    },
    {
      name: 'AmountRecipient',
      component: AmountRecipient,
      options: {
        title: accountNumber,
      },
    },
  ];
  return (
    <Stack.Navigator>
      {listRoute.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RecipientStuck;
