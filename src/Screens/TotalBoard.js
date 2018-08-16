import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from "react-native";

class TotalBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           secondSceneDS: this.props.navigation.state.params,       
        }                
    } 

    render() {
        
        return (
            <ListView 
            style={{backgroundColor:'#fff', width:'100%', height:'100%'}}
            dataSource={this.state.secondSceneDS}
            renderRow={(rowData) =>
                <TouchableHighlight onPress={() => {
                  //routes[3].title = rowData.title;
                  this.props.navigation.navigate('totalDetail', rowData.txt);
                }}>
                  <View>
                    <Text style={{padding: 8, fontSize: 15}}>{rowData.title}</Text>
                    <Text style={{paddingLeft:8, marginTop:-8, fontSize: 12, color: '#ccc'}}>{rowData.sub}</Text>
                    <View style={{width:'100%', marginTop:8, height:1, backgroundColor:'#ccc'}} />
                  </View>
                </TouchableHighlight>
              }                
            />                         
        );
    }
}
export default TotalBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});