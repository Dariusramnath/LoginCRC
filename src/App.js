import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common/';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB9rNMdgAxKpV_gJpGB457pAJsgNnf_iQU",
            authDomain: "login-for-crc.firebaseapp.com",
            databaseURL: "https://login-for-crc.firebaseio.com",
            projectId: "login-for-crc",
            storageBucket: "login-for-crc.appspot.com",
            messagingSenderId: "248893918733"
          }
        );
    }



    render() {
        return (
            <View>
                <Header headerText="Welcome to the Cocoa Research Center" />
                <Text>
                    Kiki, do you love me?
                </Text>
            </View>
        );
    }
};

export default App;