import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from './SearchView';


const Stack3 = createStackNavigator();

export default function Search() {
    return (
        <Stack3.Navigator
            initialRouteName="SEARCH_VIEW"
            screenOptions={{
                headerShown: false
            }}>
            <Stack3.Screen name="SEARCH_VIEW" component={SearchView} />
            <Stack3.Screen name="PRODUCT_DETAIL" component={ProductDetail} />
        </Stack3.Navigator>
    );
}
