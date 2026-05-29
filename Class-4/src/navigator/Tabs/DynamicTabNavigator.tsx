import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
           <Tab.Screen name='Search' component={SearchScreen}/>
        </Tab.Navigator>
    )
}

export default function DynamicTabNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}