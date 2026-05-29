import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

//Step 1:
// Inside this we give multiple Screens 
const stack = createNativeStackNavigator({

  //Step3: Make the Screens Stack 
  initialRouteName:"Home",
  screens:{
    Home:HomeScreen, // main page from here we "Navigate to other Screens"
    Details:DetailScreen, // Can use navigate.goBack() to go to previous Screen
    Profiles:ProfileScreen // Can use navigate.popTo("Home") it directly jumps to a page doesnot stack up screens 

    // useNavigation<any>() hook gives many methods
    //1. navigate("") Go to the Screen by name
    //2. goBack() Go to the previous Screen
    //3. push() even same screen can be stacked navigate doesnot do that 
    //4. popToTop() Go back to the Main/First Screen 
    //5. replace("") Replace current Screen
    //6. popTo("") Jumps to the mentioned Screen name
  }
});

//Step 2:
//which type of navigator we need Stack, Tab, Drawer
const Navigation = createStaticNavigation(stack);

export default function App(){
  return <Navigation/>
}