import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
	<>
	<Stack.Screen options={{
		headerShown: false
	}}/>
	  <View>
	    <Text>Profile</Text>
	  </View>
	</>
  )
}

export default index