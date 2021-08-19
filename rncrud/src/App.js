import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Icon } from 'react-native-elements'

const Stack = createNativeStackNavigator()

const app = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="UserList"
                screenOptions={screenOptions}
            >
                <Stack.Screen 
                    name="UserList" 
                    component={UserList}  
                    options={({ navigation }) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white" />}
                                    onPress={() => navigation.navigate('UserForm')}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="UserForm" 
                    component={UserForm} 
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

export default app
