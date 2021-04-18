
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category';
import Collection from './Collection';
import TopProduct from './TopProduct';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: [],
            product: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8888/uploadfile/api.php", {
            "method": "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(resJson => {
                const { type, product } = resJson;
                console.log(resJson);
                this.setState({
                    type: type,
                    product: product
                })
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {
        const { type, product } = this.state;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigation={this.props.navigation} type={type} />
                <TopProduct navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

export default HomeView;