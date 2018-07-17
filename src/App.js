import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyB9rNMdgAxKpV_gJpGB457pAJsgNnf_iQU",
        authDomain: "login-for-crc.firebaseapp.com",
        databaseURL: "https://login-for-crc.firebaseio.com",
        projectId: "login-for-crc",
        storageBucket: "login-for-crc.appspot.com",
        messagingSenderId: "248893918733"
      };

    )
}

    render() {
        return (
            <View>
                <Header  headerText="Welcome to the Cocoa Research Center" />
                <Text>
                    Hello World!
                </Text>
            </View>
        );
    }
}


export default App;