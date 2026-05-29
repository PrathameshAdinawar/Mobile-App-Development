// import * as React from 'react';

// import DynamicStackNavigator from './src/navigator/Stack/DynamicStackNavigator';
// import StaticStackNavigator from './src/navigator/Stack/StaticStackNavigator';


// export default function App(){
//   return <StaticStackNavigator/>
// }

import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DynamicStackNavigator from './src/navigator/Stack/DynamicStackNavigator';
import DynamicTabNavigator from './src/navigator/Tabs/DynamicTabNavigator2';
import DynamicTabNavigator2 from './src/navigator/Tabs/DynamicTabNavigator2';
import DynamicTabNavigator3 from './src/navigator/Tabs/DynamictabNavigator3';
import { SafeAreaView } from 'react-native-safe-area-context';
import StaticDrawer from './src/navigator/Drawer/StaticDrawer';
import DynamicDrawer from './src/navigator/Drawer/DynamicDrawer';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button onPress={() => navigation.navigate('Profile')}> */}
        {/* Go to Profile
      </Button> */}
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Button onPress={() => navigation.navigate('')}>Go to Home</Button> */}
    </View>
  );
}

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DynamicDrawer />
    </SafeAreaView>
  );
}