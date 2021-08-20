import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Drawer = createDrawerNavigator();

export default props => (
  <Drawer.Navigator initialRouteName="TelaB">
    <Drawer.Screen name="TelaA" component={TelaA} />
    <Drawer.Screen name="TelaB" component={TelaB} />
    <Drawer.Screen name="TelaC" component={TelaC} />
  </Drawer.Navigator>
);
