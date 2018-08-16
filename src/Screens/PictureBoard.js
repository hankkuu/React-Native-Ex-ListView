import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    TouchableHighlight
} from "react-native";

import {getAssetByFilename} from '../Util/Asset';

class PictureBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thirdSceneDS: this.props.navigation.state.params
        }

    }

    render() {

        return (
            <ListView
                style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}
                dataSource={this.state.thirdSceneDS}
                renderRow={(rowData) =>
                    <TouchableHighlight onPress={() => {
                        //routes[3].title = rowData.title;
                        const data = { 
                            title: rowData.title,
                            uri: rowData.uri,
                            desc: rowData.txt
                        };
                        this.props.navigation.navigate('pictureDetail', data);
                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{ width: '100%', height: 200, resizeMode: 'cover' }}
                                source={getAssetByFilename(rowData.uri)}
                            />
                            <Text style={{ padding: 8 }}>{rowData.title}</Text>
                        </View>
                    </TouchableHighlight>
                }
            />
        );
    }
}
export default PictureBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});