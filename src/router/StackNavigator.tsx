import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import Details from '../containers/Details';

type ComponentNavItem = {
  name: string;
  component: React.FC<any>;
  props?: any;
};

const Stack = createStackNavigator();

const NAV_ITEMS: ComponentNavItem[] = [
  { name: 'Dashboard', component: TabNavigator, props: { headerShown: false } },
  { name: 'Details', component: Details },
];

export default function AppRouter({ initialRouteName = 'Dashboard' }): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        {NAV_ITEMS.map(({ name, component: Component, props }) => (
          <Stack.Screen options={props || {}} key={name} name={name} component={Component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
