import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Authentication extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Authentication COMPONENT</Text>
                <Button
                    title="Go to MAIN"
                    onPress={() => this.props.navigation.navigate('MAIN')}
                />
            </View>
        )
    }
}
