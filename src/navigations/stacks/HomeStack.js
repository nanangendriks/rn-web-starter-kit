import React from 'react'
import Home from '../../screens/home';
import Detail from '../../screens/home/Detail';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}