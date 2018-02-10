import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View, Image } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressCancel() {
    Alert.alert("Are you sure?")
  }

  _onFindingMatch() {
    Confirm.confirm("Would you like to accept the match?")
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style = {styles.blue}>Waiting for a match...</Text> 
            
        <View style={styles.buttonContainer}>
            <Button
                onPress={this._onFindingMatch}
                title="Cancel sale"
                color="#841584"
                />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  buttonContainer: {
    margin: 100
  },
  blue: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    marginTop: 100
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
