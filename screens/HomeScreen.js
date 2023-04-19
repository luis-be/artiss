import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Soy la pantalla principal</Text>
      <Button title='ir a la pantalla de chat' onPress={() => navigation.navigate('Chat')}/>
    </View>
  )
}

export default HomeScreen