import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
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