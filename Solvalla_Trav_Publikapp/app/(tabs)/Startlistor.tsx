import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Startlistor = () => {
  return (
    <View>
      <Text style={styles.text}>Startlistor</Text>
    </View>
  )
}

export default Startlistor

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  }
})