import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBarScreen from './components/AppBarScreen';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './screens/Navigation';

export default function App() {
  return (
   <SafeAreaProvider>
    <AppBarScreen />

    <Navigation />
   </SafeAreaProvider>
  );
}
