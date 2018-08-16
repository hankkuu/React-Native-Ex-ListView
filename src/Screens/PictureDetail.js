import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";

import {getAssetByFilename} from '../Util/Asset';

class PictureDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.navigation.state.params.title,
            uri: this.props.navigation.state.params.uri,
            desc: this.props.navigation.state.params.desc
        }
    }
    render() {        
        return (
            <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
                <ScrollView>
                    <Image
                        style={{ width: '100%', height: 200, resizeMode: 'cover' }}
                        source={getAssetByFilename(this.state.uri)}
                    />
                    <Text style={{ padding: 8, fontSize: 17, fontWeight: 'bold' }}>{this.state.title}</Text>
                    <Text style={{ padding: 8 }}>{this.state.desc}</Text>
                </ScrollView>
            </View>
        );
    }
}
export default PictureDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});