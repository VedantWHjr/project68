import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fb from 'fb.js';
import In from 'in.js';
export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FB},
  Instagram: {screen: IN},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Facebook"){
        return(
          <Text>Facebook</Text>
        )
        
      }
      else if(routeName === ""){
        return(
          <Text>Instagram</Text>  
        )
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);
