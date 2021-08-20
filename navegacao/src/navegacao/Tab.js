import React from 'react';
<<<<<<< HEAD
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
=======
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
>>>>>>> a423d829271a224542c122878259f00bbed64144

const Tab = createBottomTabNavigator();

export default props => (
<<<<<<< HEAD
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: {
        fontSize: 30,
      },
    }}
    initialRouteName="TelaA">
    <Tab.Screen name="TelaA" component={TelaA} />
    <Tab.Screen name="TelaB" component={TelaB} />
    <Tab.Screen name="TelaC" component={TelaC} />
  </Tab.Navigator>
);
=======
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch(route.name){
                    case "TelaA":
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case "TelaB":
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case "TelaC":
                        iconName = focused
                            ? 'ios-list-box' 
                            : 'ios-list';
                        break;
                    
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            }
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            //showLabel: false ,
            labelStyle: {
                fontSize: 15
            }
        }} initialRouteName="TelaB" >
        <Tab.Screen name="TelaA" options={{title: "inicial"}} component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
)
>>>>>>> a423d829271a224542c122878259f00bbed64144
