import React from 'react';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {
            fontSize: 30
        }
    }} initialRouteName="TelaA" >
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
)