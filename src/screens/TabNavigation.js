import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import Inbox from './Inbox';
import Knowledge from './Knowledge';
import Main from './Main';
import Report from './Report';
import Slider from './Slider';
import Splash from './Splash';


const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Knowledge"
          component={Knowledge}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
