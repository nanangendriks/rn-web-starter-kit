import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeStack from './stacks/HomeStack';
import SettingStack from './stacks/SettingStack';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}