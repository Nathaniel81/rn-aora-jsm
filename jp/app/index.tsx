import { StatusBar } from 'expo-status-bar';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className='font-pbold text-3xl'>Aora</Text>
      <StatusBar style="auto" />
      <Link className='text-red-500' href='/profile'>Go to Profile</Link>
    </View>
  );
}
