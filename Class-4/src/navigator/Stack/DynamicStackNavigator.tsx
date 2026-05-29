import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function MyStack(){
    return (
        // This will be reflected to all screens/pages
         <Stack.Navigator
          screenOptions={{
             headerStyle:{
                    backgroundColor:'#213b4b'
                },
                headerTitleAlign:'center',
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:22
                }
          }}
         >
            {/*  This is for a specific screen/page and will be prioritised */}
            <Stack.Screen name='Home' component={HomeScreen} 
            options={{
                // headerShown:false,
                title:"Home",
                headerStyle:{
                    backgroundColor:'#111827'
                },
                headerTitleAlign:'center',
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:22
                }
            }}
                />
            <Stack.Screen name='Details' component={DetailScreen}/>
            <Stack.Screen name='Profiles' component={ProfileScreen}/>

        </Stack.Navigator>
        )
    
}

export default function DynamicStackNavigator(){
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

