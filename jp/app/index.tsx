// import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="p-10">
      {/* <Text style={styles.title}>Aora</Text> */}
      <Text>Aora</Text>
      <StatusBar style="auto" />
      <Link className='text-red-500 p-10 bg-slate-600' href='/profile'>Go to Profile</Link>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     // fontSize: 20,
//     // fontWeight: 'bold',
//   },
// });
