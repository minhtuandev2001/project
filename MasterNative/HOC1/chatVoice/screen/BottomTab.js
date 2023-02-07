import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Tab/home/Home';
import Messenger from './Tab/messenger/Messenger';
import Setting from './Tab/setting/Setting';
import Description from './Tab/setting/description';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="home" component={Home} />
        </HomeStack.Navigator>
    )
}

const MessengerStack = createNativeStackNavigator();
function MessengerStackScreen() {
    return (
        <MessengerStack.Navigator
            screenOptions={{ headerShown: false }}>
            <MessengerStack.Screen name="messenger" component={Messenger} />
        </MessengerStack.Navigator>
    )
}


const SettingStack = createNativeStackNavigator();
function SettingStackScreen() {
    return (
        <SettingStack.Navigator
            screenOptions={{ headerShown: false }}>
            <SettingStack.Screen name="description" component={Description} />
            <SettingStack.Screen name="setting" component={Setting} />
        </SettingStack.Navigator>
    )
}


const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Messenger" component={MessengerStackScreen} />
            <Tab.Screen name="Setting" component={SettingStackScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTab;
