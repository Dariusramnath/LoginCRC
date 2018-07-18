import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common/';

class App extends Component {
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