import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

class TotalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: this.props.navigation.state.params
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
                <ScrollView>
                    <Text>{this.state.txt}</Text>
                </ScrollView>
            </View>
        );
    }
}
export default TotalDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});