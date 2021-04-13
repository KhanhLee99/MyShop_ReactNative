
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category';
import Collection from './Collection';
import TopProduct from './TopProduct';

class Home extends Component {
    render() {
        return (
            // <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
            //     <Collection />
            //     <Category />
            // </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <TopProduct />
            </ScrollView>
        );
    }
}

export default Home;