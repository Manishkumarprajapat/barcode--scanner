import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ScanScreen from './screens/ScanScreen';

export default function App() {
  return (
    <View >
    <ScanScreen/>
    </View>
  );
}


