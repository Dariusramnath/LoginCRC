import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common/';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB9rNMdgAxKpV_gJpGB457pAJsgNnf_iQU",
            authDomain: "login-for-crc.firebaseapp.com",
            databaseURL: "https://login-for-crc.firebaseio.com",
            projectId: "login-for-crc",
            storageBucket: "login-for-crc.appspot.com",
            messagingSenderId: "248893918733"
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });

    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <View style={{ flexDirection: 'row', paddingTop: 10}} >
                    <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                    </Button>
                </View>
                );
            case false:
             return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    

    render() {
        return (
            <View>
                <Header headerText="Welcome to the Cocoa Research Center" />
                {this.renderContent()}
            </View>
        );
    }
};

export default App;