import React, { Component } from 'react'
// import { View, Text, Button } from 'react-native'
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';


export default class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const { navigation } = this.props;
        return (
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>MAIN COMPONENT</Text>
            //     <Button
            //         title="Go to Authenticaton"
            //         onPress={() => this.props.navigation.navigate('AUTHENTICATION')}
            //     />
            // </View>
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={navigation} />}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        )
    }
}
