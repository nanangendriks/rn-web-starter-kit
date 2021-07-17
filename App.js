import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({navigation}) {
  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      <Icon name="home" size={24} />
      <Text>Home!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text style={tailwind('text-green-400')}>Go to Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailScreen({navigation}) {
  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      <Text>Detail!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={tailwind('text-green-400')}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

function SettingsScreen() {
  return (
    <View style={tailwind('flex-1 items-center justify-center')}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}