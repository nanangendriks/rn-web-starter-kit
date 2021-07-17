import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tailwind from 'tailwind-rn'

const Home = ({navigation}) => {
    return (
        <View style={tailwind('flex-1 items-center justify-center')}>
            <FontAwesome name="home" size={24} />
            <Text>Home!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <Text style={tailwind('text-green-400')}>Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
