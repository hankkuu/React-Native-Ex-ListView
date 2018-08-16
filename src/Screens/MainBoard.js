import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from "react-native";

class MainBoard extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        let secondArr = [];
        for (let i = 1; i < 100; i++)
            secondArr.push({ title: 'Sample Title' + i, sub: 'Write your message here.', txt: "힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고..." });

        let thirdArr = [];
        for(let i = 1; i <= 20; i++)
            thirdArr.push({ title: '말이다 청춘' + i, uri: 'react', txt: "힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고..."});

        this.state = {
            firstSceneDS: ds.cloneWithRows(['모두의 공원', '사진게시판']),
            secondSceneDS: ds.cloneWithRows(secondArr),
            thirdSceneDS: ds.cloneWithRows(thirdArr),
        };
    };

    render() {        
        const routes = [
            {title: '모든 게시판', index: 0},
            {title: '모두의 공원', index: 1},
            {title: '사진게시판', index: 2},
            {title: '모두의 공원 - 상세보기', index: 3},
            {title: '사진 게시판 - 상세보기', index: 4},
        ]
        const { navigation } = this.props;
        const { secondSceneDS, thirdSceneDS } = this.state;
        return (
            <ListView
            dataSource={this.state.firstSceneDS}
            renderRow={ (rowData) => 
                <TouchableHighlight onPress={() => {
                    if(rowData === "모두의 공원") {
                        this.props.navigation.navigate("total", secondSceneDS);
                    } else if (rowData === "사진게시판") {
                        this.props.navigation.navigate("picture", thirdSceneDS);
                    }
                }}>
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{padding: 8}}>{rowData}</Text>
                            <Text style={{padding: 8, paddingRight:12}}>&gt;</Text>
                        </View>
                        <View style={{width:'100%', marginTop:8, height:1, backgroundColor:'#ccc'}} />
                    </View>                        
                </TouchableHighlight>
            }
            />
         
            );
    }
}
export default MainBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});