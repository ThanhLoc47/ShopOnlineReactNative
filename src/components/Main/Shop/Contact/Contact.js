import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export default class Contact extends Component<Props>{
    render() {
        return (
            <View style = {styles.container} >
                <Text>Component Contact</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5783CC',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
