import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto, Feather } from '@expo/vector-icons';

import BlocksInfo from '../containers/BlocksInfo';
import TransactionInfo from '../containers/TransactionsInfo';

const Navigator = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Navigator.Navigator
      tabBarOptions={{
        activeTintColor: 'rgb(96,11,116)',
        inactiveTintColor: 'gray',
      }}
    >
      <Navigator.Screen
        key="blocks"
        name="BlocksInfo"
        component={BlocksInfo}
        options={{
          tabBarIcon: () => <Feather name="box" size={30} />,
          tabBarLabel: 'BTC Blocks',
        }}
      />
      <Navigator.Screen
        key="transactions"
        name="TransactionsInfo"
        component={TransactionInfo}
        options={{
          tabBarIcon: () => <Fontisto name="money-symbol" size={30} color="black" />,
          tabBarLabel: 'BTC Transactions',
        }}
      />
    </Navigator.Navigator>
  );
}
