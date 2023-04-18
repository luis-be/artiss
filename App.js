import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-#red text-bg font-bold mt-2">Mariela te amo mucho</Text>
      <Button title="Ck licme"></Button>
      
    </View>
  ); 
}