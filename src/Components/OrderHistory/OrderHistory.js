import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class OrderHistory extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>OrderHistory COMPONENT</Text>
                <Button
                    title="Go to MAIN"
                    onPress={() => this.props.navigation.navigate('MAIN')}
                />
            </View>
        )
    }
}
