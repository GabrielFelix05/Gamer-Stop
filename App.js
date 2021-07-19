import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './src/Components/Footer';
import Header from './src/Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Footer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between'
  }
})