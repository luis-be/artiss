import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const {user} = useAuth();
    console.log(user);
  return (
    <View>
      <Text>loguearte a la app</Text>
    </View>
  )
}

export default LoginScreen