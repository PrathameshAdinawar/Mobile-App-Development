import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from '../../screens/SearchScreen'
import ProfileScreen from '../../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} />
            <HomeStack.Screen name='Details' component={DetailScreen} />
        </HomeStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name='Overview' component={HomeStackScreen} options={{headerShown:false}}/>
           <Tab.Screen name='Search' component={SearchScreen}/>
           <Tab.Screen name='Profile' component={ProfileScreen}/>

        </Tab.Navigator>
    )
}

export default function DynamicTabNavigator2() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}