import React from 'react'
import {View, Text, Platform} from 'react-native'
import tailwind from 'tailwind-rn'

const App = () => {
  return (
    <View style={tailwind('bg-blue-100 p-4 flex-1')}>
      <Text style={tailwind('text-lg font-semibold')}>Hello from {Platform.OS}</Text>
    </View>
  )
}

export default App
