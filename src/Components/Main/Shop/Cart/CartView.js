import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class CartView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#E7442B' }}>
                <Text>Cart Component</Text>
                <Button
                    title="cart Go to product detail"
                    onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}
                />
                
            </View>
        );
    }
}

export default CartView;