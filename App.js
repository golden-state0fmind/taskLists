import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}} >
      <View style={styles.container}>
        <Text style={styles.text}>Color Legend</Text>
        <StatusBar style="auto" />
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop:40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10,
  },
});
