import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './Main';
import Report from './Report';
import Knowledge from './Knowledge';
import Inbox from './Inbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown:false,
          tabBarLabel: 'Main',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="monitor-dashboard"
              color="black"
              size={25}
            />
          ),
        }}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          headerShown:false,
          tabBarLabel: 'Report',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="image-search-outline"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Knowledge"
        component={Knowledge}
        options={{
          headerShown:false,
          tabBarLabel: 'Knowledge',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="wechat"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerShown:false,
          tabBarLabel: 'Inbox',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="note-text-outline"
              color="black"
              size={25}
            />
          ),
        }}
      />
  
    </Tab.Navigator>
  );
};

export default BottomTab;