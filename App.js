import * as React from 'react';
import { Text, View, Button, Alert, StyleSheet  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render(){
return (
    <View style={{ width:200, height:100, marginTop:90,}}>
    <Button 
      title="sound1"
      color="red"
      onPress={() => Alert.alert('Play Sound 1')} />
    </View>
  );
  }
  
}

