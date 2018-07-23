import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                style={styles.input1}
            />
        </View>
    );
};

const styles = {
    input1: {
        width: 400,
        height: 40,
    }
}

export { Input }