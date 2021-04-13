import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';


const Stack1 = createStackNavigator();

export default function Home() {
    return (
        <Stack1.Navigator
            initialRouteName="HOME_VIEW"
            screenOptions={{
                headerShown: false
            }}>
            <Stack1.Screen name="HOME_VIEW" component={HomeView} />
            <Stack1.Screen name="LIST_PRODUCT" component={ListProduct} />
            <Stack1.Screen name="PRODUCT_DETAIL" component={ProductDetail} />
        </Stack1.Navigator>
    );
}
