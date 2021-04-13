import React, { Component } from 'react'
import { Button, View } from 'react-native'

export default class ListProduct extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#34ebc6" }}>
                <Button
                    title="list product Go to home view"
                    onPress={() => this.props.navigation.navigate('HOME_VIEW')}
                />
            </View>
        )
    }
}
