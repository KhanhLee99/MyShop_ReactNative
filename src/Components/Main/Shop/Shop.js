import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';


const Tab = createBottomTabNavigator();
const { height } = Dimensions.get('window');

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
                <View style={{ height: height / 8 }}>
                    <Button
                        title="Open Menu"
                        onPress={this.openMenu.bind(this)}
                    />
                </View>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Cart" component={Cart} />
                    <Tab.Screen name="Contact" component={Contact} />
                    <Tab.Screen name="Search" component={Search} />
                </Tab.Navigator>
            </View>
        )
    }
}
