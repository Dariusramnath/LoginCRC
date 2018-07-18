import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common'


class LoginForm extends Component {
    render() {
        return (
            <View>
                <Card>
                    <CardSection />
                    <CardSection />

                    <CardSection>
                        <Button>
                            Log In
                        </Button>
                    </CardSection>

                </Card>
            </View>
        )
    }
}

export default LoginForm;