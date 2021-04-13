import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '../ProductDetail/ProductDetail';
import CartView from './CartView';


const Stack2 = createStackNavigator();

export default function Cart() {
    return (
        <Stack2.Navigator
            initialRouteName="CART_VIEW"
            screenOptions={{
                headerShown: false
            }}>
            <Stack2.Screen name="CART_VIEW" component={CartView} />
            <Stack2.Screen name="PRODUCT_DETAIL" component={ProductDetail} />
        </Stack2.Navigator>
    );
}
