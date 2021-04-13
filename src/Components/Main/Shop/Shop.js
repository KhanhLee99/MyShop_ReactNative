import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Header from './Header';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const { height } = Dimensions.get('window');
const color = {
    active: '#34B089',
    inactive: '#ccc'
}

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'home' };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <Tab.Navigator>
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Icon name="ios-home" size={30} color={focused ? color.active : color.inactive} />
                            )
                        }}
                        name="Home" component={Home} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Icon name="ios-cart" size={30} color={focused ? color.active : color.inactive} />
                            )
                        }}
                        name="Cart" component={Cart} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Icon name="ios-person" size={30} color={focused ? color.active : color.inactive} />
                            )
                        }}
                        name="Contact" component={Contact} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Icon name="ios-search" size={30} color={focused ? color.active : color.inactive} />
                            )
                        }}
                        name="Search" component={Search} />
                </Tab.Navigator>
            </View>
        )
    }
}
