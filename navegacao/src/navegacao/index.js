import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack';

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
);
