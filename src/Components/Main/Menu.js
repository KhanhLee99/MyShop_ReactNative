import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Menu extends Component {

     gotoAuthentication() {
        const { navigator } = this.props;
        navigator.navigate('AUTHENTICATION');
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push('CHANGE_INFO');
    }

    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push('ORDER_HISTORY');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A5A5AF' }}>
                <Text>Component Menu</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Menu;