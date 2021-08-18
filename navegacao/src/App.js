import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import TextoCentral from './components/TextoCentral';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <TelaA />
    <TelaB />
    <TelaC />
  </SafeAreaView>
);

export default App;
