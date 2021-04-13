import React, { Component } from 'react'
import { Button, View } from 'react-native'

export default class ProductDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#5d6b68" }}>
                <Button
                    title="product detail Go to home view"
                    onPress={() => this.props.navigation.navigate('HOME_VIEW')}
                />

                <Button
                    title="product detail Go to cart"
                    onPress={() => this.props.navigation.navigate('CART_VIEW')}
                />
                <Button
                    title="product detail Go to search"
                    onPress={() => this.props.navigation.navigate('SEARCH_VIEW')}
                />
            </View>
        )
    }
}
