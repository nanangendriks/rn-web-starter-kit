import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Setting from '../../screens/setting';
const Stack = createStackNavigator();

export default HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    )
}