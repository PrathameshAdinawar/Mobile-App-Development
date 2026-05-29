import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    )
}

function SearchScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SearchScreen</Text>
        </View>
    )
}

function ProfileScreem() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Search' screenOptions={
            ({ route }) => ({
                tabBarStyle:{
                    height:70
                },
                // tabBarActiveTintColor:'tomato',
                tabBarIcon: ({ focused, color, size }) => {
                    const icon = route.name === 'Home'
                        ? focused ? "home" : 'home-outline'
                        : route.name === 'Search'
                            ? focused ? 'search': "search-outline"
                                : focused ? 'chatbubble' : "chatbubble-outline"
                
                return <Ionicons name={icon} size={size} color={color}/>

            }
            })
        }>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    title: "Dashboard",
                    tabBarLabel: 'Home' // This is for below tabs
                }}
            />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Profile' component={ProfileScreem}
            options={{
                tabBarBadge:10
            }}
            />
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