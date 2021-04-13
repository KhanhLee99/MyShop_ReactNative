
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Category from './Category';
import Collection from './Collection';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category />
            </View>
        );
    }
}

export default Home;