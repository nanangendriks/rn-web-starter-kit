import React from 'react'
import {Text, View} from 'react-native'
import tailwind from 'tailwind-rn'

const Setting = () => {
    return (
        <View style={tailwind('flex-1 items-center justify-center')}>
            <Text>Settings!</Text>
        </View>
    )
}

export default Setting
