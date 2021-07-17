import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import tailwind from 'tailwind-rn'

const Detail = ({navigation}) => {
    return (
        <View style={tailwind('flex-1 items-center justify-center')}>
            <Text>Detail!</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={tailwind('text-green-400')}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail
