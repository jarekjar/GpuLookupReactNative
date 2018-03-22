import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView } from 'react-native';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Lato-Regular': require('./fonts/Lato-Hairline.ttf'),
      'Lato-Bold': require('./fonts/Lato-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded &&
        <View style={styles.container}>
          <Text style={styles.header}>
            <Text style={{fontFamily: 'Lato-Bold'}}>GPU
            </Text>
            <Text style={{fontFamily: 'Lato-Regular'}}>Lookup
            </Text>
          </Text>
          <Text style={styles.label}>Username:</Text>
          <TextInput 
            style={styles.logIn}
            placeholder="Username"
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
          />
          <Text style={styles.label}>Password:</Text>
          <TextInput 
            style={styles.logIn}
            placeholder="Password"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0277BD",
  },
  header: {
    fontSize: 60, 
    color: "white",
    margin: 30
  },
  logIn: {
    borderWidth: 2,
    height: 40,
    backgroundColor: "white",
    width: 300,
    padding: 10
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 37,
    marginTop: 5,
    color: "white",
    fontSize: 18
  }
});
