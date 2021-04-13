
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category';
import Collection from './Collection';
import TopProduct from './TopProduct';

class HomeView extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigation = {this.props.navigation} />
                <TopProduct navigation = {this.props.navigation} />
            </ScrollView>
        );
    }
}

export default HomeView;