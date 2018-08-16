import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MainBoard from './src/Screens/MainBoard';
import TotalBoard from './src/Screens/TotalBoard';
import PictureBoard from './src/Screens/PictureBoard';
import TotalDetail from './src/Screens/TotalDetail';
import PictureDetail from './src/Screens/PictureDetail';

export default class App extends React.Component {
    render() {
        return (
            //<View style={styles.container}>
                <RootStack />
            //</View>
        );
    }
}

const RootStack = createStackNavigator({
    main: { screen: MainBoard },
    total: { screen: TotalBoard },
    picture: { screen: PictureBoard },    
    totalDetail: { screen: TotalDetail },
    pictureDetail: { screen: PictureDetail }
},{
    initialRouteName: 'main',
    //headerMode: 'none'
    
})
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
