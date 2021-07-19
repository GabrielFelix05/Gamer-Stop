import React from 'react';
import { View, StyleSheet} from 'react-native'

import Initial from './src/views/Initial'

export default function App() {
  return (
    <View style={styles.container}>
      <Initial/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})