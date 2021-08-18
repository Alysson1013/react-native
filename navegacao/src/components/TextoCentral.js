import React from 'react';
import {Text, View} from 'react-native';

const TextoCentral = ({children, corFundo, corTexto}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: corFundo || '#000',
    }}>
    <Text
      style={{
        fontSize: 50,
        color: corTexto || '#FFF',
      }}>
      {children}
    </Text>
  </View>
);

export default TextoCentral;
