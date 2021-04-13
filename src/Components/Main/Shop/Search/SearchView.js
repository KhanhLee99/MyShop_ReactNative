import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SearchView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#498047' }}>
                <Text>Search Component</Text>
                <Button
                    title="search Go to product detail"
                    onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}
                />
            </View>
        );
    }
}

export default SearchView;